import React from 'react'
import { createContainer } from '../_fixtures/domManipulators'
import { Header } from './Header'

describe('Header Component', () => {
    let render, container
    const headerProps = {
        logo: { file: {url: 'urlToImg'} },
        items: ['Working', 'Writing', 'Reading', 'Listening']
    }

    beforeEach(() => {
        ({ render, container } = createContainer())
    });

    it('renders the logo image', () => {
        render(<Header { ...headerProps } />)

        expect(container.querySelector('img')).not.toBeNull()
    });

    it('renders the <header> tag', () => {
        render(<Header { ...headerProps } />)

        expect(container.querySelector('header')).not.toBeNull()
    });

    it('renders four <li> tags', () => {
        render(<Header { ...headerProps } />)

        expect(container.querySelector('ul').children).toHaveLength(4)
    });

    it('renders four <a> tags', () => {
        render(<Header { ...headerProps } />)

        expect(container.querySelectorAll('a')).toHaveLength(4)
    });

    it('creates lowercase hrefs', () => {
        render(<Header { ...headerProps } />)

        expect(container.querySelector('ul > li > a').href).toEqual('http://localhost/working')
    });
});
