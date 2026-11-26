'use client'

import {
    useEffect,
    useState,
    type ComponentProps,
    type MouseEvent,
} from 'react'

import { isDev, warnA11y } from '../../utils/dev.js'
import { visuallyHiddenStyle } from '../VisuallyHidden/VisuallyHidden.js'

export type SkipLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
    /** The `id` of the element to skip to, usually your `<main>`. */
    targetId: string
    /**
     * Keep the link visually hidden until it receives keyboard focus.
     * Set to `false` if you want to handle visibility with your own CSS (e.g. `:focus-visible`).
     * @default true
     */
    hideUntilFocused?: boolean
}

function warnMissing(targetId: string) {
    warnA11y(
        'SkipLink',
        `no element with id="${targetId}" found. The link has nowhere to skip to.`
    )
}

/**
 * A "skip to content" link that lets keyboard users bypass repeated blocks.
 *
 * Fulfils WCAG 2.4.1 Bypass Blocks (technique G1). Place it as the first focusable element on the page.
 * Activating it moves focus to the target, even if the target is not focusable by default.
 * A temporary `tabindex="-1"` is removed again once focus leaves the target, so the target
 * does not show a focus ring when it is clicked later.
 */
export function SkipLink({
    targetId,
    hideUntilFocused = true,
    children = 'Skip to main content',
    style,
    onClick,
    onFocus,
    onBlur,
    ...props
}: SkipLinkProps) {
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        if (isDev && !document.getElementById(targetId)) warnMissing(targetId)
    }, [targetId])

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        const target = document.getElementById(targetId)
        if (!target) {
            warnMissing(targetId)
            return
        }
        event.preventDefault()
        if (!target.hasAttribute('tabindex')) {
            target.setAttribute('tabindex', '-1')
            target.addEventListener(
                'blur',
                () => target.removeAttribute('tabindex'),
                { once: true }
            )
        }
        target.focus()
        history.replaceState(null, '', `#${targetId}`)
    }

    return (
        <a
            {...props}
            href={`#${targetId}`}
            style={
                hideUntilFocused && !focused
                    ? { ...style, ...visuallyHiddenStyle }
                    : style
            }
            onClick={handleClick}
            onFocus={(event) => {
                setFocused(true)
                onFocus?.(event)
            }}
            onBlur={(event) => {
                setFocused(false)
                onBlur?.(event)
            }}
        >
            {children}
        </a>
    )
}
