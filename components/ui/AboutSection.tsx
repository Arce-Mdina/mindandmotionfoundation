import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  image: string;
  imageSize: number;
  heading: string;
  text: React.ReactNode;
  headTag: string;
  textTag: string;
  invert?: boolean; // New property to control inversion
}

const AboutSection: React.FC<AboutSectionProps> = ({ image, imageSize, heading, text, headTag, textTag, invert = false }) => {
  return (
    <div className="flex flex-col-reverse sm:grid items-stretch text-center p-[50px] w-[100%] mt-[10px] sm:w-[90%] sm:grid-cols-3 md:w-[80%]">
      <div className="text-center sm:text-left flex flex-col justify-center">
        <h1 id={headTag} className="mt-[30px] font-bold text-7xl font-[Italianno]">{heading}</h1>
        <div id={textTag} className="mt-[20px]">{text}</div>
      </div>

      <div className="hidden sm:flex justify-center">
        <div className="flex bg-gray-100 p-[2px] rounded-full h-full"></div>
      </div>
        
      <div className="flex justify-center items-center">
        <Image 
          src={image}
          width={imageSize}
          height={imageSize}
          alt="who we are"
          className={invert ? "dark:invert" : ""}
        />
      </div>
    </div>
  );
};

export default AboutSection;