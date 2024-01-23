import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGG117H97H101 from './WCAGG117H97H101'

const metaG117H97H101: Meta<typeof WCAGG117H97H101> = {
    component: WCAGG117H97H101,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGG117: Using text to convey information that is
                        conveyed by variations in presentation of text
                        <br />
                        WCAGH97: Grouping related links using the nav element
                        <br />
                        H101: Using semantic HTML elements to identify regions
                        of a page
                    </Title>
                    <Subtitle>
                        <strong>
                            The goal of this component is to group navigation
                            links using the nav element. This also means that
                            programmatic access to sections of a web page is
                            provided by using a landmark role. Because this
                            component returns a list, there is also an option to
                            highlight recently added items in these lists.
                        </strong>
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
                                &emsp;&emsp;&emsp;&lt;a&gt;<em> link text </em>
                                &lt;/a&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;a&gt;<em> link text </em>
                                &lt;/a&gt;
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
                                listData.displayedName: ReactNode and
                                listData.href: string
                            </strong>
                            . If you mark an item as{' '}
                            <strong>new: boolean</strong>, it is visually and
                            programmatically hightlighted. But you should also
                            add something like '(new)' to the item.
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
                            These are the available WAI-ARIA role parameters for
                            the attribute <strong>role: string</strong> which is
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
                            <strong>additionalStyling</strong> object.
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
                                criteria here.
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

export default metaG117H97H101

type StoryG117H97H101 = StoryObj<typeof WCAGG117H97H101>

// WCAGNonTextComponentG117H97H101

export const AriaLabelledBy: StoryG117H97H101 = {
    render: () => (
        <WCAGG117H97H101
            ariaLabelledById="site-nav-heading"
            headline="Site"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather (new)', href: '/weather', new: true },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const AriaLabel: StoryG117H97H101 = {
    render: () => (
        <WCAGG117H97H101
            ariaLabel="Navigation"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather (new)', href: '/weather', new: true },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const Children: StoryG117H97H101 = {
    render: () => (
        <WCAGG117H97H101 ariaLabel="Navigation" listData={[]}>
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
        </WCAGG117H97H101>
    ),
}
