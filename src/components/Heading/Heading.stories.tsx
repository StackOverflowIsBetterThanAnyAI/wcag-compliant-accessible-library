import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading, HeadingLevel } from './Heading.js'

const meta = {
    title: 'Structure/Heading',
    component: Heading,
    subcomponents: { HeadingLevel },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const ExplicitLevel: Story = {
    args: { level: 2, children: 'An h2 heading' },
}

function Card({ title }: { title: string }) {
    // A reusable component that does not need to know where it is used.
    return (
        <article>
            <Heading>{title}</Heading>
            <p>The heading level adapts to the surrounding outline.</p>
        </article>
    )
}

/** Nested `<HeadingLevel>`s produce a correct outline without hard-coded levels. */
export const AutomaticLevels: Story = {
    render: () => (
        <>
            <Heading>Blog (h1)</Heading>
            <HeadingLevel>
                <Card title="Latest post (h2)" />
                <HeadingLevel>
                    <Card title="Related post (h3)" />
                </HeadingLevel>
            </HeadingLevel>
        </>
    ),
}
