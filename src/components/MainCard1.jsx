import React from 'react'

function MainCard1({photo, text}) {
  return (
    <div className='main_card1'>
      <img src={photo} alt="" />
      <div className='mainCard_title'>
        <button>John smash</button>
        <span>.5min</span>
      </div>
      <h2>Lorem Ipsum is simply dummy text dummy text </h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      <kbd>{text}</kbd>
    </div>
  )
}

export default MainCard1
