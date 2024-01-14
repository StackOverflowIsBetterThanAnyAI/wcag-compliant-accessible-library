import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA6 from './WCAGARIA6'

const metaARIA6: Meta<typeof WCAGARIA6> = {
    title: 'WCAGARIA6',
    component: WCAGARIA6,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>
                        You can find the WCAG2.2 documentation for this success
                        criteria{' '}
                        <a
                            href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6"
                            target="_blank"
                        >
                            here.
                        </a>
                    </Subtitle>
                    <Stories />
                    <Controls />
                    <Source />
                </>
            ),
        },
    },
}

export default metaARIA6

type StoryARIA6 = StoryObj<typeof WCAGARIA6>

// WCAGNonTextComponentARIA6

export const Alert: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="alert" ariaLabel="This is an alert!">
            <span>Watch out. This in an alert!</span>
        </WCAGARIA6>
    ),
}

export const Alertdialog: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="alertdialog" ariaLabel="This is an alertdialog!">
            <>
                <h2>Your login session is about to expire.</h2>
                <p>To extend your session, click the OK button.</p>
                <button>OK</button>
            </>
        </WCAGARIA6>
    ),
}

export const Application: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="application" ariaLabel="This is an application!">
            This is now a Desktop Application!
        </WCAGARIA6>
    ),
}

export const Article: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="article" ariaLabel="This is an article!">
            <>
                <h2>Heading of the article</h2>
                <p>Paragraph for the article.</p>
            </>
        </WCAGARIA6>
    ),
}

export const Banner: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="banner" ariaLabel="This is a banner!">
            <>
                <a href="#">Skip to the main content</a>
                <h1>Headline</h1>
                <p>A bit of text inside of a paragraph.</p>
            </>
        </WCAGARIA6>
    ),
}

export const Button: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="button" ariaLabel="This is a button!">
            Search
        </WCAGARIA6>
    ),
}

export const Cell: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="cell" ariaLabel="This is a cell!">
            1.25$
        </WCAGARIA6>
    ),
}

export const Checkbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="checkbox" ariaLabel="This is a checkbox!">
            <input type="checkbox" id="input" />
            <label htmlFor="input">Allow Cookies</label>
        </WCAGARIA6>
    ),
}

export const Columnheader: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="columnheader" ariaLabel="This is a columnheader!">
            Profession
        </WCAGARIA6>
    ),
}

export const Combobox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="combobox" ariaLabel="This is a combobox!">
            <>
                <li role="option">Menu A</li>
                <li role="option">Menu B</li>
                <li role="option">Menu C</li>
                <li role="option">Menu D</li>
            </>
        </WCAGARIA6>
    ),
}

export const Comment: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="comment" ariaLabel="This is a comment!">
            I really like your point!
        </WCAGARIA6>
    ),
}

export const Complementary: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="complementary" ariaLabel="This is a complementary!">
            <>
                <h2>That's our sponsors</h2>
                <ul>
                    <li>Brand A</li>
                    <li>Brand B</li>
                    <li>Brand C</li>
                </ul>
            </>
        </WCAGARIA6>
    ),
}

export const Contentinfo: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="contentinfo" ariaLabel="This is a contentinfo!">
            <h2>Footer</h2>
        </WCAGARIA6>
    ),
}

export const Definition: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="definition" ariaLabel="This is a definition!">
            'x' stands for 'abc'
        </WCAGARIA6>
    ),
}

export const Dialog: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="dialog" ariaLabel="This is a dialog!">
            The settings have successfully been applied.
        </WCAGARIA6>
    ),
}

export const Document: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="document" ariaLabel="This is a document!">
            <h3>The story of Jeff</h3>
        </WCAGARIA6>
    ),
}

export const Feed: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="feed" ariaLabel="This is a feed!">
            The latest news ...
        </WCAGARIA6>
    ),
}

export const Form: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="form" ariaLabel="This is a form!">
            <div>Did you enjoy the show?</div>
        </WCAGARIA6>
    ),
}

export const Grid: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="grid" ariaLabel="This is a grid!">
            Imagine a huge grid.
        </WCAGARIA6>
    ),
}

export const Gridcell: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="gridcell" ariaLabel="This is a gridcell!">
            Football
        </WCAGARIA6>
    ),
}

export const Group: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="group" ariaLabel="This is a group!">
            <div>Car</div>
            <div>Bus</div>
        </WCAGARIA6>
    ),
}

export const Link: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="link" ariaLabel="This is a link!">
            If you use a link like this, you still have to add some styling.
        </WCAGARIA6>
    ),
}

export const Listbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="listbox" ariaLabel="This is a listbox!">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </WCAGARIA6>
    ),
}

export const Log: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="log" ariaLabel="This is a log!">
            Latest news ...
        </WCAGARIA6>
    ),
}

export const Main: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="main" ariaLabel="This is a main!">
            <h1>This is us</h1>
        </WCAGARIA6>
    ),
}

