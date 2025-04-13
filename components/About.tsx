'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'

const About = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('#heading1', {
      opacity: 0,
      duration:1,
      y:-20,
      scrollTrigger: {
        trigger: '#heading1',
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    })

    gsap.from('#text1', {
      opacity: 0,
      duration:1,
      x:-20,
      scrollTrigger: {
        trigger: '#text1',
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    })

    gsap.from('#heading2', {
      opacity: 0,
      duration:1,
      y:-20,
      scrollTrigger: {
        trigger: '#heading2',
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    })

    gsap.from('#text2', {
      opacity: 0,
      duration:1,
      x:-20,
      scrollTrigger: {
        trigger: '#text2',
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      }
    })
  }, [])
    

  return (
    <div id="about" className="flex flex-col justify-center items-center margin-[0 auto]">
      <div className="flex flex-col-reverse sm:grid items-stretch text-center p-[50px] m-[10px] w-[100%] sm:w-[90%] sm:grid-cols-3 md:w-[80%]">
        <div className="text-center sm:text-left flex flex-col justify-center">
          <h1 id="heading1" className="font-bold text-7xl font-[Italianno]">Who we are</h1>
          <div id="text1" className="mt-[20px]">adsfjasdlfja sdfl ja</div>
        </div>

        <div className="hidden sm:flex justify-center">
          <div className=" flex bg-gray-100 p-[2px] rounded-full h-full"></div>
        </div>
        
        <div className="flex justify-center items-center">
          <Image 
            src="/identity.svg"
            width={250}
            height={250}
            alt="who we are"
            // className="dark:invert"
          />
        </div>

        <div className="text-center sm:text-left flex flex-col justify-center">
          <h1 id="heading2" className="font-bold text-7xl font-[Italianno]">What we do</h1>
          <div id="text2" className="mt-[20px]">adsfjasdlfja sdfl ja</div>
        </div>

        <div className="hidden sm:flex justify-center">
          <div className=" flex bg-gray-100 p-[2px] rounded-full h-full"></div>
        </div>

        <div className="flex justify-center items-center">
          <Image 
            src="/work.svg"
            width={150}
            height={150}
            alt="who we are"
            className="dark:invert"
          />
        </div>
      </div>
    </div>
  )
}

export default About