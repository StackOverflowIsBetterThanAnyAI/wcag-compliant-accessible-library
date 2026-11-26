import type { CSSProperties, ComponentProps } from 'react'

/**
 * Hides content visually while keeping it available to assistive technology.
 * Use it for text that sighted users get from context, e.g. an icon-only button's name.
 */
export const visuallyHiddenStyle: CSSProperties = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
}

export type VisuallyHiddenProps =
    | ({
          /**
           * The element to render. Use `div` for block content such as paragraphs or lists,
           * which must not be placed inside a `span`.
           * @default 'span'
           */
          as?: 'span'
      } & ComponentProps<'span'>)
    | ({ as: 'div' } & ComponentProps<'div'>)

/**
 * Renders its children for screen readers only.
 *
 * The hiding styles are applied inline and always win over a passed `style`,
 * so the content can never accidentally become visible.
 */
export function VisuallyHidden(props: VisuallyHiddenProps) {
    if (props.as === 'div') {
        const { as, style, ...rest } = props
        return <div {...rest} style={{ ...style, ...visuallyHiddenStyle }} />
    }
    const { as, style, ...rest } = props
    return <span {...rest} style={{ ...style, ...visuallyHiddenStyle }} />
}
