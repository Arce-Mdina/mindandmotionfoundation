import React from 'react'

const About = () => {
  return (
    <div>
        <div id="about">
      {[...Array(50)].map((_, i) => (
                <p key={i}>Content line {i + 1}</p>
              ))}
      </div>
    </div>
  )
}

export default About