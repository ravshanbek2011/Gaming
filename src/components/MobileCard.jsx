import React from 'react'
import rasm from '../images/Arrow_right.svg'

function MobileCard({photo, title}) {
  return (
    <div className='mobile_card'>
      <img src={photo} alt="" />
      <h4>{title}</h4>
      <img src={rasm} alt="" />
    </div>
  )
}

export default MobileCard
