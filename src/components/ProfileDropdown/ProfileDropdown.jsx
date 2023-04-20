import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileDropdown.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ProfileDropdown = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div className="user-container">
      <h1 className="username">{currentUser.username}</h1>
      <Avatar src={localStorage.getItem("avatar_url")} />
    </div>
  );
};

export default ProfileDropdown;
