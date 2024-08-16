import React from "react";
import Navbar from "../Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contacts from "./Contacts";
import About from "./About";
function RouterPages() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPages;
