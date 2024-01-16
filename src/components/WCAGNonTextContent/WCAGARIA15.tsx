import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGARIA15Props {
    accessibleIds: string
    className?: string
    imageData: (ImageAttributes & { altText: string })[]
}

const WCAGARIA15: React.FC<WCAGARIA15Props> = ({
    accessibleIds,
    className,
    imageData,
}) => {
    return (
        <>
            {imageData.map((data, dataIndex) => (
                <img
                    key={dataIndex}
                    src={data.imageSource}
                    alt={data.altText}
                    aria-describedby={accessibleIds}
                    className={className}
                    crossOrigin={data?.crossorigin}
                    decoding={data?.decoding}
                    loading={data?.loading}
                    referrerPolicy={data?.referrerpolicy}
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

export default WCAGARIA15
