import { Children, type ComponentProps, type ReactNode } from 'react'

import { checkAltText } from '../../utils/altText.js'
import { warnA11y } from '../../utils/dev.js'

export type EmbeddedObjectProps = Omit<
    ComponentProps<'object'>,
    'children' | 'title'
> & {
    /** URL of the embedded resource. */
    data: string
    /**
     * Accessible name of the embedded resource, e.g. "Annual report 2025 (PDF)".
     * Screen readers use it when the resource loads, because the fallback content is then not exposed.
     */
    title: string
    /**
     * Text alternative shown when the resource cannot be rendered and exposed to assistive technology.
     * Typically a description plus a link to download the resource.
     */
    children: ReactNode
}

/**
 * An `<object>` with a name and a text alternative.
 *
 * - `title` names the resource when it loads.
 * - `children` replace it when it cannot be rendered.
 *
 * Fulfils WCAG 1.1.1 Non-text Content (technique H53).
 *
 * For documents such as PDFs, also consider a plain download link: embedded viewers
 * differ a lot in how accessible they are.
 */
export function EmbeddedObject({
    children,
    title,
    ...props
}: EmbeddedObjectProps) {
    if (title.trim().length === 0) {
        warnA11y(
            'EmbeddedObject',
            'Provide a `title` that names the embedded resource.'
        )
    } else {
        checkAltText('EmbeddedObject', title)
    }
    if (Children.count(children) === 0) {
        warnA11y(
            'EmbeddedObject',
            'Provide fallback content as `children` (the text alternative).'
        )
    }
    return (
        <object {...props} title={title}>
            {children}
        </object>
    )
}
