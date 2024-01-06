import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentH36 from './WCAGNonTextContentH36'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaH36: Meta<typeof WCAGNonTextContentH36> = {
    component: WCAGNonTextContentH36,
}

export default metaH36

type StoryH36 = StoryObj<typeof WCAGNonTextContentH36>

// WCAGNonTextComponentH36

export const Image: StoryH36 = {
    render: () => (
        <WCAGNonTextContentH36
            altText="Search button."
            src={starImage}
            height={50}
            width={50}
        />
    ),
}
