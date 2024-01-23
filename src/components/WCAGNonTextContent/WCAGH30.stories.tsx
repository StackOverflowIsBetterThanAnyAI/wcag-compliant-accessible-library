import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH30 from './WCAGH30'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH30: Meta<typeof WCAGH30> = {
    component: WCAGH30,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH30: Providing link text that describes the purpose
                        of a link for anchor elements
                    </Title>
                    <Subtitle>
                        <strong>
                            This component supports an anchor element with an
                            additional descriptive text as its child element.
                            The additional text can also be an image with an alt
                            attribute.
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;a&gt;
                                <br />
                                &emsp; preImageText <br />
                                &emsp;&lt;img/&gt;
                                <br />
                                &emsp;&lt;img/&gt;
                                <br />
                                &emsp;postImageText
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
                            Next, you need to decide how your alternative text
                            looks like. If you want to pass at least one image,
                            you can store their data in the{' '}
                            <strong>imageData</strong> object array. If you want
                            to provide an additional text that can describe the
                            image(s), you do not need to assign them an alt
                            attribute. If this is the case, only the{' '}
                            <strong>imageSource</strong> attribute is mandatory
                            for each image.
                        </p>
                        <p>
                            If you do not want to provide additional text, you
                            also have to pass a describing text of the image in
                            the <strong>imageData</strong> object array.
                        </p>
                        <p>
                            However, if you decide to pass some text, you have
                            the option to display the text before, after or
                            before and after an optional image (or images). In
                            this case, you are welcome to pass a string value, a
                            ReactNode or a whole different component to the{' '}
                            <strong>
                                preImageText:ReactNode and/or postImageText:
                                ReactNode
                            </strong>{' '}
                            variables.
                        </p>
                        <p>
                            As this component renders a simple anchor element,
                            you need to provide a value for its{' '}
                            <strong style={{ color: '#ff0000' }}>
                                link: string
                            </strong>
                            . You are also free to assign every possible
                            property of the anchor element to the anchor element
                            of this component optionally. These attributes can
                            be applied to the <strong>linkData</strong> object.
                        </p>
                        <p>You cannot pass any elements as a child element.</p>
                        <p>
                            If you want an additional function to be triggered
                            when the link is clicked, you can pass this to{' '}
                            <strong>onClickFunction: () =&gt; void</strong>.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>
                                classNameLink: string and classNameImage: string
                            </strong>{' '}
                            to your component, which allows you to apply your
                            styling to your new accessible component. If you
                            prefer styling your components inline, feel free to
                            use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>imageData</strong>{' '}
                            object array and <strong>linkData</strong> object.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> of the
                            anchor element:
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
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes which are
                            also applied to the anchor element. They are stored
                            in the <strong>additionalAriaAttributes</strong>{' '}
                            object. You can use the following WAI-ARIA
                            attributes, but without the 'aria-' prefix. But be
                            careful: You cannot use every WAI-ARIA attribute
                            with every WAI-ARIA role!
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H30"
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

export default metaH30

type StoryH30 = StoryObj<typeof WCAGH30>

// WCAGNonTextComponentH30

export const AnchorWithText: StoryH30 = {
    render: () => <WCAGH30 link="#" preImageText="Go to the home page" />,
}

export const AnchorWithImage: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[
                {
                    imageSource: starImage,
                    altText: 'Go to the home page',
                    height: 75,
                    width: 75,
                },
            ]}
            link="#"
        />
    ),
}

export const AnchorWithImageAndPostImageText: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[{ imageSource: starImage, height: 75, width: 75 }]}
            link="#"
            postImageText={<div>Go to the home page</div>}
        />
    ),
}

export const AnchorWithMultipleImages: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[
                {
                    imageSource: starImage,
                    height: 75,
                    width: 75,
                },
                {
                    imageSource: starImage,
                    height: 75,
                    width: 75,
                },
            ]}
            link="#"
            postImageText="Go to the home page"
        />
    ),
}

export const AnchorWithImageAndPreImageText: StoryH30 = {
    render: () => (
        <WCAGH30
            imageData={[{ imageSource: starImage, height: 75, width: 75 }]}
            link="#"
            preImageText={<div>Go to the home page</div>}
        />
    ),
}

export const WrongLink: StoryH30 = {
    render: () => <WCAGH30 link="" preImageText="Go to the home page" />,
}
