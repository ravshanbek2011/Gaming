import React from 'react'
import '../style/input.css'
import { NavLink } from 'react-router-dom'

function Input() {
  return (
    <section className='input'>
      <div className="container">
        <h3>Lorem Ipsum</h3>
        <p className='input_text1'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </p>
        <div className="input_wrapper">
            <div className="input_content">
                <h2>Stay in the loop</h2>
                <p className='input_text'>Subscribe to receive the latest news and updates about TDA. <br />
                We promise not to spam you! </p>
            </div>
            <form className='form'>
                <input placeholder='Enter email address' />
                <NavLink to="https://yandex.uz/games"><button>Continue</button></NavLink>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Input
