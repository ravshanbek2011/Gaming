import React from 'react'
import '../style/mobile.css'
import MobileCard from './MobileCard'
import rasm11 from '../images/Mobile_img1.svg'
import rasm22 from '../images/Mobile_img2.svg'
import rasm33 from '../images/Mobile_img3.svg'
import rasm44 from '../images/Mobile_img4.svg'
import rasm55 from '../images/Mobile_img5.svg'
import rasm66 from '../images/Mobile_img6.svg'
import bgimg from '../images/Background_mobile.svg'

function Mobile() {
  return (
    <section className='mobile' style={{backgroundImage:`url(${bgimg})`}}>
      <div className="container">
        <h2>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s,</p>
        <div className="mobile_grid1">
            <MobileCard photo={rasm11} title="Mobile Game Development" />
            <MobileCard photo={rasm22} title="PC Game Development" />
            <MobileCard photo={rasm33} title="PS4 Game Development" />
            <MobileCard photo={rasm44} title="AR/ VR design. AR/ VR design" />
        </div>
        <div className="mobile_grid2">
            <MobileCard photo={rasm55} title="AR/ VR design" />
            <MobileCard photo={rasm66} title="3D Modelings" />
        </div>
      </div>
    </section>
  )
}

export default Mobile
