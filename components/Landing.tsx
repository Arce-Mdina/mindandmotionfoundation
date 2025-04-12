'use client'

import { useEffect } from 'react'
import Image from 'next/image';

import gsap from 'gsap'

import { FaDiscord, FaArrowDown } from "react-icons/fa";

import { scrollTo } from './utils/scrollTo';

const Landing = () => {

  useEffect(() => {
    gsap.from('#word', {
      opacity: 0,
      duration: 2,
      ease: "power1.out",  
      y: -20,
      stagger: 0.2,
      delay:0.5,
    })
  }, [])

  const scrollDown = () => {
    scrollTo("#about", { offset: 60, delay: 0 })
  }
  
    
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center text-center gradient1">
      <div className="cover"></div>

      

      {/* Header */}
      <div className="z-50">
        <div className="mb-[20px] flex justify-center items-center gap-[0.5rem] text-white uppercase text-[13px] tracking-wide">
          <Image 
            src="/favicon.png"
            width={20}
            height={20}
            alt="Logo"
          />

          The Gaming Foundation
        </div>

        <div className="w-[99vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]">
          <span className="text-[37px] font-[Audiowide] text-[white]" id="word">Flourishing</span> {" "}
          <span className="text-[37px] font-[Audiowide] text-[white]" id="word">through</span> {" "}
          <span className="text-[37px] font-[Audiowide] text-[#00E5FF]" id="word">connection</span> 
          <span className="text-[37px] font-[Audiowide] text-[white]" id="word">,</span>{" "}
          <span className="text-[37px] font-[Audiowide] text-[#00E5FF]" id="word">wellness</span> 
          <span className="text-[37px] font-[Audiowide] text-[white]" id="word">,</span>{" "}
          <span className="text-[37px] font-[Audiowide] text-[white]" id="word">and</span> {" "}
          <span className="text-[37px] font-[Audiowide] text-[#00E5FF]" id="word">gaming</span>
          <span className="text-[37px] font-[Audiowide] text-[white]" id="word">.</span>{" "}
        </div>

        <div className="mt-[20px] flex flex-row justify-center items-stretch gap-[1rem]">
          <button 
            onClick={scrollDown}
            className="hidden sm:flex items-center gap-[5px] text-[3xl] border border-gray-400 rounded-full px-7 cursor-pointer bg-[black] font-bold hover:border-black transition duration-300 ease-in-out text-gray-200 hover:text-black hover:bg-[white]"
          >
            {/* <FaDiscord className="w-[40px] h-[auto]"/> */}
            Learn more about our community <FaArrowDown />
          </button>

          <button 
            onClick={scrollDown}
            className="flex sm:hidden flex items-center gap-[5px] text-[3xl] border border-gray-400 rounded-full px-7 cursor-pointer bg-[black] font-bold hover:border-black transition duration-300 ease-in-out text-gray-200 hover:text-black hover:bg-[white]"
          >
            {/* <FaDiscord className="w-[40px] h-[auto]"/> */}
            Our community <FaArrowDown />
          </button>
          <a href="https://discord.gg/gVdDE8FQa7" className=" border border-gray-400 rounded-full p-2 cursor-pointer bg-[black] hover:border-white transition duration-[0.3s] text-gray-200 hover:text-white hover:bg-[#5765f2ff]">
            <FaDiscord className="text-[30px]"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing