
import React from 'react'
import "./SwiperFunc.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';



const SwiperFunc = ({swiperTitle, imageSlides, content, swiperSubTitle, textSlides, paginationID}) => {

  return (
    <div className='swiper-container'>
      <motion.div className="swiper-title"
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true, amount: 0}}
      >
        {swiperTitle ? <>
        <h3>{swiperTitle}</h3>
        <button>Shop All</button>
        </> : <h3 className='review'>{swiperSubTitle}</h3>}
      </motion.div>
      {imageSlides && 
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        {...paginationID && {loop: true, autoplay: {delay: 2500, disableOnInteraction: false}, pagination: {enabled: true, clickable: true}}}
        // loop={true}
        // autoplay={{delay: 2500, disableOnInteraction: false}}
        
        //Responsiveness
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
        }}
      >

      {imageSlides.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.div className='image-slide'
              initial={{opacity: 0, y: 200}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6 * index}}
              viewport={{once: true, amount: 0}}
            >
              <img src={src} alt={`Slide ${index + 1}`} />
              <div className="slide-description">
                <span>Add To Cart <FontAwesomeIcon icon={faArrowRight} /> </span> <FontAwesomeIcon icon={faHeart} /><FontAwesomeIcon icon={faTimes} />
              </div>
              {content && content[index] && (
                <div className='image-content'>
                  <span>{content[index].range}</span>
                  <span>{content[index].price}</span>
                </div>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
    </Swiper>}

    {textSlides && 
    <div style={{width: "90%", margin: "0 auto"}}>
    <Swiper 
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{clickable: true}}

      //Responsiveness
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50
            },
            1024: {
              slidesPerView: 2,
            },
        }}
    >
      {textSlides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className='text-slide'>
              <p>{src.text}</p>
              <span>{src.author}</span>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>}
        
    </div>
  )
}

export default SwiperFunc