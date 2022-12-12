import React from 'react'
import BusuDark from "../images/busu-dark.png"
import BusuLight from "../images/busu-light.png"

const Header = () => {
  return (
    <header className="header" dataHeader>
    <div className="container">

      <a href="#" className="logo">
        <img src={BusuDark} width="64" height="24" alt="Büşra" />
      </a>

      <nav className="navbar" dataNavbar>

        <div className="navbar-top">
          <a href="#" className="logo">
            <img src={BusuLight} width="64" height="24" alt="Büşra" />
          </a>

          <button className="nav-close-btn" aria-label="close menu" dataNavToggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul className="navbar-list">

          <li>
            <a href="#" className="navbar-link">Home</a>
          </li>

          <li>
            <a href="#about" className="navbar-link">About</a>
          </li>

          <li>
            <a href="#project" className="navbar-link">Projects</a>
          </li>

          <li>
            <a href="#contact" className="navbar-link">Contact</a>
          </li>

        </ul>

        <div className="wrapper">
          <a href="mailto:info@email.com" className="contact-link">busraksici@gmail.com</a>

          <a href="tel:001234567890" className="contact-link">00 (123) 456 78 90</a>
        </div>

        <ul className="social-list">

          <li>
            <a href="https://www.linkedin.com/in/busra-kesici-1b000114b/" target="_blank" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://github.com/busrakesici" target="_blank" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/busraksici_/" target="_blank" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </nav>

      <button className="nav-open-btn" aria-label="open menu" dataNavToggler>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

      <div className="overlay" data-nav-toggler dataOverlay></div>

    </div>
  </header>

  )
}

export default Header