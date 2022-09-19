import { Link } from "react-router-dom"
import Image from '../images/main_header.png'
import React from 'react'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const MainHeader = () => {

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <Rotate top left>
          <h4>#100DaysOfWorkOut</h4>
          </Rotate>
          <Rotate top left>
          <h1>Join The Legends Of The Fitness World</h1>
          </Rotate>
          <Rotate bottom left>
          <p>
            Where fitness becomes your lifestyle. Train hard, sweat hard.
          </p>
          </Rotate>
          <Rotate bottom right>
          <Link to="/plans" className="btn lg">Get Started</Link>
          </Rotate>
        </div>
        
        <div className="main__header-right">
        <Fade right>
          <div className="main__header-circle"></div>
        </Fade>
          <div className="main__header-image">
          <Fade top>
            <img src={Image} alt="Main Header Image" />
          </Fade>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default MainHeader