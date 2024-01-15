import React, { CSSProperties, ReactNode } from 'react'
import { LinkAttributes } from '../interfaces/LinkAttributes'
import { ImageAttributes } from '../interfaces/ImageAttributes'

interface WCAGH2Props {
    imageData: ImageAttributes
    link: string
    additionalStyling?: CSSProperties
    altText?: string // It may only be missing if the text of the anchor can clearly describe the link
    classNameImage?: string
    classNameLink?: string
    linkData?: LinkAttributes
    textBeforeImage?: boolean
    children: ReactNode
}

const WCAGH2: React.FC<WCAGH2Props> = ({
    additionalStyling,
    altText,
    classNameImage,
    classNameLink,
    imageData,
    link,
    linkData,
    textBeforeImage,
    children,
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
            {textBeforeImage && children}
            <img
                alt={altText ?? ''}
                src={imageData.imageSource}
                className={classNameImage}
                crossOrigin={imageData?.crossorigin}
                loading={imageData?.loading}
                referrerPolicy={imageData?.referrerpolicy}
                sizes={imageData?.sizes}
                style={{
                    height: imageData?.height,
                    width: imageData?.width,
                    ...imageData?.additionalStyling,
                }}
            />
            {!textBeforeImage && children}
        </a>
    )
}

export default WCAGH2
