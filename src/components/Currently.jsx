import React from 'react'
import '../style/currently.css'
import rasm1 from '../images/Currently_img1.svg'
import rasm2 from '../images/Currently_img2.svg'
import rasm3 from '../images/Currently_img3.svg'
import rasm4 from '../images/Currently_img4.svg'
import fire from '../images/Fire.svg'

function Currently() {
  return (
    <section className='currently'>
      <div className="container">
        <div className="currently_content">
            <h2>Currently Trending Games</h2>
            <button>SEE ALL</button>
        </div>
        <div className="currently_grid">
            <div className="currently_card">
                <img src={rasm1} alt="" />
                <h4><img src={fire} alt="" /> 40 Followers</h4>
            </div>
            <div className="currently_card">
                <img src={rasm2} alt="" />
                <h4><img src={fire} alt="" /> 40 Followers</h4>
            </div>
            <div className="currently_card">
                <img src={rasm3} alt="" />
                <h4><img src={fire} alt="" /> 40 Followers</h4>
            </div>
            <div className="currently_card">
                <img src={rasm4} alt="" />
                <h4><img src={fire} alt="" /> 40 Followers</h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Currently
