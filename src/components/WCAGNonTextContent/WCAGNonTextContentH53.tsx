import React, { ReactNode } from 'react'

interface NonTextContentProps {
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

const WCAGNonTextContentH53: React.FC<NonTextContentProps> = ({
    objectData,
    children,
}) => {
    return (
        <object
            classID={objectData?.classId}
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

export default WCAGNonTextContentH53
