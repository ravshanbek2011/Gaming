import React from 'react'
import '../style/team.css'
import rasm1 from '../images/Team_img1.svg'
import rasm2 from '../images/Team_img2.svg'
import rasm3 from '../images/Team_img3.svg'
import rasm4 from '../images/Team_img4.svg'

function Team() {
  return (
    <section className='team'>
      <div className="container">
        <h2>Our Team</h2>
        <div className="team_grid">
            <div className="team_card">
                <img src={rasm1} alt="" />
                <h4>John peter</h4>
                <kbd>COO</kbd>
            </div>
            <div className="team_card">
                <img src={rasm2} alt="" />
                <h4>John peter</h4>
                <kbd>COO</kbd>
            </div>
            <div className="team_card">
                <img src={rasm3} alt="" />
                <h4>John peter</h4>
                <kbd>COO</kbd>
            </div>
            <div className="team_card">
                <img src={rasm4} alt="" />
                <h4>John peter</h4>
                <kbd>COO</kbd>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Team
