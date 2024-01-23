import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH39H43H51H63 from './WCAGH39H43H51H63'

const metaH39H43H51H63: Meta<typeof WCAGH39H43H51H63> = {
    component: WCAGH39H43H51H63,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH39: Using caption elements to associate data table
                        captions with data tables
                        <br />
                        WCAGH43: Using id and headers attributes to associate
                        data cells with header cells in data tables
                        <br />
                        WCAGH51: Using table markup to present tabular
                        information
                        <br />
                        WCAGH63: Using the scope attribute to associate header
                        cells and data cells in data tables
                    </Title>
                    <Subtitle>
                        <strong>
                            The goal of this component is to create lists of
                            related items using list elements appropriate for
                            their purpuses (ul, ol and dl elements).
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;ul&gt;&lt;ul&gt;<em> item </em>
                                &lt;/ul&gt;&lt;/ul&gt;
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
                            There is{' '}
                            <strong style={{ color: '#ff0000' }}>
                                no mandatory parameter
                            </strong>{' '}
                            for this component.
                        </p>
                        <p>
                            You can pass any{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element: be it a string, a div element or a whole
                            different component.
                        </p>
                        <div>
                            These are the available WAI-ARIA role parameters for
                            the attribute <strong>role: string</strong> which is
                            applied to the q element:
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
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling</strong> object.
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H49"
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

export default metaH39H43H51H63

type StoryH39H43H51H63 = StoryObj<typeof WCAGH39H43H51H63>

// WCAGNonTextComponentH39H43H51H63

export const Table: StoryH39H43H51H63 = {
    render: () => (
        <WCAGH39H43H51H63
            captionText="Schedule for next week:"
            tableType="layout"
            tableContent={[
                [
                    { text: 'Time', isHeader: true },
                    { text: 'Monday', isHeader: true },
                    { text: 'Tuesday', isHeader: true },
                    { text: 'Wednesday', isHeader: true },
                    { text: 'Thursday', isHeader: true },
                    { text: 'Friday', isHeader: true },
                ],
                [
                    { text: '8:00 - 9:00', isHeader: true },
                    { text: 'Meet with Sam' },
                    { text: '' },
                    { text: '' },
                    { text: '' },
                    { text: '' },
                ],
                [
                    { text: '9:00 - 10:00', isHeader: true },
                    { text: '' },
                    { text: 'Hit the Gym' },
                    { text: 'Doctor Williams' },
                    { text: 'Sam again' },
                    { text: 'Leave for San Antonio' },
                ],
                [
                    { text: '10:00 - 11:00', isHeader: true },
                    { text: 'Meet with Chris' },
                    { text: '' },
                    { text: 'Data Analysis' },
                    { text: 'Sam again' },
                    { text: 'Bus' },
                ],
            ]}
        />
    ),
}

export const MultipleHeaders: StoryH39H43H51H63 = {
    render: () => (
        <WCAGH39H43H51H63
            tableType="data"
            captionText="Schedule for next week:"
            tableContent={[
                [
                    { text: 'Homework', isHeader: true, rowspan: 2, id: 'h' },
                    { text: 'Exams', isHeader: true, colspan: 3, id: 'e' },
                    { text: 'Projects', isHeader: true, colspan: 3, id: 'p' },
                ],
                [
                    { text: '1', isHeader: true, id: 'e1', headers: 'e' },
                    { text: '2', isHeader: true, id: 'e2', headers: 'e' },
                    { text: 'Final', isHeader: true, id: 'ef', headers: 'e' },
                    { text: '1', isHeader: true, id: 'p1', headers: 'p' },
                    { text: '2', isHeader: true, id: 'p2', headers: 'p' },
                    { text: 'Final', isHeader: true, id: 'pf', headers: 'p' },
                ],
                [
                    { text: '15%', headers: 'h' },
                    { text: '15%', headers: 'e e1' },
                    { text: '15%', headers: 'e e2' },
                    { text: '20%', headers: 'e ef' },
                    { text: '10%', headers: 'p p1' },
                    { text: '10%', headers: 'p p2' },
                    { text: '15%', headers: 'p pf' },
                ],
            ]}
        />
    ),
}

export const Scopes: StoryH39H43H51H63 = {
    render: () => (
        <WCAGH39H43H51H63
            additionalStyling={{ border: 1 }}
            tableType="data"
            captionText="Contact information"
            tableContent={[
                [
                    { text: '' },
                    { text: 'Name', isHeader: true, scope: 'col' },
                    { text: 'Phone#', isHeader: true, scope: 'col' },
                    { text: 'Fax#', isHeader: true, scope: 'col' },
                    { text: 'City', isHeader: true, scope: 'col' },
                ],
                [
                    { text: '1.' },
                    { text: 'Joel Garner', isHeader: true, scope: 'row' },
                    { text: '412-212-5421' },
                    { text: '412-212-5400' },
                    { text: 'Pittsburgh' },
                ],
                [
                    { text: '2.' },
                    { text: 'Clive Lloyd', isHeader: true, scope: 'row' },
                    { text: '410-306-1420' },
                    { text: '410-306-5400' },
                    { text: 'Baltimore' },
                ],
                [
                    { text: '3.' },
                    { text: 'Gordon Greenidge', isHeader: true, scope: 'row' },
                    { text: '281-565-6720' },
                    { text: '281-565-6600' },
                    { text: 'Houston' },
                ],
            ]}
        />
    ),
}
