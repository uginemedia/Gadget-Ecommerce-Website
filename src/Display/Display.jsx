import React from 'react'
import "./Display.css"

//Framer Motion
import { motion } from "framer-motion";

const Display = () => {
  return (
    <div className='display'>
        <motion.div 
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true, amount: 0.2}}
        >
            <div>
                <h2>deal of the day</h2>
                <span>up to 45% off on laptops</span>
                <button>shop now</button>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true, amount: 0}}
        >
            <div>
                <h2>the best selling</h2>
                <span>starting price from $100</span>
                <button>shop now</button>
            </div>
        </motion.div>
    </div>
  )
}

export default Display