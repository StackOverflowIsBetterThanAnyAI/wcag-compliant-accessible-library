import type { ComponentProps } from 'react'

import { checkAltText } from '../../utils/altText.js'
import { warnA11y } from '../../utils/dev.js'

export type EmojiProps = Omit<
    ComponentProps<'span'>,
    'role' | 'aria-label' | 'children'
> & {
    /** The emoji, emoticon or symbol itself. */
    children: string
} & (
        | {
              /** What the emoji means in this context, e.g. "Warning" for a warning sign. */
              label: string
              decorative?: false
          }
        | {
              /** The emoji is decoration only and is hidden from assistive technology. */
              decorative: true
              label?: never
          }
    )

/**
 * An emoji or ASCII emoticon with a meaningful text alternative, instead of the
 * often confusing or missing default reading of the character.
 *
 * Fulfils WCAG 1.1.1 Non-text Content (technique H86).
 */
export function Emoji({ label, decorative, ...props }: EmojiProps) {
    if (decorative) {
        return <span {...props} aria-hidden="true" />
    }
    if (label == null || label.trim().length === 0) {
        warnA11y(
            'Emoji',
            'Provide a `label`, or mark the emoji as `decorative`.'
        )
    } else {
        checkAltText('Emoji', label)
    }
    return <span {...props} role="img" aria-label={label} />
}
