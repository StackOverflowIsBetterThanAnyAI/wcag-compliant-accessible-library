import { warnA11y } from './dev.js'

type RoleWords = {
    /** Words that screen readers already announce for the role. */
    standalone: string[]
    /** Long words that also count at the end of a compound, e.g. "Hauptnavigation". */
    suffix: string[]
}

// Screen readers append the role to the name ("Main, navigation"), so naming
// a landmark "Main navigation" makes users hear the role twice.
const ROLE_WORDS: Record<string, RoleWords> = {
    nav: { standalone: ['nav'], suffix: ['navigation'] },
    search: { standalone: ['search'], suffix: ['suche'] },
    form: { standalone: ['form'], suffix: ['formular'] },
    section: { standalone: ['region'], suffix: [] },
    aside: { standalone: ['complementary'], suffix: [] },
}

const patterns = Object.fromEntries(
    Object.entries(ROLE_WORDS).map(([element, { standalone, suffix }]) => {
        const parts = [...standalone.map((word) => `\\b${word}`), ...suffix]
        return [element, new RegExp(`(${parts.join('|')})\\b`, 'i')]
    })
)

/** Returns the role word that `label` repeats for the given landmark element, if any. */
export function findRedundantRoleWord(
    element: string,
    label: string
): string | null {
    return patterns[element]?.exec(label)?.[0] ?? null
}

/** Logs a development warning if `label` repeats the role that screen readers announce anyway. */
export function checkRoleWord(
    component: string,
    element: string,
    label: string | undefined
): void {
    if (label == null) return
    const word = findRedundantRoleWord(element, label)
    if (word) {
        warnA11y(
            component,
            `label="${label}" contains "${word}". Screen readers already announce the role, so users hear it twice. Leave the word out.`
        )
    }
}
