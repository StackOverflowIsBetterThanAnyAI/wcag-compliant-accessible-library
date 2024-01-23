import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGG115H49A from './WCAGG115H49A'

const metaG115H49A: Meta<typeof WCAGG115H49A> = {
    component: WCAGG115H49A,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGG115: Using semantic elements to mark up structure
                        <br />
                        WCAGH49: Using semantic markup to mark emphasized or
                        special text
                    </Title>
                    <Subtitle>
                        <strong>
                            The goal of this component is to mark up the
                            structure of the web content using appropriate
                            semantic elements, in this case: the anchor element.
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>&lt;a&gt; child element &lt;/a&gt;</code>
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
                            to provide a value for the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                linkData.href: string
                            </strong>{' '}
                            parameter. Feel welcome to use any other global
                            anchor attribute with the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                linkData
                            </strong>{' '}
                            object.
                        </p>
                        <p>
                            If you want a custom function to be triggered when
                            the link is clicked, pass it to the{' '}
                            <strong>onClickFunction: () =&gt; void</strong>.
                        </p>
                        <p>
                            You can pass any{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element: be it a string, a div element or a whole
                            different component.
                        </p>
                        <div>
                            These are the available WAI-ARIA role parameters for
                            the attribute <strong>role: string</strong> which is
                            applied to the anchor element:
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
                                        <td>switch</td>
                                    </tr>
                                    <tr>
                                        <td>tab</td>
                                    </tr>
                                    <tr>
                                        <td>treeitem</td>
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
                                        <td>aria-checked</td>
                                        <td>
                                            'false' | 'true' | 'mixed' |
                                            undefined | false | true
                                        </td>
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
                                        <td>aria-errormessage</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-expanded</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-flowto</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-haspopup</td>
                                        <td>
                                            'false' | 'true' | 'menu' |
                                            'listbox' | 'tree' | 'grid' |
                                            'dialog' | false | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-hidden</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-invalid</td>
                                        <td>
                                            'grammar' | 'false' | 'spelling' |
                                            'true' | false | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-keyshortcuts</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-label</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-labelledby</td>
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
                                        <td>aria-posinset</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-readonly</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-relevant</td>
                                        <td>
                                            'additions' | 'all' | 'removals' |
                                            'text' | 'additions text'
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-required</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-roledescription</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-selected</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-setsize</td>
                                        <td>number</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H49"
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

export default metaG115H49A

type StoryG115H49A = StoryObj<typeof WCAGG115H49A>

// WCAGG115H49A

export const A: StoryG115H49A = {
    render: () => (
        <WCAGG115H49A linkData={{ href: '/' }}>Download now!</WCAGG115H49A>
    ),
}

export const AWithSpan: StoryG115H49A = {
    render: () => (
        <WCAGG115H49A linkData={{ href: '/' }}>
            <span>Download now!</span>
        </WCAGG115H49A>
    ),
}

export const WrongHref: StoryG115H49A = {
    render: () => (
        <WCAGG115H49A linkData={{ href: '' }}>Download now!</WCAGG115H49A>
    ),
}
