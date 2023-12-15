import HeroSection from './HeroSection';
import { useState} from 'react';
import { Link } from 'react-scroll';

export default function Home() {
    const[navActive, setNavActive] = useState(false);
    const closeMenu = () => {
        setNavActive(false);
      };
    
    return(

      
        
        <section id="heroSection" className="hero--section">

            <div className="hero--section--content--box">
            <div classname = "hero-section-content">
                <p className="section--tittle"> <span className="span-para">Hi, my name is</span>  
                 <span className='Ajay-para-name'>Ajay Damerakunta</span>  </p>
                <h1 className="hero--section--title">
                    <span className="hero--section">Full Stack Developer</span>{" "}
                    {/* <br /> Developer */}
                </h1>
              <p className="hero--section-description">                
                          I am a passionate web designer with a few experience in creating visually appearing and user-friendly websites</p>

            </div>
            </div>
            <button class="btn btn-primary">
            <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Get In Touch
      </Link>
 
</button>

            <div className="hero--section--img">
                <img src="./new-aj.jpg" alt="Hero section" className="Home-pic" />
            </div>

        </section>
    );
}