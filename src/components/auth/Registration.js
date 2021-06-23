import React, { useState, useEffect } from "react";
import "./Registration.css";

const Registration = () => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [validatedEmail, setValidEmail] = useState();
  const [validatedPassword, setValidPassword] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  useEffect(() => {
    setFormIsValid(
      providedEmail.includes("@") && providedPassword.trim().length >= 8
    );
  }, [providedEmail, providedPassword]);

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length >= 8);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="auth">
      <h1>Registration Page</h1>
      <form onSubmit={submitHandler}>
        <span className="control">
          <label>First Name</label>
          <input type="text" id="firstname" name="firstname" />
          <label>Last Name</label>
          <input type="text" id="firstname" name="lastname" />
        </span>
        <div className={`control ${validatedEmail === false ? "invalid" : ""}`}>
          <label>Email</label>
          <input
            type="email"
            id="email"
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
          <button type="submit" disabled={!formIsValid}>
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
