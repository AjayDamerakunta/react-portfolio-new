// import HeroSection from './HeroSection';
import { useState} from 'react';
import { Link } from 'react-scroll';
import { FaExternalLinkAlt } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Home() {
    const[navActive, setNavActive] = useState(false);
    const closeMenu = () => {
        setNavActive(false);
      };

      const handleDownload = () => {
        // You can replace 'resume.pdf' with the actual path to your resume file
        const resumeFilePath = '/Aj.pdf';
    
        // Create an anchor element
        const downloadLink = document.createElement('a');
    
        // Set the href attribute to the file path
        downloadLink.href = resumeFilePath;
    
        // Specify the filename for the download
        downloadLink.download = '/Aj.pdf';
    
        // Append the link to the document
        document.body.appendChild(downloadLink);
    
        // Trigger a click on the link to initiate the download
        downloadLink.click();
    
        // Remove the link from the document
        document.body.removeChild(downloadLink);
      };
    
    
    return(
        <section id="heroSection" className="hero--section">

         <div class="home-bg-container">

         <div className="img-container">
            <img src="./circular-aj-new-bg.png" alt="Hero section" className="Home-pic" />
            </div>


            <div className="content-container">
        <p className="hello-line">Hello,</p>
        <p className="name-line">I'm Ajay Damerakunta</p>
        <p className="role-line">Full Stack Developer</p>
      

        


         


            <div className="button-container">  
              <button class="btn btn-primary">
               <Link
              onClick={closeMenu}
               activeClass="navbar--active-content"
               spy={true}
               smooth={true}
               offset={-70}
              duration={500}
              to="Contact"
              className="download-button">
                 Contact Info
              </Link>
              </button>

         {/* <button type="button" onClick={handleDownload} className="resume-container">Resume<FaExternalLinkAlt className="resume-icon" />  </button> */}
         <button type="button" onClick={handleDownload} className="download-button">Download CV  </button>
         </div>

    
         <div class="social-icon-container">


         {/* <div class="icons-litle-container"> */}
                  
                  {/* <li> */}
                  <a
                  href="https://www.facebook.com/"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer" > <FaFacebook  className="social-icon"/>
                  </a>
                  {/* </li> */}
                  {/* </div> */}
  
  
  
  
                  {/* <div class="icons-litle-container"> */}
                  {/* <li> */}
                    <a
                    href="https://www.linkedin.com/in/ajaydamerakunta//"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer">   <IoLogoLinkedin   className="social-icon"/>
  
                    </a>
                  {/* </li> */}
                  {/* </div> */}
  
  
  
                  {/* <div class="icons-litle-container"> */}
                  {/* <li> */}
                    <a
                    href="https://www.facebook.com/"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer">   <FaSquareXTwitter  className="social-icon" />
  
                    </a>
                  {/* </li> */}
                  {/* </div> */}


                
                  {/* <div class="icons-litle-container"> */}
                  {/* <li> */}
                    <a
                    href="https://www.facebook.com/"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer">   <FaGithub   className="social-icon" />
  
                    </a>
                  {/* </li> */}
                  {/* </div>   */}


         </div>
         </div>
         </div>

        </section>
    );
}