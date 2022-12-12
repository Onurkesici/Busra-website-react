import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">

      <p className="copyright">
        © 2022 Webon. All rights reserved.
      </p>

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

    </div>
  </footer>

  )
}

export default Footer