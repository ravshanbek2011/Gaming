import React from 'react'
import '../style/serviceHero.css'
import rasm1 from '../images/Service_img1.svg'
import rasm2 from '../images/Service_img2.svg'
import rasm3 from '../images/Service_img3.svg'

function ServiceHero() {
  return (
    <section className='serviceHero'>
        <h4>Home -- <span>Service</span></h4>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className="service_wrapper">
            <div className="service_card">
                <img src={rasm1} alt="" />
                <div>
                  <h3>90+</h3>
                  <kbd>Clients</kbd>
                </div>
            </div>
            <div className="service_card">
                <img src={rasm2} alt="" />
                <div>
                  <h3>30+</h3>
                  <kbd>Countries</kbd>
                </div>
            </div>
            <div className="service_card">
                <img src={rasm3} alt="" />
                <div>
                  <h3>50+</h3>
                  <kbd>Projects</kbd>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceHero
