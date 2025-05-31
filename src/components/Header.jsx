import React, { useRef } from 'react'
import logo from '../images/LOGO.svg'
import { NavLink } from 'react-router-dom'
import '../style/header.css'
import burger from '../images/Burger.svg'
import close from '../images/Close_btn.svg'

function Header() {
  let modal = useRef()
  function openModal() {
    modal.current.classList.add("show_modal")
    document.querySelector("body").classList.add("abs")
  }

  function closeModal() {
    modal.current.classList.remove("show_modal")
    document.querySelector("body").classList.remove("abs")

  }
  return (
    <header className='header'>
      <div ref={modal} className="modal">
        <img onClick={closeModal} width="40px" className='close_btn' src={close} alt="" />
        <ul className='modal_list'>
          <li><NavLink onClick={closeModal} to={"/"}>Home</NavLink></li>
          <li><NavLink onClick={closeModal} to={"/about"}>About us</NavLink></li>
          <li><NavLink onClick={closeModal} to={"/service"}>Portfolio</NavLink></li>
          <li><NavLink onClick={closeModal} to={"/new"}>News</NavLink></li>
          <button><NavLink onClick={closeModal} to={"/contact"}>Contact us</NavLink></button>
        </ul>
      </div>
      <div className="header_wrapper">
        <img src={logo} alt="" />
        <ul className='header_list'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About us</NavLink></li>
            <li><NavLink to={"/service"}>Portfolio</NavLink></li>
            <li><NavLink to={"/new"}>News</NavLink></li>
            <button><NavLink to={"/contact"}>Contact us</NavLink></button>
        </ul>
        <img onClick={openModal} className='burger' src={burger} alt="" />
      </div>
    </header>
  )
}

export default Header
