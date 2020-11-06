import React from 'react'
import './Button.scss'

const Button = props => {
  const click = () => {
    console.log('Button Clicked')
  }

  return (
    <span style={{ color: props.btnColor }} className='Button' onClick={click}>
      {props.btnText}
      <div style={{ backgroundColor: props.btnColor }} className='Button-Line' />
    </span>
  )
}

export default Button
