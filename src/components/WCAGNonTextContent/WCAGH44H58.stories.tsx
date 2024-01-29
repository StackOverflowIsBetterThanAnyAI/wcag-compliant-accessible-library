import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH44H58 from './WCAGH44H58'

const metaH44: Meta<typeof WCAGH44H58> = {
    component: WCAGH44H58,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH44: Using label elements to associate text labels
                        with form controls
                        <br />
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                    </Title>
                    <Subtitle>
                        <strong>
                            This component links a label element directly to
                            either an input or a select or a textarea element by
                            requiring a unique ID for both elements. It also
                            allows you to specify the human language your
                            element uses if it is different than the human
                            language of your web page.
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;&gt;
                                <br />
                                &emsp;&lt;label lang="de"&gt; labelText
                                &lt;/label&gt;
                                <br />
                                &emsp;&lt;select/textarea/input&gt;
                                <em> options </em>&lt;/
                                select/textarea/input&gt;
                                <br />
                                &lt;/&gt;
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
                        <div>
                            In order to use this component correctly, you need
                            to provide the input type. You must select one of
                            the following values and assign it to the variable{' '}
                            <strong style={{ color: '#ff0000' }}>
                                inputType: string
                            </strong>
                            : By choosing{' '}
                            <strong>'select' or 'textarea'</strong>, a select or
                            a textarea element are returned, else an input
                            element is returned.
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
                                            value
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>'checkbox'</td>
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
                                        <td>'month'</td>
                                    </tr>
                                    <tr>
                                        <td>'number'</td>
                                    </tr>
                                    <tr>
                                        <td>'password'</td>
                                    </tr>
                                    <tr>
                                        <td>'radio'</td>
                                    </tr>
                                    <tr>
                                        <td>'range'</td>
                                    </tr>
                                    <tr>
                                        <td>'search'</td>
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
                                    <tr>
                                        <td>'select'</td>
                                    </tr>
                                    <tr>
                                        <td>'textarea'</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            As this component renders a simple label and a
                            select/textarea/input element, you are also free to
                            assign every possible property of the these elements
                            to the elements of this component. These attributes
                            can be applied to the <strong>inputData</strong>{' '}
                            object. You need to pass values for the unique{' '}
                            <strong style={{ color: '#ff0000' }}>
                                id: string
                            </strong>
                            , the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                labelText: ReactNode
                            </strong>{' '}
                            which can either be a string, a div or a whole
                            component, but no array, boolean or function values,
                            and a{' '}
                            <strong style={{ color: '#ff0000' }}>
                                name: string
                            </strong>{' '}
                            for the second element. The other properties are
                            optional. The{' '}
                            <strong style={{ color: '#ff0000' }}>
                                labelText
                            </strong>{' '}
                            contains the text that is describing the
                            select/textarea/input element accuratelly. If you
                            want to return a select element, you can store your
                            options inside the optional{' '}
                            <strong>selectOptionsNode: ReactNode</strong>{' '}
                            parameter. But watch out: You need to save your
                            options in the
                            <br />
                            <code>
                                &lt;&gt;&lt;option&gt;...&lt;/option&gt;&lt;option&gt;...&lt;/option&gt;&lt;/&gt;
                            </code>
                            <br />
                            format!
                        </p>
                        <p>
                            If the human language of any labelText item inside
                            your <strong>inputData</strong> object array is
                            different than the human language which is set for
                            your web page, you must set it to the correct human
                            language. For this you have to use the{' '}
                            <strong>inputData.lang: string</strong> variable
                            inside your <strong>inputData</strong> object array
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
                            <strong>
                                inputData.classNameLabel: string or
                                inputData.classNameInput: string
                            </strong>{' '}
                            inside the <strong>inputData</strong> object to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>
                                inputData.additionalStylingLabel or
                                inputData.additionalStylingInput
                            </strong>{' '}
                            variable inside of the <strong>inputData</strong>{' '}
                            object.
                        </p>
                        <p>
                            If you want to pass your own function that is
                            triggered by an onClick event, you can pass it to{' '}
                            <strong>onClickFunction: () =&gt; void</strong>.
                        </p>
                        <div>
                            In terms of supplying WAI-ARIA roles, you are very
                            limited: The label und textarea elements mustn't
                            receive any roles. The <strong>select</strong>{' '}
                            element can be passed the role{' '}
                            <strong>'menu'</strong>, but only when there is{' '}
                            <strong>
                                no 'multiple' abbtribute and no 'size' attribute
                                having a value greater than 1
                            </strong>
                            . The following <strong>role: string</strong> values
                            can be assigned to the <strong>input</strong>{' '}
                            element (if your input type is not listed, you
                            should not provide any role):
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
                                        <th style={{ textAlign: 'left' }}>
                                            inputType
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>button</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>checkbox </td>
                                    </tr>
                                    <tr>
                                        <td>combobox</td>
                                        <td></td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>menuitemcheckbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>checkbox</td>
                                    </tr>
                                    <tr>
                                        <td>menuitemradio</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>radio</td>
                                    </tr>
                                    <tr>
                                        <td>option</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>checkbox</td>
                                    </tr>
                                    <tr>
                                        <td>searchbox</td>
                                        <td></td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>spinbutton</td>
                                        <td></td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>switch</td>
                                        <td></td>
                                        <td>checkbox</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            To make the label element more accessible, you can
                            also use optional additional WAI-ARIA attributes.
                            They are stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object.
                            You can use the following WAI-ARIA attributes, but
                            without the 'aria-' prefix.
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
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H44"
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

export default metaH44

type StoryH44 = StoryObj<typeof WCAGH44H58>

// WCAGNonTextComponentH44

export const Checkbox: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'webprogramming',
                    id: 'markuplang',
                    labelText: 'HTML',
                },
                {
                    name: 'css',
                    id: 'markuplang',
                    labelText: 'CSS',
                },
            ]}
            inputType="checkbox"
        />
    ),
}

