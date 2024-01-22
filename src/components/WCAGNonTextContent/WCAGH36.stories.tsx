import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH36 from './WCAGH36'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA2H36: Meta<typeof WCAGH36> = {
    component: WCAGH36,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH36: Using alt attributes on images used as submit
                        buttons
                    </Title>
                    <Subtitle>
                        <strong>
                            This component adds an alt attribute to images which
                            is visually displayed when the image cannot be
                            loaded or is read aloud by assistive technology.
                        </strong>
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
                            to provide a descriptive value for the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                altText: string
                            </strong>{' '}
                            attribute.
                        </p>
                        <p>
                            You also have to specify a value for the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                src: string
                            </strong>{' '}
                            attribute which refers to the image.
                        </p>
                        <p>
                            Feel free to provide one of these possible WAI-ARIA
                            roles.
                        </p>
                        <div>
                            These are the available WAI-ARIA role parameters for
                            the optional attribute <strong>role: string</strong>
                            :
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
                                        <td>button</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>checkbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>gridcell</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>link</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>menuitem</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>menuitemcheckbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>menuitemradio</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>option</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>progressbar</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>radio</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>separator</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>slider</td>
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
                        <div>
                            As this component renders a simple input element,
                            you are also free to assign any of the following
                            properties of the input element to the input element
                            of this component optionally. These attributes can
                            be applied to the <strong>inputData</strong> object.
                            Because this is an input element, you are not able
                            to pass any child elements.
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
                                        <th
                                            style={{
                                                textAlign: 'left',
                                            }}
                                        >
                                            type
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>additionalStyling</td>
                                        <td>CSSProperties</td>
                                    </tr>
                                    <tr>
                                        <td>autocomplete</td>
                                        <td>'on' | 'off'</td>
                                    </tr>
                                    <tr>
                                        <td>autofocus</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>form</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>formaction</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>formenctype</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>formmethod</td>
                                        <td>'get' | 'post'</td>
                                    </tr>
                                    <tr>
                                        <td>formnovalidate</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>formtarget</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>height</td>
                                        <td>number | string</td>
                                    </tr>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>list</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>name</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>readonly</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>width</td>
                                        <td>number | string</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            You can also pass a function{' '}
                            <strong>onClickFunction: void</strong> optionally
                            which is triggered by an onClick event.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling</strong> variable inside
                            of the <strong>inputData</strong> object.
                        </p>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object.
                            You can use the following WAI-ARIA attributes, but
                            without the 'aria-' prefix: But be careful: You
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
                                        <td>aria-colindex</td>
                                        <td>number</td>
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
                                        <td>aria-label</td>
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
                                        <td>aria-posinset</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-pressed</td>
                                        <td>
                                            'false' | 'mixed' | 'true' |
                                            undefined | false | true
                                        </td>
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
                                    <tr>
                                        <td>aria-valuemax</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuemin</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuenow</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuetext</td>
                                        <td>string</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H36"
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

export default metaARIA2H36

type StoryARIA2H36 = StoryObj<typeof WCAGH36>

// WCAGNonTextComponentARIA2H36

export const ButtonImage: StoryARIA2H36 = {
    render: () => (
        <WCAGH36
            altText="Search button."
            src={starImage}
            role="button"
            inputData={{
                additionalStyling: { height: 50, width: 50 },
            }}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const LinkImage: StoryARIA2H36 = {
    render: () => (
        <WCAGH36
            altText="Go back to the main content."
            src={starImage}
            role="link"
            inputData={{
                additionalStyling: { height: 50, width: 50 },
            }}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const WrongAltText: StoryARIA2H36 = {
    render: () => (
        <WCAGH36
            altText=""
            src={starImage}
            role="button"
            inputData={{
                additionalStyling: { height: 50, width: 50 },
            }}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const WrongSrcAttribute: StoryARIA2H36 = {
    render: () => (
        <WCAGH36
            altText="Search button."
            src=""
            role="button"
            inputData={{
                additionalStyling: { height: 50, width: 50 },
            }}
            onClickFunction={() => console.log('click')}
        />
    ),
}
