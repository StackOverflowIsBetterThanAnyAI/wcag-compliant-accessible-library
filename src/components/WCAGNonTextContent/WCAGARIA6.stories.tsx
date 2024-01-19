import type { Meta, StoryObj } from '@storybook/react'
import { Controls, Source, Stories, Subtitle, Title } from '@storybook/blocks'

import WCAGARIA6 from './WCAGARIA6'

const metaARIA6: Meta<typeof WCAGARIA6> = {
    title: 'WCAGARIA6',
    component: WCAGARIA6,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>
                        You can find the WCAG2.2 documentation for this success
                        criteria{' '}
                        <a
                            href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6"
                            target="_blank"
                        >
                            here.
                        </a>
                    </Subtitle>
                    <Stories />
                    <Controls />
                    <Source />
                </>
            ),
        },
    },
}

export default metaARIA6

type StoryARIA6 = StoryObj<typeof WCAGARIA6>

// WCAGNonTextComponentARIA6

export const Alert: StoryARIA6 = {
    render: () => (
        <WCAGARIA6
            role="alert"
            ariaLabel="This is an alert!"
            additionalAriaAttributes={{ hidden: false }}
        >
            Watch out. This in an alert!
        </WCAGARIA6>
    ),
}

export const Application: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="application" ariaLabel="This is an application!">
            This is now a Desktop Application!
        </WCAGARIA6>
    ),
}

export const Button: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="button" ariaLabel="This is a button!">
            Search
        </WCAGARIA6>
    ),
}

export const Comment: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="comment" ariaLabel="This is a comment!">
            I really like your point!
        </WCAGARIA6>
    ),
}

export const Math: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="math" ariaLabel="This is a math!">
            a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
        </WCAGARIA6>
    ),
}

export const Status: StoryARIA6 = {
    render: () => (
        <WCAGARIA6 role="status" ariaLabel="This is a status!">
            Waiting for update...
        </WCAGARIA6>
    ),
}
