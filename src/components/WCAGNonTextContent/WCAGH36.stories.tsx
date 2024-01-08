import type { Meta, StoryObj } from '@storybook/react'

import WCAGH36 from './WCAGH36'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH36: Meta<typeof WCAGH36> = {
    component: WCAGH36,
}

export default metaH36

type StoryH36 = StoryObj<typeof WCAGH36>

// WCAGNonTextComponentH36

export const Image: StoryH36 = {
    render: () => (
        <WCAGH36
            altText="Search button."
            src={starImage}
            height={50}
            width={50}
        />
    ),
}
