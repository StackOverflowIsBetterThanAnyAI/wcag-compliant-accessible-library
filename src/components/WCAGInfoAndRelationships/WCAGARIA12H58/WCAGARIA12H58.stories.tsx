import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA12H58 from './WCAGARIA12H58'

const metaARIA12: Meta<typeof WCAGARIA12H58> = {
    component: WCAGARIA12H58,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGARIA12: Using role=heading to identify headings
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
                                </a>{' '}
                                and{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">
                                    3.1.2 Language of Parts
                                </a>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                This component adds a way for assistive
                                technologies to identify some content as a
                                heading. It also allows you to specify the human
                                language your element uses if it is different
                                than the human language of your web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;div ariaLevel="3" lang="de"&gt; child
                                element &lt;/div&gt;
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
                            to provide an integer value of at least 1 for{' '}
                            <strong style={{ color: '#ff0000' }}>
                                ariaLevel: number
                            </strong>
                            . This value specifies the hierarchy of the heading
                            and can be higher than the maximum value of 6 of the
                            meta headings h1 to h6.
                        </p>
                        <p>
                            You also must pass any text element as a{' '}
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
                            You cannot specify a custom WAI-ARIA role, because
                            for this component you must use the 'heading' role,
                            which is already set.
                        </p>
                        <p>
                            As this component renders a simple div element, you
                            are also free to assign every possible property of
                            the div element to the div element of this component
                            optionally. These attributes can be applied to the{' '}
                            <strong>divData</strong> object.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>divData</strong>{' '}
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12"
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

export default metaARIA12

type StoryARIA12 = StoryObj<typeof WCAGARIA12H58>

// WCAGNonTextComponentARIA12

export const HeadlinesOneToSeven: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12H58 ariaLevel={1}>Headline Level 1</WCAGARIA12H58>
            <WCAGARIA12H58 ariaLevel={2}>Headline Level 2</WCAGARIA12H58>
            <WCAGARIA12H58 ariaLevel={3}>Headline Level 3</WCAGARIA12H58>
            <WCAGARIA12H58 ariaLevel={4}>Headline Level 4</WCAGARIA12H58>
            <WCAGARIA12H58 ariaLevel={5}>Headline Level 5</WCAGARIA12H58>
            <WCAGARIA12H58 ariaLevel={6}>Headline Level 6</WCAGARIA12H58>
            <WCAGARIA12H58 ariaLevel={7}>Headline Level 7</WCAGARIA12H58>
        </>
    ),
}

export const NumberChild: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12H58 ariaLevel={1}>{25}</WCAGARIA12H58>
        </>
    ),
}

export const FloatValue: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12H58 ariaLevel={1.5}>Headline Level 1.5</WCAGARIA12H58>
        </>
    ),
}

export const ZeroValue: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12H58 ariaLevel={0}>Headline Level 0</WCAGARIA12H58>
        </>
    ),
}

export const NegativeValue: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12H58 ariaLevel={-1}>Headline Level 0</WCAGARIA12H58>
        </>
    ),
}

export const BooleanChild: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12H58 ariaLevel={1}>{false}</WCAGARIA12H58>
        </>
    ),
}
