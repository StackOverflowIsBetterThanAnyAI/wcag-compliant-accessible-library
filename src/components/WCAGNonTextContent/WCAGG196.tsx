import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGG196Props {
    altText: string
    imageData: ImageAttributes[]
    className?: string
    role?:
        | 'button'
        | 'checkbox'
        | 'link'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'option'
        | 'progressbar'
        | 'scrollbar'
        | 'separator'
        | 'slider'
        | 'switch'
        | 'tab'
        | 'treeitem'
}

const WCAGG196: React.FC<WCAGG196Props> = ({
    altText,
    className,
    imageData,
    role,
}) => {
    return (
        <>
            {imageData.map((data, dataIndex) => (
                <img
                    key={dataIndex}
                    alt={dataIndex === 0 ? altText : ''}
                    src={data.imageSource}
                    className={className}
                    role={role}
                    crossOrigin={data?.crossorigin}
                    decoding={data?.decoding}
                    loading={data?.loading}
                    referrerPolicy={data?.referrerpolicy}
                    sizes={data?.sizes}
                    style={{
                        height: data?.height,
                        width: data?.width,
                        ...data?.additionalStyling,
                    }}
                />
            ))}
        </>
    )
}

export default WCAGG196
