import React, { useEffect } from 'react'
import './Header.scss'

export const Header = ({ logo, items }) => {

  const handleMenuClick = page => {
    console.log(page)
  }

  return (
    <header className="NL-Row ">
      <div className="NL-Container inner-menu">
        <img className="Logo" src={logo.file.url} />
        <ul>
          {items.map((item) => {
            return (
              <li key={item.toLowerCase()}>
                <a href={item.toLowerCase()} onClick={handleMenuClick(item.toLowerCase())}>{item}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
