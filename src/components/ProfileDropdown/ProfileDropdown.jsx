import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileDropdown.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { useState } from "react";

const ProfileDropdown = () => {
  const { currentUser, logout } = useContext(UserContext);
  const [showDrop, setShowDrop] = useState(false);
  const navigate = useNavigate();
  // console.log(currentUser);
  return (
    <div
      className="user-container"
      style={{ cursor: "pointer" }}
      onClick={() => {
        // navigate("/dashboard");
        setShowDrop((old) => !old);
      }}
    >
      <h1 className="username">{currentUser.username}</h1>
      <Avatar src={currentUser.profilePic} />
      <div className={`nav-dropdown ${showDrop ? "" : "hidden"}`}>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
