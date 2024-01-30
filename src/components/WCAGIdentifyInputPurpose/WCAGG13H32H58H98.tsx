import { CSSProperties, ReactNode } from 'react'
import { FormAttributes } from '../interfaces/FormAttributes'
import { InputAttributes } from '../interfaces/InputAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGG13H32H58H98Props {
    formData: Omit<FormAttributes, 'autocomplete'> & { id: string }
    inputData: (Omit<
        InputAttributes,
        | 'additionalStyling'
        | 'autocomplete'
        | 'checked'
        | 'form'
        | 'formaction'
        | 'formenctype'
        | 'formmethod'
        | 'formtarget'
        | 'height'
        | 'id'
        | 'src'
        | 'type'
        | 'width'
    > & {
        autocomplete:
            | 'on'
            | 'off'
            | 'name'
            | 'honorific-prefix'
            | 'given-name'
            | 'additional-name'
            | 'family-name'
            | 'honorific-suffix'
            | 'nickname'
            | 'email'
            | 'username'
            | 'one-time-code'
            | 'organization-title'
            | 'organization'
            | 'street-address'
            | 'shipping'
            | 'billing'
            | 'address-line1'
            | 'address-line2'
            | 'address-line3'
            | 'address-level4'
            | 'address-level3'
            | 'address-level2'
            | 'address-level1'
            | 'country'
            | 'country-name'
            | 'postal-code'
            | 'cc-name'
            | 'cc-given-name'
            | 'cc-additional-name'
            | 'cc-family-name'
            | 'cc-number'
            | 'cc-exp'
            | 'cc-exp-month'
            | 'cc-exp-year'
            | 'cc-csc'
            | 'cc-type'
            | 'transaction-currency'
            | 'transaction-amount'
            | 'language'
            | 'bday'
            | 'bday-day'
            | 'bday-month'
            | 'bday-year'
            | 'sex'
            | 'tel'
            | 'tel-country-code'
            | 'tel-national'
            | 'tel-area-code'
            | 'tel-local'
            | 'tel-extension'
            | 'impp'
            | 'url'
            | 'photo'
            | 'webauthn'
        id: string
        type:
            | 'color'
            | 'date'
            | 'datetime-local'
            | 'email'
            | 'file'
            | 'hidden'
            | 'month'
            | 'number'
            | 'password'
            | 'range'
            | 'reset'
            | 'search'
            | 'tel'
            | 'text'
            | 'time'
            | 'url'
            | 'week'
        labelText: ReactNode
        additionalStylingInput?: CSSProperties
        additionalStylingLabel?: CSSProperties
        lang?: LangAttributes
        className?: string
    })[]
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
    changedContextText?: ReactNode
    role?: 'presentation' | 'search'
    submitData?: {
        type: 'submit' | 'image'
        value: string
        dirname?: string
        formaction?: string
        formenctype?: string
        formmethod?: 'get' | 'post'
        formtarget?: string
        src?: string
        onClickFunction?: () => void
        onFocusFunction?: () => void
        onHoverFunction?: () => void
        className?: string
        additionalStyling?: CSSProperties
    }
}

