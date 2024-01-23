import { CSSProperties, ReactNode } from 'react'
import { FormAttributes } from '../interfaces/FormAttributes'
import { InputAttributes } from '../interfaces/InputAttributes'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'

interface WCAGH98Props {
    formData: Omit<FormAttributes, 'autocomplete'> & { id: string }
    inputData: (Omit<
        InputAttributes,
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
    role?: 'presentation' | 'search'
    submitData?: {
        dirname?: string
        formaction?: string
        formenctype?: string
        formmethod?: 'get' | 'post'
        formtarget?: string
        src?: string
        value?: string
        onClickFunction?: () => void
        className?: string
        additionalStyling?: CSSProperties
    }
}

const WCAGH98: React.FC<WCAGH98Props> = ({
    additionalAriaAttributes,
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

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
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
            {inputData.map((data, dataIndex) => (
                <div key={dataIndex}>
                    <label htmlFor={data.id}>{data?.labelText}</label>
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
                        style={{ ...data?.additionalStyling }}
                    />
                </div>
            ))}
            {submitData && (
                <div>
                    <input
                        type="submit"
                        onClick={() =>
                            submitData?.onClickFunction &&
                            submitData.onClickFunction()
                        }
                        className={submitData?.className}
                        dir={submitData?.dirname}
                        formAction={submitData?.formaction}
                        formEncType={submitData?.formenctype}
                        formMethod={submitData?.formmethod}
                        formTarget={submitData?.formtarget}
                        src={submitData?.src}
                        value={submitData?.value}
                        style={{ ...submitData?.additionalStyling }}
                    />
                </div>
            )}
        </form>
    )
}

export default WCAGH98
