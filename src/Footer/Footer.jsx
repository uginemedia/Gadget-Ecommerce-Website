import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.png"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div className='footer'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2}}
      viewport={{once: true, amount: 0}}
    >
        <div className="footer-container">
        <a href='' className="footer-section brand">
          <img src={logo} />
        </a>

        <div className="footer-section">
          <ul>
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>SALE</li>
            <li>ARTICLES</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>TRACK ORDER</li>
            <li>RETURN POLICY</li>
            <li>SHIPPING</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>FACEBOOK</li>
            <li>INSTAGRAM</li>
            <li>TWITTER</li>
            <li>YOUTUBE</li>
            <li>PINTEREST</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <p>Do you have any queries?</p>
          <a href="mailto:youremailaddress@gmail.com">
            youremailaddress@gmail.com
          </a>
          <p>If you need support? Give us a call.</p>
          <p>+12 23 34 456 678</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © All rights reserved by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            U-GINE MEDIA
          </a>
        </p>
      </div>
    </motion.div>
  )
}

export default Footer