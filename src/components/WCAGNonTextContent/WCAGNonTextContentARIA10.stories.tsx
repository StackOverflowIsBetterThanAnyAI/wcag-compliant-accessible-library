import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentARIA10 from './WCAGNonTextContentARIA10'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA10: Meta<typeof WCAGNonTextContentARIA10> = {
    component: WCAGNonTextContentARIA10,
}

export default metaARIA10

type StoryARIA10 = StoryObj<typeof WCAGNonTextContentARIA10>

// WCAGNonTextComponentARIA10

export const Image: StoryARIA10 = {
    render: () => (
        <WCAGNonTextContentARIA10
            role="img"
            ariaLabelledById="star-id!"
            textContent="four out of five"
        >
            <>
                <img src={starImage} alt="" />
                <img src={starImage} alt="" />
                <img src={starImage} alt="" />
                <img src={starImage} alt="" />
                <img src={starImage} alt="" />
            </>
        </WCAGNonTextContentARIA10>
    ),
}
