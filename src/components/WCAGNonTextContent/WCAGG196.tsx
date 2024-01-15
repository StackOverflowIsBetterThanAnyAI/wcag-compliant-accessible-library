import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGG196Props {
    altText: string
    imageData: ImageAttributes[]
    className?: string
}

const WCAGG196: React.FC<WCAGG196Props> = ({
    altText,
    className,
    imageData,
}) => {
    return (
        <>
            {imageData.map((data, index) => (
                <img
                    key={index}
                    alt={index === 0 ? altText : ''}
                    src={data.imageSource}
                    className={className}
                    crossOrigin={data?.crossorigin}
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