export const Color: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'favourite color',
                    id: 'color',
                    labelText: 'What is your favourite color?',
                },
            ]}
            inputType="color"
        />
    ),
}

export const Date: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'birthday',
                    id: 'bday',
                    labelText: 'When is your birthday?',
                },
            ]}
            inputType="date"
        />
    ),
}

export const Text: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'firstname',
                    id: 'firstname',
                    labelText: 'First name:',
                },
            ]}
            inputType="text"
        />
    ),
}

export const TextArea: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'Write an essay containing 250 words!',
                    id: 'essay',
                    labelText: 'My essay',
                    value: 'Hello World!',
                },
            ]}
            inputType="textarea"
        />
    ),
}

export const Group: StoryH44 = {
    render: () => (
        <form>
            <fieldset>
                <legend>Pick the doughnut you would like</legend>
                <WCAGH44H58
                    inputData={[
                        {
                            name: 'flavor',
                            id: 'dn-choc',
                            labelText: 'Chocolate',
                            value: 'chocolate',
                        },
                        {
                            name: 'flavor',
                            id: 'dn-cream',
                            labelText: 'Cream Filled',
                            value: 'cream',
                        },
                        {
                            name: 'flavor',
                            id: 'dn-rasp',
                            labelText: 'Raspberry Filled',
                            value: 'raspberry',
                        },
                    ]}
                    inputType="radio"
                    onClickFunction={() => console.log('click')}
                />
            </fieldset>
            <input type="submit" value="Purchase Your Doughnut" />
        </form>
    ),
}

export const Select: StoryH44 = {
    render: () => (
        <WCAGH44H58
            role="menu"
            inputData={[
                {
                    id: 'car',
                    name: 'car',
                    labelText: 'Choose a car:',
                    value: '0',
                    selectOptionsNode: (
                        <>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </>
                    ),
                },
            ]}
            inputType="select"
        />
    ),
}

export const WrongId: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'webprogramming',
                    id: '',
                    labelText: 'HTML',
                },
                {
                    name: 'css',
                    id: '',
                    labelText: 'CSS',
                },
            ]}
            inputType="checkbox"
        />
    ),
}

export const WrongName: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: '',
                    id: 'markuplang',
                    labelText: 'HTML',
                },
                {
                    name: '',
                    id: 'markuplang',
                    labelText: 'CSS',
                },
            ]}
            inputType="checkbox"
        />
    ),
}

export const EmptyLabelText: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'html',
                    id: 'markuplang',
                    labelText: '',
                },
                {
                    name: 'css',
                    id: 'markuplang',
                    labelText: '',
                },
            ]}
            inputType="checkbox"
        />
    ),
}

export const LabelTextContainsEmptyChild: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'html',
                    id: 'markuplang',
                    labelText: <div></div>,
                },
                {
                    name: 'css',
                    id: 'markuplang',
                    labelText: <span></span>,
                },
            ]}
            inputType="checkbox"
        />
    ),
}

export const LabelTextContainsWrongTypes: StoryH44 = {
    render: () => (
        <WCAGH44H58
            inputData={[
                {
                    name: 'html',
                    id: 'markuplang',
                    labelText: true,
                },
                {
                    name: 'css',
                    id: 'markuplang',
                    labelText: false,
                },
            ]}
            inputType="checkbox"
        />
    ),
}
