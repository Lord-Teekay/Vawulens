import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md' 
import {BsMessenger} from 'react-icons/bs' 
import {IoLogoWhatsapp} from 'react-icons/io' 
import './contact.css'
const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Need something? The VawulensSquad is here to help.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:lordteekay@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http:/m.me/" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+2348142118795" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact