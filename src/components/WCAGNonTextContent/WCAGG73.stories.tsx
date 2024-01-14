import type { Meta, StoryObj } from '@storybook/react'

import WCAGG73 from './WCAGG73'
import WCAGG73Text from './WCAGG73Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG73: Meta<typeof WCAGG73> = {
    component: WCAGG73,
}

export default metaG73

type StoryG73 = StoryObj<typeof WCAGG73>

// WCAGNonTextComponentG73

export const Chart: StoryG73 = {
    render: () => (
        <>
            <WCAGG73
                childId="long-description1"
                buttonText="Go to the long description."
                ownId="chart"
                shortText={<p>Short description.</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG73>
            <WCAGG73Text
                buttonText="Go back to the stars."
                ownId="long-description"
                parentId="chart"
            >
                This is a very long description of three star images.
            </WCAGG73Text>
        </>
    ),
}