import type { ComponentProps } from 'react'

import { checkAltText } from '../../utils/altText.js'
import { warnA11y } from '../../utils/dev.js'

type NativeImageProps = Omit<ComponentProps<'img'>, 'alt'>

export type ImageProps = NativeImageProps &
    (
        | {
              /**
               * Text alternative that conveys the same information as the image.
               * Describe the purpose, not the pixels: "Company logo" is better than "Blue circle".
               */
              alt: string
              decorative?: false
          }
        | {
              /** Marks the image as purely decorative, so assistive technology ignores it (`alt=""`). */
              decorative: true
              alt?: never
          }
    )

/**
 * An `<img>` that cannot be rendered without a deliberate decision about its text alternative:
 * either `alt` (informative image) or `decorative` (ignored by screen readers).
 *
 * Fulfils WCAG 1.1.1 Non-text Content (techniques H37, H67, G94, G196).
 */
export function Image(props: ImageProps) {
    const { decorative, alt, ...rest } = props

    if (decorative) {
        return <img {...rest} alt="" />
    }

    if ((alt ?? '').trim().length === 0) {
        warnA11y(
            'Image',
            'Empty `alt`. If the image is decorative, pass `decorative` instead to make that explicit.'
        )
    } else {
        checkAltText('Image', alt ?? '')
    }

    return <img {...rest} alt={alt} />
}
