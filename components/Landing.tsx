'use client'

import { useEffect } from 'react'

import gsap from 'gsap'

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
  
    
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center text-center gradient1">
      {/* Header */}
      <div className="">
        <span className="text-4xl font-[Audiowide] text-[#1A237E]" id="word">Flourishing</span> {" "}
        <span className="text-4xl font-[Audiowide] text-[#1A237E]" id="word">through</span> {" "}
        <span className="text-4xl font-[Audiowide] text-[#00E5FF]" id="word">connection</span> 
        <span className="text-4xl font-[Audiowide] text-[#1A237E]" id="word">,</span>{" "}
        <span className="text-4xl font-[Audiowide] text-[#00E5FF]" id="word">wellness</span> 
        <span className="text-4xl font-[Audiowide] text-[#1A237E]" id="word">,</span>{" "}
        <span className="text-4xl font-[Audiowide] text-[#1A237E]" id="word">and</span> {" "}
        <span className="text-4xl font-[Audiowide] text-[#00E5FF]" id="word">gaming</span>
        <span className="text-4xl font-[Audiowide] text-[#1A237E]" id="word">.</span>{" "}
      </div>
    </div>
  )
}

export default Landing