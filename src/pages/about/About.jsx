import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Are you tired of spending hours at the gym with little to show for it? Vawulens offers a way to get fit and stay fit.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <Fade top>
          <img src={StoryImage} alt="Our Story Image" />
          </Fade>
        </div>
        <div className="about__section-content">
          <Fade top>
          <h1>Our Story</h1>
          </Fade>
          <Rotate top right>
          <p>
          Vawulens is a fitness website for everyone. We're here to help you get in shape and feel good about yourself, no matter your age or physical activity levels. Our team has been building the best quality workout programs for all types of people. With our 100% feedbacks from real users, Vawulens makes sure that our clients get the best solution for their needs.
          </p>
          </Rotate>
          <Rotate top left>
          <p>
          The Vawulens team is a team of people who work very hard to make sure that you get the support you need to succeed in your journey to get in shape. So whether you are looking for a buddy, or someone to lift weights with, we offer a variety of options. What's not to love?
          </p>
          </Rotate>
          <Rotate bottom left>
          <p>
          VAWULENS is your fitness website and we want to help you get in shape.
          </p>
          </Rotate>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <Rotate top right>
          <h1>Our Vision</h1>
          </Rotate>
          <Rotate bottom left></Rotate>
          <p>
          Vawulens will profoundly improve the quality of life for thousands of Americans by educating, inspiring and providing the most efficient, effective and safe exercise program and nutrition life-style system ever created. Our employees will be life changers and will have extensive growth opportunities while fulfilling their passion and servicing their clients.
          </p>
          <Rotate bottom right>
          <p>
          To be a model resistance training business where gym owners and coaches from around the world come for ideas and research opportunities while making Austinites stronger with high-quality, educated instructors.
          </p>
          </Rotate>
        </div>
        <div className="about__section-image">
          <Fade bottom>
          <img src={VisionImage} alt="Our Vision Image" />
          </Fade>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <Fade top>
          <img src={MissionImage} alt="Our Mission Image" />
          </Fade>
        </div>
        <div className="about__section-content">
          <Rotate top right>
          <h1>Our Mission</h1>
          </Rotate>
          <Rotate top right>
          <p>
          Vawulens exists for one reason – To provide a safe environment for our members to challenge themselves and attain the level of Health, Wellness and Vitality that is their birthright. Our coaches are passionate, committed, and will engage with members on all levels to assist them on their journey.
          </p>
          </Rotate>
          <Rotate top left>
          <p>
          Maximize our clients’ strength, without compromising their health or risking injury. The Vawulens Fitness team will provide a no-nonsense, sustainable regimen of strength training enabling our clients to overcome barriers to health and fitness, and fulfill their physical potential throughout their lifetime.
          </p>
          </Rotate>
          <Rotate bottom right>
          <p>
          Provide clients with evidence-based exercise programming that results in better health and strength for a complete life.
          </p>
          </Rotate>
        </div>
      </div>
    </section>
    </>
  )
}

export default About