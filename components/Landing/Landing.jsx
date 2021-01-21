import React from 'react'
import Shader from '../Shader/Shader'
import AboutText from '../AboutText/AboutText'
import MeNowModal from '../MeNowModal/MeNowModal'
import ScrollMouse from '../ScrollMouse/ScrollMouse'
import './Landing.scss'

export const Landing = () => {
  return (
    <div className='Landing'>
      <Shader />
      <div className='Intro-Block'>
        <h1 className='Name-Surname'>
          <span>N</span><span>e</span><span>r</span><span>i</span><span>o</span><span>s </span>
          <span>L</span><span>a</span><span>m</span><span>a</span><span>j</span>
        </h1>
        <p>Software Engineer</p>
        <h4>Creating digital products with passion</h4>
        <AboutText />
      </div>
      <ScrollMouse />
    </div>
  )
}

export default Landing
