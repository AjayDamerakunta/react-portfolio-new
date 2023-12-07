// import data from "../../data/index.json";

// export default function MySkills() {
//   return (
//     <section className="skills--section" id="mySkills">
//       <div className="portfolio--container">
//         <p className="section--title">My Skills</p>
//         <h2 className="skills--section--heading">My Expertise</h2>
//       </div>
//       <div className="skills--section--container">
//         {data?.skills?.map((item, index) => (
//           <div key={index} className="skills--section--card">
//             <div className="skills--section--img">
//               <img src={item.src} alt="Product Chain" />
//             </div>
//             <div className="skills--section--card--content">
//               <h3 className="skills--section--title">{item.title}</h3>
//               <p className="skills--section--description">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from 'react';
import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {/* Render Frontend Skills */}
        
        
        <div className="skills--section--card">
          <div className="front-end-container">
        {/* {/* <h1 className="skills--section--title">Frontend</h1> */}
        <button type="submit" className="skills--section--title">FrontEnd</button> 
        </div>
        <div className="tech--cards">

          <div className="skills--section--img">
            
            <img src="./html-icon.png" alt="Frontend Icon"  className="react-icon" />
            <p className="technology-name">HTML</p>
          </div>

          <div className="skills--section--img">
            <img src="./css-icon.png" alt="Frontend Icon" className="react-icon" />
            <p className="technology-name" >CSS</p>
          </div>

          <div className="skills--section--img">
            <img src="./js-icon.png" alt="Frontend Icon"  className="react-icon" />
            <p className="technology-name" >JAVASCRIPT</p>
          </div>

          <div className="skills--section--img">
            <img src="./logo512.png" alt="Frontend Icon"  className="react-icon"/>
            <p className="technology-name" >REACT</p>
          </div>
           {/* <div className="skills--section--img">
            <img src="./logo512.png" alt="Frontend Icon" className="react-icon" />
            <p className="technology-name">FIGMA</p>
          </div>  */}

          <div className="skills--section--card--content">
           
            {data.skills
              .filter(skill => skill.title === "Front-end")
              .map((item, index) => (
                <div key={index} className="skills--section--description">
                  {item.title}
                </div>
              ))}
          </div>
        </div>
        </div>

        {/* Render Backend Skills */}
        <div className="skills--section--card">
        <div className="front-end-container">
        {/* <h1 className="skills--section--title">Backend</h1> */}
        <button type="submit" className="skills--section--title">BackEnd</button> 
        </div>

        <div className="tech--cards">

          <div className="skills--section--img">
            <img src="./node-icon.png" alt="Backend Icon"  className="react-icon2"/>
            <p className="technology-name" >NODE JS</p>
          </div>

           <div className="skills--section--img">
            <img src="./express-icon.jpeg" alt="Backend Icon" className="react-icon2"/>
            <p className="technology-name" >EXPRESS JS</p>
          </div>
          
          


          <div className="skills--section--card--content">
        
            {data.skills
              .filter(skill => skill.title === "Back-end")
              .map((item, index) => (
                <div key={index} className="skills--section--description">
                  {item.title}
                </div>
              ))}
          </div>
        </div>
      </div>


      <div className="skills--section--card">
        <div className="front-end-container">
        {/* <h1 className="skills--section--title">Database</h1> */}
        <button type="submit" className="skills--section--title">DataBase</button> 
        </div>

        <div className="tech--cards">

          <div className="skills--section--img">
            <img src="./db-icon.png" alt="Backend Icon"  className="react-icon3"/>
            <p className="technology-name">Mongo DB</p>
          </div>

          <div className="skills--section--img">
            <img src="./logo512.png" alt="Backend Icon" className="react-icon" />
            <p className="technology-name">SQL</p>
          </div>


          <div className="skills--section--card--content">
        
            {data.skills
              .filter(skill => skill.title === "Back-end")
              .map((item, index) => (
                <div key={index} className="skills--section--description">
                  {item.title}
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}


