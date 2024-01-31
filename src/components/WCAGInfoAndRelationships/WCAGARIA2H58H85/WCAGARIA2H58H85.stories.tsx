import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA2H58H85 from './WCAGARIA2H58H85'

const metaARIA2H85: Meta<typeof WCAGARIA2H58H85> = {
    component: WCAGARIA2H58H85,
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
                        WCAGH85: Using optgroup to group option elements inside
                        a select
                    </Title>
                    <Subtitle>
                        <p>
                            <strong>
                                By using this component you fulfil the success
                                criteria{' '}
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
                                This component groups items in a selection list
                                programmatically and visually. It returns a form
                                element wrapped around a label which describes
                                the following select element. Inside the select
                                element there is also as many optgroup elements
                                with the corressponing option elements as you
                                wish. It also allows you to specify the human
                                language your element uses if it is different
                                than the human language of your web page.
                            </strong>
                        </p>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;form&gt;
                                <br />
                                &emsp;&lt;label&gt; labelData.labelText
                                &lt;/label&gt;
                                <br />
                                &emsp;&emsp;&lt;select&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;optgroup&gt;
                                <br />
                                &emsp;&emsp;&emsp;&emsp;&lt;option lang="de"&gt;
                                <em> option </em>
                                &lt;/option&gt;
                                <br />
                                &emsp;&emsp;&emsp;&emsp;&lt;option lang="de"&gt;
                                <em> option </em>
                                &lt;/option&gt;
                                <br />
                                &emsp;&emsp;&lt;/optgroup&gt;
                                <br />
                                &emsp;&lt;/select&gt;
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
                            to provide the values for the form container. The
                            data for the form element is stored inside the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                formData
                            </strong>{' '}
                            object with its mandatory{' '}
                            <strong style={{ color: '#ff0000' }}>
                                method: 'get' | 'post'
                            </strong>{' '}
                            parameter. You can assign any other global form
                            elements to this object.
                        </p>
                        <p>
                            The next step is to provide the data for the label
                            element. This data is stored inside the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                labelData
                            </strong>{' '}
                            object with its mandatory value{' '}
                            <strong style={{ color: '#ff0000' }}>
                                labelText: ReactNode
                            </strong>
                            . This value acts as the description of the select
                            element, which can be a string, a div or a whole
                            different component. You can also apply a value for
                            its{' '}
                            <strong>className: string and form: string</strong>.
                        </p>
                        <p>
                            Then, you need to specify the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                selectData
                            </strong>{' '}
                            object with its mandatory{' '}
                            <strong style={{ color: '#ff0000' }}>
                                id: string and name: string
                            </strong>{' '}
                            values. The id links to the label element, the name
                            is the name of the select element. You can also add
                            any other global select attributes to this object
                            optionally.
                        </p>
                        <p>
                            Inside the tow dimensional{' '}
                            <strong style={{ color: '#ff0000' }}>
                                optionDataGroup
                            </strong>{' '}
                            object array you need to supply the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                labelGroup: string
                            </strong>{' '}
                            name for each option group.
                        </p>
                        <p>
                            There is a corresponding two dimensional{' '}
                            <strong style={{ color: '#ff0000' }}>
                                optionData
                            </strong>{' '}
                            object array which needs the values{' '}
                            <strong style={{ color: '#ff0000' }}>
                                text: string and value: string
                            </strong>
                            . Text is the visual text, value is for the html
                            document.
                        </p>
                        <p>
                            If the human language inside your option html
                            element is different than the human language which
                            is set for your web page, you must set it to the
                            correct human language. For this you have to use the{' '}
                            <strong>lang.language: string</strong> variable
                            inside the two dimensional{' '}
                            <strong>optionData</strong> object array which
                            accepts one of the{' '}
                            <a
                                href="https://www.w3schools.com/tags/ref_language_codes.asp"
                                target="_blank"
                            >
                                language codes defined in ISO 639-1
                            </a>
                            .
                        </p>
                        <p>
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> which are
                            applied to the form element:{' '}
                            <strong>'presentation' and 'search'</strong>.
                        </p>
                        <p>You cannot pass any child elements.</p>
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
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H85"
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

export default metaARIA2H85

type StoryARIA2H85 = StoryObj<typeof WCAGARIA2H58H85>

// WCAGNonTextComponentARIA2H85

export const SeeMultipleTrue: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{
                action: '/animals/',
                method: 'post',
            }}
            labelData={{
                labelText: 'Pick your favourite animals:',
            }}
            selectData={{
                id: 'animals',
                seeMultiple: true,
                name: 'animals',
                size: 10,
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: 'brontosaurus', text: 'Brontosaurus' },
                    { value: 'pterodactyl', text: 'Pterodactyl' },
                    { value: 'trex', text: 'T-Rex' },
                    { value: 'velociraptor', text: 'Velociraptor' },
                ],
                [
                    { value: 'camel', text: 'Camel' },
                    { value: 'giraffe', text: 'Giraffe' },
                    { value: 'hippo', text: 'Hippo' },
                    { value: 'horse', text: 'Horse' },
                    { value: 'zebra', text: 'Zebra' },
                ],
                [
                    { value: 'cat', text: 'Cat' },
                    { value: 'dog', text: 'Dog' },
                    { value: 'fish', text: 'Fish' },
                    { value: 'rabbit', text: 'Rabbit' },
                ],
            ]}
        />
    ),
}

