import React from 'react'
import Arrow from "../images/arrow-up-outline.svg"

const ScrollUp = () => {
  return (
    <a href="#" class="scrollup" id="scroll-up">
        <img src={Arrow} alt="" />
        <ion-icon name="arrow-up-outline scroll-up_icon"></ion-icon>
  </a>
  )
}

export default ScrollUp