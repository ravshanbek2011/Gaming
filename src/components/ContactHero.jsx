import React from 'react'
import '../style/contactHero.css'
import rasm from '../images/ContactHero_img1.svg'
import rasm1 from '../images/Facebook_dark.svg'
import rasm2 from '../images/Instagram_qora.svg'
import rasm3 from '../images/Twitter_qora.svg'
import rasm4 from '../images/Linkedin_qora.svg'
import rasm5 from '../images/Contact_phone.svg'
import rasm6 from '../images/Contact_location.svg'
import { NavLink } from 'react-router-dom'

function ContactHero() {
  return (
    <section className='contactHero'>
      <div className="container">
        <h4>Home -- <span>Contact us</span></h4>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <img className='maps' src={rasm} alt="" />
        <div className="contactHero_wrapper">
            <div className="contact_content">
                <NavLink to="https://www.instagram.com/ravshan._o32o1/?next=%2F"><kbd>Follow us</kbd></NavLink>
                <div className="contact_flex">
                  <NavLink to="https://www.facebook.com/"><img src={rasm1} alt="" /></NavLink>
                  <NavLink to="https://www.instagram.com/?flo=true"><img src={rasm2} alt="" /></NavLink>
                  <NavLink to="https://x.com/?lang=en"><img src={rasm3} alt="" /></NavLink>
                  <NavLink to="https://www.linkedin.com/"><img src={rasm4} alt="" /></NavLink>
                </div>
            </div>
            <div className="contact_phone">
                <img src={rasm5} alt="" />
                <h3>+94 4444 5555 6</h3>
            </div>
            <div className="contact_location">
                <img src={rasm6} alt="" />
                <h3>but also the leap into electronic <br />
                typesetting</h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
