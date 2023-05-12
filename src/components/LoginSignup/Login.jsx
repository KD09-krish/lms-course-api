import React, { useEffect, useState } from "react";
import "../../pages/login-signupmodal/loginSignup.css";
import CloseIcon from "@mui/icons-material/Close";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  browserName,
  browserVersion,
  deviceType,
  osName,
  osVersion,
} from "react-device-detect";

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
          {/* <div className="login-text">
            <h2>Welcome!</h2>
            <p>
              Create your account.
              <br />
              For Free!
            </p>{" "}
            <a href className="btn" onClick={() => setLoginClose(false)}>
              Sign Up
            </a>
          </div> */}
        </div>
        <CloseIcon
          className="closeIcon"
          onClick={() => setIsModalOpen(false)}
        />
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            {/* <form
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
            </form> */}
            <GoogleLogin
              logo_alignment="center"
              width="100%"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                var config = {
                  headers: { "Access-Control-Allow-Origin": "*" },
                };
                axios.get("https://api64.ipify.org").then((res) => {
                  axios
                    .post(
                      "https://lms-authentication11.onrender.com/API/login/google",
                      {
                        token: credentialResponse.credential,
                        loginInfo: {
                          browser: `${browserName} ${browserVersion}`,
                          os: `${osName} ${osVersion}`,
                          deviceType: `${deviceType}`,
                          // loginTime: Date.now().toLocaleString(),
                          location: `${res.data}`,
                        },
                      },
                      config
                    )
                    .then((res) => {
                      console.log(res.data);
                      window.localStorage.setItem(
                        "access_token",
                        res.data.token
                      );
                      window.localStorage.setItem(
                        "firstname",
                        res.data.user.firstName
                      );
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                });
              }}
              onError={() => {
                console.log("Login failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