export const Marquee: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="marquee" ariaLabel="This is a marquee!">
            My content changes frequently...
        </WCAGARIA6>
    ),
}

export const Math: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="math" ariaLabel="This is a math!">
            a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
        </WCAGARIA6>
    ),
}

export const Menu: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menu" ariaLabel="This is a menu!">
            Select any option from this menu:
        </WCAGARIA6>
    ),
}

export const Menubar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menubar" ariaLabel="This is a menubar!">
            Select any option from this menubar:
        </WCAGARIA6>
    ),
}

export const Menuitem: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menuitem" ariaLabel="This is a menuitem!">
            Home
        </WCAGARIA6>
    ),
}

export const Menuitemcheckbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6
            role="menuitemcheckbox"
            ariaLabel="This is a menuitemcheckbox!"
        >
            Checkbox
        </WCAGARIA6>
    ),
}

export const Menuitemradio: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menuitemradio" ariaLabel="This is a menuitemradio!">
            Active?
        </WCAGARIA6>
    ),
}

export const Navigation: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="navigation" ariaLabel="This is a navigation!">
            <ul>
                <li>
                    <a href="#">Link A</a>
                </li>
                <li>
                    <a href="#">Link B</a>
                </li>
                <li>
                    <a href="#">Link C</a>
                </li>
            </ul>
        </WCAGARIA6>
    ),
}

export const Option: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="option" ariaLabel="This is an option!">
            Option A
        </WCAGARIA6>
    ),
}

export const Progressbar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="progressbar" ariaLabel="This is a progressbar!">
            75%
        </WCAGARIA6>
    ),
}

export const Radio: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="radio" ariaLabel="This is a radio!">
            Active?
        </WCAGARIA6>
    ),
}

export const Radiogroup: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="radiogroup" ariaLabel="This is a radiogroup!">
            I contain a group of radio elements.
        </WCAGARIA6>
    ),
}

export const Region: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="region" ariaLabel="This is a region!">
            <h3>Imprint</h3>
        </WCAGARIA6>
    ),
}

export const Row: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="row" ariaLabel="This is a row!">
            country name
        </WCAGARIA6>
    ),
}

export const Rowgroup: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="rowgroup" ariaLabel="This is a rowgroup!">
            country name
        </WCAGARIA6>
    ),
}

export const Rowheader: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="rowheader" ariaLabel="This is a rowheader!">
            Europe
        </WCAGARIA6>
    ),
}

export const Scrollbar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="scrollbar" ariaLabel="This is a scrollbar!">
            Call me scrollabr!
        </WCAGARIA6>
    ),
}

export const Search: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="search" ariaLabel="This is a search!">
            <label htmlFor="search-input">Search for an item</label>
            <input type="search" id="search-input" name="search" />
            <input value="Submit" type="submit" />
        </WCAGARIA6>
    ),
}

export const Searchbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="searchbox" ariaLabel="This is a searchbox!">
            <input type="search" role="searchbox" id="search" value="" />
            Search
        </WCAGARIA6>
    ),
}

export const Separator: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="separator" ariaLabel="This is a separator!">
            The following content is not related to the previous one.
        </WCAGARIA6>
    ),
}

export const Slider: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="slider" ariaLabel="This is a slider!">
            Temperature
        </WCAGARIA6>
    ),
}

export const Spinbutton: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="spinbutton" ariaLabel="This is a spinbutton!">
            Spinbutton
        </WCAGARIA6>
    ),
}

export const Status: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="status" ariaLabel="This is a status!">
            Waiting for update...
        </WCAGARIA6>
    ),
}

export const Switch: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="switch" ariaLabel="This is a switch!">
            off
        </WCAGARIA6>
    ),
}

export const Tab: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="tab" ariaLabel="This is a tab!">
            Tab
        </WCAGARIA6>
    ),
}

export const Table: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="table" ariaLabel="This is a table!">
            Country names
        </WCAGARIA6>
    ),
}

export const Tablist: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="tablist" ariaLabel="This is a tablist!">
            Tablist
        </WCAGARIA6>
    ),
}

export const Tabpanel: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="tabpanel" ariaLabel="This is a tabpanel!">
            Tabpanel
        </WCAGARIA6>
    ),
}

export const Textbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="textbox" ariaLabel="This is a textbox!">
            Enter your name.
        </WCAGARIA6>
    ),
}

export const Timer: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="timer" ariaLabel="This is a timer!">
            0
        </WCAGARIA6>
    ),
}

export const Toolbar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="toolbar" ariaLabel="This is a toolbar!">
            Toolbar
        </WCAGARIA6>
    ),
}

export const Tooltip: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="tooltip" ariaLabel="This is a tooltip!">
            You may only use numbers between 1 and 3.
        </WCAGARIA6>
    ),
}

export const Treegrid: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="treegrid" ariaLabel="This is a treegrid!">
            Treegrid
        </WCAGARIA6>
    ),
}
