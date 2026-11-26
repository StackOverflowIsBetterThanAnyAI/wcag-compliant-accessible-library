import type { ComponentProps, ReactElement, ReactNode } from 'react'

import { warnA11y } from '../../utils/dev.js'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.js'

export type LinkProps = ComponentProps<'a'> & {
    href: string
    /**
     * Text announced to screen reader users when the link opens a new tab (`target="_blank"`).
     * Pass a translated string for non-English pages. Pass `null` only if the link already says so visibly.
     *
     * If you pass an `aria-label`, a string hint is appended to it, because the label replaces the link text.
     * @default " (opens in a new tab)"
     */
    newTabHint?: ReactNode
    /**
     * Render a different element, e.g. your router's link component.
     * Receives all props the anchor would have received; spread them onto your element.
     *
     * Example: `render={(props) => <NextLink {...props} />}`
     */
    render?: (props: ComponentProps<'a'> & { href: string }) => ReactElement
}

function mergeRel(rel: string | undefined, required: string): string {
    const values = new Set((rel ?? '').split(/\s+/).filter(Boolean))
    values.add(required)
    return [...values].join(' ')
}

/**
 * An anchor that tells screen reader users when it opens a new tab.
 *
 * Supports WCAG 3.2.5 Change on Request (technique G201) and 2.4.4 Link Purpose (In Context).
 *
 * G201 also asks for a visible hint. The library ships no styles, so add one yourself, e.g.
 * `a[target="_blank"]::after { content: " ↗"; }`.
 *
 * `rel="noopener"` is added to new-tab links. `noreferrer` is left to you, because it also
 * removes the `Referer` header that analytics rely on.
 */
export function Link({
    newTabHint = ' (opens in a new tab)',
    render,
    target,
    rel,
    children,
    'aria-label': ariaLabel,
    ...props
}: LinkProps) {
    const opensNewTab = target === '_blank'
    const hint = opensNewTab && newTabHint != null ? newTabHint : null
    // An aria-label replaces the content, so the hidden hint would never be read.
    const hintInLabel = hint != null && ariaLabel != null

    if (hintInLabel && typeof hint !== 'string') {
        warnA11y(
            'Link',
            'an aria-label replaces the link text, so a non-string newTabHint is not announced. Pass newTabHint as a string.'
        )
    }

    const content = (
        <>
            {children}
            {hint != null && !hintInLabel && (
                <VisuallyHidden>{hint}</VisuallyHidden>
            )}
        </>
    )
    const anchorProps = {
        ...props,
        'aria-label':
            hintInLabel && typeof hint === 'string'
                ? `${ariaLabel}${hint}`
                : ariaLabel,
        target,
        rel: opensNewTab ? mergeRel(rel, 'noopener') : rel,
    }

    if (render) return render({ ...anchorProps, children: content })
    return <a {...anchorProps}>{content}</a>
}
