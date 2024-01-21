import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH67 from './WCAGH67'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH67: Meta<typeof WCAGH67> = {
    component: WCAGH67,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>
                        <h2>
                            This component returns an img element which can
                            safely be ignored by assistive technologies.
                        </h2>
                        <p>
                            To use this component properly, you must save the
                            data of your image in the <strong>imageData</strong>{' '}
                            object. Since this component returns a simple img
                            element, you can store all global img attributes in
                            this object.
                        </p>
                        <p>
                            For even more accessibility, you can optionally
                            assign the value <strong>'presentation'</strong> to
                            the variable <strong>role: string</strong> to ignore
                            this element.
                        </p>
                        <p>
                            As this component renders a simple img element, you
                            cannot pass any child elements.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            components, which allows you to apply your styling
                            to your new accessible components. If you prefer
                            styling your components inline, feel free to use the{' '}
                            <strong>additionalStyling</strong> variable inside
                            of the <strong>imageData</strong> object.
                        </p>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H67"
                                target="_blank"
                            >
                                You can find the full World Wide Web Consortium,
                                Inc. WCAG2.2 documentation for this success
                                criteria here.
                            </a>
                        </p>
                        <br />
                    </Subtitle>
                    <Stories />
                    <Controls />
                    <Source />
                </>
            ),
        },
    },
}

export default metaH67

type StoryH67 = StoryObj<typeof WCAGH67>

// WCAGNonTextComponentH67

export const IgnoredImage: StoryH67 = {
    render: () => (
        <>
            <p>Text before image</p>
            <WCAGH67
                imageData={{
                    imageSource: starImage,
                    loading: 'lazy',
                    additionalStyling: { height: 75, width: 75 },
                }}
            />
            <p>Text after image</p>
        </>
    ),
}

export const WrongImageSource: StoryH67 = {
    render: () => (
        <>
            <p>Text before image</p>
            <WCAGH67
                imageData={{
                    imageSource: '',
                    loading: 'lazy',
                    additionalStyling: { height: 75, width: 75 },
                }}
            />
            <p>Text after image</p>
        </>
    ),
}
