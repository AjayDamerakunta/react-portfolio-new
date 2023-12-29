import data from "../../data/index.json";

import { FaGithub } from "react-icons/fa";

import { MdArrowOutward } from "react-icons/md";




export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>

          <a
            href="https://github.com/AjayDamerakunta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github">
                    <FaGithub />
            Visit My GitHub
            </a>
          
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {/* {item.link} */}
               <a href="https://school-app-frontend-delta.vercel.app/register" target="_blank" rel="noopener noreferrer"
              className="anchor-element">  {item.link}  <MdArrowOutward className="arrow-icon"/> </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}