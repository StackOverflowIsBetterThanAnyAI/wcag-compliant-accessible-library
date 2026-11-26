import type { AriaAttributes, ComponentProps, ReactNode } from 'react'

import { warnA11y } from '../../utils/dev.js'
import { Link, type LinkProps } from '../Link/Link.js'

type NavName =
    | {
          /** Accessible name, e.g. "Main" or "Breadcrumb". Screen readers append "navigation" themselves. */
          label: string
          labelledBy?: never
      }
    | {
          /** ID of a visible heading that names the navigation. */
          labelledBy: string
          label?: never
      }

export type NavProps = Omit<
    ComponentProps<'nav'>,
    'aria-label' | 'aria-labelledby'
> &
    NavName & {
        /** Props for the inner `<ul>`, e.g. `className`. */
        listProps?: Omit<ComponentProps<'ul'>, 'children' | 'role'>
    }

// Matches "Main navigation", "Hauptnavigation", "Footer nav", but not "Navy".
const REDUNDANT_ROLE_WORD = /(navigation|\bnav)\b/i

/**
 * A named navigation landmark with its links in a list, so screen readers announce
 * "Main navigation, list, 4 items".
 *
 * Fulfils WCAG 1.3.1 Info and Relationships and 2.4.1 Bypass Blocks (techniques ARIA11, H97, G117).
 *
 * Children are list items: use `<NavLink>`, or your own `<li>` for anything that is not a link,
 * e.g. a language switcher button.
 *
 * ```tsx
 * <Nav label="Main">
 *     <NavLink href="/" current>Home</NavLink>
 *     <NavLink href="/blog">Blog</NavLink>
 * </Nav>
 * ```
 */
export function Nav({
    label,
    labelledBy,
    listProps,
    children,
    ...props
}: NavProps) {
    if (label != null && REDUNDANT_ROLE_WORD.test(label)) {
        warnA11y(
            'Nav',
            `label="${label}" contains the word "navigation". Screen readers already announce the role, so users hear it twice. Use e.g. label="Main".`
        )
    }

    return (
        <nav {...props} aria-label={label} aria-labelledby={labelledBy}>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- keeps list semantics in Safari with list-style: none */}
            <ul role="list" {...listProps}>
                {children}
            </ul>
        </nav>
    )
}

export type NavLinkProps = LinkProps & {
    /**
     * Marks the link as the current page (`aria-current="page"`), or as the current step/location/date.
     * Style it with `[aria-current]`.
     */
    current?:
        | boolean
        | Exclude<AriaAttributes['aria-current'], boolean | 'true' | 'false'>
    /** Props for the surrounding `<li>`. */
    itemProps?: Omit<ComponentProps<'li'>, 'children'>
    /**
     * Nested links, e.g. the pages of a category. They are rendered as a nested list
     * inside this link's list item, so screen readers announce the hierarchy.
     *
     * Example: `subnav={<><NavLink href="/docs/install">Install</NavLink></>}`
     */
    subnav?: ReactNode
    /** Props for the nested `<ul>`, e.g. `className`. */
    subnavProps?: Omit<ComponentProps<'ul'>, 'children' | 'role'>
}

/** A link inside `<Nav>`, rendered in its own list item. */
export function NavLink({
    current,
    itemProps,
    subnav,
    subnavProps,
    ...props
}: NavLinkProps) {
    const ariaCurrent = current === true ? 'page' : current || undefined
    return (
        <li {...itemProps}>
            <Link {...props} aria-current={ariaCurrent} />
            {subnav != null && (
                // eslint-disable-next-line jsx-a11y/no-redundant-roles -- keeps list semantics in Safari with list-style: none
                <ul role="list" {...subnavProps}>
                    {subnav}
                </ul>
            )}
        </li>
    )
}
