import { FaExternalLinkAlt } from "react-icons/fa";

export default function AboutMe() {

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

    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="img3-aj.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title"></p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
             My self Ajay Damerakunta .Have completed B.Tech graduatio  in the year of 2022 in the stream of civil Engineering from Kakatiya University college of Engineering and Technology(KUCET). I  was a ex-intern  at ssds(smart squad digital solutions), which is a startup company. I have enhanced my skills as full stack developer, which I came to enhanced Html, Css, Javascript, React, Node js, Mongodb. 
            </p> 
            <p className="hero--section-description">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis */}
            </p>
            {/* <div className="resume-container"> */}
              {/* <div className="link-icon"> */}
                {/* <a href="https://Users/AJAY/Downloads/Ajay%20Damerakunta%20Resume(updated).pdf"> */}
              {/* <h3>Resume</h3> */}
              <button type="button" onClick={handleDownload} className="resume-container">Resume
              <FaExternalLinkAlt className="resume-icon" />  </button>
             
              {/* </a> */}
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </section>
    );
  }