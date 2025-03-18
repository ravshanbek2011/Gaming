import React from 'react'
import '../style/banner.css'
import BannerCard from './BannerCard'
import rasm1 from '../images/Banner_img1.svg'
import rasm2 from '../images/Banner_img2.svg'
import rasm3 from '../images/Banner_img3.svg'

function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <div className="banner_box">
            <BannerCard photo={rasm1} />
            <BannerCard photo={rasm2} />
            <BannerCard photo={rasm3} />
        </div>
      </div>
    </section>
  )
}

export default Banner
