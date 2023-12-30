
import React from 'react';
import { MdVerified } from "react-icons/md";

// import data from "../../data/index.json";

const  MySkills =()=>{
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section-title">Explore My</p>
        <h2 className="skills-heading">Experience</h2>
      {/* </div> */}
      <div className="Frontend-container">
        <h1>Frontend Development</h1>
        <div className="Frontend-card-container">
        <MdVerified  className="verify-icon"/>
          <h3>HTML</h3>
          <p className="para">Intermediate</p>
        </div>
      

        <div className="Frontend-card-container">
        <MdVerified  className="verify-icon" />
          <h3>CSS</h3>
          <p>Intermediate</p>
        </div>
      

       

        <div className="Frontend-card-container">
        <MdVerified />
          <h3>JavaScript</h3>
          <p>Intermediate</p>
        </div>
      
        <div className="Frontend-card-container">
        <MdVerified />
          <h3>React Js</h3>
          <p>Intermediate</p>
        </div>
      
        
         
      
        
        </div>
        </div>
     
    </section>
  );
}

export default MySkills


