import type { Meta, StoryObj } from '@storybook/react'

import WCAGG74G92 from './WCAGG74G92'
import WCAGG74G92Text from './WCAGG74G92Text'
// @ts-ignore
import starImage from '../../images/star.png'

const metaG74G92: Meta<typeof WCAGG74G92> = {
    component: WCAGG74G92,
}

export default metaG74G92

type StoryG74G92 = StoryObj<typeof WCAGG74G92>

// WCAGNonTextComponentG74G92

export const Chart: StoryG74G92 = {
    render: () => (
        <>
            <WCAGG74G92
                accessibleIds="p1 p2"
                shortText={
                    <p id="p1">
                        Short description. The long description can be found
                        after the next caption.
                    </p>
                }
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG74G92>
            <h3>Caption that devides both descriptions</h3>
            <WCAGG74G92Text accessibleId="p2">
                This is a very long description of the Chart containing three
                happy stars.
                <br />
                This is a very long description of the Chart containing three
                happy stars.
                <br />
                This is a very long description of the Chart containing three
                happy stars.
                <br />
            </WCAGG74G92Text>
        </>
    ),
}

export const WrongAccessibleIds: StoryG74G92 = {
    render: () => (
        <>
            <WCAGG74G92
                accessibleIds=""
                shortText={
                    <p id="">
                        Short description. The long description can be found
                        after the next caption.
                    </p>
                }
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG74G92>
            <h3>Caption that devides both descriptions</h3>
            <WCAGG74G92Text accessibleId="">
                This is a very long description of the Chart containing three
                happy stars.
                <br />
                This is a very long description of the Chart containing three
                happy stars.
                <br />
                This is a very long description of the Chart containing three
                happy stars.
                <br />
            </WCAGG74G92Text>
        </>
    ),
}
