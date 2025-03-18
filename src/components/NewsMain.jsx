import React from 'react'
import '../style/newsMain.css'
import MainCard1 from './MainCard1'
import rasm1 from '../images/NewsMain_img1.svg'
import rasm2 from '../images/NewsMain_img2.svg'
import MainCard2 from './MainCard2'

import photo1 from '../images/MainCard_image1.svg'
import photo2 from '../images/MainCard_image2.svg'
import photo3 from '../images/MainCard_image3.svg'
import photo4 from '../images/MainCard_image4.svg'
import photo5 from '../images/MainCard_image5.svg'
import photo6 from '../images/MainCard_image6.svg'
import photo7 from '../images/MainCard_image7.svg'

function NewsMain() {
  return (
    <section className='newsMain'>
      <div className="container">
        <div className="ikkitadan">
          <div className="newsMain_wrapper">
            <MainCard1 photo={rasm1} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            <MainCard1 photo={rasm2} />
          </div>
          <div className="newsMain_comp">
            <MainCard2 rasm={photo1} />
            <MainCard2 rasm={photo2} />
            <MainCard2 rasm={photo3} />
            <MainCard2 rasm={photo4} />
            <MainCard2 rasm={photo5} />
            <MainCard2 rasm={photo6} />
            <MainCard2 rasm={photo7} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsMain
