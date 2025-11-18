import './Home.css'
import Me from '../../assets/me1.png'
import CV from'../..//assets/scv.pdf'
import Homesocial from './Homesocial'



function Home() {
  return (
    <div id="home" className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Shaimaa Abu Shqair</h1>
        <h4 className="text-light">Detail-oriented Quality Assurance Engineer skilled in manual, automation</h4>

        <div className="btns">
          <a href={CV} className="btn" download>Download CV</a>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
       

        <div className="me">
          <img src={Me} alt="Laith Barakat" />
        </div>
        <a href="#about" className="scroll_down">Scroll Down</a>

      <Homesocial/>
      </div>
      
    </div>
  )
}

export default Home
