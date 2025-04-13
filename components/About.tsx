'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'

import AboutSection from './ui/AboutSection'

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
      }
    })
  }, []) 
  
  return (
    <div id="about" className="flex flex-col justify-center items-center margin-[0 auto]">
      <AboutSection 
        heading="Who we are"
        headTag="heading1"
        text={
          <div>
            We are a group of 
          </div>
        }
        textTag='text1'
        image="/identity.svg"
        imageSize={150}
      />

      <AboutSection 
        heading="What we do"
        headTag="heading2"
        text={
          <div>
            We are a group of 
          </div>
        }
        textTag='text2'
        image="/work.svg"
        imageSize={150}
        invert={true}
      />
    </div>
  )
}

export default About