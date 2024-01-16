import React from 'react'
import { ImageAttributes } from '../interfaces/ImageAttributes'
import { AreaAttributes } from '../interfaces/AreaAttributes'

interface WCAGH24Props {
    areaData: AreaAttributes[]
    imageData: ImageAttributes & { altText: string }
    mapName: string
    classNameImage?: string
    classNameMap?: string
}

const WCAGH24: React.FC<WCAGH24Props> = ({
    areaData,
    classNameImage,
    classNameMap,
    imageData,
    mapName,
}) => {
    return (
        <>
            <img
                alt={imageData.altText}
                className={classNameImage}
                src={imageData.imageSource}
                crossOrigin={imageData?.crossorigin}
                decoding={imageData?.decoding}
                loading={imageData?.loading}
                referrerPolicy={imageData?.referrerpolicy}
                useMap={`#${mapName}`}
                style={{
                    height: imageData?.height,
                    width: imageData?.width,
                    ...imageData?.additionalStyling,
                }}
            />
            <map name={mapName} className={classNameMap}>
                {areaData?.map((data, dataIndex) => (
                    <area
                        key={dataIndex}
                        alt={data?.altText ?? ''}
                        coords={data.coords}
                        download={data?.download}
                        referrerPolicy={data?.referrerpolicy}
                        rel={data?.rel}
                        href={data?.href}
                        hrefLang={data?.hreflang}
                        media={data?.media}
                        shape={data.shape}
                        target={data?.target}
                    />
                ))}
            </map>
        </>
    )
}

export default WCAGH24
