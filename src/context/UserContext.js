import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const username = window.localStorage.getItem("username");
    if (username) {
      setCurrentUser({ username });
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
