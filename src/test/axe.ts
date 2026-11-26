import axe from 'axe-core'

/** Runs axe-core against a rendered container and returns the violations. */
export async function axeViolations(container: Element) {
    const results = await axe.run(container, {
        rules: {
            // jsdom does not compute layout or colors, so these rules cannot be evaluated reliably.
            'color-contrast': { enabled: false },
            region: { enabled: false },
        },
    })
    return results.violations.map(
        (violation) => `${violation.id}: ${violation.help}`
    )
}
