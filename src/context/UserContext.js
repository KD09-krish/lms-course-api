import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [temp, setTemp] = useState(false);

  const refresh = () => {
    setTemp((old) => !old);
  };

  const logout = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("firstname");
    window.localStorage.removeItem("profile_pic");
    window.localStorage.removeItem("email");
    setCurrentUser();
    refresh();
  };

  useEffect(() => {
    // const username = window.localStorage.getItem("username");
    const token = window.localStorage.getItem("access_token");
    const fname = window.localStorage.getItem("firstname");
    const profilePic = window.localStorage.getItem("profile_pic");
    const email = window.localStorage.getItem("email");
    if (token) {
      setCurrentUser({ token, username: fname, profilePic, email });
    }
  }, [temp]);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, refresh, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
