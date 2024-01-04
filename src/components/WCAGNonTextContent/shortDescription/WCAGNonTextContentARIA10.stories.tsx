import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentARIA10 from './WCAGNonTextContentARIA10'
import WCAGNonTextContentARIA10Text from './WCAGNonTextContentARIA10Text'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaARIA10: Meta<typeof WCAGNonTextContentARIA10> = {
    component: WCAGNonTextContentARIA10,
}

export default metaARIA10

type StoryARIA10 = StoryObj<typeof WCAGNonTextContentARIA10>

// WCAGNonTextComponentARIA10

export const Image: StoryARIA10 = {
    render: () => (
        <>
            <WCAGNonTextContentARIA10 role="img" ariaLabelledById="star-id1">
                <>
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                </>
            </WCAGNonTextContentARIA10>
            <WCAGNonTextContentARIA10Text ariaLabelledById="star-id1">
                four out of five
            </WCAGNonTextContentARIA10Text>
        </>
    ),
}

export const TextContentIsADiv: StoryARIA10 = {
    render: () => (
        <>
            <WCAGNonTextContentARIA10Text ariaLabelledById="star-id1">
                <div>four out of five</div>
            </WCAGNonTextContentARIA10Text>
            <WCAGNonTextContentARIA10
                role="img"
                ariaLabelledById="star-id1 star-id2"
            >
                <>
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                </>
            </WCAGNonTextContentARIA10>
            <WCAGNonTextContentARIA10Text ariaLabelledById="star-id2">
                <div>four out of five</div>
            </WCAGNonTextContentARIA10Text>
        </>
    ),
}
