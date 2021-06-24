import React, { useState } from "react";

import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <>
      <div className="auth">
        <p>
          If you are a new user switch to Registration page and enter your
          credentials or enter your login information now
        </p>
        <button className="btn" type="button" onClick={changeAuthHandler}>
          Switch page
        </button>
      </div>
      {isLogin ? <Login /> : <Registration />}
    </>
  );
};

export default Auth;
