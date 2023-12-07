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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis omnis harum sed veniam quasi dicta accusamus
              recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
              tempora numquam sint odit optio.
            </p>
            <p className="hero--section-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis omnis harum sed veniam quasi dicta accusamus
              recusandae?
            </p>
            {/* <div className="resume-container"> */}
              {/* <div className="link-icon"> */}
                {/* <a href="https://Users/AJAY/Downloads/Ajay%20Damerakunta%20Resume(updated).pdf"> */}
              {/* <h3>Resume</h3> */}
              <button type="button" onClick={handleDownload} className="resume-container">Resume
              <FaExternalLinkAlt />  </button>
             
              {/* </a> */}
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </section>
    );
  }