export const SeeMultipleFalse: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{ action: '/favorite-food/', method: 'post' }}
            labelData={{
                labelText: 'What is your favorite food?',
            }}
            selectData={{
                id: 'food',
                name: 'food',
            }}
            optionDataGroup={[
                [{ labelGroup: 'Fruits' }],
                [{ labelGroup: 'Vegetables' }],
                [{ labelGroup: 'Baked Goods' }],
            ]}
            optionData={[
                [
                    { value: '1', text: 'Apples' },
                    { value: '2', text: 'Bananas' },
                    { value: '3', text: 'Peaches' },
                ],
                [
                    { value: '4', text: 'Broccoli' },
                    { value: '5', text: 'Carrots' },
                    { value: '6', text: 'Cucmbers' },
                ],
                [
                    { value: '7', text: 'Apple Pie' },
                    { value: '8', text: 'Bagel' },
                    { value: '9', text: 'Chocolate Cake' },
                ],
            ]}
        />
    ),
}

export const WrongLabelText: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{
                action: '/animals/',
                method: 'post',
            }}
            labelData={{
                labelText: false,
            }}
            selectData={{
                id: 'animals',
                seeMultiple: true,
                name: 'animals',
                size: 10,
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: 'brontosaurus', text: 'Brontosaurus' },
                    { value: 'pterodactyl', text: 'Pterodactyl' },
                    { value: 'trex', text: 'T-Rex' },
                    { value: 'velociraptor', text: 'Velociraptor' },
                ],
                [
                    { value: 'camel', text: 'Camel' },
                    { value: 'giraffe', text: 'Giraffe' },
                    { value: 'hippo', text: 'Hippo' },
                    { value: 'horse', text: 'Horse' },
                    { value: 'zebra', text: 'Zebra' },
                ],
                [
                    { value: 'cat', text: 'Cat' },
                    { value: 'dog', text: 'Dog' },
                    { value: 'fish', text: 'Fish' },
                    { value: 'rabbit', text: 'Rabbit' },
                ],
            ]}
        />
    ),
}

export const WrongSelectData: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{
                action: '/animals/',
                method: 'post',
            }}
            labelData={{
                labelText: 'Pick your favourite animals:',
            }}
            selectData={{
                id: ' ',
                seeMultiple: true,
                name: ' ',
                size: 10,
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: 'brontosaurus', text: 'Brontosaurus' },
                    { value: 'pterodactyl', text: 'Pterodactyl' },
                    { value: 'trex', text: 'T-Rex' },
                    { value: 'velociraptor', text: 'Velociraptor' },
                ],
                [
                    { value: 'camel', text: 'Camel' },
                    { value: 'giraffe', text: 'Giraffe' },
                    { value: 'hippo', text: 'Hippo' },
                    { value: 'horse', text: 'Horse' },
                    { value: 'zebra', text: 'Zebra' },
                ],
                [
                    { value: 'cat', text: 'Cat' },
                    { value: 'dog', text: 'Dog' },
                    { value: 'fish', text: 'Fish' },
                    { value: 'rabbit', text: 'Rabbit' },
                ],
            ]}
        />
    ),
}

export const OneWrongLabelGroup: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{ action: '/favorite-food/', method: 'post' }}
            labelData={{
                labelText: 'What is your favorite food?',
            }}
            selectData={{
                id: 'food',
                name: 'food',
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: ' ' }],
            ]}
            optionData={[
                [
                    { value: '1', text: 'Apples' },
                    { value: '2', text: 'Bananas' },
                    { value: '3', text: 'Peaches' },
                ],
                [
                    { value: '4', text: 'Broccoli' },
                    { value: '5', text: 'Carrots' },
                    { value: '6', text: 'Cucmbers' },
                ],
                [
                    { value: '7', text: 'Apple Pie' },
                    { value: '8', text: 'Bagel' },
                    { value: '9', text: 'Chocolate Cake' },
                ],
            ]}
        />
    ),
}

