import React from 'react'
import Button from '../Button/Button.jsx'
import './MeNowModal.scss'

const MeNowModal = () => {
  const modalLinkClick = (element) => {
    console.log(element)
  }

  return (
    <div className='MeNowModal'>
      <h1 className='alt'>Recent Update</h1>
      <h6>20th of June 2020</h6>
      <p>Working as a Frontend Engineer at <a onClick={(e) => modalLinkClick(e.target.textContent)} href='https://www.zavamed.com/uk'>Zava UK</a>, going for quick runs by the river and trying to learn more of AWS in <a href='https://acloud.guru/'>"A Cloud Guru"</a>.</p>
      <p>Currently reading <a onClick={(e) => modalLinkClick(e.target.textContent)} href='https://www.goodreads.com/book/show/67825.Peopleware'>"Peopleware: Productive Projects and Teams"</a> by Tom DeMarco.</p>
      <Button btnColor='#f74f3f' btnText='Close' btnClick='CLOSE_MODAL' />
    </div>
  )
}

export default MeNowModal
