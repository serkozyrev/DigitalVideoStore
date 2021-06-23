import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [validatedEmail, setValidEmail] = useState();
  const [validatedPassword, setValidPassword] = useState();
  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length > 8);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="auth">
      <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <div className={`control ${validatedEmail === false ? "invalid" : ""}`}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            autofocus
            value={providedEmail}
            onChange={emailHandler}
            onBlur={validateEmailHandler}
            required
          />
          {validatedEmail === false && (
            <p>Please provide correct email inclluding @ sign</p>
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
