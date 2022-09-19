import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
import { useEffect } from "react"
// import Roll from 'react-reveal/Roll'
// import LightSpeed from 'react-reveal/LightSpeed'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Programs = () => {

      useEffect(() => {
            AOS.init({
              duration: 500,
              easing: 'ease',
              once: false, 
              mirror: false,
              offset: 120,
              delay: 0,
            });
          }, []);

  return (
    <section className="programs">
      <div className="container programs__container">
            {/* <LightSpeed left> */}
            <div data-aos="zoom-out-right">
            <SectionHead icon={<FaCrown/>} title="Programs"/>
            </div>
            {/* </LightSpeed> */}
      <div className="programs__wrapper"  data-aos="zoom-out-left" data-aos-easing="ease-in">
            {
                  programs.map(({id, icon, title, info, path}) => {
                        return (
                              // <Roll right>
                              <Card className="programs__program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                              </Card>
                              // </Roll>
                        )
                  })
            }
      </div>
      </div>
    </section>
  )
}

export default Programs