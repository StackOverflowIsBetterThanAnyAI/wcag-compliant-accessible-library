import type { ComponentProps } from 'react'

export type ListProps =
    | ({
          /** Render an ordered list (`<ol>`). */ ordered: true
      } & ComponentProps<'ol'>)
    | ({ ordered?: false } & ComponentProps<'ul'>)

/**
 * A `<ul>` or `<ol>` that keeps its list semantics, even when you remove the bullets with CSS.
 *
 * Safari/VoiceOver drops list semantics for lists styled with `list-style: none`;
 * this component adds `role="list"` to prevent that. Use native `<li>` children.
 *
 * Fulfils WCAG 1.3.1 Info and Relationships (techniques H48, G117).
 */
export function List({ ordered, ...props }: ListProps) {
    if (ordered) {
        // eslint-disable-next-line jsx-a11y/no-redundant-roles -- intentional, see above
        return <ol role="list" {...(props as ComponentProps<'ol'>)} />
    }
    // eslint-disable-next-line jsx-a11y/no-redundant-roles -- intentional, see above
    return <ul role="list" {...(props as ComponentProps<'ul'>)} />
}
