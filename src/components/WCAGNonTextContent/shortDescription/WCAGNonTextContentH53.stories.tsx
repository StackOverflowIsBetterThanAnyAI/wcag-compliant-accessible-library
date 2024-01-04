import type { Meta, StoryObj } from '@storybook/react'

import WCAGNonTextContentH53 from './WCAGNonTextContentH53'
// @ts-ignore
import starImage from '../../../images/star.png'

const metaH53: Meta<typeof WCAGNonTextContentH53> = {
    component: WCAGNonTextContentH53,
}

export default metaH53

type StoryH53 = StoryObj<typeof WCAGNonTextContentH53>

// WCAGNonTextComponentH53

export const ObjectWidthClassIdAndParagraph: StoryH53 = {
    render: () => (
        <WCAGNonTextContentH53 objectData={{ classId: 'id' }}>
            <p>
                Here is some text that describes the object and its operation.
            </p>
        </WCAGNonTextContentH53>
    ),
}

export const ObjectWidthClassIdAndAltText: StoryH53 = {
    render: () => (
        <WCAGNonTextContentH53 objectData={{ classId: 'id' }}>
            <img src={starImage} alt="Star Image" height={50} width={50} />
        </WCAGNonTextContentH53>
    ),
}
