import React from 'react'
import '../style/spiderman.css'
import rasm from '../images/Spiderman1.svg'
import nuqta from '../images/Nuqta.svg'

function Spiderman() {
  return (
    <section className='spiderman'>
      <h2>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</h2>
      <div className="container">
        <img className='nuqta' src={nuqta} alt="" />
        <div className="spiderman_content">
            <h4>Lorem Ipsum</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <img className='spider' src={rasm} alt="" />
      </div>
    </section>
  )
}

export default Spiderman
