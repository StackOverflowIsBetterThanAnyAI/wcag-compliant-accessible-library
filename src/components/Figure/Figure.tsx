'use client'

import { createContext, use, useId, type ComponentProps } from 'react'

import { warnA11y } from '../../utils/dev.js'
import { mergeIds } from '../../utils/mergeIds.js'
import { useRegisterSlot, useSlotRegistry } from '../../utils/useSlot.js'

type FigureContextValue = {
    descriptionId: string
    registerDescription: () => () => void
}

const FigureContext = createContext<FigureContextValue | null>(null)

export type FigureProps = ComponentProps<'figure'>

/**
 * A `<figure>` that groups non-text content with its caption and, optionally, a long description.
 *
 * `<FigureCaption>` provides the short name, `<FigureDescription>` the long text alternative
 * for complex content such as charts or diagrams.
 *
 * The figure is linked to the description via `aria-describedby`, but many screen readers do not
 * announce that on a non-focusable element. What reliably works is the reading order: place the
 * description inside the figure, directly after the image, so users reach it right after the image.
 *
 * Fulfils WCAG 1.1.1 Non-text Content and 1.3.1 Info and Relationships (techniques G73, G74, G92, ARIA15).
 */
export function Figure({
    'aria-describedby': describedBy,
    ...props
}: FigureProps) {
    const descriptionId = `${useId()}-description`
    const [hasDescription, registerDescription] = useSlotRegistry()

    return (
        <FigureContext value={{ descriptionId, registerDescription }}>
            <figure
                {...props}
                aria-describedby={mergeIds(
                    hasDescription && descriptionId,
                    describedBy
                )}
            />
        </FigureContext>
    )
}

export type FigureCaptionProps = ComponentProps<'figcaption'>

/** The short, visible caption of a `<Figure>`. Must be its first or last child. */
export function FigureCaption(props: FigureCaptionProps) {
    return <figcaption {...props} />
}

export type FigureDescriptionProps = Omit<ComponentProps<'div'>, 'id'>

/**
 * The long description of a `<Figure>`, e.g. the data behind a chart.
 * Place it inside the figure, directly after the image. Style it however you like
 * (including visually hidden), it stays linked to the figure.
 */
export function FigureDescription(props: FigureDescriptionProps) {
    const context = use(FigureContext)
    if (!context) {
        warnA11y(
            'FigureDescription',
            'must be placed inside a <Figure>, otherwise it is not linked to any content.'
        )
    }
    useRegisterSlot(context?.registerDescription)
    return <div {...props} id={context?.descriptionId} />
}
