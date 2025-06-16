import React from 'react'
import "./Article.css"
import article1 from "../assets/article1.jpg"
import article2 from "../assets/article2.jpg"
import article3 from "../assets/article3.jpg"

//Framer Motion
import { motion } from 'framer-motion'

const Article = () => {
  return (
    <div className='articles'>
        <motion.div className="article-header"
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true, amount: 0}}
        >
            <h3>news articles</h3>
            <button>read all</button>
        </motion.div>
        <motion.div className="all-articles"
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true, amount: 0}}
        >
            <div className="article">
                <img src={article1} alt="" />
                <h4>best electric produce to buy this season</h4>
            </div>
            <div className="article">
                <img src={article2} alt="" />
                <h4>how to follow the trend budget list.</h4>
            </div>
            <div className="article">
                <img src={article3} alt="" />
                <h4>unique gadget to own by tech collectors.</h4>
            </div>
        </motion.div>
    </div>
  )
}

export default Article