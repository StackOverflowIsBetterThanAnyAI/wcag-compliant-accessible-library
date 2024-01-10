import type { Meta, StoryObj } from '@storybook/react'

import WCAGH97H101 from './WCAGH97H101'

const metaH97H101: Meta<typeof WCAGH97H101> = {
    component: WCAGH97H101,
}

export default metaH97H101

type StoryH97H101 = StoryObj<typeof WCAGH97H101>

// WCAGNonTextComponentH97H101

export const AriaLabelledBy: StoryH97H101 = {
    render: () => (
        <WCAGH97H101
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

export const AriaLabel: StoryH97H101 = {
    render: () => (
        <WCAGH97H101
            ariaLabel="Navigation"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather', href: '/weather' },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const Children: StoryH97H101 = {
    render: () => (
        <WCAGH97H101 ariaLabel="Navigation" listData={[]}>
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
        </WCAGH97H101>
    ),
}
