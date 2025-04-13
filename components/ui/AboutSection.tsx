import React, { FC, ReactNode } from 'react'

interface AboutSectionProps {
    children: ReactNode;
}

const AboutSection: FC<AboutSectionProps> = ({ children }) => {
  return (
    <div className="p-30">
        {children}
    </div>
  )
}

export default AboutSection