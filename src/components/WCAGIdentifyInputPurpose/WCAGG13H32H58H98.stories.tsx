import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGG13H32H58H98 from './WCAGG13H32H58H98'
// @ts-ignore
import starImage from '../../images/star.png'

const metaWCAGG13H32H58H98: Meta<typeof WCAGG13H32H58H98> = {
    component: WCAGG13H32H58H98,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGG13: Describing what will happen before a change to
                        a form control that causes a change of context to occur
                        is made
                        <br />
                        WCAGH32: Providing submit buttons
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                        <br />
                        WCAGH98: Using HTML 5.2 autocomplete attributes
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose">
                                    1.3.5 Identify Input Purpose
                                </a>
                                ,{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts">
                                    3.1.2 Language of Parts
                                </a>
                                ,{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/on-input">
                                    3.2.2 On Input
                                </a>{' '}
                                and{' '}
                                <a href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">
                                    3.3.2 Labels or Instructions
                                </a>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                This component adds an autocomplete tag to an
                                input element inside a form container. You may
                                also add a submit button at the bottom of the
                                form. If you do so, you should also add an
                                additional text which explains the user what is
                                about to happen when they press the button. It
                                also allows you to specify the human language
                                each label and input element use if it is
                                different than the human language of your web
                                page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;form&gt;
                                <br />
                                &emsp; changedContextText <em>optional</em>
                                <br />
                                &emsp;&lt;div&gt;
                                <br />
                                &emsp;&emsp;&lt;label htmlFor="id"&gt; labelText
                                &lt;/label&gt;
                                <br />
                                &emsp;&emsp;&lt;input type="month"
                                autocomplete="bday-month" id="id"/&gt;
                                <br />
                                &emsp;&lt;/div&gt;
                                <br />
                                &emsp;&lt;div&gt;
                                <br />
                                &emsp;&emsp;&lt;input type="submit" /&gt;{' '}
                                <em>div and submit are optional</em>
                                <br />
                                &emsp;&lt;/div&gt;
                                <br />
                                &lt;/form&gt;
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
                            to provide data for the form container. The{' '}
                            <strong style={{ color: '#ff0000' }}>
                                formData
                            </strong>{' '}
                            object accepts all global form attributes
                            optionally, but the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                id: string
                            </strong>{' '}
                            is mandatory.
                        </p>
                        <div>
                            Also mandatory is the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                inputData
                            </strong>{' '}
                            object array with the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                id: string and labelText: ReactNode
                            </strong>
                            . You also must specify the input{' '}
                            <strong style={{ color: '#ff0000' }}>type</strong>{' '}
                            inside this object array. The possible values are:
                            <section
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
                                    padding: '2% 5%',
                                }}
                            >
                                <ul>
                                    <li>color</li>
                                    <li>date</li>
                                    <li>datetime-local</li>
                                    <li>email</li>
                                    <li>file</li>
                                    <li>hidden</li>
                                    <li>month</li>
                                    <li>number</li>
                                    <li>password</li>
                                    <li>range</li>
                                    <li>reset</li>
                                    <li>search</li>
                                    <li>tel</li>
                                    <li>text</li>
                                    <li>time</li>
                                    <li>url</li>
                                    <li>week</li>
                                </ul>
                            </section>
                            <div>
                                Keep in mind: If you are selecting 'password',
                                you must select 'off' for your autocomplete
                                attribute.
                                <br />
                                You also must assign one of the following values
                                to{' '}
                                <strong style={{ color: '#ff0000' }}>
                                    autocomplete
                                </strong>
                                :
                                <section
                                    style={{
                                        margin: '2% auto',
                                        backgroundColor: '#e9e9e9',
                                        padding: '2% 5%',
                                    }}
                                >
                                    <ul>
                                        <li>on</li>
                                        <li>off (only for type='password')</li>
                                        <li>name</li>
                                        <li>honorific-prefix</li>
                                        <li>given-name</li>
                                        <li>additional-name</li>
                                        <li>family-name</li>
                                        <li>honorific-suffix</li>
                                        <li>nickname</li>
                                        <li>email</li>
                                        <li>username</li>
                                        <li>one-time-code</li>
                                        <li>organization-title</li>
                                        <li>organization</li>
                                        <li>street-address</li>
                                        <li>shipping</li>
                                        <li>billing</li>
                                        <li>address-line1</li>
                                        <li>address-line2</li>
                                        <li>address-line3</li>
                                        <li>address-line4</li>
                                        <li>address-level4</li>
                                        <li>address-level3</li>
                                        <li>address-level2</li>
                                        <li>address-level1</li>
                                        <li>country</li>
                                        <li>country-name</li>
                                        <li>postal-code</li>
                                        <li>cc-name</li>
                                        <li>cc-given-name</li>
                                        <li>cc-additional-name</li>
                                        <li>cc-family-name</li>
                                        <li>cc-number</li>
                                        <li>cc-exp</li>
                                        <li>cc-exp-month</li>
                                        <li>cc-exp-year</li>
                                        <li>cc-csc</li>
                                        <li>cc-type</li>
                                        <li>transaction-currency</li>
                                        <li>transaction-amount</li>
                                        <li>language</li>
                                        <li>bday</li>
                                        <li>bday-day</li>
                                        <li>bday-month</li>
                                        <li>bday-year</li>
                                        <li>sex</li>
                                        <li>tel</li>
                                        <li>tel-country-code</li>
                                        <li>tel-national</li>
                                        <li>tel-area-code</li>
                                        <li>tel-local</li>
                                        <li>tel-extension</li>
                                        <li>impp</li>
                                        <li>url</li>
                                        <li>photo</li>
                                        <li>webauthn</li>
                                    </ul>
                                </section>
                                You can also add an optional customised{' '}
                                <strong>className: string</strong> inside the{' '}
                                <strong>inputData</strong> object array to your
                                component which is applied to the input element,
                                which allows you to apply your styling to your
                                new accessible component. If you prefer styling
                                your components inline, feel free to use the{' '}
                                <strong>
                                    additionalStylingInput: CSSProperties and
                                    additionalStylingLabel: CSSProperties
                                </strong>{' '}
                                objects inside of the <strong>inputData</strong>{' '}
                                object array.
                            </div>
                        </div>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute{' '}
                            <strong style={{ color: '#ff0000' }}>
                                role: string
                            </strong>{' '}
                            which is applied to the form container element:
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
                                        <td>presentation</td>
                                    </tr>
                                    <tr>
                                        <td>search</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            If the human language inside any html element is
                            different than the human language which is set for
                            your web page, you must set it to the correct human
                            language. For this you have to use the{' '}
                            <strong>lang.language: string</strong> variable
                            inside the <strong>inputData</strong> object array
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
                            As this component renders a simple div element, you
                            are also free to assign every possible property of
                            the div element to the div element of this component
                            optionally. These attributes can be applied to the{' '}
                            <strong>divData</strong> object.
                        </p>
                        <p>You cannot pass any child elements.</p>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object and
                            applied to the form container. You can use the
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
                                        <td>aria-label</td>
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
                            If you want to have an additional input field at the
                            bottom of your form which acts as a submit button,
                            feel welcome to fill in the{' '}
                            <strong>submitData</strong> object. You can add any
                            global input attribute which is compliant to the
                            submit input type. By adding a submit button, you
                            fulfil the WCAGH32 technique.
                            <br />
                            If you do so, you should also add{' '}
                            <strong>changedContextText: ReactNode</strong> which
                            explains to users right at the beginning of the form
                            what is going to happen when they press the button.
                            <br />
                            You can pass your own custom methods which can be
                            triggered{' '}
                            <strong>onClick, onFocus and onMouseOver</strong>.
                        </p>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H98"
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

export default metaWCAGG13H32H58H98

type StoryWCAGG13H32H58H98 = StoryObj<typeof WCAGG13H32H58H98>

// WCAGIdentifyInputPurposeWCAGG13H32H58H98

export const OneInputElementStyled: StoryWCAGG13H32H58H98 = {
    render: () => (
        <WCAGG13H32H58H98
            formData={{
                method: 'post',
                id: 'form1',
                action: '#form1',
                additionalStylingForm: {
                    border: '4px solid #ff0000',
                    padding: '20px',
                    borderRadius: '8px',
                },
            }}
            inputData={[
                {
                    id: 'input11',
                    type: 'email',
                    autocomplete: 'email',
                    labelText: 'Your email address:',
                    additionalStylingInput: { padding: '2px 5px' },
                    additionalStylingLabel: { paddingRight: '15px' },
                },
            ]}
            changedContextText={
                <div>
                    By pressing the Subscribe button, you are redirected to the
                    home page.
                </div>
            }
            submitData={{
                type: 'submit',
                value: 'Subscribe',
                onClickFunction: () => console.log('clicking'),
                onFocusFunction: () => console.log('focussing'),
                onHoverFunction: () => console.log('hovering'),
                additionalStyling: { padding: '4px 16px', margin: '8px 16px' },
            }}
        />
    ),
}

export const StringInput: StoryWCAGG13H32H58H98 = {
    render: () => (
        <WCAGG13H32H58H98
            formData={{ method: 'post', id: 'form2', action: '#form2' }}
            inputData={[
                {
                    id: 'input12',
                    type: 'text',
                    autocomplete: 'name',
                    labelText: 'First Name:',
                },
                {
                    id: 'input22',
                    type: 'text',
                    autocomplete: 'family-name',
                    labelText: 'Family Name:',
                },
                {
                    id: 'input32',
                    type: 'date',
                    autocomplete: 'bday',
                    labelText: 'Your Birthday:',
                },
                {
                    id: 'input42',
                    type: 'text',
                    autocomplete: 'cc-name',
                    labelText: 'Your credit card number:',
                },
                {
                    id: 'input52',
                    type: 'month',
                    autocomplete: 'cc-exp',
                    labelText: 'Expiry Date:',
                },
                {
                    id: 'input62',
                    type: 'password',
                    autocomplete: 'off',
                    labelText: 'Your password (no autocomplete):',
                },
            ]}
            changedContextText={
                <div>
                    By pressing the submit button, you are redirected to the
                    home page.
                </div>
            }
            submitData={{
                type: 'submit',
                value: 'Submit',
                onClickFunction: () => console.log('submitting'),
            }}
        />
    ),
}

export const RequiredInputElements: StoryWCAGG13H32H58H98 = {
    render: () => (
        <WCAGG13H32H58H98
            formData={{ method: 'post', id: 'form3', action: '#form3' }}
            inputData={[
                {
                    id: 'input13',
                    type: 'text',
                    autocomplete: 'name',
                    labelText: 'First Name:',
                    required: true,
                },
                {
                    id: 'input23',
                    type: 'text',
                    autocomplete: 'family-name',
                    labelText: 'Family Name:',
                    required: true,
                },
                {
                    id: 'input33',
                    type: 'date',
                    autocomplete: 'bday',
                    labelText: 'Your Birthday:',
                    required: true,
                },
                {
                    id: 'input43',
                    type: 'text',
                    autocomplete: 'cc-name',
                    labelText: 'Your credit card number:',
                    required: true,
                },
                {
                    id: 'input53',
                    type: 'month',
                    autocomplete: 'cc-exp',
                    labelText: 'Expiry Date:',
                    required: true,
                },
                {
                    id: 'input63',
                    type: 'password',
                    autocomplete: 'off',
                    labelText: 'Your password (no autocomplete):',
                    required: true,
                },
            ]}
            changedContextText={
                <div>
                    By pressing the submit button, you are redirected to the
                    home page.
                </div>
            }
            submitData={{
                type: 'submit',
                value: 'Submit',
                onClickFunction: () => console.log('submitting'),
            }}
        />
    ),
}

export const SpanLabelText: StoryWCAGG13H32H58H98 = {
    render: () => (
        <WCAGG13H32H58H98
            formData={{ method: 'post', id: 'form4', action: '#form4' }}
            inputData={[
                {
                    id: 'input14',
                    type: 'text',
                    autocomplete: 'name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            First name:
                        </span>
                    ),
                },
                {
                    id: 'input24',
                    type: 'text',
                    autocomplete: 'family-name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Family name:
                        </span>
                    ),
                },
                {
                    id: 'input34',
                    type: 'date',
                    autocomplete: 'bday',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your birthday:
                        </span>
                    ),
                },
                {
                    id: 'input44',
                    type: 'text',
                    autocomplete: 'cc-name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your credit card number:
                        </span>
                    ),
                },
                {
                    id: 'input54',
                    type: 'month',
                    autocomplete: 'cc-exp',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Expiry Date:
                        </span>
                    ),
                },
                {
                    id: 'input64',
                    type: 'password',
                    autocomplete: 'off',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your password (no autocomplete):
                        </span>
                    ),
                },
            ]}
            changedContextText={
                <div>
                    By pressing the submit button, you are redirected to the
                    home page.
                </div>
            }
            submitData={{
                type: 'submit',
                value: 'Submit',
                onClickFunction: () => console.log('submitting'),
            }}
        />
    ),
}

