import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/villegas0296/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/jaimevillegas" target='_blank'><BsGithub /></a>
      {/* <a href="http://dribbble.com" target='_blank'><BsDribbble /></a> */}
    </div>
  )
}

export default HeaderSocials