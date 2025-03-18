import React from 'react'
import '../style/video.css'
import rasm1 from '../images/Video_true.svg'

function Video() {
  return (
    <section className='video'>
      <div className="container">
        <div className="video_wrapper">
            <div className="video_card">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DPKBjVhLHIE?si=hkQrJAI4UIZ7EKSl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="video_content">
                <h2>Lorem Ipsum is simply dummy text.</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
                <div>
                    <img src={rasm1} alt="" />
                    <kbd>Lorem Ipsum is simply</kbd>
                </div>
                <div>
                    <img src={rasm1} alt="" />
                    <kbd>Lorem Ipsum is simply</kbd>
                </div>
                <div>
                    <img src={rasm1} alt="" />
                    <kbd>Lorem Ipsum is simply</kbd>
                </div>
                <div>
                    <img src={rasm1} alt="" />
                    <kbd>Lorem Ipsum is simply</kbd>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Video
