import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Table, TableHeaderCell } from './Table.js'

const meta = {
    title: 'Structure/Table',
    component: Table,
    subcomponents: { TableHeaderCell },
    args: { className: 'demo-table' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

/** Column and row headers with `scope`, so every cell is announced with its headers. */
export const OpeningHours: Story = {
    args: {
        caption: 'Opening hours',
        children: (
            <>
                <thead>
                    <tr>
                        <TableHeaderCell scope="col">Day</TableHeaderCell>
                        <TableHeaderCell scope="col">Morning</TableHeaderCell>
                        <TableHeaderCell scope="col">Afternoon</TableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableHeaderCell scope="row">Monday</TableHeaderCell>
                        <td>8–12</td>
                        <td>13–17</td>
                    </tr>
                    <tr>
                        <TableHeaderCell scope="row">Saturday</TableHeaderCell>
                        <td>9–12</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </>
        ),
    },
}

/**
 * On narrow screens, `scrollable` wraps the table in a focusable, named region.
 * Tab to it and scroll with the arrow keys.
 */
export const Scrollable: Story = {
    args: {
        caption: 'Monthly visitors',
        scrollable: true,
        scrollContainerProps: { className: 'demo-table-scroll' },
        children: (
            <>
                <thead>
                    <tr>
                        <TableHeaderCell scope="col">Page</TableHeaderCell>
                        {MONTHS.map((month) => (
                            <TableHeaderCell key={month} scope="col">
                                {month}
                            </TableHeaderCell>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableHeaderCell scope="row">Home</TableHeaderCell>
                        {MONTHS.map((month, index) => (
                            <td key={month}>{(index + 3) * 1200}</td>
                        ))}
                    </tr>
                </tbody>
            </>
        ),
    },
}

const PEOPLE = [
    { name: 'Ada', age: 36 },
    { name: 'Grace', age: 85 },
    { name: 'Linus', age: 28 },
]

type SortKey = 'name' | 'age'
type Direction = 'ascending' | 'descending'

function SortableTable() {
    const [sort, setSort] = useState<{ key: SortKey; direction: Direction }>({
        key: 'name',
        direction: 'ascending',
    })
    const rows = [...PEOPLE].sort((a, b) => {
        const order =
            a[sort.key] < b[sort.key] ? -1 : a[sort.key] > b[sort.key] ? 1 : 0
        return sort.direction === 'ascending' ? order : -order
    })

    const header = (key: SortKey, label: string) => {
        const active = sort.key === key
        return (
            <TableHeaderCell
                scope="col"
                aria-sort={active ? sort.direction : undefined}
            >
                <button
                    type="button"
                    className="demo-sort-button"
                    onClick={() =>
                        setSort({
                            key,
                            direction:
                                active && sort.direction === 'ascending'
                                    ? 'descending'
                                    : 'ascending',
                        })
                    }
                >
                    {label}
                    <span aria-hidden="true">
                        {active
                            ? sort.direction === 'ascending'
                                ? ' ▲'
                                : ' ▼'
                            : ' ↕'}
                    </span>
                </button>
            </TableHeaderCell>
        )
    }

    return (
        <Table caption="Team members" className="demo-table">
            <thead>
                <tr>
                    {header('name', 'Name')}
                    {header('age', 'Age')}
                </tr>
            </thead>
            <tbody>
                {rows.map((person) => (
                    <tr key={person.name}>
                        <TableHeaderCell scope="row">
                            {person.name}
                        </TableHeaderCell>
                        <td>{person.age}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

/**
 * Sortable columns: a `<button>` in the header cell makes sorting keyboard accessible, and
 * `aria-sort` on the sorted column tells screen readers the current order. Only the sorted
 * column gets `aria-sort`; the arrows are decorative.
 */
export const Sortable: Story = {
    args: { caption: 'Team members' },
    render: () => <SortableTable />,
}
