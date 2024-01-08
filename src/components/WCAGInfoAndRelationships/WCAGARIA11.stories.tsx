import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA11 from './WCAGARIA11'

const metaARIA11: Meta<typeof WCAGARIA11> = {
    component: WCAGARIA11,
}

export default metaARIA11

type StoryARIA11 = StoryObj<typeof WCAGARIA11>

// WCAGNonTextComponentARIA11

export const AllRoles: StoryARIA11 = {
    render: () => (
        <>
            <WCAGARIA11 role="banner">Banner</WCAGARIA11>
            <WCAGARIA11 role="search">Search</WCAGARIA11>
            <WCAGARIA11 role="navigation">Navigation</WCAGARIA11>
            <WCAGARIA11 role="form">Form</WCAGARIA11>
            <WCAGARIA11 role="main">Main</WCAGARIA11>
            <WCAGARIA11 role="region">Region</WCAGARIA11>
            <WCAGARIA11 role="complementary">Complementary</WCAGARIA11>
            <WCAGARIA11 role="contentinfo">Contentinfo</WCAGARIA11>
        </>
    ),
}

export const AriaLabelledBy: StoryARIA11 = {
    render: () => (
        <>
            <WCAGARIA11 role="navigation" ariaLabelledById="site-nav-heading">
                <h2 id="site-nav-heading">Site</h2>
                <ul>
                    <li>
                        <a href="...">nav link 1</a>
                    </li>
                    <li>
                        <a href="...">nav link 2</a>
                    </li>
                    <li>
                        <a href="...">nav link 3</a>
                    </li>
                </ul>
            </WCAGARIA11>
            <WCAGARIA11
                role="navigation"
                ariaLabelledById="related-nav-heading"
            >
                <h2 id="related-nav-heading">Site</h2>
                <ul>
                    <li>
                        <a href="...">nav link 1</a>
                    </li>
                    <li>
                        <a href="...">nav link 2</a>
                    </li>
                    <li>
                        <a href="...">nav link 3</a>
                    </li>
                </ul>
            </WCAGARIA11>
        </>
    ),
}

export const AriaLabel: StoryARIA11 = {
    render: () => (
        <>
            <WCAGARIA11 role="navigation" ariaLabel="Site">
                <ul>
                    <li>
                        <a href="...">nav link 1</a>
                    </li>
                    <li>
                        <a href="...">nav link 2</a>
                    </li>
                    <li>
                        <a href="...">nav link 3</a>
                    </li>
                </ul>
            </WCAGARIA11>
            <WCAGARIA11 role="navigation" ariaLabelledById="Tags">
                <ul>
                    <li>
                        <a href="...">nav link 1</a>
                    </li>
                    <li>
                        <a href="...">nav link 2</a>
                    </li>
                    <li>
                        <a href="...">nav link 3</a>
                    </li>
                </ul>
            </WCAGARIA11>
        </>
    ),
}

export const Search: StoryARIA11 = {
    render: () => (
        <WCAGARIA11 role="search">
            <>
                <label
                    htmlFor="product-search"
                    id="search-label"
                    style={{ paddingRight: '2px' }}
                >
                    Search
                </label>
                <input
                    id="product-search"
                    placeholder="title, author, or ISBN"
                    type="text"
                />
                <button type="submit">Find Books</button>
            </>
        </WCAGARIA11>
    ),
}
