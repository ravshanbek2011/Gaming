import React, {  useRef } from 'react'
import rasm from '../images/Star.svg'

function TrustedCard({avatar, title, location, text}) {
    let x = useRef()
    function show_card() {
        x.current.classList.toggle("trusted_show")
    }
  return (
    <div ref={x} onClick={show_card} className='trusted_card'>
      <div className="trusted_info">
        <img src={avatar} alt="" />
        <div className='trusted_title'>
            <h4>{title}</h4>
            <span>{location}</span>
        </div>
        <div className='trusted_photo'>
            <h3>4.5</h3>
            <img src={rasm} alt="" />
        </div>
      </div>
      <kbd>{text}</kbd>
    </div>
  )
}

export default TrustedCard
