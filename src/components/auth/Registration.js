import React, { useState, useEffect } from "react";

import "./Registration.css";

const Registration = () => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [providedLastName, setProvidedLastName] = useState("");
  const [providedFirstName, setProvidedFirstName] = useState("");
  const [validatedFirstName, setValidFirstName] = useState();
  const [providedUserName, setProvidedUserName] = useState("");
  const [validatedUserName, setValidUserName] = useState();
  const [validatedEmail, setValidEmail] = useState();
  const [validatedPassword, setValidPassword] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  const firstNameHandler = (event) => {
    setProvidedFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setProvidedLastName(event.target.value);
  };

  const userNameHandler = (event) => {
    setProvidedUserName(event.target.value);
  };

  useEffect(() => {
    setFormIsValid(
      providedEmail.includes("@") &&
        providedPassword.trim().length >= 8 &&
        providedFirstName.trim().length > 0 &&
        providedUserName
    );
  }, [providedEmail, providedPassword, providedUserName, providedFirstName]);

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length >= 8);
  };

  const validateFirstNameHandler = () => {
    setValidFirstName(providedFirstName.trim().length > 0);
  };

  const validateUserNameHandler = () => {
    setValidUserName(providedUserName.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: providedFirstName,
          lastName: providedLastName,
          username: providedUserName,
          email: providedEmail,
          password: providedPassword,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          alert(data.message);
          setProvidedFirstName("");
          setProvidedLastName("");
          setProvidedEmail("");
          setProvidedPassword("");
          setProvidedUserName("");
        });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <section className="auth">
      <h1>Registration Page</h1>
      <form onSubmit={submitHandler}>
        <div
          className={`control ${validatedFirstName === false ? "invalid" : ""}`}
        >
          <label>First Name</label>
          <input
            type="text"
            id="firstname"
            value={providedFirstName}
            onChange={firstNameHandler}
            onBlur={validateFirstNameHandler}
            required
          />
          {validatedFirstName === false && (
            <p>FIrst Name should not be empty. Please provide legal name!</p>
          )}
        </div>
        <div className="control">
          <label>Last Name</label>
          <input
            type="text"
            id="lastname"
            value={providedLastName}
            onChange={lastNameHandler}
          />
        </div>
        <div
          className={`control ${validatedUserName === false ? "invalid" : ""}`}
        >
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={providedUserName}
            onChange={userNameHandler}
            onBlur={validateUserNameHandler}
            required
          />
          {validatedUserName === false && (
            <p>Please provide correct username</p>
          )}
        </div>
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
