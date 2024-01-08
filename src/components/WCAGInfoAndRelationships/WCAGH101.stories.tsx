import type { Meta, StoryObj } from '@storybook/react'

import WCAGH101 from './WCAGH101'

const metaH101: Meta<typeof WCAGH101> = {
    component: WCAGH101,
}

export default metaH101

type StoryH101 = StoryObj<typeof WCAGH101>

// WCAGNonTextComponentH101

export const AriaLabelledBy: StoryH101 = {
    render: () => (
        <WCAGH101
            ariaLabelledById="site-nav-heading"
            headline="Site"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather', href: '/weather' },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const AriaLabel: StoryH101 = {
    render: () => (
        <WCAGH101
            ariaLabel="Navigation"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather', href: '/weather' },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const Children: StoryH101 = {
    render: () => (
        <WCAGH101 ariaLabel="Navigation" listData={[]}>
            <>
                <li style={{ color: 'red' }}>
                    <a
                        aria-current="page"
                        href="/cars"
                        style={{ color: 'red' }}
                    >
                        Cars
                    </a>
                </li>
                <li style={{ color: 'yellow' }}>
                    <a href="/trucks" style={{ color: 'yellow' }}>
                        Trucks
                    </a>
                </li>
                <li style={{ color: 'pink' }}>
                    <a href="/bikes" style={{ color: 'pink' }}>
                        Bikes
                    </a>
                </li>
            </>
        </WCAGH101>
    ),
}
