import type { Meta, StoryObj } from '@storybook/react'

import WCAGG117H97H101 from './WCAGG117H97H101'

const metaG117H97H101: Meta<typeof WCAGG117H97H101> = {
    component: WCAGG117H97H101,
}

export default metaG117H97H101

type StoryG117H97H101 = StoryObj<typeof WCAGG117H97H101>

// WCAGNonTextComponentG117H97H101

export const AriaLabelledBy: StoryG117H97H101 = {
    render: () => (
        <WCAGG117H97H101
            ariaLabelledById="site-nav-heading"
            headline="Site"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather (new)', href: '/weather', new: true },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const AriaLabel: StoryG117H97H101 = {
    render: () => (
        <WCAGG117H97H101
            ariaLabel="Navigation"
            listData={[
                { displayedName: 'News', href: '/news' },
                { displayedName: 'Weather (new)', href: '/weather', new: true },
                { displayedName: 'Sport', href: '/sport' },
            ]}
        />
    ),
}

export const Children: StoryG117H97H101 = {
    render: () => (
        <WCAGG117H97H101 ariaLabel="Navigation" listData={[]}>
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
                        <strong>Trucks (new)</strong>
                    </a>
                </li>
                <li style={{ color: 'pink' }}>
                    <a href="/bikes" style={{ color: 'pink' }}>
                        Bikes
                    </a>
                </li>
            </>
        </WCAGG117H97H101>
    ),
}
