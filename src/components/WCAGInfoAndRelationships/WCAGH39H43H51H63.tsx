import React, { CSSProperties } from 'react'

interface WCAGH39H43H51H63Props {
    tableContent: {
        text: string
        isHeader?: boolean
        rowspan?: number
        colspan?: number
        id?: string
        headers?: string
        scope?: 'col' | 'colgroup' | 'row' | 'rowgroup'
    }[][]
    additionalStyling?: CSSProperties
    tableType: 'data' | 'layout'
    captionText?: string
    classNameTable?: string
    classNameRow?: string
    classNameHeader?: string
    classNameCell?: string
    classNameCaption?: string
}

const WCAGH39H43H51H63: React.FC<WCAGH39H43H51H63Props> = ({
    tableContent,
    tableType,
    additionalStyling,
    captionText,
    classNameCell,
    classNameHeader,
    classNameRow,
    classNameTable,
    classNameCaption,
}) => {
    return (
        <table className={classNameTable} style={{ ...additionalStyling }}>
            {captionText && (
                <caption className={classNameCaption}>{captionText}</caption>
            )}
            <tbody>
                {tableContent.map((row, rowIndex) => (
                    <tr key={rowIndex} className={classNameRow}>
                        {row.map((cell, cellIndex) =>
                            cell.isHeader ? (
                                <th
                                    key={cellIndex}
                                    className={classNameHeader}
                                    scope={
                                        tableType === 'data'
                                            ? cell?.scope
                                            : undefined
                                    }
                                    rowSpan={cell?.rowspan}
                                    colSpan={cell?.colspan}
                                    id={cell?.id}
                                    headers={
                                        tableType === 'data' && rowIndex !== 0
                                            ? cell?.headers
                                            : undefined
                                    }
                                >
                                    {cell.text}
                                </th>
                            ) : (
                                <td
                                    key={cellIndex}
                                    className={classNameCell}
                                    scope={
                                        tableType === 'data'
                                            ? cell?.scope
                                            : undefined
                                    }
                                    headers={
                                        tableType === 'data'
                                            ? cell?.headers
                                            : undefined
                                    }
                                >
                                    {cell.text}
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default WCAGH39H43H51H63
