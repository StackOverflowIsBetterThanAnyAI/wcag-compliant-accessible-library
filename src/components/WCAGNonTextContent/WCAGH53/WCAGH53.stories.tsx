import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH53 from './WCAGH53'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaH53: Meta<typeof WCAGH53> = {
    component: WCAGH53,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>WCAGH53: Using the body of the object element</Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">
                                    1.1.1 Non-text Content
                                </a>{' '}
                                ,{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded">
                                    1.2.3 Audio Description or Media Alternative
                                    (Prerecorded)
                                </a>{' '}
                                and{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded">
                                    1.2.8 Media Alternative (Prerecorded)
                                </a>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                This component returns an object element. It
                                also contains a child element with either a text
                                description or an element with an alt attribute
                                that describes the object element.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>&lt;object&gt; children &lt;/object&gt;</code>
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
                            In order to use this component properly, you must
                            save the data of your object element to be displayed
                            in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                objectData
                            </strong>{' '}
                            object. This object accepts all global attributes of
                            the object html element.
                        </p>
                        <div>
                            For even more accessibility you can also apply one
                            of the following available WAI-ARIA role values for
                            the attribute <strong>role: string</strong>:
                            <br />
                            Note: 'should be avoided' means that instead of
                            these roles you should always try to favour
                            semantically html-equivalent elements.
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
                                        <th style={{ textAlign: 'left' }}>
                                            information
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>application</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>document</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>img</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            You can pass any element as a{' '}
                            <strong>child: ReactNode</strong> element: be it a
                            string, another div element or a completely
                            different component. But don't forget that the child
                            element must either contain some text or an element
                            with an alt text.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>objectData</strong>{' '}
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
                                        <td>aria-activedescendant</td>
                                        <td>string</td>
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
                            These attributes can only be used if the{' '}
                            <strong>role: string</strong> is set to{' '}
                            <strong>application</strong>:
                            <div
                                style={{
                                    backgroundColor: '#e9e9e9',
                                }}
                            >
                                <ul>
                                    <li>aria-activedescendant</li>
                                    <li>aria-disabled</li>
                                    <li>aria-errormessage</li>
                                    <li>aria-expanded</li>
                                    <li>aria-haspopup</li>
                                    <li>aria-invalid</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H53"
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

export default metaH53

type StoryH53 = StoryObj<typeof WCAGH53>

// WCAGNonTextComponentH53

export const ObjectString: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }}>
            This is some text that describes the object.
        </WCAGH53>
    ),
}

export const ObjectWithClassIdAndParagraph: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }}>
            <p>This is some text that describes the object.</p>
        </WCAGH53>
    ),
}

export const ObjectWithClassIdAndAltText: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }} role="img">
            <img src={starImage} alt="A happy star." height={75} width={75} />
        </WCAGH53>
    ),
}

export const ImageThatHasNoAlt: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }} role="img">
            <img src={starImage} height={75} width={75} />
        </WCAGH53>
    ),
}

export const ImageThatHasNoAltButDescriptiveText: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }} role="img">
            <div>
                A happy star
                <br />
                <img src={starImage} height={75} width={75} />
            </div>
        </WCAGH53>
    ),
}

export const BooleanChild: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }} role="img">
            {false}
        </WCAGH53>
    ),
}
