declare const process: { env: { NODE_ENV?: string } } | undefined

/** `true` unless the consuming bundler replaced `process.env.NODE_ENV` with `"production"`. */
export const isDev =
    typeof process === 'undefined' || process.env.NODE_ENV !== 'production'

const reported = new Set<string>()

/**
 * Logs an accessibility warning once per unique message, in development only.
 * Components never refuse to render: a broken page is worse than a warned-about one.
 */
export function warnA11y(component: string, message: string): void {
    if (!isDev) return
    const text = `[wcag-compliant-accessible-library] <${component}>: ${message}`
    if (reported.has(text)) return
    reported.add(text)
    console.warn(text)
}

/** Clears the warning de-duplication cache. Intended for tests. */
export function resetA11yWarnings(): void {
    reported.clear()
}
