import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageLink } from './ImageLink.js'

const meta = {
    title: 'Text alternatives/ImageLink',
    component: ImageLink,
    args: {
        href: '#favourites',
        className: 'demo-image-link',
        image: { src: '/assets/star.png', width: 24, height: 24 },
    },
} satisfies Meta<typeof ImageLink>

export default meta
type Story = StoryObj<typeof meta>

/** Image and text in one link: the text names the link, the image becomes decorative (H2). */
export const WithText: Story = {
    args: { children: 'Favourites' },
}

/** Image-only link: `alt` describes where the link goes (H30). */
export const ImageOnly: Story = {
    args: { alt: 'Favourites' },
}

/** Image after the text, opening in a new tab (announced to screen readers). */
export const ImageAtEndInNewTab: Story = {
    args: { children: 'Favourites', imagePosition: 'end', target: '_blank' },
}
