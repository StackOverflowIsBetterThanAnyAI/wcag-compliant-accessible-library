import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGG117H48 from './WCAGG117H48'

const metaG117H48: Meta<typeof WCAGG117H48> = {
    component: WCAGG117H48,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>
                        WCAGG117: Using text to convey information that is
                        conveyed by variations in presentation of text
                        <br />
                        WCAGH48: Using ol, ul and dl for lists or groups of
                        links
                    </Title>
                    <Subtitle>
                        <strong>
                            The goal of this component is to create lists of
                            related items using list elements appropriate for
                            their purpuses (ul, ol and dl elements).
                        </strong>
                        <p>
                            Abstract code preview:
                            <br />
                            <code>
                                &lt;ul&gt;
                                <br />
                                &emsp;&lt;li&gt;<em> item </em>
                                &lt;/li&gt;
                                <br />
                                &emsp;&lt;li&gt;<em> item </em>
                                &lt;/li&gt;
                                <br />
                                &lt;/ul&gt;
                            </code>
                            <br />
                            <br />
                            or
                            <br />
                            <br />
                            <code>
                                &lt;ol&gt;
                                <br />
                                &emsp;&lt;li&gt;<em> item </em>
                                &lt;/li&gt;
                                <br />
                                &emsp;&lt;li&gt;<em> item </em>
                                &lt;/li&gt;
                                <br />
                                &lt;/ol&gt;
                            </code>
                            <br />
                            <br />
                            or
                            <br />
                            <br />
                            <code>
                                &lt;dl&gt;
                                <br />
                                &emsp;&lt;div&gt;
                                <br />
                                &emsp;&emsp;&lt;dt&gt;<em> name </em>&lt;/dt&gt;
                                <br />
                                &emsp;&emsp;&lt;dd&gt;<em> description </em>
                                &lt;/dd&gt;
                                <br />
                                &emsp;&lt;/div&gt;
                                <br />
                                &lt;/dl&gt;
                            </code>
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
                            There is{' '}
                            <strong style={{ color: '#ff0000' }}>
                                one mandatory parameter
                            </strong>{' '}
                            for this component: You need to specify the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                listType: 'description' | 'ordered' |
                                'unordered'
                            </strong>
                            .
                        </p>
                        <p>
                            You can insert every list entry in the{' '}
                            <strong>listItems</strong> object array. For that
                            you need to specify an{' '}
                            <strong style={{ color: '#ff0000' }}>
                                itemName: string
                            </strong>
                            , but you can also mark the item as{' '}
                            <strong>new: boolean</strong>, which will highlight
                            this item programmatically and visually, but you
                            should also add something like '(new)' to the{' '}
                            <strong style={{ color: '#ff0000' }}>
                                itemName
                            </strong>
                            .
                        </p>
                        <p>
                            You can instead pass any{' '}
                            <strong style={{ color: '#ff0000' }}>
                                child: ReactNode
                            </strong>{' '}
                            element. But watch out: It has to be a sequence of
                            either ul, ol or dt/dd items.
                        </p>
                        <p>
                            You can also add an optional customised{' '}
                            <strong>
                                classNameParent: string and classNameChildren:
                                string
                            </strong>{' '}
                            to your component, which allows you to apply your
                            styling to your new accessible component. In this
                            case Parent stands for ul, ol and dl, Children
                            stands for the li and dt/dd elements. If you prefer
                            styling your components inline, feel free to use the{' '}
                            <strong>
                                additionalStylingParent and
                                additionalStylingChildren
                            </strong>{' '}
                            objects.
                        </p>
                        <div>
                            These are the available WAI-ARIA role values for the
                            attribute <strong>role: string</strong> which is
                            applied to the ul / ol or dl element:
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
                                        <th style={{ textAlign: 'left' }}>
                                            for ul / ol / dl
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>group</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>ul | ol | dl</td>
                                    </tr>
                                    <tr>
                                        <td>list</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>dl</td>
                                    </tr>
                                    <tr>
                                        <td>listbox</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>ul | ol</td>
                                    </tr>
                                    <tr>
                                        <td>menu</td>
                                        <td></td>
                                        <td>ul | ol</td>
                                    </tr>
                                    <tr>
                                        <td>menubar</td>
                                        <td></td>
                                        <td>ul | ol</td>
                                    </tr>
                                    <tr>
                                        <td>presentation</td>
                                        <td></td>
                                        <td>ul | ol | dl</td>
                                    </tr>
                                    <tr>
                                        <td>radiogroup</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>ul | ol</td>
                                    </tr>
                                    <tr>
                                        <td>tablist</td>
                                        <td></td>
                                        <td>ul | ol</td>
                                    </tr>
                                    <tr>
                                        <td>toolbar</td>
                                        <td></td>
                                        <td>ul | ol</td>
                                    </tr>
                                    <tr>
                                        <td>tree</td>
                                        <td style={{ color: '#8c1c1c' }}>
                                            should be avoided
                                        </td>
                                        <td>ul | ol</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            For even more accessibility, you can also use
                            optional additional WAI-ARIA attributes. They are
                            stored in the{' '}
                            <strong>additionalAriaAttributes</strong> object and
                            applied to the ul / ol / dl element. You can use the
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
                                        <td>aria-activedescendant</td>
                                        <td>string</td>
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
                                        <td>aria-label</td>
                                        <td>string</td>
                                    </tr>
                                    <tr>
                                        <td>aria-live</td>
                                        <td>'assertive' | 'off' | 'polite'</td>
                                    </tr>
                                    <tr>
                                        <td>aria-multiselectable</td>
                                        <td>boolean</td>
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
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <a
                                href="https://www.w3.org/WAI/WCAG22/Techniques/html/H48"
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

export default metaG117H48

type StoryG117H48 = StoryObj<typeof WCAGG117H48>

// WCAGNonTextComponentG117H48

export const OrderedAnimalsWithChildren: StoryG117H48 = {
    render: () => (
        <WCAGG117H48 listType="ordered">
            <li>
                <a href="kitchen.html">
                    <strong>Kitchen (new)</strong>
                </a>
            </li>
            <li>
                <a href="bedbath.html">
                    <strong>Bed &amp; Bath (new)</strong>
                </a>
            </li>
            <li>
                <a href="dining.html">Fine Dining</a>
            </li>
            <li>
                <a href="lighting.html">Lighting</a>
            </li>
            <li>
                <a href="storage.html">Storage</a>
            </li>
        </WCAGG117H48>
    ),
}

export const OrderedAnimals: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="ordered"
            listItems={[
                {
                    itemName: 'Kitchen (new)',
                    new: true,
                },
                {
                    itemName: 'Bed and Bath (new)',
                    new: true,
                },
                {
                    itemName: 'Fine Dining',
                },
                {
                    itemName: 'Lighting',
                },
                {
                    itemName: 'Storage',
                },
            ]}
        ></WCAGG117H48>
    ),
}

