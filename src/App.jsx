import {useState} from 'react';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {
  const [playState,setPlayState] =useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='OUR PROGRAM' title ='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title ='Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title ='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title ='Get In Touch'/>
        <Contact/>
        <Footer/>
       
      </div>
      <VideoPlayer playState ={playState} setPlayState ={setPlayState}/>
     
   
    </div>
  )
}

export default App
