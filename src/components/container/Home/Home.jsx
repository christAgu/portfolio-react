import React from 'react'
import portfolio from "../../../assets/CHRIS2 (1).jpg"
import "./Home.scss"
import { motion } from 'framer-motion'
import Cvchris from "../../../pdf/Cvchris.pdf";


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>AGUEH<span> Christvit</span> </h3>
        <span className='job'>Devellopeur Frontend | Angular</span>
        <h1 className='text'>Mon plus grand atout c'est mon envie constant d'apprendre. <br />J'aime faire partir de la solution et je ne me lasse jamais d'essayer <br />
       <br /></h1>
        <motion.a
          href = {Cvchris} target = "_blank"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Mon cv</motion.a>
       
      </div>
    </motion.div>
  )
}

export default Home