import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH2 from './WCAGH2'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH2: Meta<typeof WCAGH2> = {
    component: WCAGH2,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH2: Combining adjacent image and text links for the
                        same resource
                    </Title>
                    <Subtitle>
                        <strong>
                            This component receives an img element as a child of
                            an anchor element. This results in a larger
                            clickable area for the user.
                        </strong>
                        <p>
                            Code preview:
                            <br />
                            <code>
                                &lt;a&gt;
                                <br />
                                &emsp;children
                                <br />
                                &emsp;&lt;img/&gt;
                                <br />
                                &lt;/a&gt;
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
                            to provide the target link which is saved in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                link: string
                            </strong>{' '}
                            variable.
                        </p>
                        <p>
                            Furthermore, you need to provide the data for your
                            image. This information is saved in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                imageData
                            </strong>{' '}
                            object. The only required attribute is{' '}
                            <strong>imageSource: string</strong>, but you can
                            also assign all other global image attributes.
                        </p>
                        <p>
                            In addition to that, you need to supply a{' '}
                            <strong>child: ReactNode</strong> element which
                            contains the clickable text. The type of this text
                            could be a string, a ReactNode or even a whole
                            different component.
                        </p>
                        <p>
                            If you want the text of the child element to be
                            displayed before the image, you must set the value
                            of the <strong>textBeforeImage: boolean</strong>{' '}
                            variable to true. Otherwise, the text is displayed
                            after the image by default.
                        </p>
                        <p>
                            As long as the child elements contains a descriptive
                            text which describes the reason for the anchor
                            element, you do not need to specify an alt attribute
                            for the image. However, if this is not the case, you
                            need to assign a descriptive value to the{' '}
                            <strong>altText: string</strong> parameter.
                        </p>
                        <p>
                            To change the anchor element and the link, all
                            global anchor attributes can optionally be changed.
                            These changes are applied in the{' '}
                            <strong>linkData</strong> object.
                        </p>
                        <div>
                            To provide assistive technologies with additional
                            information about this component, one of the
                            following values can optionally be used for the
                            WAI-ARIA role in the <strong>role: string</strong>{' '}
                            variable:
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
                                        <td>doc-backlink</td>
                                    </tr>
                                    <tr>
                                        <td>doc-biblioref</td>
                                    </tr>
                                    <tr>
                                        <td>doc-glossref</td>
                                    </tr>
                                    <tr>
                                        <td>doc-noteref</td>
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
                                        <td>radio</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
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
                            <strong>classNameImage: string</strong> or{' '}
                            <strong>classNameLink: string</strong>to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling</strong> variable inside
                            of the <strong>imageData</strong> or{' '}
                            <strong>linkData</strong> objects.
                        </p>
                        <p>
                            If you want to trigger an additional function when
                            clicking on this component, you can assign this to{' '}
                            <strong>onClickFunction: () =&gt; void</strong>.
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
                                        <td>aria-placeholder</td>
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H2"
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

export default metaH2

type StoryH2 = StoryObj<typeof WCAGH2>

// WCAGNonTextComponentH2

export const ImageAndLink: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            Go to the home page
        </WCAGH2>
    ),
}

export const ImageAndLinkWithAlt: StoryH2 = {
    render: () => (
        <WCAGH2
            altText="Go to the home page"
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            Go
        </WCAGH2>
    ),
}

export const TextContentIsADiv: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
        >
            <div>Go to the home page</div>
        </WCAGH2>
    ),
}

export const TextBeforeImage: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
            textBeforeImage
        >
            <div style={{ color: '#020202' }}>Go to the home page</div>
        </WCAGH2>
    ),
}

export const WrongLink: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: starImage,
                additionalStyling: { height: 75, width: 75 },
            }}
            link=""
            textBeforeImage
        >
            <div style={{ color: '#020202' }}>Go to the home page</div>
        </WCAGH2>
    ),
}

export const WrongImageSource: StoryH2 = {
    render: () => (
        <WCAGH2
            imageData={{
                imageSource: '',
                additionalStyling: { height: 75, width: 75 },
            }}
            link="#home"
            textBeforeImage
        >
            <div style={{ color: '#020202' }}>Go to the home page</div>
        </WCAGH2>
    ),
}
