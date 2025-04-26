import React from 'react'

import { DM_Serif_Text } from 'next/font/google'

const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  // display: 'swap',
});

const Mission = () => {
  return (
    <>
      <div id="mission" className="w-full bg-gray-100 py-10 flex flex-col justify-center items-center dark:bg-[#575757]">
        <h1 className={`${dmSerifText.className} text-5xl p-5`}>Our mission</h1>
        <div className="relative flex flex-col justify-center items-center mx-auto p-8 w-[85vw] sm:w-[70vw]">
          {/* Top left SVG replaced with CSS masking */}
          <div
            className="absolute top-0 left-0 h-12 w-12 z-0"
            style={{
              backgroundColor: 'rgba(0, 211, 211, 0.51)',
              mask: "url(/quotation-left.svg) no-repeat center / contain",
              WebkitMask: "url(/quotation-left.svg) no-repeat center / contain"
            }}
          />

          {/* Bottom right SVG replaced with CSS masking */}
          <div
            className="absolute bottom-0 right-0 h-12 w-12 z-0"
            style={{
              backgroundColor: 'rgba(211, 197, 0, 0.51)',
              mask: "url(/quotation-right.svg) no-repeat center / contain",
              WebkitMask: "url(/quotation-right.svg) no-repeat center / contain"
            }}
          />

          {/* Quotation text */}
          <blockquote className="z-10 max-w-3xl mx-auto text-center text-xl font-serif italic text-gray-800 dark:text-gray-100">
            With this community we want to bring together people to improve mental and physical health. We hope that
            we can help people and inspire people to be better every day. We want to grow a community in which
            people are supportive and can help others.
          </blockquote>
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-left">Mark Wijn</div>
          <div className="font-bold text-left text-gray-500 dark:text-gray-300">Founding Member</div>
        </div>
      </div>

      <div className="ctaGradient w-full flex justify-center items-center m-[0 auto]">
        <div className="gradiengBG w-[100%] sm:w-[70%] md:w-[50%] rounded-lg  font-bold p-7 text-center text-black z-2">
          We hope to help more people every day. If we can help 1 person out of a billion that would
          be awesome. We hope to keep improving oursevels and our community.

          <br></br>
          <br></br>

          Help us and join the community!
        </div>
      </div>
    </>
  )
}

export default Mission