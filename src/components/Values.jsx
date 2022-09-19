import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Bounce from 'react-reveal/Bounce'
import { useEffect } from "react"


const Values = () => {


      useEffect(() => {
            AOS.init({
              duration: 1000,
              easing: 'ease',
              once: false, 
              mirror: false,
              offset: 120,
              delay: 0,
            });
          }, []);

  return (
    <section className='values'>
      <div className="container values__container">
            <div className="values-left">
                  <div className="values__image" data-aos="fade-up-left">
                  {/* <Bounce left> */}
                  <img src={Image} alt="Values Image" />  
                  {/* </Bounce>                                   */}
                  </div>
            </div>
            <div className="values__right" data-aos="fade-down-right" data-aos-easing="ease-in">
                  {/* <Bounce right> */}
                  <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                  {/* </Bounce> */}
                  {/* <Bounce top> */}
                  <p>
                  These are values from which we operate at Vawulens. Everything we do for clients, and everything we consume for continuing education, is in service of delivering in 4 key ways.
                  </p>
                  {/* </Bounce> */}
                  {/* <Bounce top> */}
                  <div className="values__wrapper">
                        {
                              values.map(({id, icon,title,desc}) => {
                                    return <Card key={id} className="values__value">
                                          <span>{icon}</span>
                                          <h3>{title}</h3>
                                          <small>{desc}</small>
                                    </Card>
                              })
                        }
                  </div>
                  {/* </Bounce> */}
            </div>
      </div>
    </section>
  )
}

export default Values