import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA2H58H65 from './WCAGARIA2H58H65'

const metaARIA2H65: Meta<typeof WCAGARIA2H58H65> = {
    component: WCAGARIA2H58H65,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGARIA2: Identifying a required field with the
                        aria-required property
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                        <br />
                        WCAGH65: Using the title attribute to identify form
                        controls when the label element cannot be used
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content">
                                    1.1.1 Non.text Content
                                </a>
                                ,{' '}
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
                                This component adds a title attribute to an
                                input element to provide an accessible name when
                                the visual design doesn't include text an the
                                screen which can be seen as a label for the
                                element. It also allows you to specify the human
                                language your element uses if it is different
                                than the human language of your web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;input title="description" lang="de" /&gt;
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
                            to provide a descriptive text for the input element
                            in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                title: string
                            </strong>{' '}
                            parameter.
                        </p>
                        <div>
                            Furthermore, you have to specify your wanted{' '}
                            <strong style={{ color: '#ff0000' }}>
                                inputType
                            </strong>
                            . Choose one of the following values:
                            <table
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
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
                                            inputType
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>'button'</td>
                                    </tr>
                                    <tr>
                                        <td>'color'</td>
                                    </tr>
                                    <tr>
                                        <td>'date'</td>
                                    </tr>
                                    <tr>
                                        <td>'datetime-local'</td>
                                    </tr>
                                    <tr>
                                        <td>'email'</td>
                                    </tr>
                                    <tr>
                                        <td>'file'</td>
                                    </tr>
                                    <tr>
                                        <td>'hidden'</td>
                                    </tr>
                                    <tr>
                                        <td>'image'</td>
                                    </tr>
                                    <tr>
                                        <td>'month'</td>
                                    </tr>
                                    <tr>
                                        <td>'number'</td>
                                    </tr>
                                    <tr>
                                        <td>'password'</td>
                                    </tr>
                                    <tr>
                                        <td>'range'</td>
                                    </tr>
                                    <tr>
                                        <td>'reset'</td>
                                    </tr>
                                    <tr>
                                        <td>'search'</td>
                                    </tr>
                                    <tr>
                                        <td>'submit'</td>
                                    </tr>
                                    <tr>
                                        <td>'tel'</td>
                                    </tr>
                                    <tr>
                                        <td>'text'</td>
                                    </tr>
                                    <tr>
                                        <td>'time'</td>
                                    </tr>
                                    <tr>
                                        <td>'url'</td>
                                    </tr>
                                    <tr>
                                        <td>'week'</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            In addition to that, you have to use the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                inputData
                            </strong>{' '}
                            object with its mandatory parameter{' '}
                            <strong style={{ color: '#ff0000' }}>
                                inputData.required: boolean
                            </strong>
                            . This value is necessary for the aria-required
                            value if you decide to use an optional WAI-ARIA role
                            with the value{' '}
                            <strong>
                                'checkbox', 'combobox', 'spinbutton',
                                'searchbox' or 'switch'
                            </strong>
                            . As this component renders a simple input element,
                            you are also free to assign every possible property
                            of the input element to the input element of this
                            component optionally. These attributes can be
                            applied to this <strong>input</strong> object.
                            <br />
                            If you set the formTarget of your link to{' '}
                            <strong>_blank</strong> which means that the link is
                            opened in a new window, you should add an alert that
                            tells the user that a new window is opened. If you
                            do so, you automatically fulfil{' '}
                            <strong>
                                WCAGG201: Giving users advanced warning when
                                opening a new window
                            </strong>{' '}
                            which is an advisory technique for the success
                            criteria 3.2.1 On Focus and 3.2.2 On Input.
                        </p>
                        <div>
                            Speaking of optional WAI-ARIA roles: Tese are the
                            available WAI-ARIA role values for the attribute{' '}
                            <strong>role: string</strong>:
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
                                        <td>checkbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>combobox</td>
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
                                        <td>searchbox</td>
                                    </tr>
                                    <tr>
                                        <td>spinbutton</td>
                                    </tr>
                                    <tr>
                                        <td>switch</td>
                                    </tr>
                                    <tr>
                                        <td>tab</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            You cannot pass any elements as a{' '}
                            <strong>child</strong> element.
                        </p>
                        <p>
                            If the expected human language input inside your
                            input element is different than the human language
                            which is set for your web page, you must set it to
                            the correct human language. For this you have to use
                            the <strong>lang.language: string</strong> variable
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
                            object inside of the <strong>inputData</strong>{' '}
                            object.
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
                                        <td>aria-labelledbyid</td>
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
                                        <td>aria-placeholder</td>
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H65"
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

export default metaARIA2H65

type StoryARIA2H65 = StoryObj<typeof WCAGARIA2H58H65>

// WCAGNonTextComponentARIA2H65

export const TextInput: StoryARIA2H65 = {
    render: () => (
        <WCAGARIA2H58H65
            inputType="text"
            title="What is your surname?"
            inputData={{ required: false }}
        />
    ),
}

export const NumberInput: StoryARIA2H65 = {
    render: () => (
        <WCAGARIA2H58H65
            inputType="number"
            inputData={{
                required: false,
                placeholder: '0',
                min: '0',
                max: '9',
                value: '5',
            }}
            title="Enter any number from zero to nine."
        />
    ),
}

export const PasswordInput: StoryARIA2H65 = {
    render: () => (
        <form>
            <WCAGARIA2H58H65
                inputType="password"
                inputData={{
                    autocomplete: 'off',
                    required: false,
                    placeholder: 'password',
                }}
                title="Please enter your password."
                onClickFunction={() => console.log('click')}
            />
        </form>
    ),
}

export const WrongTitleAttribute: StoryARIA2H65 = {
    render: () => (
        <form>
            <WCAGARIA2H58H65
                inputType="password"
                inputData={{
                    autocomplete: 'off',
                    required: false,
                    placeholder: 'password',
                }}
                title=""
                onClickFunction={() => console.log('click')}
            />
        </form>
    ),
}
