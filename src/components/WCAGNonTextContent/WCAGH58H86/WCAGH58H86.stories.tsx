//@ts-nocheck
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH58H86 from './WCAGH58H86'

const metaH86: Meta<typeof WCAGH58H86> = {
    component: WCAGH58H86,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                        <br />
                        WCAGH86: Providing text alternatives for emojis,
                        emoticons, ASCII art, and leetspeak
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">
                                    1.1.1 Non-text Content
                                </a>{' '}
                                and{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">
                                    3.1.2 Language of Parts
                                </a>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                This component adds an attribute that contains
                                an alternative text to either a div, span or
                                abbr element for any kind of emoji, emoticon,
                                ASCII art or leetspeak. It also allows you to
                                specify the human language this element uses if
                                it is different than the human language of your
                                web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;span aria-label="description" lang="de"&gt;
                                <em> emoji </em>
                                &lt;/span&gt;
                            </code>
                            <br />
                            or
                            <br />
                            <code>
                                &lt;div aria-label="description" lang="de"&gt;
                                <em> emoji </em>
                                &lt;/div&gt;
                            </code>
                            <br />
                            or
                            <br />
                            <code>
                                &lt;abbr title="description" lang="de"&gt;
                                <em> emoji </em>
                                &lt;/abbr&gt;
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
                            to provide the alternative text in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                accessibleText: string
                            </strong>{' '}
                            variable.
                        </p>
                        <p>
                            Furthermore, you must specify in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                element: 'span' | 'div' | 'abbr'
                            </strong>{' '}
                            parameter whether the returned element should be a
                            span, div or abbr element.
                        </p>
                        <div>
                            Feel free to apply the following available WAI-ARIA
                            role parameter for the attribute{' '}
                            <strong>role: string</strong> to mark your element
                            as an image:
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
                                        <td>img</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            As this component renders a simple span, div or abbr
                            element, you are also welcome to assign every
                            possible property of these global elements to the
                            element of this component optionally, eg.{' '}
                            <string>id: string</string>. These attributes can be
                            applied to the <strong>elementData</strong> object.
                        </p>
                        <p>
                            You can pass any string text as a mandatory{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: string
                            </strong>{' '}
                            element which has to contain the emoji, emoticon,
                            ASCII art or leetspeak.
                        </p>
                        <p>
                            If the human language of your{' '}
                            <strong style={{ color: '#ff0000' }}>child</strong>{' '}
                            element is different than the human language which
                            is set for your web page, you must set it to the
                            correct human language. For this you have to use the{' '}
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H86"
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

export default metaH86

type StoryH86 = StoryObj<typeof WCAGH58H86>

// WCAGNonTextComponentH86

export const TextWithSpan: StoryH86 = {
    render: () => (
        <WCAGH58H86 element="span" accessibleText="smile" role="img">
            :)
        </WCAGH58H86>
    ),
}

export const TextWithAbbr: StoryH86 = {
    render: () => (
        <WCAGH58H86 element="abbr" accessibleText="See you later!">
            CU l8r
        </WCAGH58H86>
    ),
}

export const TextWithDiv: StoryH86 = {
    render: () => (
        <WCAGH58H86 element="div" accessibleText="a sqaure" role="img">
            o o o o o o o
            <br />
            o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o
            <br />
            o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o
            <br />
            o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o
            <br />o o o o o o o
        </WCAGH58H86>
    ),
}

export const NoChildren: StoryH86 = {
    render: () => (
        <WCAGH58H86
            element="span"
            accessibleText="See you later!"
            role="img"
        ></WCAGH58H86>
    ),
}

export const WrongAccessibleText: StoryH86 = {
    render: () => (
        <WCAGH58H86 element="span" accessibleText="" role="img">
            :)
        </WCAGH58H86>
    ),
}
