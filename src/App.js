import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Homescreen";

import Navbar from "./Pages/Home/Navbar";

import MySkills from "./Pages/Home/MySkills";
import AboutMe from "./Pages/Home/AboutMe";

import HeroSection from "./Pages/Home/HeroSection";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeroSection />
        < AboutMe />
          <Navbar />
          <MySkills/>
       
  
         <MyPortfolio />
         
         <ContactMe/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;