import React, { ReactNode } from 'react'

interface WCAGH48Props {
    listType: 'description' | 'ordered' | 'unordered'
    listItems?: string[]
    classNameParent?: string
    classNameChildren?: string
    children?: ReactNode
}

const WCAGH48: React.FC<WCAGH48Props> = ({
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
                                    <dt className={classNameChildren}>
                                        {data}
                                    </dt>
                                ) : (
                                    <dd className={classNameChildren}>
                                        {data}
                                    </dd>
                                )
                            )}
                        </div>
                    ) : (
                        <>
                            <dt className={classNameChildren}>
                                {listItems && listItems[0]}
                            </dt>
                            <dd className={classNameChildren}>
                                {listItems && listItems[1]}
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
                                {data}
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
                                {data}
                            </li>
                        ))}
                    {!listItems && children}
                </ul>
            )
    }
}

export default WCAGH48
