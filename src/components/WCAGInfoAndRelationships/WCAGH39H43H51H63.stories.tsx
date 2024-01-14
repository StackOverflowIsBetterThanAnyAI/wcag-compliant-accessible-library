import type { Meta, StoryObj } from '@storybook/react'

import WCAGH39H43H51H63 from './WCAGH39H43H51H63'

const metaH39H43H51H63: Meta<typeof WCAGH39H43H51H63> = {
    component: WCAGH39H43H51H63,
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
