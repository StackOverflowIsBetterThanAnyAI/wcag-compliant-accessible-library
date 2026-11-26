'use client'

import { useEffect } from 'react'

import { isDev, warnA11y } from './dev.js'

/**
 * Renders nothing; warns in development when the page has more than one visible `<main>`.
 * Lives in its own client component so that `<Landmark>` stays usable in Server Components.
 */
export function SingleMainCheck() {
    useEffect(() => {
        if (!isDev) return
        const visible = [...document.querySelectorAll('main')].filter(
            (main) => !main.hidden
        )
        if (visible.length > 1) {
            warnA11y(
                'Landmark',
                `The page has ${visible.length} visible <main> elements. Only one is allowed; hide the others with the \`hidden\` attribute.`
            )
        }
    }, [])
    return null
}
