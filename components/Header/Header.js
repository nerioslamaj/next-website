import React from 'react'
import './Header.scss'

export const Header = ({ logo, items }) => {
  return (
    <header>
      <img src={logo.file.url} />
      <ul>
        {items.map((item) => {
          return (
            <li key={item.toLowerCase()}>
              <a href={item.toLowerCase()}>{item}</a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
