import React from 'react'
import './AboutText.scss'

const AboutText = () => {
  return (
    <div className='AboutText'>
      <h3>Software engineer, currently working at <a href='https://zalando.de' target='_blank'>Zalando</a> and living in <span>London</span> Berlin</h3>
      <h4>Ever Since I became fascinated with the power of technology, I’ve devoted my time to intertwining man and machine through interactive interfaces, design and new technologies of the web.</h4>
      <h4 className='last'>I foster productivity in a collaborative environment that meets the requirements of engineers and creatives at the same time. I can work on anything related to web apps, but if I had to choose I’d rather focus on frontend technologies.</h4>
    </div>
  )
}

export default AboutText
