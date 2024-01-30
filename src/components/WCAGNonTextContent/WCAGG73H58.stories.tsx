import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGG73H58 from './WCAGG73H58'
import WCAGG73H58Text from './WCAGG73H58Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG73: Meta<typeof WCAGG73H58> = {
    component: WCAGG73H58,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGG73: Providing a long description in another
                        location with a link to it that is immediately adjacent
                        to the non-text content
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                This component fulfils the WCAG2.2 success
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
                                This component creates a way to link a long
                                description to elements that don't support long
                                descriptions natively. The long description is
                                in another location than the non-text content.
                                There is a button right beside the non-text
                                content which links to the long description and
                                vice versa. It also allows you to specify the
                                human language your element uses if it is
                                different than the human language of your web
                                page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br /> WCAGG73H58:
                            <br />
                            <code>
                                &lt;div aria-describedby="long-desc" id="div-id"
                                lang="de"&gt;
                                <br />
                                &emsp; children <br />
                                &emsp;&lt;a href="#long-desc"&gt; buttonText
                                &lt;/a&gt;
                                <br />
                                &emsp; shortText &emsp;
                                <br />
                                &lt;/div&gt;
                            </code>
                            <br />
                            <br /> WCAGG73H58Text: <br />
                            <code>
                                &lt;div id="long-desc" lang="de"&gt;
                                <br />
                                &emsp; children <br />
                                &emsp;&lt;p&gt;
                                <br />
                                &emsp;&emsp;&lt;a href="#div-id"&gt; buttonText
                                &lt;/a&gt;
                                <br />
                                &emsp;&lt;/p&gt;
                                <br />
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
                            WCAGG73H58 component contains the non-text content,
                            while the WCAGG73H58Text component contains the
                            alternative text.
                        </p>
                        <p>
                            To be able to use this component correctly, you must
                            assign an{' '}
                            <strong style={{ color: '#ff0000' }}>
                                ownId: string and a childId: string
                            </strong>{' '}
                            in the WCAGG73H58 component and an{' '}
                            <strong style={{ color: '#ff0000' }}>
                                ownId: string and a parentId: string
                            </strong>{' '}
                            in the WCAGG73H58Text component. variable. Although
                            both have a parameter called ownId, these values
                            mustn't be the same. However, the{' '}
                            <strong style={{ color: '#ff0000' }}>ownId</strong>{' '}
                            of the WCAGG73H58 component is the same as the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                parentId
                            </strong>{' '}
                            of the Text component. The value of the{' '}
                            <strong style={{ color: '#ff0000' }}>ownId</strong>{' '}
                            of the Text component is the same as the value of
                            the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                childId
                            </strong>{' '}
                            of the WCAGG73H58 component.
                            <br />
                            These IDs are needed for the links to work properly.
                            By default the <strong>
                                href of the anchor
                            </strong>{' '}
                            looks like this: <code>href=#childId</code>. To get
                            rid of the hashtag, you can set the boolean value of{' '}
                            <strong>externalLink: boolean</strong> to true,
                            which can be done inside the{' '}
                            <strong>WCAGG73H58 and WCAGG73H58Text</strong>{' '}
                            components. This results in the code looking like
                            this: <code>href=childId</code>. This means that you
                            can eg. assign childId the name of a different
                            website.
                        </p>
                        <p>
                            In order to create a link to the long description,
                            you need to specify the clickable text in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                buttonText: ReactNode
                            </strong>{' '}
                            parameter of the <strong>WCAGG73H58</strong>{' '}
                            component, which can be a string, a div or even an
                            entire other component.
                        </p>
                        <p>
                            You are welcome to change this link with all global
                            link attributes{' '}
                            <strong>except download, href and hreflang</strong>{' '}
                            in the optional <strong>linkData</strong> object. To
                            customize this <strong>WCAGG73H58</strong>{' '}
                            component, you can set{' '}
                            <strong>classNameLink: string</strong>. If you
                            prefer styling your components inline, feel free to
                            add your CSS rules in the{' '}
                            <strong>
                                linkData.additionalStyling: CSSProperties
                            </strong>{' '}
                            object.
                            <br />
                            If you set the target of your link to{' '}
                            <strong>_blank</strong> which means that the link is
                            opened in a new window, you should either add a
                            little bit of text to the{' '}
                            <strong>buttonText</strong> that explains that the
                            link is opened in a new tab, or add an alert that
                            does the same. If you do so, you automatically
                            fulfil{' '}
                            <strong>
                                WCAGG201: Giving users advanced warning when
                                opening a new window
                            </strong>{' '}
                            which is an advisory technique for the success
                            criteria 3.2.1 On Focus and 3.2.2 On Input.
                        </p>
                        <p>
                            If you want an additional function to be triggered
                            by an onClick event, you can assign this to{' '}
                            <strong>onClickFunction: () =&gt; void</strong>.
                        </p>
                        <p>
                            The non-text content has to be passed as a{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element. This can be an image, a div or a whole
                            different component.
                        </p>
                        <p>
                            The non-text content is saved inside a regular div
                            element. In order to change up this div element, you
                            can assign any global div attributes to the{' '}
                            <strong>divData</strong> object. If you like to
                            style this div, you can add a value to the{' '}
                            <strong>classNameDiv: string</strong> parameter or
                            if you prefer styling your components inline, feel
                            free to add your CSS rules inside the{' '}
                            <strong>
                                divData.additionalStyling: CSSProperties
                            </strong>{' '}
                            object.
                        </p>
                        <p>
                            As this component is to be used in situations in
                            which both a short and a long alternative text are
                            to be offered, you can also specify a short text in
                            the <strong>WCAGG73H58</strong> component. This is
                            displayed directly below the link to the long
                            description and stored in the{' '}
                            <strong>shortText: ReactNode</strong> variable,
                            which can be a string, a div or a whole different
                            component.
                        </p>
                        <p>
                            If the human language inside your html element is
                            different than the human language which is set for
                            your web page, you must set it to the correct human
                            language. This works in both components. For this
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
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> which is
                            applied to the div container of the{' '}
                            <strong>WCAGG73H58</strong> component:
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
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object of
                            the <strong>WCAGG73H58</strong> component and
                            applied to the div container. You can use the
                            following WAI-ARIA attributes, but without the
                            'aria-' prefix. But be careful: You cannot use every
                            WAI-ARIA attribute with every WAI-ARIA role!
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
                            The long description of the non-text content is
                            passed as the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element of the <strong>WCAGG73H58Text</strong>{' '}
                            component, which can be a string, a div or a whole
                            different component.
                        </p>
                        <p>
                            This long text content is saved inside a regular div
                            element. In order to change up this div element, you
                            can assign any global div attributes to the{' '}
                            <strong>divData</strong> object of the{' '}
                            <strong>WCAGG73H58Text</strong> component. If you
                            like to style this div, you can add a value to the{' '}
                            <strong>classNameDiv: string</strong> parameter or
                            if you prefer styling your components inline, feel
                            free to add your CSS rules inside the{' '}
                            <strong>
                                divData.additionalStyling: CSSProperties
                            </strong>{' '}
                            object.
                        </p>
                        <p>
                            In order to create a link to the non-text content,
                            you need to specify the clickable text in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                buttonText: ReactNode
                            </strong>{' '}
                            parameter of the <strong>WCAGG73H58Text</strong>{' '}
                            component, which can be a string, a div or even an
                            entire other component.
                        </p>
                        <p>
                            You are welcome to change this link with all global
                            link attributes{' '}
                            <strong>except download, href and hreflang</strong>
                            in the optional <strong>linkData</strong> object. To
                            customize this
                            <strong>WCAGG73H58Text</strong> component, you can
                            set <strong>classNameLink: string</strong>. If you
                            prefer styling your components inline, feel free to
                            add your CSS rules in the{' '}
                            <strong>
                                linkData.additionalStyling: CSSProperties
                            </strong>{' '}
                            object.
                            <br />
                            If you set the target of your link to{' '}
                            <strong>_blank</strong> which means that the link is
                            opened in a new window, you should either add a
                            little bit of text to the{' '}
                            <strong>buttonText</strong> that explains that the
                            link is opened in a new tab, or add an alert that
                            does the same. If you do so, you automatically
                            fulfil{' '}
                            <strong>
                                WCAGG201: Giving users advanced warning when
                                opening a new window
                            </strong>{' '}
                            which is an advisory technique for the success
                            criteria 3.2.1 On Focus and 3.2.2 On Input.
                        </p>
                        <p>
                            If you want an additional function to be triggered
                            by an onClick event, you can assign this to
                            <strong>onClickFunction: () =&gt; void</strong>.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> which is
                            applied to the div container of the{' '}
                            <strong>WCAGG73H58Text</strong> component:
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
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/general/G73"
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

export default metaG73

type StoryG73 = StoryObj<typeof WCAGG73H58>

// WCAGNonTextComponentG73

export const Chart: StoryG73 = {
    render: () => (
        <>
            <WCAGG73H58
                buttonText="Go to the long description."
                ownId="chart"
                childId="long-description1"
                shortText={<p>Short description.</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG73H58>
            <WCAGG73H58Text
                buttonText="Go back to the stars."
                ownId="long-description"
                parentId="chart"
            >
                This is a very long description
                <br />
                of six happy stars which are
                <br />
                placed in two rows
                <br />
                with three stars each.
            </WCAGG73H58Text>
        </>
    ),
}

export const ChartWithAdditionalAttributes: StoryG73 = {
    render: () => (
        <>
            <WCAGG73H58
                buttonText="Go to the long description."
                ownId="chart"
                childId="long-description1"
                shortText={
                    <p
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '5px',
                            margin: '5px',
                        }}
                    >
                        Short description.
                    </p>
                }
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG73H58>
            <WCAGG73H58Text
                buttonText="Go back to the stars."
                ownId="long-description"
                parentId="chart"
                linkData={{
                    additionalStyling: {
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '2px 32px',
                        borderRadius: '8px',
                    },
                }}
                role="img"
            >
                This is a very long description
                <br />
                of six happy stars which are
                <br />
                placed in two rows
                <br />
                with three stars each.
            </WCAGG73H58Text>
        </>
    ),
}

export const WrongIds: StoryG73 = {
    render: () => (
        <>
            <WCAGG73H58
                buttonText="Go to the long description."
                ownId=""
                childId=""
                shortText={<p>Short description.</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG73H58>
            <WCAGG73H58Text
                buttonText="Go back to the stars."
                ownId=""
                parentId=""
            >
                This is a very long description
                <br />
                of six happy stars which are
                <br />
                placed in two rows
                <br />
                with three stars each.
            </WCAGG73H58Text>
        </>
    ),
}

export const WrongTypes: StoryG73 = {
    render: () => (
        <>
            <WCAGG73H58
                buttonText={false}
                ownId="chart"
                childId="long-description1"
                shortText={187}
            >
                {true}
            </WCAGG73H58>
            <WCAGG73H58Text
                buttonText={187}
                ownId="long-description"
                parentId="chart"
            >
                {false}
            </WCAGG73H58Text>
        </>
    ),
}
