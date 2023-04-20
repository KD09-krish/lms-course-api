import React, { useState } from "react";
import Login from "../../components/LoginSignup/Login";
import Signup from "../../components/LoginSignup/Signup";
import "./loginSignup.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function LoginSignup({ setIsModalOpen }) {
  const [loginOpen, setLoginClose] = useState(true);
  const { setCurrentUser } = useContext(UserContext);

  return (
    <div className="blurbackground">
      {loginOpen ? (
        <Login
          setLoginClose={setLoginClose}
          setUser={setCurrentUser}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <Signup
          setLoginClose={setLoginClose}
          setUser={setCurrentUser}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
