import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA2H36 from './WCAGARIA2H36'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA2H36: Meta<typeof WCAGARIA2H36> = {
    component: WCAGARIA2H36,
}

export default metaARIA2H36

type StoryARIA2H36 = StoryObj<typeof WCAGARIA2H36>

// WCAGNonTextComponentARIA2H36

export const ButtonImage: StoryARIA2H36 = {
    render: () => (
        <WCAGARIA2H36
            altText="Search button."
            src={starImage}
            additionalStyling={{ height: 50, width: 50 }}
            role="button"
            inputData={{ required: false }}
            onClickFunction={() => console.log('click')}
        />
    ),
}

export const LinkImage: StoryARIA2H36 = {
    render: () => (
        <WCAGARIA2H36
            altText="Go back to the main content."
            src={starImage}
            additionalStyling={{ height: 50, width: 50 }}
            role="link"
            inputData={{ required: false }}
            onClickFunction={() => console.log('click')}
        />
    ),
}
