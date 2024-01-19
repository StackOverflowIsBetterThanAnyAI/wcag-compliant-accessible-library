import type { Meta, StoryObj } from '@storybook/react'

import WCAGH53 from './WCAGH53'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH53: Meta<typeof WCAGH53> = {
    component: WCAGH53,
}

export default metaH53

type StoryH53 = StoryObj<typeof WCAGH53>

// WCAGNonTextComponentH53

export const ObjectWidthClassIdAndParagraph: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }}>
            <p>This is some text that describes the object.</p>
        </WCAGH53>
    ),
}

export const ObjectWidthClassIdAndAltText: StoryH53 = {
    render: () => (
        <WCAGH53 objectData={{ classId: 'id' }} role="img">
            <img src={starImage} alt="A happy star." height={75} width={75} />
        </WCAGH53>
    ),
}
