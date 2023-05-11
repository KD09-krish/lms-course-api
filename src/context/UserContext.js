import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // const username = window.localStorage.getItem("username");
    const token = window.localStorage.getItem("access_token");
    const fname = window.localStorage.getItem("firstname");
    if (token) {
      setCurrentUser({ token, username: fname });
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
