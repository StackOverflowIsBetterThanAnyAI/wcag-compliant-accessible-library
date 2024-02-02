import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGG117H58H97H101 from './WCAGG117H58H97H101'

const metaG117H58H97H101: Meta<typeof WCAGG117H58H97H101> = {
    component: WCAGG117H58H97H101,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGG117: Using text to convey information that is
                        conveyed by variations in presentation of text
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                        <br />
                        WCAGH97: Grouping related links using the nav element
                        <br />
                        H101: Using semantic HTML elements to identify regions
                        of a page
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
                                The goal of this component is to group
                                navigation links using the nav element. This
                                also means that programmatic access to sections
                                of a web page is provided by using a landmark
                                role. Because this component returns a list,
                                there is also an option to highlight recently
                                added items in these lists. It also allows you
                                to specify the human language your element uses
                                if it is different than the human language of
                                your web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;nav&gt;
                                <br />
                                &emsp;&lt;ul&gt;
                                <br />
                                &emsp;&emsp;&lt;li&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;a href="link"
                                lang="de"&gt; displayedText &lt;/a&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;a href="link"
                                lang="de"&gt; displayedText &lt;/a&gt;
                                <br />
                                &emsp;&emsp;&lt;/li&gt;
                                <br />
                                &emsp;&lt;/ul&gt;
                                <br />
                                &lt;/nav&gt;
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
                            There is{' '}
                            <strong style={{ color: '#ff0000' }}>
                                no mandatory parameter
                            </strong>{' '}
                            for this component, but you either have to provide a{' '}
                            <strong>child: ReactNode</strong> element with an
                            unordered list (ul element) which contains clickable
                            links, or you specify your list data inside the{' '}
                            <strong>listData</strong> object array with its
                            mandatory parameters{' '}
                            <strong style={{ color: '#ff0000' }}>
                                listData.displayedText: ReactNode and
                                listData.href: string
                            </strong>
                            . If you mark an item as{' '}
                            <strong>new: boolean</strong>, it is visually and
                            programmatically hightlighted. But you should also
                            add something like '(new)' to the item.
                            <br />
                            If you set the target of your link to{' '}
                            <strong>_blank</strong> which means that the link is
                            opened in a new window, you should either add a
                            little bit of text to the{' '}
                            <strong>listData.displayedText</strong> variable
                            that explains that the link is opened in a new tab,
                            or add an alert that does the same. If you do so,
                            you automatically fulfil{' '}
                            <strong>
                                WCAGG201: Giving users advanced warning when
                                opening a new window
                            </strong>{' '}
                            which is an advisory technique for the success
                            criteria 3.2.1 On Focus and 3.2.2 On Input.
                        </p>
                        <p>
                            If the human language inside your html element is
                            different than the human language which is set for
                            your web page, you must set it to the correct human
                            language. For this you have to use the{' '}
                            <strong>lang.language: string</strong> variable
                            inside the <strong>listData</strong> object which
                            accepts one of the{' '}
                            <a
                                href="https://www.w3schools.com/tags/ref_language_codes.asp"
                                target="_blank"
                            >
                                language codes defined in ISO 639-1
                            </a>
                            .
                        </p>
                        <p>
                            If you provide a unique ID value for{' '}
                            <strong>ariaLabelledById: string</strong> and you
                            would like to have a <strong>h2 heading</strong>{' '}
                            above your list, you can also assign the heading
                            name to <strong>headline: string</strong>. Otherwise
                            you do not need to provide a value for{' '}
                            <strong>ariaLabelledById: string</strong>.
                        </p>
                        <p>
                            Instead, you can provide a descriptive text value
                            for <strong>ariaLabel: string</strong>, which will
                            be read aloud by assistve technologies.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> which is
                            applied to the nav element:
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
                                        <td>doc-index</td>
                                    </tr>
                                    <tr>
                                        <td>doc-pagelist</td>
                                    </tr>
                                    <tr>
                                        <td>doc-toc</td>
                                    </tr>
                                    <tr>
                                        <td>menu</td>
                                    </tr>
                                    <tr>
                                        <td>menubar</td>
                                    </tr>
                                    <tr>
                                        <td>presentation</td>
                                    </tr>
                                    <tr>
                                        <td>tablist</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
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
                                        <td>aria-disabled</td>
                                        <td>boolean</td>
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
                                        <td>aria-orientation</td>
                                        <td>
                                            'horizontal' | 'vertical' |
                                            undefined
                                        </td>
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H97"
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

export default metaG117H58H97H101

type StoryG117H58H97H101 = StoryObj<typeof WCAGG117H58H97H101>

// WCAGNonTextComponentG117H58H97H101

export const AriaLabelledBy: StoryG117H58H97H101 = {
    render: () => (
        <WCAGG117H58H97H101
            ariaLabelledById="site-nav-heading"
            headline="Site"
            listData={[
                { displayedText: 'News', href: '/news' },
                { displayedText: 'Weather (new)', href: '/weather', new: true },
                { displayedText: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const AriaLabel: StoryG117H58H97H101 = {
    render: () => (
        <WCAGG117H58H97H101
            ariaLabel="Navigation"
            listData={[
                { displayedText: 'News', href: '/news' },
                { displayedText: 'Weather (new)', href: '/weather', new: true },
                { displayedText: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const Children: StoryG117H58H97H101 = {
    render: () => (
        <WCAGG117H58H97H101 ariaLabel="Navigation">
            <ul>
                <li style={{ color: 'red' }}>
                    <a
                        aria-current="page"
                        href="/cars"
                        style={{ color: 'red' }}
                    >
                        Cars
                    </a>
                </li>
                <li style={{ color: 'yellow' }}>
                    <a href="/trucks" style={{ color: 'yellow' }}>
                        <strong>Trucks (new)</strong>
                    </a>
                </li>
                <li style={{ color: 'pink' }}>
                    <a href="/bikes" style={{ color: 'pink' }}>
                        Bikes
                    </a>
                </li>
            </ul>
        </WCAGG117H58H97H101>
    ),
}

export const WrongChildren: StoryG117H58H97H101 = {
    render: () => (
        <WCAGG117H58H97H101 ariaLabel="Navigation">
            <div>
                <a href="#">Bikes</a>
            </div>
        </WCAGG117H58H97H101>
    ),
}

export const WrongListDataItems: StoryG117H58H97H101 = {
    render: () => (
        <WCAGG117H58H97H101
            ariaLabel="Navigation"
            listData={[
                { displayedText: 187, href: '' },
                { displayedText: false, href: '', new: true },
                { displayedText: true, href: '' },
            ]}
        />
    ),
}

export const NoListDataAndNoChildren: StoryG117H58H97H101 = {
    render: () => <WCAGG117H58H97H101 ariaLabel="Navigation" />,
}
