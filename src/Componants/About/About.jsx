import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
              <div className="about_me-image">
                <img src={ME} alt="About Image" />
              </div>
          </div>

          <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <FaAward className='about_icon' />
                  <h5>QA Focus</h5>
                  <small>Manual & automation testing for web and mobile apps.</small>
                </article>

                <article className="about_card">
                  <FiUsers className='about_icon' />
                  <h5>Testing Stack</h5>
                  <small>Selenium, Appium, Postman, Newman, JMeter, OWASP ZAP.</small>
                </article>

                <article className="about_card">
                  <VscFolderLibrary className='about_icon' />
                  <h5>Ops & Delivery</h5>
                  <small>CI/CD with Jenkins, SDLC/STLC, AI-assisted QA workflows.</small>
                </article>
              </div>

              <p>
                I'm <strong>Shaimaa Abu Shqair</strong>, a detail-oriented <strong>Quality Assurance Engineer</strong> experienced in
                manual, automation (Selenium, Appium), API (Postman, Newman), and performance (JMeter) testing.
                I specialize in mobile and web application testing, building test plans, and driving SDLC/STLC activities with
                tight collaboration across teams.
              </p>
              <p>
                My work spans QA process improvement, security awareness, and CI/CD integration with Jenkins.
                I actively incorporate AI-assisted testing to accelerate release cycles, enhance coverage, and
                deliver structured automation frameworks that keep product quality high from planning to production.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Connect</a>
          </div>
        </div>
    </section>
  )
}

export default About
