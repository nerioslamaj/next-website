import React from 'react'
import { createContainer } from '../_fixtures/domManipulators'
import { ScrollMouse } from './ScrollMouse.jsx'

describe('Shader Component', () => {
  let render, container

  beforeEach(() => {
    ({ render, container } = createContainer())
  })

  it('renders the correct <a> tag', () => {
    render(<ScrollMouse />)

    expect(container.querySelector('a')).not.toBeNull()
    expect(container.querySelector('a').href).toEqual('http://localhost/#about')
  })
})
