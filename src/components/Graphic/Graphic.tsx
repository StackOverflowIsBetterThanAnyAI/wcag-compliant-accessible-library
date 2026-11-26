import type { ComponentProps } from 'react'

import { checkAltText } from '../../utils/altText.js'
import { warnA11y } from '../../utils/dev.js'

type Naming =
    | {
          /** Accessible name of the graphic (`aria-label`). */
          label: string
          labelledBy?: never
      }
    | {
          /** ID(s) of visible element(s) that name the graphic (`aria-labelledby`). */
          labelledBy: string
          label?: never
      }

export type GraphicProps = Omit<
    ComponentProps<'div'>,
    'role' | 'aria-label' | 'aria-labelledby' | 'aria-describedby'
> &
    Naming & {
        /** ID(s) of element(s) with a longer description (`aria-describedby`), e.g. a data table for a chart. */
        describedBy?: string
    }

/**
 * Groups content (inline SVG, CSS art, several images, an icon font …) into one image with an accessible name.
 * Its children are hidden from assistive technology and replaced by the name.
 *
 * Fulfils WCAG 1.1.1 Non-text Content (techniques ARIA6, ARIA10, ARIA15).
 */
export function Graphic({
    label,
    labelledBy,
    describedBy,
    ...props
}: GraphicProps) {
    if ((label ?? labelledBy ?? '').trim().length === 0) {
        warnA11y('Graphic', 'Provide a non-empty `label` or `labelledBy`.')
    } else if (label != null) {
        checkAltText('Graphic', label)
    }
    return (
        <div
            {...props}
            role="img"
            aria-label={label}
            aria-labelledby={labelledBy}
            aria-describedby={describedBy}
        />
    )
}