export const UnorderedAnimals: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="unordered"
            listItems={[
                {
                    itemName: 'Kitchen (new)',
                    new: true,
                },
                {
                    itemName: 'Bed and Bath (new)',
                    new: true,
                },
                {
                    itemName: 'Fine Dining',
                },
                {
                    itemName: 'Lighting',
                },
                {
                    itemName: 'Storage',
                },
            ]}
        ></WCAGG117H48>
    ),
}

export const Description: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="description"
            listItems={[
                {
                    itemName: 'blink',
                },
                {
                    itemName:
                        'turn on and off between 0.5 and 3 times per second',
                },
            ]}
        ></WCAGG117H48>
    ),
}

export const DescriptionWithMapping: StoryG117H48 = {
    render: () => (
        <WCAGG117H48
            listType="description"
            listItems={[
                {
                    itemName: 'blink 1',
                },
                {
                    itemName:
                        'turn on and off between 0.25 and 2 times per second',
                },
                {
                    itemName: 'blink 2',
                },
                {
                    itemName:
                        'turn on and off between 0.5 and 4 times per second',
                },
                {
                    itemName: 'blink 3',
                },
                {
                    itemName:
                        'turn on and off between 0.75 and 6 times per second',
                },
            ]}
        ></WCAGG117H48>
    ),
}
