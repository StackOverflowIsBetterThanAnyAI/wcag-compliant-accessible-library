import type { ComponentProps, ReactNode } from 'react'

import { checkAltText } from '../../utils/altText.js'
import { warnA11y } from '../../utils/dev.js'
import { Link, type LinkProps } from '../Link/Link.js'

type ImageAttributes = Omit<ComponentProps<'img'>, 'alt'> & { src: string }

export type ImageLinkProps = Omit<LinkProps, 'children'> & {
    /** Attributes for the `<img>`, including `className` and `style`. */
    image: ImageAttributes
    /** Where the image sits relative to the text. @default "start" */
    imagePosition?: 'start' | 'end'
} & (
        | {
              /** Visible link text. The image becomes decorative, so the text is not announced twice. */
              children: ReactNode
              alt?: never
          }
        | {
              /** For image-only links: describes the link's destination, e.g. "Home". */
              alt: string
              children?: never
          }
    )

/**
 * A link that contains an image, with exactly one source for its accessible name.
 *
 * - With `children`, the text names the link and the image gets `alt=""` (technique H2).
 * - Without `children`, `alt` is required and names the link (technique H30).
 *
 * Fulfils WCAG 1.1.1 Non-text Content and 2.4.4 Link Purpose (In Context).
 */
export function ImageLink({
    image,
    imagePosition = 'start',
    alt,
    children,
    ...props
}: ImageLinkProps) {
    const hasText = children != null && children !== false && children !== ''
    if (!hasText && (alt == null || alt.trim().length === 0)) {
        warnA11y(
            'ImageLink',
            'An image-only link needs an `alt` that describes the destination of the link.'
        )
    } else if (!hasText && alt != null) {
        checkAltText('ImageLink', alt)
    }

    const img = <img {...image} alt={hasText ? '' : alt} />

    return (
        <Link {...props}>
            {imagePosition === 'start' && img}
            {children}
            {imagePosition === 'end' && img}
        </Link>
    )
}
