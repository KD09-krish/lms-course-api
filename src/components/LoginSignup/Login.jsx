import React, { useState } from "react";
import "../../pages/login-signupmodal/loginSignup.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Login({ setLoginClose, setIsModalOpen, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("In handleLogin");

    if (password.length < 8) {
      return window.alert("Password too short");
    }

    setUser({ username });
    window.localStorage.setItem("username", username);
    setIsModalOpen(false);
  };
  return (
    <div className="wrapper login">
      <div className="container2">
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome!</h2>
            <p>
              Create your account.
              <br />
              For Free!
            </p>{" "}
            <a href className="btn" onClick={() => setLoginClose(false)}>
              Sign Up
            </a>
          </div>
        </div>
        <CloseIcon
          className="closeIcon"
          onClick={() => setIsModalOpen(false)}
        />
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <p>
                {" "}
                <input
                  type="text"
                  placeholder="Email*"
                  required
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                />{" "}
              </p>
              <p>
                {" "}
                <input
                  type="password"
                  placeholder="Password*"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </p>
              <p>
                {" "}
                <input type="submit" value="Sign In" />{" "}
              </p>
              <p>
                {" "}
                <a href>Forgot password?</a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
