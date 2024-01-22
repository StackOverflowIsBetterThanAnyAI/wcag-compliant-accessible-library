import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGH24 from './WCAGH24'
// @ts-ignore
import starImage from '../../images/star.png'

const metaH24: Meta<typeof WCAGH24> = {
    component: WCAGH24,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGH24: Providing text alternatives for the area
                        elements of image maps
                    </Title>
                    <Subtitle>
                        <strong>
                            This component adds text alternatives to an image
                            map that serve the same purpose as the selectable
                            region of the map.
                        </strong>
                        <p style={{ textAlign: 'center' }}>
                            <strong>
                                <i style={{ color: '#ff0000' }}>
                                    variable name
                                </i>{' '}
                                means that this variable is mandatory
                            </strong>
                        </p>
                        <p>
                            In order to use this component correctly, you need
                            to provide a value for the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                mapName: string
                            </strong>
                            . This value connects the image with its
                            corresponding map.
                        </p>
                        <p>
                            The next step is to specify your image data in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                imageData
                            </strong>{' '}
                            object. The{' '}
                            <strong style={{ color: '#ff0000' }}>
                                imageData.altText: string and
                                imageData.imageSource: string
                            </strong>{' '}
                            values are mandatory. However, feel free to apply
                            any other global image attributes.
                        </p>
                        <p>
                            The values for the individual areas of the image
                            that you want to make clickable are saved in the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                areaData
                            </strong>{' '}
                            object array. You need to provide values for the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                coords: string and shape: 'default' | 'rect' |
                                'circle' | 'poly'
                            </strong>{' '}
                            parameters. Other than that, feel welcome to use any
                            other global area attributes. Unless you are
                            creating a hollow shape, you also must specify
                            values for the{' '}
                            <strong>altText: string and href: string</strong>{' '}
                            parameters. If you want to trigger an optional
                            additional function when clicking on the individual
                            areas, assign this to the{' '}
                            <strong>onClickFunction: () =&gt; void</strong>{' '}
                            variable in this object array.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>
                                classNameImage: string and classNameMap: string
                            </strong>{' '}
                            to your component, which allows you to apply your
                            styling to your new accessible component. If you
                            prefer styling your components inline, feel free to
                            use the <strong>additionalStyling</strong> variable
                            inside of the <strong>areaData</strong> object array
                            and <strong>imageData</strong> object.
                        </p>
                        <p>You cannot pass any elements as a child element.</p>
                        <div>
                            These are the available WAI-ARIA role parameters for
                            the attribute <strong>role: string</strong> which
                            can be applied to the image element:
                            <br />
                            Note: 'should be avoided' means that instead of
                            these roles you should always try to favour
                            semantically html-equivalent elements.
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
                                        <th style={{ textAlign: 'left' }}>
                                            information
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>button</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>checkbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>doc-cover</td>
                                    </tr>
                                    <tr>
                                        <td>link</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>menuitem</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>menuitemcheckbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>menuitemradio</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>option</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>progressbar</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>scrollbar</td>
                                    </tr>
                                    <tr>
                                        <td>separator</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>slider</td>
                                    </tr>
                                    <tr>
                                        <td>switch</td>
                                    </tr>
                                    <tr>
                                        <td>tab</td>
                                    </tr>
                                    <tr>
                                        <td>treeitem</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object and
                            applied to the image element. You can use the
                            following WAI-ARIA attributes, but without the
                            'aria-' prefix. But be careful: You cannot use every
                            WAI-ARIA attribute with every WAI-ARIA role!
                            <table
                                style={{
                                    margin: '2% auto',
                                    backgroundColor: '#e9e9e9',
                                    padding: '2% 5%',
                                    borderSpacing: '15px 2px',
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <th style={{ textAlign: 'left' }}>
                                            attribute
                                        </th>
                                        <th style={{ textAlign: 'left' }}>
                                            type
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>aria-atomic</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-busy</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-checked</td>
                                        <td>
                                            'false' | 'true' | 'mixed' |
                                            undefined | false | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-controls</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-current</td>
                                        <td>
                                            'page' | 'step' | 'location' |
                                            'date' | 'time' | 'true' | 'false' |
                                            true | false
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-describedby</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-description</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-details</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-disabled</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-errormessage</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-expanded</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-flowto</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-haspopup</td>
                                        <td>
                                            'false' | 'true' | 'menu' |
                                            'listbox' | 'tree' | 'grid' |
                                            'dialog' | false | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-hidden</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-invalid</td>
                                        <td>
                                            'grammar' | 'false' | 'spelling' |
                                            'true' | false | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-keyshortcuts</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-live</td>
                                        <td>'assertive' | 'off' | 'polite'</td>
                                    </tr>
                                    <tr>
                                        <td>aria-orientation</td>
                                        <td>
                                            'horizontal' | 'vertical' |
                                            undefined
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-owns</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-placeholder</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-posinset</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-pressed</td>
                                        <td>
                                            'false' | 'mixed' | 'true' |
                                            undefined | false | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-readonly</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-relevant</td>
                                        <td>
                                            'additions' | 'all' | 'removals' |
                                            'text' | 'additions text'
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-required</td>
                                        <td>boolean</td>
                                    </tr>
                                    <tr>
                                        <td>aria-roledescription</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-selected</td>
                                        <td>
                                            'false' | 'true' | undefined | false
                                            | true
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>aria-setsize</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuemax</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuemin</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuenow</td>
                                        <td>number</td>
                                    </tr>
                                    <tr>
                                        <td>aria-valuetext</td>
                                        <td>string</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H24"
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

export default metaH24

type StoryH24 = StoryObj<typeof WCAGH24>

// WCAGNonTextComponentH24

export const ImageWithOneArea: StoryH24 = {
    render: () => (
        <WCAGH24
            imageData={{
                imageSource: starImage,
                altText: 'Star',
                height: 50,
                width: 50,
            }}
            mapName="star-map"
            areaData={[
                {
                    altText: 'part1',
                    coords: '0, 0, 45, 45',
                    shape: 'rect',
                    href: 'element1',
                },
            ]}
        />
    ),
}

export const ImageWithTwoAreas: StoryH24 = {
    render: () => (
        <WCAGH24
            imageData={{
                imageSource: starImage,
                altText: 'Star',
                height: 50,
                width: 50,
            }}
            mapName="star-map"
            areaData={[
                {
                    altText: 'part1',
                    coords: '0, 0, 15, 15',
                    shape: 'rect',
                    href: 'element1',
                },
                {
                    altText: 'part2',
                    coords: '25, 25, 45, 45',
                    shape: 'rect',
                    href: 'element2',
                },
            ]}
        />
    ),
}

export const WrongMapName: StoryH24 = {
    render: () => (
        <WCAGH24
            imageData={{
                imageSource: starImage,
                altText: 'Star',
                height: 50,
                width: 50,
            }}
            mapName=""
            areaData={[
                {
                    altText: 'part1',
                    coords: '0, 0, 45, 45',
                    shape: 'rect',
                    href: 'element1',
                },
            ]}
        />
    ),
}

export const WrongImageData: StoryH24 = {
    render: () => (
        <WCAGH24
            imageData={{
                imageSource: '',
                altText: '',
                height: 50,
                width: 50,
            }}
            mapName="star-map"
            areaData={[
                {
                    altText: 'part1',
                    coords: '0, 0, 45, 45',
                    shape: 'rect',
                    href: 'element1',
                },
            ]}
        />
    ),
}

export const WrongAreaData: StoryH24 = {
    render: () => (
        <WCAGH24
            imageData={{
                imageSource: starImage,
                altText: 'Star',
                height: 50,
                width: 50,
            }}
            mapName="star-map"
            areaData={[
                {
                    altText: 'part1',
                    coords: '',
                    shape: 'rect',
                    href: 'element1',
                },
            ]}
        />
    ),
}
