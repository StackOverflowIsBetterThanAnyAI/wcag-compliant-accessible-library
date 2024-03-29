import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA15H58 from './WCAGARIA15H58'
import WCAGARIA15H58Text from '../WCAGARIA15H58Text/WCAGARIA15H58Text'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaARIA15: Meta<typeof WCAGARIA15H58> = {
    component: WCAGARIA15H58,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGARIA15: Using aria-describedby to provide
                        descriptions of images
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">
                                    1.1.1 Non.text Content
                                </a>{' '}
                                and{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">
                                    3.1.2 Language of Parts
                                </a>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                This component contains a regular image element,
                                which is described by an additional element with
                                a text alternative. The text alternative does
                                not necessarily have to be right beside the
                                non-text content. The purpose of this component
                                is to provide a short description of an element
                                which can be read aloud by assistive technology.
                                It also allows you to specify the human language
                                your element uses if it is different than the
                                human language of your web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br /> WCAGARIA15H58:
                            <br />
                            <code>
                                &lt;&gt;
                                <br />
                                &emsp;&lt;img aria-describedby="id"
                                src="imageSource-1" /&gt;
                                <br />
                                &emsp;&lt;img aria-describedby="id"
                                src="imageSource-2" /&gt;
                                <br />
                                &lt;/&gt;
                            </code>
                            <br />
                            <br /> WCAGARIA15H58Text: <br />
                            <code>
                                &lt;p id="id" lang="de"&gt; children &lt;/p&gt;
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
                            This component is divided into two parts: The
                            WCAGARIA15H58 component contains the non-text
                            content, while the WCAGARIA15H58Text component
                            contains the alternative text.
                        </p>
                        <p>
                            To be able to use this component correctly, you must
                            assign an ID to each{' '}
                            <strong>WCAGARIA15H58Text</strong> component you
                            would like to use in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                accessibleId: string
                            </strong>{' '}
                            variable.
                        </p>
                        <p>
                            Next, you must assign these IDs to the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                accessibleIds: string
                            </strong>{' '}
                            variable in the <strong>WCAGARIA15H58</strong>{' '}
                            component in the order in which they are to be read
                            out, separated by a space.
                        </p>
                        <p>
                            Within the <strong>WCAGARIA15H58</strong> component
                            you have to set a value for{' '}
                            <strong style={{ color: '#ff0000' }}>
                                altText: string
                            </strong>{' '}
                            inside of the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                imageData
                            </strong>{' '}
                            object array. Optionally you can also assign any
                            other img attribute to this component by applying it
                            to the <strong>imageData</strong> object array.
                            Inside of this object array you can also use any of
                            the following values for the WAI-ARIA{' '}
                            <strong>role: string</strong> variable. You can also
                            pass any number of the following WAI-ARIA attributes
                            to this object array in the variable{' '}
                            <strong>additionalAriaAttributes</strong>.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> inside of
                            the <strong>imageData</strong> object array:
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
                                        <td>doc-cover</td>
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
                                        <td>scrollbar</td>
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
                            And these are the possible options for the{' '}
                            <strong>additionalAriaAttributes</strong> to add
                            even more accessibility. You can use the following
                            WAI-ARIA attributes, but without the 'aria-' prefix.
                            But be careful: You cannot use every WAI-ARIA
                            attribute with every WAI-ARIA role!
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
                            As this component renders a simple img element, you
                            cannot pass any child elements.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            components, which allows you to apply your styling
                            to your new accessible components. If you prefer
                            styling your components inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>imageData</strong>{' '}
                            object array.
                        </p>
                        <p>
                            The <strong>WCAGARIA15H58Text</strong> component
                            returns a div element. This means that all possible
                            div attributes can be assigned to this element in
                            the <strong>divData</strong> object optionally.
                        </p>
                        <p>
                            At the same time, this also means that a{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element must be passed, which can be a string, a div
                            or even an entire other component.
                        </p>
                        <p>
                            If the human language inside your descriping p html
                            element is different than the human language which
                            is set for your web page, you must set it to the
                            correct human language. This works only for the{' '}
                            <strong>Text component</strong>. For this you have
                            to use the <strong>lang.language: string</strong>{' '}
                            variable which accepts one of the{' '}
                            <a
                                href="https://www.w3schools.com/tags/ref_language_codes.asp"
                                target="_blank"
                            >
                                language codes defined in ISO 639-1
                            </a>
                            .
                        </p>
                        <p>
                            To customise this <strong>WCAGARIA15H58Text</strong>{' '}
                            component, a string value can be passed for{' '}
                            <strong>className: string</strong>. If you prefer to
                            style your components inline, you can do this in the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside the <strong>divData</strong> object.
                        </p>
                        <div>
                            To make this component even more accessible, you can
                            save one of the following WAI-ARIA roles in the{' '}
                            <strong>role: string</strong> variable:
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
                                        <td>alert</td>
                                    </tr>
                                    <tr>
                                        <td>alertdialog</td>
                                    </tr>
                                    <tr>
                                        <td>application</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>article</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>banner</td>
                                    </tr>
                                    <tr>
                                        <td>button</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>cell</td>
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
                                        <td>columnheader</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>combobox</td>
                                    </tr>
                                    <tr>
                                        <td>comment</td>
                                    </tr>
                                    <tr>
                                        <td>complementary</td>
                                    </tr>
                                    <tr>
                                        <td>contentinfo</td>
                                    </tr>
                                    <tr>
                                        <td>definition</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>dialog</td>
                                    </tr>
                                    <tr>
                                        <td>document</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>feed</td>
                                    </tr>
                                    <tr>
                                        <td>form</td>
                                    </tr>
                                    <tr>
                                        <td>grid</td>
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
                                        <td>group</td>
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
                                    <tr>
                                        <td>link</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>listbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>log</td>
                                    </tr>
                                    <tr>
                                        <td>main</td>
                                    </tr>
                                    <tr>
                                        <td>marquee</td>
                                    </tr>
                                    <tr>
                                        <td>math</td>
                                    </tr>
                                    <tr>
                                        <td>menu</td>
                                    </tr>
                                    <tr>
                                        <td>menubar</td>
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
                                        <td>navigation</td>
                                    </tr>
                                    <tr>
                                        <td>note</td>
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
                                        <td>radiogroup</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>region</td>
                                    </tr>
                                    <tr>
                                        <td>row</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>rowgroup</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>rowheader</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>scrollbar</td>
                                    </tr>
                                    <tr>
                                        <td>search</td>
                                    </tr>
                                    <tr>
                                        <td>searchbox</td>
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
                                        <td>spinbutton</td>
                                    </tr>
                                    <tr>
                                        <td>status</td>
                                    </tr>
                                    <tr>
                                        <td>switch</td>
                                    </tr>
                                    <tr>
                                        <td>tab</td>
                                    </tr>
                                    <tr>
                                        <td>table</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>tablist</td>
                                    </tr>
                                    <tr>
                                        <td>tabpanel</td>
                                    </tr>
                                    <tr>
                                        <td>textbox</td>
                                    </tr>
                                    <tr>
                                        <td>timer</td>
                                    </tr>
                                    <tr>
                                        <td>toolbar</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                    </tr>
                                    <tr>
                                        <td>treegrid</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA15"
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

export default metaARIA15

type StoryARIA15 = StoryObj<typeof WCAGARIA15H58>

// WCAGNonTextComponentARIA15

export const OneImage: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15H58Text accessibleId="p1" role="definition">
                Short text description.
            </WCAGARIA15H58Text>
            <WCAGARIA15H58
                accessibleIds="p1 p2"
                imageData={[
                    {
                        altText: 'A happy star.',
                        imageSource: starImage,
                        role: 'separator',
                        height: 50,
                        width: 50,
                    },
                ]}
            />
            <WCAGARIA15H58Text accessibleId="p2">
                This is the much longer text content of Paragraph 2 which
                describes one happy star looking at you.
            </WCAGARIA15H58Text>
        </>
    ),
}

export const TwoImages: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15H58Text accessibleId="p1">
                Short text description.
            </WCAGARIA15H58Text>
            <WCAGARIA15H58
                accessibleIds="p1 p2"
                imageData={[
                    {
                        altText: 'A happy star.',
                        imageSource: starImage,
                        height: 50,
                        width: 50,
                    },
                    {
                        altText: 'Another happy star.',
                        imageSource: starImage,
                        height: 50,
                        width: 50,
                    },
                ]}
            />
            <WCAGARIA15H58Text accessibleId="p2">
                This is the much longer text content of Paragraph 2 which
                describes both images that contain one happy star each looking
                at you.
            </WCAGARIA15H58Text>
        </>
    ),
}

export const WrongAccessibleIdsAndImageData: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15H58Text accessibleId="">
                Short text description.
            </WCAGARIA15H58Text>
            <WCAGARIA15H58
                accessibleIds=""
                imageData={[
                    {
                        altText: '',
                        imageSource: '',
                        role: 'separator',
                        height: 50,
                        width: 50,
                    },
                ]}
            />
            <WCAGARIA15H58Text accessibleId="">
                This is the much longer text content of Paragraph 2 which
                describes one happy star looking at you.
            </WCAGARIA15H58Text>
        </>
    ),
}

export const EmptyChild: StoryARIA15 = {
    render: () => (
        <>
            <WCAGARIA15H58Text accessibleId="p1">{''}</WCAGARIA15H58Text>
            <WCAGARIA15H58
                accessibleIds="p1 p2"
                imageData={[
                    {
                        altText: 'A happy star.',
                        imageSource: starImage,
                        height: 50,
                        width: 50,
                    },
                ]}
            />
            <WCAGARIA15H58Text accessibleId="p2">{''}</WCAGARIA15H58Text>
        </>
    ),
}
