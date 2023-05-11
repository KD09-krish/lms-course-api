import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/footer/Footer";
import Lecture from "./pages/lecture/Lecture";
import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <UserProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GCLIENT_ID}>
        <div className="h">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="" element={<Lecture />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </GoogleOAuthProvider>
    </UserProvider>
  );
}
