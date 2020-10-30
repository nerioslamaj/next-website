import React from 'react'
import './WorkingItem.scss'

export const WorkingItem = ({ title, image, subtitle }) => {
  let { file } = image

  return (
    <div className="PortfolioItem">
      <div className="port-container">
        <div className="port-info">
          <div className="port-text">
            <h1 className="alt">{title}</h1>
            <h6>{subtitle}</h6>
          </div>
        </div>
        <div className="imazhi-child" style={{backgroundImage: 'url(https:' + file.url + ')', width: 'unset'}}></div>
      </div>
    </div>
  )
}

export default WorkingItem
