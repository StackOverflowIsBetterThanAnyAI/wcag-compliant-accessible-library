import React from 'react'

interface Props {
    altText: string
    className?: string
    imageData: {
        imageSource: string
        height?: number | string
        width?: number | string
        loading?: 'eager' | 'lazy'
        additionalStyling?: React.CSSProperties
    }[]
}

const WCAGG196: React.FC<Props> = ({ altText, className, imageData }) => {
    return (
        <>
            {imageData.map((data, index) => (
                <img
                    key={index}
                    src={data.imageSource}
                    alt={index === 0 ? altText : ''}
                    className={className}
                    loading={data?.loading}
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