export const AllWrongLabelGroup: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{ action: '/favorite-food/', method: 'post' }}
            labelData={{
                labelText: 'What is your favorite food?',
            }}
            selectData={{
                id: 'food',
                name: 'food',
            }}
            optionDataGroup={[
                [{ labelGroup: '' }],
                [{ labelGroup: ' ' }],
                [{ labelGroup: '  ' }],
            ]}
            optionData={[
                [
                    { value: '1', text: 'Apples' },
                    { value: '2', text: 'Bananas' },
                    { value: '3', text: 'Peaches' },
                ],
                [
                    { value: '4', text: 'Broccoli' },
                    { value: '5', text: 'Carrots' },
                    { value: '6', text: 'Cucmbers' },
                ],
                [
                    { value: '7', text: 'Apple Pie' },
                    { value: '8', text: 'Bagel' },
                    { value: '9', text: 'Chocolate Cake' },
                ],
            ]}
        />
    ),
}

export const OneWrongText: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{ action: '/favorite-food/', method: 'post' }}
            labelData={{
                labelText: 'What is your favorite food?',
            }}
            selectData={{
                id: 'food',
                name: 'food',
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: '1', text: 'Item 1' },
                    { value: '2', text: 'Item 2' },
                    { value: '3', text: '  ' },
                ],
                [
                    { value: '4', text: 'Item 4' },
                    { value: '5', text: '   ' },
                    { value: '6', text: 'Item 6' },
                ],
                [
                    { value: '7', text: '' },
                    { value: '8', text: 'Item 8' },
                    { value: '9', text: 'Item 9' },
                ],
            ]}
        />
    ),
}

export const AllWrongText: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{ action: '/favorite-food/', method: 'post' }}
            labelData={{
                labelText: 'What is your favorite food?',
            }}
            selectData={{
                id: 'food',
                name: 'food',
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: '1', text: '' },
                    { value: '2', text: '' },
                    { value: '3', text: ' ' },
                ],
                [
                    { value: '4', text: '  ' },
                    { value: '5', text: '' },
                    { value: '6', text: '    ' },
                ],
                [
                    { value: '7', text: '' },
                    { value: '8', text: ' ' },
                    { value: '9', text: '  ' },
                ],
            ]}
        />
    ),
}

export const OneWrongValue: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{
                action: '/animals/',
                method: 'post',
            }}
            labelData={{
                labelText: 'Pick your favourite animals:',
            }}
            selectData={{
                id: 'food',
                seeMultiple: true,
                name: 'food',
                size: 10,
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: '1', text: 'Brontosaurus' },
                    { value: '2', text: 'Pterodactyl' },
                    { value: '3', text: 'T-Rex' },
                    { value: ' ', text: 'Velociraptor' },
                ],
                [
                    { value: '5', text: 'Camel' },
                    { value: '   ', text: 'Giraffe' },
                    { value: '7', text: 'Hippo' },
                    { value: '8', text: 'Horse' },
                    { value: ' ', text: 'Zebra' },
                ],
                [
                    { value: '10', text: 'Cat' },
                    { value: '11', text: 'Dog' },
                    { value: '  ', text: 'Fish' },
                    { value: ' ', text: 'Rabbit' },
                ],
            ]}
        />
    ),
}

export const AllWrongValue: StoryARIA2H85 = {
    render: () => (
        <WCAGARIA2H58H85
            formData={{
                action: '/animals/',
                method: 'post',
            }}
            labelData={{
                labelText: 'Pick your favourite animals:',
            }}
            selectData={{
                id: 'food',
                seeMultiple: true,
                name: 'food',
                size: 10,
            }}
            optionDataGroup={[
                [{ labelGroup: 'Dinosaurs' }],
                [{ labelGroup: 'Ungulates' }],
                [{ labelGroup: 'Household Pets' }],
            ]}
            optionData={[
                [
                    { value: '', text: 'Brontosaurus' },
                    { value: ' ', text: 'Pterodactyl' },
                    { value: '', text: 'T-Rex' },
                    { value: '  ', text: 'Velociraptor' },
                ],
                [
                    { value: '', text: 'Camel' },
                    { value: ' ', text: 'Giraffe' },
                    { value: ' ', text: 'Hippo' },
                    { value: '', text: 'Horse' },
                    { value: '   ', text: 'Zebra' },
                ],
                [
                    { value: '', text: 'Cat' },
                    { value: ' ', text: 'Dog' },
                    { value: ' ', text: 'Fish' },
                    { value: '  ', text: 'Rabbit' },
                ],
            ]}
        />
    ),
}
