import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA10H58 from './WCAGARIA10H58'
import WCAGARIA10H58Text from './WCAGARIA10H58Text'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaARIA10: Meta<typeof WCAGARIA10H58> = {
    component: WCAGARIA10H58,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGARIA10: Using aria-labelledby to provide a text
                        alternative for non-text content
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
                                This component contains non-text content, which
                                is described by an additional element with a
                                text alternative. The purpose of this component
                                is to provide a short description of an element
                                which can be read aloud by assistive technology.
                                It also allows you to specify the human language
                                your element uses if it is different than the
                                human language of your web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br /> WCAGARIA10H58:
                            <br />
                            <code>
                                &lt;div aria-labelledby="id" lang="de"&gt;
                                children &lt;/div&gt;
                            </code>
                            <br />
                            <br /> WCAGARIA10H58Text: <br />
                            <code>
                                &lt;div id="id" lang="de"&gt; children
                                &lt;/div&gt;
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
                            WCAGARIA10H58 component contains the non-text
                            content, while the WCAGARIA10H58Text component
                            contains the alternative text, you can use multiple
                            WCAGARIA10H58Text components.
                        </p>
                        <p>
                            To be able to use this component correctly, you must
                            specify one of the 60 possible WAI-ARIA roles for
                            the <strong>WCAGARIA10H58</strong> component.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute{' '}
                            <strong style={{ color: '#ff0000' }}>
                                role: string
                            </strong>
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
                            The same roles can also be assigned to the
                            <strong>WCAGARIA10H58Text</strong> component via the{' '}
                            <strong>role: string</strong> parameter optionally.
                        </p>
                        <p>
                            To connect the two components, you must assign all{' '}
                            <strong style={{ color: '#ff0000' }}>
                                ariaLabelledById: string
                            </strong>{' '}
                            values of the <strong>WCAGARIA10H58Text</strong>{' '}
                            components to the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                accessibleId: string
                            </strong>{' '}
                            variable of the
                            <strong>WCAGARIA10H58t</strong> component separated
                            by a space.
                        </p>
                        <p>
                            As <strong>both</strong> components render a simple
                            div element, you are also free to assign every
                            possible property of a regular div element to the
                            div elements of these components optionally. These
                            attributes can be applied to the{' '}
                            <strong>divData</strong> object on each component
                            individually.
                        </p>
                        <p>
                            <strong>Both</strong> components can be passed any
                            element as a{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element: be it a string, another div element or a
                            completely different component.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to{' '}
                            <strong>both</strong> components, which allows you
                            to apply your styling to your new accessible
                            components. If you prefer styling your components
                            inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>divData</strong>{' '}
                            object.
                        </p>
                        <p>
                            If the human language inside your html element is
                            different than the human language which is set for
                            your web page, you must set it to the correct human
                            language. This works for both components. For this
                            you have to use the{' '}
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
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes on the{' '}
                            <strong>WCAGARIA10H58</strong> component. They are
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
                                        <td>aria-activedescendant</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-atomic</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-autocomplete</td>
                                        <td>
                                            'none' | 'inline' | 'list' | 'both'
                                        </td>
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
                                        <td>aria-colcount</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-colindex</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-colspan</td>
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
                                        <td>aria-level</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-live</td>
                                        <td>'assertive' | 'off' | 'polite'</td>
                                    </tr>
                                    <tr>
                                        <td>aria-modal</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-multiline</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-multiselectable</td>
                                        <td>boolean</td>
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
                                        <td>aria-rowcount</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-rowindex</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-rowspan</td>
                                        <td>number</td>
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
                                        <td>aria-sort</td>
                                        <td>
                                            'ascending' | 'descending' | 'none'
                                            | 'other'
                                        </td>
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA10"
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

export default metaARIA10

type StoryARIA10 = StoryObj<typeof WCAGARIA10H58>

// WCAGNonTextComponentARIA10

export const RoleImageWithOneText: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10H58
                role="img"
                ariaLabelledById="star-id1"
                divData={{ additionalStyling: { margin: '5px 10px' } }}
            >
                <>
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                </>
            </WCAGARIA10H58>
            <WCAGARIA10H58Text ariaLabelledById="star-id1">
                This is a short text alternative of five happy stars in a
                horizontal line looking at you.
            </WCAGARIA10H58Text>
        </>
    ),
}

export const RoleImageWithReactNodeAsText: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10H58Text ariaLabelledById="star-id1">
                <span style={{ color: 'red' }}>
                    This is a short text alternative of five happy stars in a
                    horizontal line looking at you.
                </span>
            </WCAGARIA10H58Text>
            <WCAGARIA10H58 role="img" ariaLabelledById="star-id1 star-id2">
                <>
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                </>
            </WCAGARIA10H58>
            <WCAGARIA10H58Text ariaLabelledById="star-id2">
                <div style={{ margin: '5px 25px' }}>
                    This is a short text alternative of five happy stars in a
                    horizontal line looking at you.
                </div>
            </WCAGARIA10H58Text>
        </>
    ),
}

export const WrongAriaLabelledById: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10H58Text ariaLabelledById="">
                <span style={{ color: 'red' }}>
                    This is a short text alternative of five happy stars in a
                    horizontal line looking at you.
                </span>
            </WCAGARIA10H58Text>
            <WCAGARIA10H58 role="img" ariaLabelledById="">
                <>
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                </>
            </WCAGARIA10H58>
            <WCAGARIA10H58Text ariaLabelledById="">
                <div style={{ margin: '5px 25px' }}>
                    This is a short text alternative of five happy stars in a
                    horizontal line looking at you.
                </div>
            </WCAGARIA10H58Text>
        </>
    ),
}

export const WringChildren: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10H58
                role="img"
                ariaLabelledById="star-id1"
                divData={{ additionalStyling: { margin: '5px 10px' } }}
            >
                {187}
            </WCAGARIA10H58>
            <WCAGARIA10H58Text ariaLabelledById="star-id1">
                {false}
            </WCAGARIA10H58Text>
        </>
    ),
}
