import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA11H58 from './WCAGARIA11H58'

const metaARIA11: Meta<typeof WCAGARIA11H58> = {
    component: WCAGARIA11H58,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGARIA11: Using ARIA landmarks to identify regions of
                        a page
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">
                                    1.3.1 Info and Relationships
                                </a>
                                ,{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose">
                                    1.3.6 Identify Purpose
                                </a>
                                ,{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks">
                                    2.4.1 Bypass Blocks
                                </a>{' '}
                                and{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">
                                    3.1.2 Language of Parts
                                </a>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                This component provides programmatic access to
                                sections of a web page by making use of the
                                WAI-ARIA landmark roles. It also allows you to
                                specify the human language your element uses if
                                it is different than the human language of your
                                web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;div lang="de" aria-label="description"&gt;
                                children &lt;/div&gt;
                            </code>{' '}
                            or
                            <br />
                            <code>
                                &lt;form lang="de" aria-label="description"&gt;
                                children &lt;/form&gt;
                            </code>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            <strong>
                                <i style={{ color: '#ff0000' }}>
                                    variable name
                                </i>{' '}
                                means that this variable is mandatory
                            </strong>
                        </p>
                        <p>
                            In order to use this component correctly, you need
                            to provide one of eight possible WAI-ARIA roles.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute{' '}
                            <strong style={{ color: '#ff0000' }}>
                                role: string
                            </strong>
                            :
                            <table
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
                                    borderSpacing: '15px 2px',
                                    padding: '2% 5%',
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <th
                                            style={{
                                                textAlign: 'left',
                                            }}
                                        >
                                            name
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>banner</td>
                                    </tr>
                                    <tr>
                                        <td>complementary</td>
                                    </tr>
                                    <tr>
                                        <td>contentinfo</td>
                                    </tr>
                                    <tr>
                                        <td>form</td>
                                    </tr>
                                    <tr>
                                        <td>main</td>
                                    </tr>
                                    <tr>
                                        <td>navigation</td>
                                    </tr>
                                    <tr>
                                        <td>region</td>
                                    </tr>
                                    <tr>
                                        <td>search</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            If you are selecting{' '}
                            <strong>role = 'search'</strong>, a form element is
                            returned. Otherwise, a div element is returned.
                        </p>
                        <p>
                            As this component renders either a simple div or
                            form element, you are also free to assign every
                            possible property of the div or form element to the
                            element of this component optionally. These
                            attributes can be applied to the{' '}
                            <strong>elementData</strong> object.
                        </p>
                        <p>
                            You can pass any element as a{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element: be it a string, another div element or a
                            completely different component.
                        </p>
                        <p>
                            If the human language of your child element is
                            different than the human language which is set for
                            your web page, you must set it to the correct human
                            language. For this you have to use the{' '}
                            <strong>lang.language: string</strong> variable
                            which accepts one of the{' '}
                            <a
                                href="https://www.w3schools.com/tags/ref_language_codes.asp"
                                target="_blank"
                            >
                                language codes defined in ISO 639-1
                            </a>
                            .
                        </p>
                        <p>
                            In order to connect the child element with its
                            container, you can either use the{' '}
                            <strong>ariaLabelledById</strong> or the{' '}
                            <strong>ariaLabel</strong> parameter. If you choose
                            the first option, you have to add an{' '}
                            <strong>ID attribute</strong> to your child element
                            which has the same value as the one inside the{' '}
                            <strong>ariaLabelledById</strong> variable. If you
                            choose the second option, the value inside the{' '}
                            <strong>ariaLabel</strong> parameter should be
                            descriptive enough to be able to describe your child
                            element.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>elementData</strong>{' '}
                            object.
                        </p>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object.
                            You can use the following WAI-ARIA attributes, but
                            without the 'aria-' prefix. But be careful: You
                            cannot use every WAI-ARIA attribute with every
                            WAI-ARIA role!
                            <table
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
                                    padding: '2% 5%',
                                    borderSpacing: '15px 2px',
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <th style={{ textAlign: 'left' }}>
                                            attribute
                                        </th>
                                        <th style={{ textAlign: 'left' }}>
                                            type
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>aria-atomic</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-busy</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-controls</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-current</td>
                                        <td>
                                            'page' | 'step' | 'location' |
                                            'date' | 'time' | 'true' | 'false' |
                                            true | false
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-describedby</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-description</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-details</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-flowto</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-hidden</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-keyshortcuts</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-live</td>
                                        <td>'assertive' | 'off' | 'polite'</td>
                                    </tr>
                                    <tr>
                                        <td>aria-owns</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-relevant</td>
                                        <td>
                                            'additions' | 'all' | 'removals' |
                                            'text' | 'additions text'
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-roledescription</td>
                                        <td>string</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11"
                                target="_blank"
                            >
                                You can find the full World Wide Web Consortium,
                                Inc. WCAG2.2 documentation for this success
                                criterion here.
                            </a>
                        </p>
                        <br />
                    </Subtitle>
                    <Stories />
                    <Controls />
                    <Source />
                </>
            ),
        },
    },
}

export default metaARIA11

type StoryARIA11 = StoryObj<typeof WCAGARIA11H58>

// WCAGNonTextComponentARIA11

export const AllRoles: StoryARIA11 = {
    render: () => (
        <>
            <WCAGARIA11H58 role="banner" ariaLabel="Banner">
                Banner
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="search" ariaLabel="Search">
                Search
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="navigation" ariaLabel="Navigation">
                Navigation
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="form" ariaLabel="Form">
                Form
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="main" ariaLabel="Main">
                Main
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="region" ariaLabel="Region">
                Region
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="complementary" ariaLabel="Complementary">
                Complementary
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="contentinfo" ariaLabel="Contentinfo">
                Contentinfo
            </WCAGARIA11H58>
        </>
    ),
}

export const AriaLabelledBy: StoryARIA11 = {
    render: () => (
        <>
            <WCAGARIA11H58
                role="navigation"
                ariaLabelledById="site-nav-heading"
            >
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
            </WCAGARIA11H58>
            <WCAGARIA11H58
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
            </WCAGARIA11H58>
        </>
    ),
}

export const AriaLabel: StoryARIA11 = {
    render: () => (
        <>
            <WCAGARIA11H58 role="navigation" ariaLabel="Home page navigation">
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
            </WCAGARIA11H58>
            <WCAGARIA11H58 role="navigation" ariaLabel="Home page tags">
                <ul>
                    <li>
                        <a href="...">tag 1</a>
                    </li>
                    <li>
                        <a href="...">tag 2</a>
                    </li>
                    <li>
                        <a href="...">tag 3</a>
                    </li>
                </ul>
            </WCAGARIA11H58>
        </>
    ),
}

export const Search: StoryARIA11 = {
    render: () => (
        <WCAGARIA11H58 role="search" ariaLabelledById="search-label">
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
                    placeholder="title, author or ISBN"
                    type="text"
                />
                <button type="submit">Find Books</button>
            </>
        </WCAGARIA11H58>
    ),
}

export const NoAriaLabelAndNoAriaLabelledById: StoryARIA11 = {
    render: () => (
        <WCAGARIA11H58 role="search">
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
        </WCAGARIA11H58>
    ),
}
