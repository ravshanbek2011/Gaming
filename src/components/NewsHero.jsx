import React from 'react'
import '../style/newsHero.css'
import rasm from '../images/Lupa_img1.svg'
import rasm2 from '../images/Nuqta_img1.svg'

function NewsHero() {
  return (
    <section className='newsHero'>
      <div className="container">
        <h4>Home -- <span>News</span></h4>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <form className='newsHero_form'>
            <img src={rasm} alt="" />
            <input placeholder='Search' />
        </form>
        <img className='nuqtacha' src={rasm2} alt="" />
      </div>
    </section>
  )
}

export default NewsHero
