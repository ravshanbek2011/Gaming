import React from 'react'
import '../style/aboutHero.css'
import rasm1 from '../images/AboutHero_img.svg'
import rasm2 from '../images/Arrow_right1.svg'
import rasm3 from '../images/Arrow_left1.svg'

function AboutHero() {
  return (
    <section className='aboutHero'>
      <div className="aboutHero_content">
        <h4>Home -- <span>About us</span></h4>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button>Get in touch <img src={rasm2} alt="" /></button>
      </div>
      <div className="aboutHero_photo">
        <img className='about_photo' src={rasm1} alt="" />
        <div className="aboutHero_title">
            <img src={rasm3} alt="" />
            <kbd>1 of 2</kbd>
            <img src={rasm2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutHero
