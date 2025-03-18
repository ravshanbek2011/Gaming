import React from 'react'
import '../style/trusted.css'
import TrustedCard from './TrustedCard'
import rasm1 from '../images/Trusted_avatar1.svg'
import rasm2 from '../images/Trusted_avatar2.svg'
import rasm3 from '../images/Trusted_avatar3.svg'

function Trusred() {
  return (
    <section className='trusted'>
      <h2>Trusted by Thousands of <br /> Happy Customer</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.Lorem Ipsum is simply dummy .</p>
      <div className="trusted_wrapper">
        <TrustedCard avatar={rasm1} title="Viezh Robert" location="Warsaw, Poland" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
        <TrustedCard avatar={rasm2} title="Yessica Christy" location="Shanxi, China" text="Lorem Ipsum is simply dummy text of the printing and " />
        <TrustedCard avatar={rasm3} title="Kim Young Jou" location="Seoul, South Korea" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </div>
    </section>
  )
}

export default Trusred
