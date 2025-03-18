import React from 'react'
import '../style/footer.css'
import logo from '../images/LOGO.svg'
import rasm1 from '../images/Facebook.svg'
import rasm2 from '../images/Instagram.svg'
import rasm3 from '../images/Twitter.svg'
import rasm4 from '../images/Linkedin.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <section className='footer'>
      <div className="container">
        <div className="footer_wrapper">
            <div className="footer_card">
                <img className='footer_logo' src={logo} alt="" />
                <p className='text1'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p>
                <kbd>@Logo</kbd>
            </div>
            <ul className='footer_list'>
                <h5>About us</h5>
                <li>Zeux</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact us</li>
            </ul>
            <div className="footer_card">
                <h5>Contact us</h5>
                <p className='text2'>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. </p>
                <kbd>+908 89097 890</kbd>
            </div>
            <div className="footer_img">
                <NavLink to="https://www.facebook.com/"><img src={rasm1} alt="" /></NavLink>
                <NavLink to="https://www.instagram.com/?flo=true"><img src={rasm2} alt="" /></NavLink>
                <NavLink to="https://x.com/?lang=en"><img src={rasm3} alt="" /></NavLink>
                <NavLink to="https://www.linkedin.com/"><img src={rasm4} alt="" /></NavLink>
            </div>
        </div>
      </div>
        <NavLink to="https://www.figma.com/design/jwOuJYunudjrrK0MhTMufD/Gaming-Platform---Web-Design-(Community)-(Copy)-(Copy)-(Copy)?node-id=1-2&p=f&t=DlxMcG82msDrNu9G-0"><kbd className='link'>Copyright ® 2021 Lorem All rights Rcerved</kbd></NavLink>
    </section>
  )
}

export default Footer
