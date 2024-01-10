import type { Meta, StoryObj } from '@storybook/react'

import WCAGH39H51 from './WCAGH39H51'

const metaH39H51: Meta<typeof WCAGH39H51> = {
    component: WCAGH39H51,
}

export default metaH39H51

type StoryH39H51 = StoryObj<typeof WCAGH39H51>

// WCAGNonTextComponentH39H51

export const Table: StoryH39H51 = {
    render: () => (
        <WCAGH39H51
            captionText="Schedule for next week:"
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
