import React from 'react'
import { createContainer } from '../_fixtures/domManipulators'
import { Shader } from './Shader'

describe('Shader Component', () => {
  let render, container

  beforeEach(() => {
    ({ render, container } = createContainer())
  })

  it('renders the canvas shader parent', () => {
    render(<Shader />)

    expect(container.querySelector('#shaderParent')).not.toBeNull()
  })
})
