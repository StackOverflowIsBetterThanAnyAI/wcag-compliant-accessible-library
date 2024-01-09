import React, { ReactNode } from 'react'

interface WCAGH53Props {
    className?: string
    objectData: {
        classId?: string
        data?: string
        form?: string
        name?: string
        type?: string
        useMap?: string
        height?: number | string
        width?: number | string
    }
    children: ReactNode // must contain either text or an element with an alt text
}

const WCAGH53: React.FC<WCAGH53Props> = ({
    className,
    objectData,
    children,
}) => {
    return (
        <object
            classID={objectData?.classId}
            className={className}
            data={objectData?.data}
            form={objectData?.form}
            name={objectData?.name}
            type={objectData?.type}
            useMap={objectData?.useMap}
            height={objectData?.height}
            width={objectData?.width}
        >
            {children}
        </object>
    )
}

export default WCAGH53
