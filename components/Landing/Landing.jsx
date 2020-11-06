import React from 'react';
import Shader from '../Shader/Shader.jsx';
import Button from '../Button/Button.jsx';
import MeNowModal from '../MeNowModal/MeNowModal.jsx';
import ScrollMouse from '../ScrollMouse/ScrollMouse.jsx';
import './Landing.scss';

export const Landing = () =>{
  return (
    <div className="Landing">
      <Shader />
      <div className="Intro-Block">
        <h1 className="Name-Surname">
          <span>N</span><span>e</span><span>r</span><span>i</span><span>o</span><span>s </span>
          <span>L</span><span>a</span><span>m</span><span>a</span><span>j</span>
        </h1>
        <h4>Front End Engineer</h4>
        <p>Creating Digital Products with passion</p>
        <div className="btn">
          <Button btnColor={'#f74f3f'} btnText={'Recent Update'} btnClick={'OPEN_MODAL'}></Button>
        </div>
      </div>
      <div style="display: none">
        <MeNowModal />
      </div>
      <ScrollMouse />
    </div>
  )
}

export default Landing
