import React from 'react'
import { createContainer } from '../_fixtures/domManipulators'
import { Footer } from './Footer'

describe('Footer Component', () => {
  let render, container

  beforeEach(() => {
    ({ render, container } = createContainer())
  })

  it('renders the <footer> tag', () => {
    render(<Footer />)

    expect(container.querySelector('footer')).not.toBeNull()
  })
})
