import React from 'react'
import './WorkingItem.scss'
import Router from 'next/router'

export const WorkingItem = props => {
  const { 
    title,
    subtitle,
    postId,
    image: {
      file
    }
  } = props

  return (
    <div className='PortfolioItem'>
      <div className='port-container'>
        <div className='port-info'>
          <div className='port-text'>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
          </div>
        </div>
        <div className='imazhi-child' style={{ backgroundImage: 'url(https:' + file.url + ')', width: 'unset' }} />
      </div>
      <a href={`/working/${postId}`}>GO HEREEEEE</a>
    </div>
  )
}

export default WorkingItem
