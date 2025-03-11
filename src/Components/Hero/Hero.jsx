import React from 'react'
import './Hero.css'
import dark_arrow from'../../assets/dark_arrow.png' 


function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Sustainable Energy for Rural Communities in Eastern Uganda</h1>
        <p>Bridging the energy gap with innovative solutions for agriculture, economic growth, and a sustainable future</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default Hero
