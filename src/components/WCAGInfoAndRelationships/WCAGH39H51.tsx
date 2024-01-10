import React, { CSSProperties } from 'react'

interface WCAGH39H51Props {
    tableContent: {
        text: string
        isHeader?: boolean
    }[][]
    additionalStyling?: CSSProperties
    captionText?: string
    classNameTable?: string
    classNameRow?: string
    classNameHeader?: string
    classNameCell?: string
    classNameCaption?: string
}

const WCAGH39H51: React.FC<WCAGH39H51Props> = ({
    tableContent,
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
            {tableContent.map((row, rowIndex) => (
                <tr key={rowIndex} className={classNameRow}>
                    {row.map((cell, cellIndex) =>
                        cell.isHeader ? (
                            <th
                                key={cellIndex}
                                className={classNameHeader}
                                scope={rowIndex !== 0 ? 'row' : undefined}
                            >
                                {cell.text}
                            </th>
                        ) : (
                            <td key={cellIndex} className={classNameCell}>
                                {cell.text}
                            </td>
                        )
                    )}
                </tr>
            ))}
        </table>
    )
}

export default WCAGH39H51
