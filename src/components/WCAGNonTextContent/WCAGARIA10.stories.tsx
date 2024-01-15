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

export const ImagesAsChildren: StoryARIA10 = {
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
                five out of five stars
            </WCAGARIA10Text>
        </>
    ),
}

export const TextContentIsAReactNode: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10Text ariaLabelledById="star-id1">
                <span>five out of five stars</span>
            </WCAGARIA10Text>
            <WCAGARIA10 role="img" ariaLabelledById="star-id1 star-id2">
                <>
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                    <img src={starImage} alt="" height={75} width={75} />
                </>
            </WCAGARIA10>
            <WCAGARIA10Text ariaLabelledById="star-id2">
                <div>five out of five stars</div>
            </WCAGARIA10Text>
        </>
    ),
}
