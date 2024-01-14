import React, { ReactNode } from 'react'

interface WCAGG117H48Props {
    listType: 'description' | 'ordered' | 'unordered'
    listItems?: {
        itemName: string
        new?: boolean
    }[]
    classNameParent?: string
    classNameChildren?: string
    children?: ReactNode
}

const WCAGG117H48: React.FC<WCAGG117H48Props> = ({
    listType,
    listItems,
    classNameChildren,
    classNameParent,
    children,
}) => {
    switch (listType) {
        case 'description':
            return (
                <dl className={classNameParent}>
                    {!children && listItems && listItems.length > 2 ? (
                        <div>
                            {listItems?.map((data, itemIndex) =>
                                itemIndex % 2 === 0 ? (
                                    <dt
                                        key={itemIndex}
                                        className={classNameChildren}
                                    >
                                        {data.itemName}
                                    </dt>
                                ) : (
                                    <dd
                                        key={itemIndex}
                                        className={classNameChildren}
                                    >
                                        {data.itemName}
                                    </dd>
                                )
                            )}
                        </div>
                    ) : (
                        <>
                            <dt className={classNameChildren}>
                                {listItems && listItems[0]?.itemName}
                            </dt>
                            <dd className={classNameChildren}>
                                {listItems && listItems[1]?.itemName}
                            </dd>
                        </>
                    )}
                    {!listItems && children}
                </dl>
            )
        case 'ordered':
            return (
                <ol className={classNameParent}>
                    {!children &&
                        listItems?.map((data, itemIndex) => (
                            <li key={itemIndex} className={classNameChildren}>
                                {data?.new ? (
                                    <strong>{data.itemName}</strong>
                                ) : (
                                    data.itemName
                                )}
                            </li>
                        ))}
                    {!listItems && children}
                </ol>
            )
        case 'unordered':
            return (
                <ul className={classNameParent}>
                    {!children &&
                        listItems?.map((data, itemIndex) => (
                            <li key={itemIndex} className={classNameChildren}>
                                {data?.new ? (
                                    <strong>{data.itemName}</strong>
                                ) : (
                                    data.itemName
                                )}
                            </li>
                        ))}
                    {!listItems && children}
                </ul>
            )
    }
}

export default WCAGG117H48
