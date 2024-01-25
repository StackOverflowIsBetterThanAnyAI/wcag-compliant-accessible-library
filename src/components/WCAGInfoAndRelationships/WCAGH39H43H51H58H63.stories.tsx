import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH39H43H51H58H63 from './WCAGH39H43H51H58H63'

const metaH39H43H51H63: Meta<typeof WCAGH39H43H51H58H63> = {
    component: WCAGH39H43H51H58H63,
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
                        WCAGH58: Using language attributes to identify changes
                        in the human language
                        <br />
                        WCAGH63: Using the scope attribute to associate header
                        cells and data cells in data tables
                    </Title>
                    <Subtitle>
                        <strong>
                            The goal of this component is to present tabular
                            information in a way that preserves relationships
                            within the information even when the table cannot
                            visually be seen. It also uses captions in order to
                            programmatically associate captions for data tables.
                            It also makes use of the id, headers and scope
                            attributes. It also allows you to specify the human
                            language your element uses if it is different than
                            the human language of your web page.
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;table&gt;
                                <br />
                                &emsp;&lt;caption&gt; captionText
                                &lt;/caption&gt;
                                <br />
                                &emsp;&lt;tobdy&gt;
                                <br />
                                &emsp;&emsp;&lt;tr&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;th id="id" scope="col"
                                lang="de"&gt;
                                <em> header </em>
                                &lt;/th&gt;
                                <br />
                                &emsp;&emsp;&lt;/tr&gt;
                                <br />
                                &emsp;&emsp;&lt;tr headers="id"&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;td lang="de"&gt;
                                <em> item </em>
                                &lt;/td&gt;
                                <br />
                                &emsp;&emsp;&lt;/tr&gt;
                                <br />
                                &emsp;&emsp;&lt;tr headers="id"&gt;
                                <br />
                                &emsp;&emsp;&emsp;&lt;td lang="de"&gt;
                                <em> item </em>
                                &lt;/td&gt;
                                <br />
                                &emsp;&emsp;&lt;/tr&gt;
                                <br />
                                &emsp;&lt;/tobdy&gt;
                                <br />
                                &lt;/table&gt;
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
                            First of all, you need to specify the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                tableType: 'data' | 'layout'
                            </strong>
                            . This information is needed, because if the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                tableType equals data
                            </strong>
                            , you must check following:
                            <section
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
                                    padding: '2% 5%',
                                }}
                            >
                                <strong>Check:</strong>
                                <ul>
                                    <li>
                                        Check that all th elements have a scope
                                        attribute.
                                    </li>
                                    <li>
                                        Check that all td elements that act as
                                        headers for other elements have a scope
                                        attribute.
                                    </li>
                                    <li>
                                        Check that all scope attributes have the
                                        value row, col, rowgroup, or colgroup.
                                    </li>
                                    <li>
                                        Check that any cell that is associated
                                        with more than one row and/or one column
                                        header contains a headers attribute that
                                        lists the id for all headers associated
                                        with that cell.
                                    </li>
                                    <li>
                                        If any cell contains an id or headers
                                        attribute, check that each id listed in
                                        the headers attribute of the data cell
                                        matches the id attribute of a cell that
                                        is used as a header element.
                                    </li>
                                    <li>
                                        If any cell contains an id or headers
                                        attribute, check that the headers
                                        attribute of a data cell contains the id
                                        attribute of all headers associated with
                                        the data cell.
                                    </li>
                                    <li>
                                        If any cell contains an id or headers
                                        attribute, check that all ids are unique
                                        (that is, no two elements in the page
                                        have the same id).
                                    </li>
                                    <li>
                                        Check that the table has content that is
                                        presented as a table caption.
                                    </li>
                                    <li>
                                        Check that the table includes a caption
                                        element.
                                    </li>
                                    <li>
                                        Check that the content of the caption
                                        element identifies the table.
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <p>
                            Next, setup the table content. You have the two
                            dimensional{' '}
                            <strong style={{ color: '#ff0000' }}>
                                tableContent
                            </strong>{' '}
                            object array for that. Each item needs a{' '}
                            <strong style={{ color: '#ff0000' }}>text</strong>{' '}
                            value which is the name of the cell. If your{' '}
                            <strong style={{ color: '#ff0000' }}>
                                tableType equals data
                            </strong>
                            , you also need to specify an{' '}
                            <strong>
                                id: string, headers: string and scope: 'col' |
                                'colgroup' | 'row' | 'rowgroup'
                            </strong>{' '}
                            value for each item.
                        </p>
                        <p>You cannot pass any child elements.</p>
                        <p>
                            If the human language inside your cells is different
                            than the human language which is set for your web
                            page, you must set it to the correct human language.
                            For this you have to use the{' '}
                            <strong>lang.language: string</strong> variable
                            inside the two dimensional{' '}
                            <strong>tableContent</strong> object array which
                            accepts one of the{' '}
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
                            applied to the table element:
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
                            If you want your table to receive a caption element,
                            you can assign a text value to{' '}
                            <strong>captionText: string</strong>. If your{' '}
                            <strong style={{ color: '#ff0000' }}>
                                tableType equals data
                            </strong>
                            , you <strong>must</strong> specify a caption.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>
                                classNameTable: string, classNameRow: string,
                                classNameHeader: string, classNameCell: string
                                and classNameCaption: string
                            </strong>{' '}
                            to your component, which allows you to apply your
                            styling to your new accessible component. If you
                            prefer styling your components inline, feel free to
                            use the{' '}
                            <strong>
                                additionalStylingTable: CSSProperties,
                                additionalStylingRow: CSSProperties,
                                additionalStylingHeader: CSSProperties,
                                additionalStylingCell: CSSProperties and
                                additionalStylingCaption: CSSProperties
                            </strong>{' '}
                            objects.
                        </p>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object and
                            applied to the table element. You can use the
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
                                        <td>aria-label</td>
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
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H51"
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

type StoryH39H43H51H63 = StoryObj<typeof WCAGH39H43H51H58H63>

// WCAGNonTextComponentH39H43H51H63

export const Table: StoryH39H43H51H63 = {
    render: () => (
        <WCAGH39H43H51H58H63
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
        <WCAGH39H43H51H58H63
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
        <WCAGH39H43H51H58H63
            additionalStylingTable={{ border: 1 }}
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
