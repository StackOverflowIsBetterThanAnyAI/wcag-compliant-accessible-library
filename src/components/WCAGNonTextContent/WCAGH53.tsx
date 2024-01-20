import React, { ReactNode } from 'react'
import { ObjectAttributes } from '../interfaces/ObjectAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGH53Props {
    className?: string
    objectData?: ObjectAttributes
    role?: 'application' | 'document' | 'img'
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colspan'
        | 'colindextext'
        | 'label'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'multiselectable'
        | 'orientation'
        | 'placeholder'
        | 'posinset'
        | 'pressed'
        | 'readonly'
        | 'required'
        | 'rowcount'
        | 'rowindex'
        | 'rowindextext'
        | 'rowspan'
        | 'selected'
        | 'setsize'
        | 'sort'
        | 'valuemax'
        | 'valuemin'
        | 'valuenow'
        | 'valuetext'
    >
    children: ReactNode // must contain either text or an element with an alt text
}

const WCAGH53: React.FC<WCAGH53Props> = ({
    additionalAriaAttributes,
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
            aria-activedescendant={
                role === 'application'
                    ? additionalAriaAttributes?.activedescendant
                    : undefined
            }
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-disabled={
                role === 'application'
                    ? additionalAriaAttributes?.disabled
                    : undefined
            }
            aria-errormessage={
                role === 'application'
                    ? additionalAriaAttributes?.errormessage
                    : undefined
            }
            aria-expanded={
                role === 'application'
                    ? additionalAriaAttributes?.expanded
                    : undefined
            }
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-haspopup={
                role === 'application'
                    ? additionalAriaAttributes?.haspopup
                    : undefined
            }
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-invalid={
                role === 'application'
                    ? additionalAriaAttributes?.invalid
                    : undefined
            }
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-live={additionalAriaAttributes?.live}
            aria-owns={additionalAriaAttributes?.owns}
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-roledescription={additionalAriaAttributes?.roledescription}
        >
            {children}
        </object>
    )
}

export default WCAGH53
