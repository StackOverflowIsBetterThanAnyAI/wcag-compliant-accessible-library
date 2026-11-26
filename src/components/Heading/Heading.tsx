'use client'

import { createContext, use, type ComponentProps, type ReactNode } from 'react'

import { warnA11y } from '../../utils/dev.js'

export type HeadingLevelValue = 1 | 2 | 3 | 4 | 5 | 6

const HeadingLevelContext = createContext<number>(1)

export type HeadingLevelProps = {
    /** Sets the level explicitly. Without it, the level is one deeper than the surrounding `<HeadingLevel>`. */
    level?: HeadingLevelValue
    children: ReactNode
}

/**
 * Sets the level of all `<Heading>`s inside it that have no explicit `level`.
 * Nest it to go one level deeper, so reusable components never hard-code their heading level.
 * See `<Heading>` for an example.
 */
export function HeadingLevel({ level, children }: HeadingLevelProps) {
    const parent = use(HeadingLevelContext)
    return (
        <HeadingLevelContext value={level ?? parent + 1}>
            {children}
        </HeadingLevelContext>
    )
}

export type HeadingProps = ComponentProps<'h1'> & {
    /** Overrides the level coming from `<HeadingLevel>`. */
    level?: HeadingLevelValue
}

/**
 * Renders a native `h1`–`h6`, with the level taken from `level` or from the surrounding `<HeadingLevel>`.
 * Native headings are preferred over `role="heading"` with `aria-level`.
 *
 * Wrap sections in `<HeadingLevel>` instead of hard-coding levels. A reusable component then
 * gets the right level wherever it is used:
 *
 * ```tsx
 * <Heading>Page title</Heading>          // h1
 * <HeadingLevel>
 *     <Heading>Section</Heading>          // h2
 *     <HeadingLevel>
 *         <Heading>Subsection</Heading>   // h3
 *     </HeadingLevel>
 * </HeadingLevel>
 * ```
 *
 * Levels deeper than 6 render an `h6` and log a development warning.
 *
 * Fulfils WCAG 1.3.1 Info and Relationships and 2.4.6 Headings and Labels (techniques H42, ARIA12).
 */
export function Heading({ level, ...props }: HeadingProps) {
    const contextLevel = use(HeadingLevelContext)
    let resolved = level ?? contextLevel
    if (resolved > 6) {
        warnA11y(
            'Heading',
            `Heading level ${resolved} does not exist; rendering an <h6>. Flatten your outline.`
        )
        resolved = 6
    }
    const Element = `h${resolved as HeadingLevelValue}` as const
    return <Element {...props} />
}
