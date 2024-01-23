import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA2H71 from './WCAGARIA2H71'

const metaARIA2H71: Meta<typeof WCAGARIA2H71> = {
    component: WCAGARIA2H71,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGARIA2: Identifying a required field with the
                        aria-required property
                        <br />
                        WCAGH71: Providing a description for groups of form
                        controls using fieldset and legend elements
                    </Title>
                    <Subtitle>
                        <strong>
                            This component allows a semantic grouping for
                            related checkbox or radio typed form controls so
                            users can understand the relationship fo them more
                            easily.
                        </strong>
                        <p>
                            Abstract code preview:{' '}
                            <code>
                                <br />
                                &lt;form (optional)&gt;
                                <br />
                                &emsp;&lt;fieldset&gt;
                                <br />
                                &emsp;&emsp;&lt;legend&gt; legendData.legendText
                                &lt;/legend&gt;
                                <br />
                                &emsp;&emsp;&lt;div&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;input/&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;label/&gt;
                                <em>label text</em>&lt;/label&gt;
                                <br />
                                &emsp;&emsp;&lt;/div&gt;
                                <br />
                                &emsp;&lt;/fieldset&gt;
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
                            to fill in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                legendData
                            </strong>{' '}
                            object. This object consists of the mandatory{' '}
                            <strong style={{ color: '#ff0000' }}>
                                legendData.legendText: string
                            </strong>{' '}
                            and an optional{' '}
                            <strong>classNameLegend: string</strong> which can
                            be used by you in order to style your components. If
                            you prefer styling your components inline, you can
                            add your styling rules to the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside the <strong>legendData</strong>{' '}
                            object. This{' '}
                            <strong style={{ color: '#ff0000' }}>
                                legendData
                            </strong>{' '}
                            object provides all necessary information what your
                            form is about inside a legend element: The{' '}
                            <strong style={{ color: '#ff0000' }}>
                                legendText
                            </strong>{' '}
                            is the heading of the form.
                        </p>
                        <div>
                            All possible selection options for each input
                            element with its corresponding label element of the
                            form are stored inside the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                inputLabelData
                            </strong>{' '}
                            object array. For each item you must provide an{' '}
                            <strong style={{ color: '#ff0000' }}>
                                id: string, inputType: 'checkbox' | 'radio' and
                                labelText: string
                            </strong>
                            . The{' '}
                            <strong style={{ color: '#ff0000' }}>
                                labelText: string
                            </strong>{' '}
                            is the value which is visually displayed next to its
                            corresponding option. Feel welcome to also apply
                            following optional parameters:
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
                                        <th style={{ textAlign: 'left' }}>
                                            parameter
                                        </th>
                                        <th style={{ textAlign: 'left' }}>
                                            type
                                        </th>
                                        <th style={{ textAlign: 'left' }}>
                                            for label / input
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>inputAutocomplete</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputAutofocus</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputChecked</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputDirname</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputDisabled</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputForm</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputFormnovalidate</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputList</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputMax</td>
                                        <td>number</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputMaxlength</td>
                                        <td>number</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputMin</td>
                                        <td>number</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputMinlength</td>
                                        <td>number</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputMultiple</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputName</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputPattern</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputPlaceholder</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputReadonly</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputRequired</td>
                                        <td>boolean</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputSize</td>
                                        <td>number</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputStep</td>
                                        <td>number</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>inputValue</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>labelForm</td>
                                        <td>string</td>
                                        <td>label</td>
                                    </tr>
                                    <tr>
                                        <td>classNameInput</td>
                                        <td>string</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>classNameLabel</td>
                                        <td>string</td>
                                        <td>label</td>
                                    </tr>
                                    <tr>
                                        <td>additionalStylingInput</td>
                                        <td>CSSProperties</td>
                                        <td>input</td>
                                    </tr>
                                    <tr>
                                        <td>additionalStylingLabel</td>
                                        <td>CSSProperties</td>
                                        <td>label</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            You can assign a{' '}
                            <strong>
                                classNameInput: string and classNameLabel:
                                string
                            </strong>{' '}
                            to each item of the <strong>inputLabelData</strong>{' '}
                            object array in order to style your components. If
                            you prefer styling your components inline, you can
                            add your CSS rules inside the{' '}
                            <strong>
                                additionalStylingInput: CSSProperites and
                                additionalStylingLabel: CSSProperties
                            </strong>{' '}
                            inside the <strong>inputLabelData</strong> object
                            array.
                        </p>
                        <p>
                            As the legend element and a div element which
                            contains an input with a label element are wrapped
                            inside a fieldset element, you can customize this
                            fieldset element by using the{' '}
                            <strong>fieldsetData</strong> object. There you can
                            apply every global fieldset attribute as well as
                            some styling. If you want to assign a WAI-ARIA role
                            to the fieldset element, you can do this by
                            assigning either the value{' '}
                            <strong>'presentation' | or 'radiogroup'</strong> to
                            the variable <strong>role</strong>.
                        </p>
                        <p>
                            If you want to wrap this component inside a form
                            element, feel welcome to fill out the{' '}
                            <strong>formData</strong> object. You have to option
                            to assign every single global form attribute.
                        </p>
                        <p>
                            If you want a custom function to be triggered
                            whenever an option is selected, you can pass it to{' '}
                            <strong>onClickFunction: () =&gt; void</strong>.
                        </p>
                        <p>
                            You cannot pass any child elements to this
                            component.
                        </p>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object and
                            applied to the fieldset element. You can use the
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
                                        <td>aria-disabled</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-errormessage</td>
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
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H71"
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

export default metaARIA2H71

type StoryARIA2H71 = StoryObj<typeof WCAGARIA2H71>

// WCAGNonTextComponentARIA2H71

export const Checkbox: StoryARIA2H71 = {
    render: () => (
        <WCAGARIA2H71
            legendData={{
                legendText: 'I really love (check all that apply):',
            }}
            inputLabelData={[
                {
                    id: 'chocolate',
                    labelText: 'Chocolate',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'ch',
                },
                {
                    id: 'candy',
                    labelText: 'Candy',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'ca',
                    inputChecked: true,
                },
                {
                    id: 'icecream',
                    labelText: 'Icecream',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'ic',
                    inputChecked: true,
                },
                {
                    id: 'nuts',
                    labelText: 'Nuts',
                    inputType: 'checkbox',
                    inputName: 'interests',
                    inputValue: 'nu',
                },
            ]}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const Radio: StoryARIA2H71 = {
    render: () => (
        <WCAGARIA2H71
            legendData={{
                legendText: 'The play Hamlet was written by:',
            }}
            inputLabelData={[
                {
                    id: 'shakesp',
                    labelText: 'William Shakespeare',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'a',
                    inputChecked: true,
                },
                {
                    id: 'austen',
                    labelText: 'Jane Austen',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'b',
                },
                {
                    id: 'gbshaw',
                    labelText: 'George Bernard Shaw',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'c',
                },
                {
                    id: 'woolf',
                    labelText: 'Virginia Woolf',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'd',
                },
                {
                    id: 'dickens',
                    labelText: 'Charles Dickens',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'e',
                },
            ]}
            formData={{ action: '/adduser', method: 'post' }}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const MissingObjectAttributes: StoryARIA2H71 = {
    render: () => (
        <WCAGARIA2H71
            legendData={{
                legendText: '',
            }}
            inputLabelData={[
                {
                    id: '',
                    labelText: '',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'a',
                    inputChecked: true,
                },
                {
                    id: '',
                    labelText: '',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'b',
                },
                {
                    id: '',
                    labelText: '',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'c',
                },
                {
                    id: '',
                    labelText: '',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'd',
                },
                {
                    id: '',
                    labelText: '',
                    inputType: 'radio',
                    inputName: 'hamlet',
                    inputValue: 'e',
                },
            ]}
            formData={{ action: '/adduser', method: 'post' }}
            onClickFunction={() => console.log('click')}
        />
    ),
}
