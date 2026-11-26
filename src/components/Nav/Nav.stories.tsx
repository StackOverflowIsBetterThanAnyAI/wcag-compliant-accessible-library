import type { Meta, StoryObj } from '@storybook/react-vite'

import { Nav, NavLink } from './Nav.js'

const meta = {
    title: 'Navigation/Nav',
    component: Nav,
    subcomponents: { NavLink },
    args: { className: 'demo-nav' },
} satisfies Meta<typeof Nav>

export default meta
type Story = StoryObj<typeof meta>

/** The current page is marked with `aria-current="page"`, which doubles as a styling hook. */
export const Main: Story = {
    args: {
        label: 'Main',
        children: (
            <>
                <NavLink href="#home" current>
                    Home
                </NavLink>
                <NavLink href="#blog">Blog</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="https://github.com" target="_blank">
                    GitHub
                </NavLink>
            </>
        ),
    },
}

/** Use `subnav` for hierarchical navigation: the links are nested lists inside the parent's list item. */
export const WithSubnav: Story = {
    args: {
        label: 'Documentation',
        className: 'demo-nav-tree',
        children: (
            <>
                <NavLink href="#intro">Introduction</NavLink>
                <NavLink
                    href="#components"
                    subnav={
                        <>
                            <NavLink href="#image">Image</NavLink>
                            <NavLink href="#field" current>
                                Field
                            </NavLink>
                            <NavLink href="#table">Table</NavLink>
                        </>
                    }
                >
                    Components
                </NavLink>
                <NavLink href="#changelog">Changelog</NavLink>
            </>
        ),
    },
}

/** Anything that is not a link goes into its own `<li>`, e.g. a language switcher. */
export const WithCustomItem: Story = {
    args: {
        label: 'Main',
        children: (
            <>
                <NavLink href="#home" current>
                    Home
                </NavLink>
                <NavLink href="#blog">Blog</NavLink>
                <li>
                    <button type="button" lang="de">
                        Deutsch
                    </button>
                </li>
            </>
        ),
    },
}
