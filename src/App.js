import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/footer/Footer";
import Lecture from "./pages/lecture/Lecture";

export default function App() {
  return (
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
  );
}
