import React, { useState } from "react";
import "../../pages/login-signupmodal/loginSignup.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Signup({ setLoginClose, setIsModalOpen, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSignup = () => {
    console.log("In handleSignup");

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialCharacters = /\W|_/g;

    if (!username) {
      return window.alert("Please enter a username");
    }

    if (!password) {
      return window.alert("Please enter a password");
    }

    if (!name) {
      return window.alert("Please enter a name");
    }

    if (!number) {
      return window.alert("Please enter a phone number");
    }

    if (password.length < 8) {
      return window.alert("Password must be at least 8 characters");
    }

    if (!password.match(lowerCaseLetters)) {
      return window.alert("Password must contain atleast 1 lowercase letter");
    }

    if (!password.match(upperCaseLetters)) {
      return window.alert("Password must contain atleast 1 uppercase letter");
    }

    if (!password.match(numbers)) {
      return window.alert("Password must contain atleast 1 number");
    }

    if (!password.match(specialCharacters)) {
      return window.alert(
        "Password must contain atleast 1 special character: " + password
      );
    }

    setUser({ username });
    setIsModalOpen(false);
  };
  return (
    <div className="wrapper login">
      <div className="container2">
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome!</h2>
            <p>
              Already have an account.
              <br />
              Please Login
            </p>{" "}
            <a href className="btn" onClick={() => setLoginClose(true)}>
              Login
            </a>
          </div>
        </div>
        <CloseIcon
          className="closeIcon"
          onClick={() => setIsModalOpen(false)}
        />
        <div className="col-right">
          <div className="login-form">
            <h2>SignUp</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                handleSignup();
              }}
            >
              <p>
                {" "}
                <input
                  type="text"
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />{" "}
              </p>
              <p>
                {" "}
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />{" "}
              </p>
              <p>
                {" "}
                <input
                  type="password"
                  placeholder="Password*"
                  min="8"
                  max="16"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />{" "}
              </p>
              <p>
                {" "}
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />{" "}
              </p>

              <p>
                {" "}
                <input type="submit" value="Sign In" />{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
