import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileDropdown.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

const ProfileDropdown = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(currentUser);
  return (
    <div
      className="user-container"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      <h1 className="username">{currentUser.username}</h1>
      <Avatar src={currentUser.profilePic} />
    </div>
  );
};

export default ProfileDropdown;
