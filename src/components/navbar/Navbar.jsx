// For now This navbar has been used in the whole website page
// login and signup modal is imported from LoginSignup page and then imported from components part from Login/Signup page

import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

import "./navbar.css";
import LoginSignup from "../../pages/login-signupmodal/loginSignup";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { currentUser } = useContext(UserContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <div className="leftName1">Mikado Solutions</div>
          </Link>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <MenuIcon />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/">Courses</Link>
              </li>
              {currentUser ? (
                <ProfileDropdown />
              ) : (
                <li onClick={() => setIsModalOpen(true)}>
                  <button className="button1">Login</button>
                </li>
              )}
            </ul>
          </div>
        </div>
        {isModalOpen && (
          <LoginSignup setIsModalOpen={setIsModalOpen} className="pos" />
        )}
      </nav>
    </>
  );
};

export default Navbar;
