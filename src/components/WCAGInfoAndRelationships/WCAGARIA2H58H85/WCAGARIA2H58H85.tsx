import React, { CSSProperties, ReactNode } from 'react'
import { WAIARIAAttributes } from '../../../interfaces/WAIARIAAttributes'
import { FormAttributes } from '../../../interfaces/FormAttributes'
import { SelectAttributes } from '../../../interfaces/SelectAttributes'
import { OptionAttributes } from '../../../interfaces/OptionAttributes'

interface WCAGARIA2H58H85Props {
    formData: FormAttributes
    labelData: {
        labelText: ReactNode
        className?: string
        form?: string
        additionalStylingLabel?: CSSProperties
    }
    selectData: SelectAttributes
    optionDataGroup: {
        labelGroup: string
        className?: string
        disabledGroup?: boolean
    }[][]
    optionData: OptionAttributes[][]
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
}

const WCAGARIA2H58H85: React.FC<WCAGARIA2H58H85Props> = ({
    additionalAriaAttributes,
    formData,
    labelData,
    optionData,
    optionDataGroup,
    role,
    selectData,
}) => {
    const errors: string[] = []

    // checks if labelText has a wrong value
    if (typeof labelData.labelText === 'boolean') {
        errors.push(
            `Your labelText must not have a ${typeof labelData.labelText} value!`
        )
    }

    // checks if selectData.id is an empty string
    if (selectData.id.trim().length < 1) {
        errors.push(
            'Your selectData.id has to have a length of at least one character!'
        )
    }

    // checks if selectData.name is an empty string
    if (selectData.name.trim().length < 1) {
        errors.push(
            'Your selectData.name has to have a length of at least one character!'
        )
    }

    //checks if all text or value parameters from optionData are empty
    const checkForEmptyOptionData = () => {
        const dataLength = optionData.length
        let missingText = 0
        let missingValue = 0

        optionData.map((option) => {
            const txt = option[0]?.text || ''
            const val = option[0]?.value || ''

            if (txt.trim().length < 1) missingText += 1
            if (val.trim().length < 1) missingValue += 1
        })

        if (missingText === dataLength) {
            console.error(
                `Your text parameters of the optionData object have to have a length of at least one character!`
            )
            return true
        }

        if (missingValue === dataLength) {
            console.error(
                `Your value parameters of the optionData object have to have a length of at least one character!`
            )
            return true
        }
        return false
    }

    // checks if all labelGroups are empty
    const checkForEmptyLabelGroup = () => {
        const groupLength = optionDataGroup.length
        let missingGroupLength = 0

        optionDataGroup.map((group) => {
            const label = group[0]?.labelGroup || ''
            if (label.trim().length < 1) missingGroupLength += 1
        })

        if (missingGroupLength === groupLength) {
            console.error(
                `Your labelGroup parameters have to have a length of at least one character!`
            )
            return true
        }
        return false
    }

    // renders optionGroups and checks if any labelGroup is an empty string
    const renderOptionGroups = () => {
        return optionDataGroup.map((group, groupIndex) => {
            const label = group[0]?.labelGroup || ''
            if (label.trim().length < 1) {
                console.error(
                    `Your labelGroup in optionDataGroup[${groupIndex}] has to have a length of at least one character!`
                )
            }

            // checks if any text or value paramters are empty
            const options = optionData[groupIndex]?.map((option) => {
                if (!option.text.trim().length) {
                    console.error(
                        `Your text in optionData[${groupIndex}] have to have a length of at least one character!`
                    )
                }

                if (!option.value.trim().length) {
                    console.error(
                        `Your value in optionData[${groupIndex}] have to have a length of at least one character!`
                    )
                }

                return option.value.trim().length &&
                    option.text.trim().length ? (
                    <option
                        key={option.value}
                        className={option?.className}
                        value={option.value}
                        disabled={option?.disabled}
                        label={option?.label}
                        lang={option?.lang?.language}
                        selected={option?.selected}
                        style={{ ...option?.additionalStyling }}
                    >
                        {option.text}
                    </option>
                ) : null
            })

            return label.trim().length ? (
                <optgroup key={groupIndex} label={label}>
                    {options}
                </optgroup>
            ) : null
        })
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    return !checkForEmptyLabelGroup() && !checkForEmptyOptionData() ? (
        <form
            role={role}
            className={formData?.classNameForm}
            acceptCharset={formData?.acceptCharset}
            action={formData?.action}
            autoComplete={formData?.autocomplete}
            encType={formData?.enctype}
            method={formData.method}
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
            <label
                htmlFor={selectData.id}
                form={labelData?.form}
                className={labelData?.className}
                style={{ ...labelData?.additionalStylingLabel }}
            >
                {labelData.labelText}
            </label>
            <select
                aria-required={selectData?.required}
                id={selectData.id}
                autoFocus={selectData?.autofocus}
                className={selectData?.className}
                disabled={selectData?.disabled}
                form={selectData?.form}
                multiple={selectData?.seeMultiple}
                name={selectData.name}
                required={selectData?.required}
                size={selectData?.size}
                style={{ ...selectData?.additionalStyling }}
            >
                {renderOptionGroups()}
            </select>
        </form>
    ) : null
}

export default WCAGARIA2H58H85