export const ImageSubmitButton: StoryWCAGG13H32H58H98 = {
    render: () => (
        <WCAGG13H32H58H98
            formData={{ method: 'post', id: 'form5', action: '#form5' }}
            inputData={[
                {
                    id: 'input15',
                    type: 'text',
                    autocomplete: 'name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            First name:
                        </span>
                    ),
                },
                {
                    id: 'input25',
                    type: 'text',
                    autocomplete: 'family-name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Family name:
                        </span>
                    ),
                },
                {
                    id: 'input35',
                    type: 'date',
                    autocomplete: 'bday',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your birthday:
                        </span>
                    ),
                },
                {
                    id: 'input45',
                    type: 'text',
                    autocomplete: 'cc-name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your credit card number:
                        </span>
                    ),
                },
                {
                    id: 'input55',
                    type: 'month',
                    autocomplete: 'cc-exp',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Expiry Date:
                        </span>
                    ),
                },
                {
                    id: 'input65',
                    type: 'password',
                    autocomplete: 'off',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your password (no autocomplete):
                        </span>
                    ),
                },
            ]}
            changedContextText={
                <div>
                    By pressing the submit button, you are redirected to the
                    home page.
                </div>
            }
            submitData={{
                type: 'image',
                src: starImage,
                value: 'Submit',
                additionalStyling: { height: 50, width: 50 },
                onClickFunction: () => console.log('submitting'),
            }}
        />
    ),
}

export const WrongAttributes: StoryWCAGG13H32H58H98 = {
    render: () => (
        <WCAGG13H32H58H98
            formData={{ method: 'post', id: '', action: '#' }}
            inputData={[
                {
                    id: 'input16',
                    type: 'text',
                    autocomplete: 'off',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            First name:
                        </span>
                    ),
                },
                {
                    id: ' ',
                    type: 'text',
                    autocomplete: 'family-name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Family name:
                        </span>
                    ),
                },
                {
                    id: 'input36',
                    type: 'date',
                    autocomplete: 'off',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your birthday:
                        </span>
                    ),
                },
                {
                    id: ' ',
                    type: 'text',
                    autocomplete: 'cc-name',
                    labelText: (
                        <span style={{ paddingRight: '25px', margin: '5px' }}>
                            Your credit card number:
                        </span>
                    ),
                },
                {
                    id: 'input56',
                    type: 'month',
                    autocomplete: 'off',
                    labelText: true,
                },
                {
                    id: ' ',
                    type: 'password',
                    autocomplete: 'on',
                    labelText: false,
                },
            ]}
            changedContextText={187}
            submitData={{
                type: 'submit',
                value: 'Submit',
                onClickFunction: () => console.log('submitting'),
            }}
        />
    ),
}
