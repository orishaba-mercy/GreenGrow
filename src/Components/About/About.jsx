import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.png'
import play_icon from '../../assets/play_icon.png'


function About({setPlayState}) {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className="about-right">
            <h3>ABOUT THE FARM</h3>
            <h2>Nurturing Tomorrows Leaders Today</h2>
            <p>Brief introduction to the company and its mission to provide <br /> reliable and affordable energy to rural communities in Eastern Uganda.Highlight the hybrid approach of combining fossil and renewable energy for sustainability.</p>
            <p>To enhance access to reliable and affordable energy in rural communities in Eastern Uganda, <br />fostering agricultural production, economic growth, and improved quality of life while <br /> balancing environmental sustainability.

</p>

        </div>
      
    </div>
  )
}

export default About
