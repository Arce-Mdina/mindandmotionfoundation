'use client'

import React, { useEffect } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'

import AboutSection from './ui/AboutSection'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
  // display: 'swap',
});

const About = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('#heading1', {
      opacity: 0,
      duration:1,
      y:-20,
      scrollTrigger: {
        trigger: '#heading1',
        start: "top 50%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from('#text1', {
      opacity: 0,
      duration:1,
      x:-20,
      scrollTrigger: {
        trigger: '#text1',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from('#heading2', {
      opacity: 0,
      duration:1,
      y:-20,
      scrollTrigger: {
        trigger: '#heading2',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from('#text2', {
      opacity: 0,
      duration:1,
      x:-20,
      scrollTrigger: {
        trigger: '#text2',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from('#heading3', {
      opacity: 0,
      duration:1,
      y:-20,
      scrollTrigger: {
        trigger: '#heading3',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from('#text3', {
      opacity: 0,
      duration:1,
      x:-20,
      scrollTrigger: {
        trigger: '#text3',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })
  }, []) 
  
  return (
    <div id="about" className="flex flex-col justify-center items-center margin-[0 auto]">
      <h1 className={`${roboto.className} text-black bg-gray-200 mt-[50px] px-[20px] py-[12.3px] rounded-full text-[17px] dark:text-white dark:bg-gray-700`}>About us</h1>
      <AboutSection 
        heading="Chat with other members"
        headTag="heading1"
        text={
          <div>
            Our platform offers diverse communication channels. 
            Use general channels for everyday texts and quick messages, 
            or talk verbally to other members online!
          </div>
        }
        textTag='text1'
        image="/conversation.svg"
        imageSize={170}
        invert={true}
      />

      <AboutSection 
        heading="Have fun"
        headTag="heading2"
        text={
          <div>
            This community is designed so that you can relax
            and have fun! So be comfy and do not be afraid to speak!
            We are all supportive of each other.
          </div>
        }
        textTag='text2'
        image="/gaming.svg"
        imageSize={170}
        invert={true}
      />

      <AboutSection 
        heading="Our agenda"
        headTag="heading3"
        text={
          <div>
            In the short-term we would like to grow to at least 1,000 members on the discord.
            In the long-term we would like to make events to help more people. We would like to
            spread this project as far as it can so that we can aim for the skies.
          </div>
        }
        textTag='text3'
        image="/agenda.svg"
        imageSize={170}
        invert={true}
      />
    </div>
  )
}

export default About