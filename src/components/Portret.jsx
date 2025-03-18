import React from 'react'
import '../style/portret.css'
import rasm1 from '../images/Portret_img.svg'

function Portret() {
  return (
    <section className='portret'>
      <div className="container">
        <div className="portret_wrapper">
         <img src={rasm1} alt="" />
          <div className="portret_content">
            <h4>Lorem ipsum</h4>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portret
