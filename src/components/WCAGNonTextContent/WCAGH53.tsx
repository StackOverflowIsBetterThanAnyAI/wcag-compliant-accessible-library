import React, { ReactNode } from 'react'
import { ObjectAttributes } from '../interfaces/ObjectAttributes'

interface WCAGH53Props {
    className?: string
    objectData: ObjectAttributes
    role?: 'application' | 'document' | 'img'
    children: ReactNode // must contain either text or an element with an alt text
}

const WCAGH53: React.FC<WCAGH53Props> = ({
    className,
    objectData,
    role,
    children,
}) => {
    return (
        <object
            classID={objectData?.classId}
            className={className}
            role={role}
            data={objectData?.data}
            form={objectData?.form}
            name={objectData?.name}
            type={objectData?.type}
            useMap={objectData?.useMap}
            height={objectData?.height}
            width={objectData?.width}
            style={{ ...objectData?.additionalStyling }}
        >
            {children}
        </object>
    )
}

export default WCAGH53
