import type { Meta, StoryObj } from '@storybook/react'

import WCAGARIA10 from './WCAGARIA10'
import WCAGARIA10Text from './WCAGARIA10Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaARIA10: Meta<typeof WCAGARIA10> = {
    component: WCAGARIA10,
}

export default metaARIA10

type StoryARIA10 = StoryObj<typeof WCAGARIA10>

// WCAGNonTextComponentARIA10

export const Image: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10 role="img" ariaLabelledById="star-id1">
                <>
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                </>
            </WCAGARIA10>
            <WCAGARIA10Text ariaLabelledById="star-id1">
                four out of five
            </WCAGARIA10Text>
        </>
    ),
}

export const TextContentIsADiv: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10Text ariaLabelledById="star-id1">
                <div>four out of five</div>
            </WCAGARIA10Text>
            <WCAGARIA10 role="img" ariaLabelledById="star-id1 star-id2">
                <>
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                </>
            </WCAGARIA10>
            <WCAGARIA10Text ariaLabelledById="star-id2">
                <div>four out of five</div>
            </WCAGARIA10Text>
        </>
    ),
}
