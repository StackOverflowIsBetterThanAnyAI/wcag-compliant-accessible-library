import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA6 from './WCAGARIA6'

const metaARIA6: Meta<typeof WCAGARIA6> = {
    component: WCAGARIA6,
}

export default metaARIA6

type StoryARIA6 = StoryObj<typeof WCAGARIA6>

// WCAGNonTextComponentARIA6

export const Alert: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="alert" ariaLabel="This is an alert!">
            Alert
        </WCAGARIA6>
    ),
}

export const Alertdialog: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="alertdialog" ariaLabel="This is an alertdialog!">
            Alertdialog
        </WCAGARIA6>
    ),
}

export const Application: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="application" ariaLabel="This is an application!">
            Application
        </WCAGARIA6>
    ),
}

export const Article: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="article" ariaLabel="This is an article!">
            Article
        </WCAGARIA6>
    ),
}

export const Banner: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="banner" ariaLabel="This is a banner!">
            Banner
        </WCAGARIA6>
    ),
}

export const Button: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="button" ariaLabel="This is a button!">
            Button
        </WCAGARIA6>
    ),
}

export const Cell: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="cell" ariaLabel="This is a cell!">
            Cell
        </WCAGARIA6>
    ),
}

export const Checkbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="checkbox" ariaLabel="This is a checkbox!">
            Checkbox
        </WCAGARIA6>
    ),
}

export const Columnheader: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="columnheader" ariaLabel="This is a columnheader!">
            Columnheader
        </WCAGARIA6>
    ),
}

export const Combobox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="combobox" ariaLabel="This is a combobox!">
            Combobox
        </WCAGARIA6>
    ),
}

export const Comment: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="comment" ariaLabel="This is a comment!">
            Comment
        </WCAGARIA6>
    ),
}

export const Complementary: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="complementary" ariaLabel="This is a complementary!">
            Complementary
        </WCAGARIA6>
    ),
}

export const Contentinfo: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="contentinfo" ariaLabel="This is a contentinfo!">
            ContentARIA6info
        </WCAGARIA6>
    ),
}

export const Definition: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="definition" ariaLabel="This is a definition!">
            Definition
        </WCAGARIA6>
    ),
}

export const Dialog: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="dialog" ariaLabel="This is a dialog!">
            Dialog
        </WCAGARIA6>
    ),
}

export const Document: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="document" ariaLabel="This is a document!">
            Document
        </WCAGARIA6>
    ),
}

export const Feed: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="feed" ariaLabel="This is a feed!">
            Feed
        </WCAGARIA6>
    ),
}

export const Form: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="form" ariaLabel="This is a form!">
            Form
        </WCAGARIA6>
    ),
}

export const Generic: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="generic" ariaLabel="This is a generic!">
            Generic
        </WCAGARIA6>
    ),
}

export const Grid: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="grid" ariaLabel="This is a grid!">
            Grid
        </WCAGARIA6>
    ),
}

export const Gridcell: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="gridcell" ariaLabel="This is a gridcell!">
            Gridcell
        </WCAGARIA6>
    ),
}

export const Group: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="group" ariaLabel="This is a group!">
            Group
        </WCAGARIA6>
    ),
}

export const Link: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="link" ariaLabel="This is a link!">
            Link
        </WCAGARIA6>
    ),
}

export const Listbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="listbox" ariaLabel="This is a listbox!">
            Listbox
        </WCAGARIA6>
    ),
}

export const Log: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="log" ariaLabel="This is a log!">
            Log
        </WCAGARIA6>
    ),
}

export const Main: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="main" ariaLabel="This is a main!">
            Main
        </WCAGARIA6>
    ),
}

export const Marquee: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="marquee" ariaLabel="This is a marquee!">
            Marquee
        </WCAGARIA6>
    ),
}

export const Math: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="math" ariaLabel="This is a math!">
            Math
        </WCAGARIA6>
    ),
}

export const Menu: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menu" ariaLabel="This is a menu!">
            Menu
        </WCAGARIA6>
    ),
}

export const Menubar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menubar" ariaLabel="This is a menubar!">
            Menubar
        </WCAGARIA6>
    ),
}

export const Menuitem: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menuitem" ariaLabel="This is a menuitem!">
            Menuitem
        </WCAGARIA6>
    ),
}

export const Menuitemcheckbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6
            role="menuitemcheckbox"
            ariaLabel="This is a menuitemcheckbox!"
        >
            Menuitemcheckbox
        </WCAGARIA6>
    ),
}

export const Menuitemradio: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="menuitemradio" ariaLabel="This is a menuitemradio!">
            Menuitemradio
        </WCAGARIA6>
    ),
}

export const Navigation: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="navigation" ariaLabel="This is a navigation!">
            Navigation
        </WCAGARIA6>
    ),
}

export const None: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="none" ariaLabel="This is a none!">
            None
        </WCAGARIA6>
    ),
}

export const Option: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="option" ariaLabel="This is an option!">
            Option
        </WCAGARIA6>
    ),
}

export const Presentation: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="presentation" ariaLabel="This is a presentation!">
            Presentation
        </WCAGARIA6>
    ),
}

export const Progressbar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="progressbar" ariaLabel="This is a progressbar!">
            Progressbar
        </WCAGARIA6>
    ),
}

export const Radio: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="radio" ariaLabel="This is a radio!">
            Radio
        </WCAGARIA6>
    ),
}

export const Radiogroup: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="radiogroup" ariaLabel="This is a radiogroup!">
            Radiogroup
        </WCAGARIA6>
    ),
}

export const Region: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="region" ariaLabel="This is a region!">
            Region
        </WCAGARIA6>
    ),
}

export const Row: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="row" ariaLabel="This is a row!">
            Row
        </WCAGARIA6>
    ),
}

export const Rowgroup: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="rowgroup" ariaLabel="This is a rowgroup!">
            Rowgroup
        </WCAGARIA6>
    ),
}

export const Rowheader: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="rowheader" ariaLabel="This is a rowheader!">
            Rowheader
        </WCAGARIA6>
    ),
}

export const Scrollbar: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="scrollbar" ariaLabel="This is a scrollbar!">
            Scrollbar
        </WCAGARIA6>
    ),
}

export const Search: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="search" ariaLabel="This is a search!">
            Search
        </WCAGARIA6>
    ),
}

export const Searchbox: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="searchbox" ariaLabel="This is a searchbox!">
            Searchbox
        </WCAGARIA6>
    ),
}

export const Separator: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="separator" ariaLabel="This is a separator!">
            Separator
        </WCAGARIA6>
    ),
}

export const Slider: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="slider" ariaLabel="This is a slider!">
            Slider
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
            Status
        </WCAGARIA6>
    ),
}

export const Suggestion: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="suggestion" ariaLabel="This is a suggestion!">
            Suggestion
        </WCAGARIA6>
    ),
}

export const Switch: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="switch" ariaLabel="This is a switch!">
            Switch
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
            Table
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
            Textbox
        </WCAGARIA6>
    ),
}

export const Timer: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="timer" ariaLabel="This is a timer!">
            Timer
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
            Tooltip
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
