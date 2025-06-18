import React from 'react'
import "./Hero.css"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
        <motion.div
          initial={{opacity: 0, x: -200}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          viewport={{once: true, amount: 0}}
        >
            <span>up to 50% off</span>
            <h1>the best apple watch series</h1>
            <button>shop collection</button>
        </motion.div> 
    </div>
  )
}

export default Hero