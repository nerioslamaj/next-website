import React from 'react'
import { createContainer } from '../_fixtures/domManipulators'
import { Stars } from './Stars.jsx'

describe('Shader Component', () => {
  let render, container

  beforeEach(() => {
    ({ render, container } = createContainer())
  })

  it('renders the Stars parent <div>', () => {
    render(<Stars />)

    expect(container.querySelector('.Stars')).not.toBeNull()
  })

  it('renders the big Stars', () => {
    render(<Stars />)

    expect(container.querySelector('#stars')).not.toBeNull()
  })

  it('renders the medium Stars', () => {
    render(<Stars />)

    expect(container.querySelector('#stars2')).not.toBeNull()
  })

  it('renders the small Stars', () => {
    render(<Stars />)

    expect(container.querySelector('#stars3')).not.toBeNull()
  })
})
