import React, { CSSProperties } from 'react'

interface WCAGH24Props {
    areaData: {
        altText?: string // May only be omitted if ypu are creating a hollow shape
        coords: string
        download?: string
        referrerpolicy?: React.HTMLAttributeReferrerPolicy
        rel?:
            | 'alternate'
            | 'author'
            | 'bookmark'
            | 'help'
            | 'license'
            | 'next'
            | 'nofollow'
            | 'noreferrer'
            | 'prefetch'
            | 'prev'
            | 'search'
            | 'tag'
        href?: string // May only be omitted if ypu are creating a hollow shape
        shape: 'default' | 'rect' | 'circle' | 'poly'
        target?: string
    }[]
    className?: string
    imageData: {
        altText: string
        imageSource: string
        loading?: 'eager' | 'lazy'
        height?: number | string
        width?: number | string
        additionalStyling?: CSSProperties
    }
    mapName: string
}

const WCAGH24: React.FC<WCAGH24Props> = ({
    areaData,
    className,
    imageData,
    mapName,
}) => {
    return (
        <>
            <img
                alt={imageData.altText}
                className={className}
                src={imageData.imageSource}
                loading={imageData?.loading}
                height={imageData?.height}
                width={imageData?.width}
                useMap={`#${mapName}`}
                style={{ ...imageData?.additionalStyling }}
            />
            <map name={mapName}>
                {areaData?.map((data, index) => (
                    <area
                        key={index}
                        alt={data.altText}
                        coords={data.coords}
                        download={data?.download}
                        referrerPolicy={data?.referrerpolicy}
                        rel={data?.rel}
                        href={data.href}
                        shape={data.shape}
                        target={data?.target}
                    />
                ))}
            </map>
        </>
    )
}

export default WCAGH24
