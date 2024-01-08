import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA12 from './WCAGARIA12'

const metaARIA12: Meta<typeof WCAGARIA12> = {
    component: WCAGARIA12,
}

export default metaARIA12

type StoryARIA12 = StoryObj<typeof WCAGARIA12>

// WCAGNonTextComponentARIA12

export const AllRoles: StoryARIA12 = {
    render: () => (
        <>
            <WCAGARIA12 ariaLevel={1}>Headline Level 1</WCAGARIA12>
            <WCAGARIA12 ariaLevel={2}>Headline Level 2</WCAGARIA12>
            <WCAGARIA12 ariaLevel={3}>Headline Level 3</WCAGARIA12>
            <WCAGARIA12 ariaLevel={4}>Headline Level 4</WCAGARIA12>
            <WCAGARIA12 ariaLevel={5}>Headline Level 5</WCAGARIA12>
            <WCAGARIA12 ariaLevel={6}>Headline Level 6</WCAGARIA12>
            <WCAGARIA12 ariaLevel={7}>Headline Level 7</WCAGARIA12>
        </>
    ),
}
