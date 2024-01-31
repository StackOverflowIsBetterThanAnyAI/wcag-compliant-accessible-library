import React, { ReactNode } from 'react'
import { GlobalAttributes } from '../../interfaces/GlobalAttributes'
import { WAIARIAAttributes } from '../../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../../interfaces/LangAttributes'

interface WCAGARIA11H58Props extends GlobalAttributes {
    role:
        | 'banner'
        | 'complementary'
        | 'contentinfo'
        | 'form'
        | 'main'
        | 'navigation'
        | 'region'
        | 'search'
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'activedescendant'
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'disabled'
        | 'errormessage'
        | 'expanded'
        | 'haspopup'
        | 'invalid'
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
    className?: string
    elementData?: GlobalAttributes
    lang?: LangAttributes
    children: ReactNode
}

type ConditionalARIA11H58Props =
    | {
          ariaLabel?: string
          ariaLabelledById?: never
      }
    | {
          ariaLabel?: never
          ariaLabelledById?: string
      }

const WCAGARIA11H58: React.FC<
    WCAGARIA11H58Props & ConditionalARIA11H58Props
> = ({
    additionalAriaAttributes,
    ariaLabel,
    ariaLabelledById,
    className,
    elementData,
    lang,
    role,
    children,
}) => {
    try {
        if (!ariaLabel && !ariaLabelledById) {
            throw new Error(
                'You must either provide a value for ariaLabel or ariaLabelledById!'
            )
        }
        return (
            <>
                {role === 'search' ? (
                    <form
                        role={role}
                        aria-label={ariaLabel}
                        aria-labelledby={ariaLabelledById}
                        style={{ ...elementData?.additionalStyling }}
                        lang={lang?.language}
                        className={className}
                        aria-atomic={additionalAriaAttributes?.atomic}
                        aria-busy={additionalAriaAttributes?.busy}
                        aria-controls={additionalAriaAttributes?.controls}
                        aria-current={additionalAriaAttributes?.current}
                        aria-describedby={additionalAriaAttributes?.describedby}
                        aria-description={additionalAriaAttributes?.description}
                        aria-details={additionalAriaAttributes?.details}
                        aria-flowto={additionalAriaAttributes?.flowto}
                        aria-hidden={additionalAriaAttributes?.hidden}
                        aria-keyshortcuts={
                            additionalAriaAttributes?.keyshortcuts
                        }
                        aria-live={additionalAriaAttributes?.live}
                        aria-owns={additionalAriaAttributes?.owns}
                        aria-relevant={additionalAriaAttributes?.relevant}
                        aria-roledescription={
                            additionalAriaAttributes?.roledescription
                        }
                    >
                        {children}
                    </form>
                ) : (
                    <div
                        role={role}
                        aria-label={ariaLabel}
                        aria-labelledby={ariaLabelledById}
                        style={{ ...elementData?.additionalStyling }}
                        lang={lang?.language}
                        className={className}
                        accessKey={elementData?.accesskey}
                        contentEditable={elementData?.contenteditable}
                        dir={elementData?.dir}
                        draggable={elementData?.draggable}
                        hidden={elementData?.hiddenElement}
                        id={elementData?.id}
                        inputMode={elementData?.inputmode}
                        spellCheck={elementData?.spellcheck}
                        tabIndex={elementData?.tabindex}
                        title={elementData?.title}
                        translate={elementData?.translate}
                        aria-atomic={additionalAriaAttributes?.atomic}
                        aria-busy={additionalAriaAttributes?.busy}
                        aria-controls={additionalAriaAttributes?.controls}
                        aria-current={additionalAriaAttributes?.current}
                        aria-describedby={additionalAriaAttributes?.describedby}
                        aria-description={additionalAriaAttributes?.description}
                        aria-details={additionalAriaAttributes?.details}
                        aria-flowto={additionalAriaAttributes?.flowto}
                        aria-hidden={additionalAriaAttributes?.hidden}
                        aria-live={additionalAriaAttributes?.live}
                        aria-owns={additionalAriaAttributes?.owns}
                        aria-relevant={additionalAriaAttributes?.relevant}
                        aria-roledescription={
                            additionalAriaAttributes?.roledescription
                        }
                    >
                        {children}
                    </div>
                )}
            </>
        )
    } catch (error: any) {
        console.error(error.message)
        return
    }
}

export default WCAGARIA11H58
