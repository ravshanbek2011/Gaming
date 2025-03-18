import React from 'react'

function BannerCard({photo}) {
  return (
    <div className='banner_card'>
      <div className="bannerCard_text">
        <h2>Lorem Ipsum is simply dummy 
        text dummy text </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <kbd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </kbd>
        <button>Read more</button>
      </div>
      <img src={photo} alt="" />
    </div>
  )
}

export default BannerCard
