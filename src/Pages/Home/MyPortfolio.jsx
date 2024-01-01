import data from "../../data/index.json";

import { FaGithub } from "react-icons/fa";

import { MdArrowOutward } from "react-icons/md";





const  MyPortfolio= () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">

<p className="sub-title">Browse My Recent</p>
<h1 className="project-heading">Projects</h1>
      <div className="portfolio-container-box">
    

          <div className="projects-container">
           
            <img src="./school-img.jpg" alt ="" className="school-img" />
            <h2 className="project-heading">School Website</h2>

            <div className="button-container">
              <button className="git-btn" > <a
            href="https://github.com/AjayDamerakunta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github">
                    {/* <FaGithub /> */}
            </a>Github  </button>

              <button className="live-btn"> <a
            href="https://github.com/AjayDamerakunta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github">
                    {/* <FaGithub /> */}
            </a>Live Demo</button>
            </div>

          </div>
          </div>


        {/* <div> */}

          
         
      {/* </div> */}
    </section>
  );
}
export default MyPortfolio