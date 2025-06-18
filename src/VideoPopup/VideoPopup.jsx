import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef, useEffect } from 'react'
import "./VideoPopup.css"

//Framer Motion
import { motion } from 'framer-motion'

const VideoPopup = () => {
    const [openPopup, setOpenPopup] = useState(false);

    const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
        <motion.div className='video-popup'
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1.5}}
          viewport={{once: true, amount: 0}}
        >
            <button onClick={() => setOpenPopup(true)}><FontAwesomeIcon icon={faPlayCircle} /></button>
        </motion.div>
        {openPopup && <div className='popup-contianer'>
            <div ref={popupRef} className="popup">
                <iframe src="https://www.youtube.com/embed/MOKIi86cx8w?si=vh_skqSdofrrGVfh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> 
        </div>}
    </> 
    
  )
}

export default VideoPopup