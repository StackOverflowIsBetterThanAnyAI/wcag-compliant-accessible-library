import { useCallback, useState } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js'

/**
 * Tracks whether an optional child part (e.g. a description) is currently mounted,
 * so that a parent only references IDs that actually exist in the DOM.
 */
export function useSlotRegistry() {
    const [count, setCount] = useState(0)
    const register = useCallback(() => {
        setCount((value) => value + 1)
        return () => setCount((value) => value - 1)
    }, [])
    return [count > 0, register] as const
}

export function useRegisterSlot(
    register: (() => () => void) | undefined
): void {
    useIsomorphicLayoutEffect(() => register?.(), [register])
}
