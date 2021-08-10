import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
});

const calculateRemainingTime = (exprirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(exprirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const [popupIsShown, setpopupIsShown] = useState(false);
  const [username, setUsername] = useState("");

  const showModalHandler = () => {
    setpopupIsShown(true);
  };

  const closeModalHandler = () => {
    setpopupIsShown(false);
  };

  const userIsLoggedIn = token;
  // if (!token) {
  //   userIsLoggedIn = false;
  // }
  // if (token) {
  //   userIsLoggedIn = true;
  // }

  const logoutHandler = useCallback(() => {
    setToken(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userID");
    setUsername("");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    setUsername(localStorage.getItem("userID"));
  }, [username]);

  const loginHandler = (token, userID, expirationTime) => {
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
    console.log(userID);
    setToken(localStorage.getItem("token"));
    setUsername(localStorage.getItem("userID"));
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    setUsername(localStorage.getItem("userID"));
  }, [username]);

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler, username]);
  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    username,
    popupIsShown,
    showModal: showModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
