import React from 'react'
import '../style/contactInfo.css'

function ContactInfo() {
  return (
    <section className='contactInfo'>
      <div className="container">
        <h3>Say hello</h3>
        <p>Lorem Ipsum is simply dummy text of the printing .</p>
        <div className="contactInfo_wrapper">
          <div className="content_ikkita">
            <form className='contact_form'>
                <h5>First Name</h5>
                <input type="text" />
            </form>
            <form className='contact_form'>
                <h5>Last Name</h5>
                <input type="text" />
            </form>
          </div>
          <form className='contact_form3'>
            <h5>Email Address</h5>
            <input className='inputt3' type="text" />
          </form>
          <form className='contact_form4'>
            <h5>Message</h5>
            <input type="text" />
          </form>
          <div className='contact_btn'>
            <button>Get in touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
