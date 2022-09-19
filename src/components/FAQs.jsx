import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import { faqs } from "../data"
import FAQ from "./FAQ"
// import Fade from 'react-reveal/Fade'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const FAQs = () => {

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
    <section className="faqs">
      <div className="container faqs__container">
            {/* <Fade bottom> */}
            <div data-aos="fade-up">
            <SectionHead icon={<FaQuestion/>} title="FAQs" />
            </div>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <div className="faqs__wrapper" data-aos="fade-down">
                  {
                        faqs.map(({id, question, answer}) => {
                              return <FAQ key={id} question={question} answer={answer}/>
                        })
                  }
            </div>
            {/* </Fade> */}
      </div>
    </section>
  )
}

export default FAQs