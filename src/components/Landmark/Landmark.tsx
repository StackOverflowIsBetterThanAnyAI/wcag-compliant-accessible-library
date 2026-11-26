import type { ComponentProps, ElementType } from 'react'

import { isDev, warnA11y } from '../../utils/dev.js'
import { checkRoleWord } from '../../utils/roleWords.js'
import { SingleMainCheck } from '../../utils/SingleMainCheck.js'

export type LandmarkElement =
    | 'header'
    | 'nav'
    | 'main'
    | 'aside'
    | 'footer'
    | 'section'
    | 'form'
    | 'search'

type RequiredName =
    | {
          /** Accessible name of the landmark (`aria-label`). */
          label: string
          labelledBy?: never
      }
    | {
          /** ID of a visible heading that names the landmark (`aria-labelledby`). Preferred over `label`. */
          labelledBy: string
          label?: never
      }

type OptionalName = RequiredName | { label?: undefined; labelledBy?: undefined }

export type LandmarkProps<T extends LandmarkElement> = Omit<
    ComponentProps<T>,
    'aria-label' | 'aria-labelledby'
> & {
    /** The landmark element to render. */
    as: T
} & (T extends 'section' | 'form' ? RequiredName : OptionalName)

/**
 * Renders a landmark region with a proper name.
 *
 * `section` and `form` only become landmarks when they are named, so a name is required for them.
 * Name the other landmarks whenever the same type occurs more than once on a page (e.g. two `nav`s),
 * and do not repeat the role in the name: "Main", not "Main navigation".
 *
 * Good to know:
 * - For `main`, `header`, `footer` and `aside`, `Landmark` adds only development warnings over the
 *   native element. Using the native element directly is just as accessible.
 * - `header` and `footer` are landmarks only at page level. Inside `article`, `aside`, `main`, `nav`
 *   or `section` they are plain groups.
 * - A page has exactly one visible `main`. A development warning reports a second one.
 *
 * Fulfils WCAG 1.3.1 Info and Relationships and 2.4.1 Bypass Blocks (techniques ARIA11, ARIA13).
 */
export function Landmark<T extends LandmarkElement>({
    as,
    label,
    labelledBy,
    children,
    ...props
}: LandmarkProps<T>) {
    if ((as === 'section' || as === 'form') && !label && !labelledBy) {
        warnA11y(
            'Landmark',
            `A <${as}> is only a landmark when it has a \`label\` or \`labelledBy\`.`
        )
    }
    checkRoleWord('Landmark', as, label)

    const Element = as as ElementType
    return (
        <Element {...props} aria-label={label} aria-labelledby={labelledBy}>
            {isDev && as === 'main' && <SingleMainCheck />}
            {children}
        </Element>
    )
}
