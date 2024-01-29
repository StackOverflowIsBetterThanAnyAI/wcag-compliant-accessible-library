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
                    <Title>
                        WCAGH67: Using null alt text and no title attribute on
                        img elements for images that assistive technology should
                        ignore
                    </Title>
                    <Subtitle>
                        <strong>
                            This component returns an img element which can
                            safely be ignored by assistive technologies.
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>&lt;img alt=""/&gt;</code>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            <strong>
                                <i style={{ color: '#ff0000' }}>
                                    variable name
                                </i>{' '}
                                means that this variable is mandatory
                            </strong>
                        </p>
                        <p>
                            To use this component properly, you must save the
                            data of your image in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                imageData
                            </strong>{' '}
                            object. Since this component returns a simple img
                            element, you can store all global img attributes in
                            this object, eg.{' '}
                            <strong>
                                height: number | string or loading: 'eager' |
                                'lazy'
                            </strong>
                            . The only mandatory parameter is{' '}
                            <strong>imageData.imageSource</strong>.
                        </p>
                        <div>
                            Feel free to apply the following available WAI-ARIA
                            role parameter for the attribute{' '}
                            <strong>role: string</strong> to ignore this element
                            safely:
                            <table
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
                                    borderSpacing: '15px 2px',
                                    padding: '2% 5%',
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <th
                                            style={{
                                                textAlign: 'left',
                                            }}
                                        >
                                            name
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>presentation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            As this component renders a simple img element, you
                            cannot pass any child elements.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>className: string</strong> to your
                            component, which allows you to apply your styling to
                            your new accessible component. If you prefer styling
                            your components inline, feel free to use the{' '}
                            <strong>additionalStyling: CSSProperties</strong>{' '}
                            object inside of the <strong>imageData</strong>{' '}
                            object.
                        </p>
                        <p>
                            As this image should be ignored by assistive
                            technologies, you are not able to add any WAI-ARIA
                            attributes.
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

export const IgnoredImageWithRole: StoryH67 = {
    render: () => (
        <>
            <p>Text before image</p>
            <WCAGH67
                imageData={{
                    imageSource: starImage,
                    loading: 'lazy',
                    additionalStyling: { height: 75, width: 75 },
                }}
                role="presentation"
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
