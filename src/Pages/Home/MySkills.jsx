
import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";

// import data from "../../data/index.json";

const  MySkills =()=>{
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section-title">Explore My</p>
        <h2 className="skills-heading">Experience</h2>
      {/* FRONTEND DEVELOPEMENT*/}

      <div className="Frontend-container">
        <h1 classname="frontend-heading">Frontend Development</h1>
        
        <div className="Frontend-card-container">
          <div className='inner-container'>
        <RiVerifiedBadgeFill  className="verify-icon"/>
        <div className="card-descriptions">
          <h3 className='Tech-name'>HTML</h3>
          <p className='level-of-tech'>Intermediate</p>
        </div>
        </div>
        </div>
      

        <div className="Frontend-card-container">
          <div className="inner-container">
        <RiVerifiedBadgeFill className="verify-icon" />
        <div className="card-descriptions">
          <h3 className='Tech-name'>CSS</h3>
          <p className='level-of-tech'>Intermediate</p>
        </div>
        </div>
        </div>
      

       

        <div className="Frontend-card-container">
        <div className="inner-container">
         <RiVerifiedBadgeFill  className="verify-icon" />
        <div className="card-descriptions">
          <h3 className='Tech-name'>JavaScript</h3>
          <p className='level-of-tech'>Intermediate</p>
        </div>
       </div>
      </div>
      
        <div className="Frontend-card-container">
        <div className="inner-container">
        <RiVerifiedBadgeFill  className="verify-icon" />
        <div className="card-descriptions">
          <h3 className='Tech-name' >React Js</h3>
          <p className='level-of-tech' >Intermediate</p>
        </div>
        </div>
        </div>
        </div>

         {/* BACKEND DEVELOPEMENT*/}
         <div className="Backend-container">
         <h1 classname="frontend-heading">Backend Development</h1>
        
        <div className="Backend-card-container">
          <div className='inner-container'>
          <RiVerifiedBadgeFill className="verify-icon"/>
        <div className="card-descriptions">
          <h3 className='Tech-name'>Node JS</h3>
          <p className='level-of-tech'>Intermediate</p>
        </div>
        </div>
        </div>

        <div className="Backend-card-container">
          <div className='inner-container'>
        <RiVerifiedBadgeFill className="verify-icon"/>
        <div className="card-descriptions">
          <h3 className='Tech-name'>Express JS</h3>
          <p className='level-of-tech'>Intermediate</p>
        </div>
        </div>
        </div>

        <div className="Backend-card-container">
          <div className='inner-container'>
        <RiVerifiedBadgeFill className="verify-icon"/>
        <div className="card-descriptions">
          <h3 className='Tech-name'>Git</h3>
          <p className='level-of-tech'>Intermediate</p>
        </div>
        </div>
        </div>


      

        </div>
        </div>
     
    </section>
  );
}

export default MySkills


