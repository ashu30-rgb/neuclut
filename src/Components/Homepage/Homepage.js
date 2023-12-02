import React, {useEffect} from 'react';
import logo from "../Assets/20231107_150953_0000.png";
import soon from "../Assets/1601a67a5a006c296bf97f1493ea439d-removebg-preview.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <div className='neu-home min-h-screen relative bg-black'>
        <img src={logo} alt="" className='absolute top-2 lg:top-4 left-2 lg:w-32 ' width={80} />
        <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1100' className='flex justify-center items-center w-full h-screen'>
        <img src={soon} alt="" />
        </div>
    </div>
    </>
  )
}

export default Homepage
