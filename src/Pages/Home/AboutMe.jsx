import { PiStudentBold } from "react-icons/pi";
const  AboutMe=()=> {


    return (
      <section id="AboutMe" className="about--section">
        <div className="about-section-img">
          <div className="img-container">
           <p>Get To Know More</p>
           <h2>About Me</h2>
           <img src="img3-aj.jpg" alt="About Me" />
          </div>
        

        <div className="AboutMe-card-container">

          <div className ="tech-container">
          <PiStudentBold  className="edu-icon"/>
            <h3>Fresher</h3>
            <p>MERN Stack Development</p>
          </div>

          <div className="Education-container">
             <PiStudentBold  className="edu-icon"/>
            <h3 className="Education-head">Education</h3>
            <p>B.Tech.Bachelors of Technology</p>
          </div>
          </div>

          {/* <div className="hero--section--content"> */}
            {/* <p className="section--title"></p> */}
            {/* <h1 className="skills-section--heading">About Me</h1> */}
            <p className="hero--section-description">
            Motivated B.Tech graduate with expertise in both front-end and back-end web development. Seeking a dynamic role to apply technical skills and creative problem-solving for innovative web solutions
            </p> 
            

              {/* </div> */}
        </div>
      </section>
    );
  }
  export default AboutMe