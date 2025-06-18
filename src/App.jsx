import React from 'react'
import Navbar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Display from './Display/Display'
import SwiperFunc from './Swiper/SwiperFunc'
import item1 from "./assets/item1.jpg"
import item2 from "./assets/item2.jpg"
import item3 from "./assets/item3.jpg"
import item4 from "./assets/item4.jpg"
import item5 from "./assets/item5.jpg"
import VideoPopup from './VideoPopup/VideoPopup'
import Article from './Article/Article'
import Footer from './Footer/Footer'

//Framer Motion
import { motion } from 'framer-motion'


const App = () => {

    const slides = [item1, item2, item3, item4, item5];
    const slideContent = [
      {range: "product one", price: "$22.00"},
      {range: "product two", price: "$50.00"},
      {range: "product trhee", price: "$12.00"},
      {range: "product four", price: "$220.00"},
      {range: "product five", price: "$100.00"},
    ]
    const reviews = [
      {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam libero odit dignissimos magni explicabo!", author: "John Doe"},
      {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam libero odit dignissimos magni explicabo!", author: "Williams Jack"},
      {text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam libero odit dignissimos magni explicabo!", author: "Nicholas Anderson"},
      
    ]

  return <>
    <Navbar />
    <Hero />
    <Display />
    <SwiperFunc swiperTitle="New Arrival Items" imageSlides={slides} content={slideContent} />
    <SwiperFunc swiperSubTitle="Customer's review" textSlides={reviews} />
    <VideoPopup />
    <SwiperFunc swiperTitle="Best-selling Items" imageSlides={slides} content={slideContent} paginationID={true} />
    <Article />
    <motion.div className="news-letter"
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1.5}}
      viewport={{once: true, amount: 0}}
    >
      <h3>subscribe us</h3>
      <div><input type='text' placeholder='Write your email address here...' /><button>Subscribe</button></div>
    </motion.div>
    <Footer />
  </>
}

export default App