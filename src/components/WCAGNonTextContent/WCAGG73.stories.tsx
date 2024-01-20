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
                buttonText="Go to the long description."
                ownId="chart"
                childId="long-description1"
                shortText={<p>Short description.</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
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
                This is a very long description
                <br />
                of six happy stars which are
                <br />
                placed in two rows
                <br />
                with three stars each.
            </WCAGG73Text>
        </>
    ),
}

export const ChartWithAdditionalAttributes: StoryG73 = {
    render: () => (
        <>
            <WCAGG73
                buttonText="Go to the long description."
                ownId="chart"
                childId="long-description1"
                shortText={
                    <p
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '5px',
                            margin: '5px',
                        }}
                    >
                        Short description.
                    </p>
                }
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
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
                linkData={{
                    additionalStyling: {
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '2px 32px',
                        borderRadius: '8px',
                    },
                }}
                role="img"
            >
                This is a very long description
                <br />
                of six happy stars which are
                <br />
                placed in two rows
                <br />
                with three stars each.
            </WCAGG73Text>
        </>
    ),
}

export const WrongIds: StoryG73 = {
    render: () => (
        <>
            <WCAGG73
                buttonText="Go to the long description."
                ownId=""
                childId=""
                shortText={<p>Short description.</p>}
            >
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
                <div>
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                    <img src={starImage} height={50} width={50} />
                </div>
            </WCAGG73>
            <WCAGG73Text
                buttonText="Go back to the stars."
                ownId=""
                parentId=""
            >
                This is a very long description
                <br />
                of six happy stars which are
                <br />
                placed in two rows
                <br />
                with three stars each.
            </WCAGG73Text>
        </>
    ),
}
