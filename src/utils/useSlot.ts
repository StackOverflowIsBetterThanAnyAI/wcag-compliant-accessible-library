import { useCallback, useState } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js'

/**
 * Tracks whether an optional child part (e.g. a description) is mounted, so that a parent
 * can reference its ID in `aria-describedby`.
 *
 * The parent cannot know its children before they mount, so the first render assumes the
 * part exists. That first render is what the server sends, so the server HTML is already
 * fully wired and works before JavaScript has loaded. References to IDs that do not exist
 * are ignored by browsers and assistive technology. Right after mounting, before the
 * browser paints, the parent switches to the actual state: children register in their
 * layout effects, which run before the parent's.
 */
export function useSlotRegistry() {
    const [count, setCount] = useState(0)
    const [mounted, setMounted] = useState(false)

    useIsomorphicLayoutEffect(() => setMounted(true), [])

    const register = useCallback(() => {
        setCount((value) => value + 1)
        return () => setCount((value) => value - 1)
    }, [])

    return [!mounted || count > 0, register] as const
}

export function useRegisterSlot(
    register: (() => () => void) | undefined
): void {
    useIsomorphicLayoutEffect(() => register?.(), [register])
}
