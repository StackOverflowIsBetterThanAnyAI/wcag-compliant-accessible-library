import { useId, type ComponentProps, type ReactNode } from 'react'

type ScrollContainerProps = Omit<
    ComponentProps<'div'>,
    'children' | 'role' | 'tabIndex' | 'aria-labelledby'
>

export type TableProps = ComponentProps<'table'> & {
    /**
     * Names the table and summarises its content. Required: it is how screen reader users
     * find and identify tables. Hide it visually with `captionProps={{ style: visuallyHiddenStyle }}` if needed.
     */
    caption: ReactNode
    /** Props for the `<caption>`, e.g. `className`. */
    captionProps?: Omit<ComponentProps<'caption'>, 'children' | 'id'>
    /**
     * Wraps the table in a container that can scroll horizontally, e.g. on small screens.
     * The container is focusable and named after the caption, so keyboard users can scroll it
     * with the arrow keys (WCAG 2.1.1). Give it `overflow-x: auto` through `scrollContainerProps`.
     */
    scrollable?: boolean
    /** Props for the scroll container, e.g. `className`. Only used with `scrollable`. */
    scrollContainerProps?: ScrollContainerProps
}

/**
 * A data table with a mandatory caption. Use native `thead`, `tbody`, `tr` and `td` inside,
 * and `<TableHeaderCell>` for header cells.
 *
 * Avoid `display: block`, `flex` or `grid` on `table`, `tr`, `th` or `td` (e.g. for a card layout
 * on mobile): some browsers, notably Safari, then drop the table semantics and screen readers
 * no longer announce rows, columns and headers. Use `scrollable` for narrow screens instead.
 *
 * For sortable columns, set `aria-sort` on the sorted `<TableHeaderCell>` and put a `<button>`
 * inside it.
 *
 * Fulfils WCAG 1.3.1 Info and Relationships (techniques H39, H51, H63).
 */
export function Table({
    caption,
    captionProps,
    scrollable = false,
    scrollContainerProps,
    children,
    ...props
}: TableProps) {
    const captionId = `${useId()}-caption`
    const table = (
        <table {...props}>
            <caption {...captionProps} id={captionId}>
                {caption}
            </caption>
            {children}
        </table>
    )
    if (!scrollable) return table

    return (
        // A focusable region is the established pattern for keyboard-scrollable content.
        <div
            {...scrollContainerProps}
            role="region"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- see above
            tabIndex={0}
            aria-labelledby={captionId}
        >
            {table}
        </div>
    )
}

export type TableHeaderCellProps = Omit<ComponentProps<'th'>, 'scope'> & {
    /**
     * Which cells this header applies to. Required so screen readers can associate data cells with headers.
     * For complex tables with multi-level headers, additionally use `id` on headers and `headers` on cells (H43).
     */
    scope: 'col' | 'row' | 'colgroup' | 'rowgroup'
}

/** A `<th>` with a mandatory `scope`. */
export function TableHeaderCell(props: TableHeaderCellProps) {
    return <th {...props} />
}
