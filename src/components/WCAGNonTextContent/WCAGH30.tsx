import React, { CSSProperties, ReactNode } from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'
import { LinkAttributes } from '../interfaces/LinkAttributes'

interface WCAGH30Props {
    link: string
    additionalStyling?: CSSProperties
    classNameLink?: string
    classNameImage?: string
    imageData?: (ImageAttributes & {
        altText?: string /* It may only be missing if the anchor text can describe the image */
    })[]
    linkData?: LinkAttributes
    postImageText?: ReactNode
    preImageText?: ReactNode
}

const WCAGH30: React.FC<WCAGH30Props> = ({
    additionalStyling,
    classNameImage,
    classNameLink,
    imageData,
    link,
    linkData,
    postImageText,
    preImageText,
}) => {
    return (
        <a
            href={link}
            style={{ ...additionalStyling }}
            className={classNameLink}
            download={linkData?.download}
            hrefLang={linkData?.hreflang}
            media={linkData?.media}
            ping={linkData?.ping}
            referrerPolicy={linkData?.referrerpolicy}
            rel={linkData?.rel}
            target={linkData?.target}
            type={linkData?.type}
        >
            {preImageText}
            {imageData?.map((data, dataIndex) => (
                <img
                    key={dataIndex}
                    className={classNameImage}
                    src={data.imageSource}
                    alt={data.altText ?? ''}
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
            {postImageText}
        </a>
    )
}

export default WCAGH30
