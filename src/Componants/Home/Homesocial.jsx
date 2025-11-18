import React from 'react'
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

function Homesocial() {
  return (
    <div className='homesocials'>
        <a href="https://www.linkedin.com/in/shaimaa-abu-shqair-690974252" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/Shaimaa-8" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="#" target='_blank' rel="noreferrer"><FaDribbble/></a>
    </div>
  )
}

export default Homesocial