const WCAGG13H32H58H98: React.FC<WCAGG13H32H58H98Props> = ({
    additionalAriaAttributes,
    changedContextText,
    formData,
    inputData,
    role,
    submitData,
}) => {
    const errors: string[] = []

    if (formData.id.length < 1) {
        errors.push(
            `Your formData.id attribute has to have a length of at least one character!`
        )
    }

    inputData.forEach((data, dataIndex) => {
        if (data.autocomplete === 'off' && data.type !== 'password') {
            errors.push(
                `Your autocomplete attribute in inputData[${dataIndex}] should have a different value than 'off'!`
            )
        }
    })

    inputData.forEach((data, dataIndex) => {
        if (typeof data.labelText === 'boolean') {
            errors.push(
                `Your labelText attribute in inputData[${dataIndex}] must not have a boolean value!`
            )
        }
    })

    inputData.forEach((data, dataIndex) => {
        if (data.type === 'password' && data.autocomplete !== 'off') {
            errors.push(
                `You cannot set a different autocomplete value than 'off' in inputData[${dataIndex}] if your input type is 'password'!`
            )
        }
    })

    inputData.forEach((data, dataIndex) => {
        if (data.id.length < 1) {
            errors.push(
                `Your id attribute in inputData[${dataIndex}] has to have a length of at least one character!`
            )
        }
    })

    if (
        typeof changedContextText === 'number' ||
        typeof changedContextText === 'boolean'
    ) {
        errors.push(
            `Your changedContextText must not have a ${typeof changedContextText} value!`
        )
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    const areRequiredFieldsFilled = () => {
        let allFieldsFilled = true

        inputData.forEach((data) => {
            if (data.required && !data.value) {
                console.error(`Field ${data.id} is required but not filled.`)
                allFieldsFilled = false
            }
        })

        return allFieldsFilled
    }

    return (
        <form
            role={role}
            id={formData.id}
            acceptCharset={formData?.acceptCharset}
            action={formData?.action}
            autoComplete="on"
            className={formData?.classNameForm}
            encType={formData?.enctype}
            method={formData?.method}
            name={formData?.name}
            noValidate={formData?.novalidate}
            rel={formData?.rel}
            target={formData?.target}
            style={{ ...formData?.additionalStylingForm }}
            aria-atomic={additionalAriaAttributes?.atomic}
            aria-busy={additionalAriaAttributes?.busy}
            aria-controls={additionalAriaAttributes?.controls}
            aria-current={additionalAriaAttributes?.current}
            aria-describedby={additionalAriaAttributes?.describedby}
            aria-description={additionalAriaAttributes?.description}
            aria-details={additionalAriaAttributes?.details}
            aria-flowto={additionalAriaAttributes?.flowto}
            aria-hidden={additionalAriaAttributes?.hidden}
            aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
            aria-label={additionalAriaAttributes?.label}
            aria-live={additionalAriaAttributes?.live}
            aria-owns={additionalAriaAttributes?.owns}
            aria-relevant={additionalAriaAttributes?.relevant}
            aria-roledescription={additionalAriaAttributes?.roledescription}
        >
            {changedContextText}
            {inputData.map((data, dataIndex) => (
                <div key={dataIndex} lang={data?.lang?.language}>
                    <label
                        htmlFor={data.id}
                        style={{ ...data?.additionalStylingLabel }}
                    >
                        {data?.labelText}
                    </label>
                    <input
                        id={data.id}
                        form={formData.id}
                        type={data.type}
                        autoComplete={
                            data.type !== 'password' ? data.autocomplete : 'off'
                        }
                        accept={data?.accept}
                        autoCapitalize={data?.autocapitalize}
                        autoFocus={data?.autofocus}
                        capture={data?.capture}
                        className={data?.className}
                        dir={data?.dirname}
                        disabled={data?.disabled}
                        formNoValidate={data?.formnovalidate}
                        list={data?.list}
                        max={data?.max}
                        maxLength={data?.maxlength}
                        min={data?.min}
                        minLength={data?.minlength}
                        multiple={data?.multiple}
                        name={data?.name}
                        pattern={data?.pattern}
                        placeholder={data?.placeholder}
                        readOnly={data?.readonly}
                        required={data?.required}
                        size={data?.size}
                        step={data?.step}
                        value={data?.value}
                        style={{ ...data?.additionalStylingInput }}
                    />
                </div>
            ))}
            {submitData && (
                <div>
                    <input
                        type={submitData.type}
                        onClick={() => {
                            if (areRequiredFieldsFilled()) {
                                submitData?.onClickFunction &&
                                    submitData.onClickFunction()
                            } else {
                                console.error(
                                    'Please fill in all required fields before submitting.'
                                )
                            }
                        }}
                        onFocus={() =>
                            submitData?.onFocusFunction &&
                            submitData.onFocusFunction()
                        }
                        onMouseOver={() =>
                            submitData?.onHoverFunction &&
                            submitData.onHoverFunction()
                        }
                        className={submitData?.className}
                        dir={submitData?.dirname}
                        formAction={submitData?.formaction}
                        formEncType={submitData?.formenctype}
                        formMethod={submitData?.formmethod}
                        formTarget={submitData?.formtarget}
                        src={submitData?.src}
                        value={submitData.value}
                        style={{ ...submitData?.additionalStyling }}
                    />
                </div>
            )}
        </form>
    )
}

export default WCAGG13H32H58H98
