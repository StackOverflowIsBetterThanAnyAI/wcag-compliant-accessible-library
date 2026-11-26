/** Joins ID references for attributes such as `aria-describedby`, dropping empty values. */
export function mergeIds(
    ...ids: Array<string | false | null | undefined>
): string | undefined {
    const joined = ids.filter(Boolean).join(' ').trim()
    return joined.length > 0 ? joined : undefined
}
