import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Shader from '../Shader/Shader'
import './Header.scss'

export const Header = props => {
  const handleMenuClick = page => {
    console.log(page)
  }

  const items = [
    'Working',
    'Writing',
    'Reading',
  ]

  return (
    <header>
      <Container>
        <div className='Inner-Menu'>
          { props.hideLogo ? <div></div> :
            <a href="/">
              <Shader />
            </a>
          }
          <ul>
            {items.map((item) => {
              return (
                <li key={item.toLowerCase()}>
                  <a className='NL-No-Txt-Dec' href={item.toLowerCase()} onClick={handleMenuClick(item.toLowerCase())}>{item}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header
