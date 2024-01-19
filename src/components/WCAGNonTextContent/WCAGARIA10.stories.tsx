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

export const RoleImageWithOneText: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10
                role="img"
                ariaLabelledById="star-id1"
                divData={{ additionalStyling: { margin: '5px 10px' } }}
            >
                <>
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                    <img src={starImage} alt="" height={50} width={50} />
                </>
            </WCAGARIA10>
            <WCAGARIA10Text ariaLabelledById="star-id1">
                This is a short text alternative of five happy stars in a
                horizontal line looking at you.
            </WCAGARIA10Text>
        </>
    ),
}

export const RoleImageWithReactNodeAsText: StoryARIA10 = {
    render: () => (
        <>
            <WCAGARIA10Text ariaLabelledById="star-id1">
                <span style={{ color: 'red' }}>
                    This is a short text alternative of five happy stars in a
                    horizontal line looking at you.
                </span>
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
                <div style={{ margin: '5px 25px' }}>
                    This is a short text alternative of five happy stars in a
                    horizontal line looking at you.
                </div>
            </WCAGARIA10Text>
        </>
    ),
}
