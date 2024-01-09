import React, { CSSProperties, ReactNode } from 'react'

interface WCAGH30Props {
    additionalStyling?: CSSProperties
    className?: string
    imageData?: {
        imageSource: string
        altText?: string // It may only be missing if the text of the anchor can clearly describe the link
        loading?: 'eager' | 'lazy'
        height?: number | string
        width?: number | string
        additionalStyling?: React.CSSProperties
    }[]
    link: string
    postImageText?: ReactNode
    preImageText?: ReactNode
}

const WCAGH30: React.FC<WCAGH30Props> = ({
    additionalStyling,
    className,
    imageData,
    link,
    postImageText,
    preImageText,
}) => {
    return (
        <a href={link} style={{ ...additionalStyling }} className={className}>
            {preImageText}
            {imageData?.map((data, index) => (
                <img
                    key={index}
                    src={data.imageSource}
                    alt={data.altText ?? ''}
                    loading={data?.loading}
                    style={{
                        height: data?.height,
                        width: data?.width,
                        ...data?.additionalStyling,
                    }}
                />
            ))}
            {postImageText}
        </a>
    )
}

export default WCAGH30
