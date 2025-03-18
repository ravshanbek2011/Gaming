import React from 'react'
import '../style/project.css'
import image1 from '../images/project_img1.svg'
import image2 from '../images/project_img2.svg'
import image3 from '../images/project_img3.svg'
import image4 from '../images/project_img4.svg'
import image5 from '../images/project_img5.svg'
import image6 from '../images/project_img6.svg'

function Project() {
  return (
    <section className='project'>
      <div className="container">
        <h2>Our Recent Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </p>
        <div className="project_grid">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
        </div>
        <div className="project_grid">
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </div>
        <button>SEE ALL</button>
      </div>
    </section>
  )
}

export default Project
