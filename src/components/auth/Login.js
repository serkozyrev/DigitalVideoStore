import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/auth-context";
import "./Login.css";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [providedUserName, setProvidedUserName] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [validatedUserName, setValidUserName] = useState();
  const [validatedPassword, setValidPassword] = useState();
  const userNameHandler = (event) => {
    setProvidedUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  const validateUserNameHandler = () => {
    setValidUserName(providedUserName.trim().length > 0);
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length >= 8);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    try {
      fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: providedUserName,
          password: providedPassword,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          const expirationTime = new Date(
            new Date().getTime() + 60 * 60 * 1000
          );
          if (data.message === "You login Successfully") {
            alert(data.message);

            const token = true;
            authCtx.login(token, expirationTime);
            history.replace("/");
          } else {
            alert(data.message);
          }
        });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="auth">
      <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <div
          className={`control ${validatedUserName === false ? "invalid" : ""}`}
        >
          <label>Username</label>
          <input
            type="text"
            id="username"
            autoFocus
            value={providedUserName}
            onChange={userNameHandler}
            onBlur={validateUserNameHandler}
            required
          />
          {validatedUserName === false && (
            <p>Please provide correct username </p>
          )}
        </div>
        <div
          className={`control ${validatedPassword === false ? "invalid" : ""}`}
        >
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={providedPassword}
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
            required
          />
          {validatedPassword === false && (
            <p>Password should contain at least 8 characters</p>
          )}
        </div>
        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
