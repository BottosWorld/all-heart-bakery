import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2022 All Heart Bakery | All Rights Reserved
      </p>
      <p className='icons'>
        <AiFillFacebook/>
        <AiFillInstagram/>
      </p>
    </div>
  )
}

export default Footer