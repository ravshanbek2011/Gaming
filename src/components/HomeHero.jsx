import React from 'react'
import '../style/homeHero.css'
import bgimg from '../images/Cursor.svg'

function HomeHero() {
  return (
    <section className='homeHero'>
      <div className="container">
        <div className="homeHero_wrapper">
            <div className="homeHero_content">
                <h4>3D game Dev</h4>
                <h1>Work that we produce for our <br /> clients</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <button>Get more details</button>
            </div>
        </div>
      </div>
      <img className='bg_img' src={bgimg} alt="" />
    </section>
  )
}

export default HomeHero
