import React, { CSSProperties, ReactNode } from 'react'
import { WAIARIAAttributes } from '../interfaces/WAIARIAAttributes'
import { LangAttributes } from '../interfaces/LangAttributes'

interface WCAGG117H48H58Props {
    listType: 'description' | 'ordered' | 'unordered'
    additionalAriaAttributes?: Omit<
        WAIARIAAttributes,
        | 'autocomplete'
        | 'braillelabel'
        | 'brailleroledescription'
        | 'checked'
        | 'colcount'
        | 'colindex'
        | 'colindextext'
        | 'colspan'
        | 'haspopup'
        | 'labelledby'
        | 'level'
        | 'modal'
        | 'multiline'
        | 'placeholder'
        | 'posinset'
        | 'pressed'
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
    additionalStylingParent?: CSSProperties
    additionalStylingChildren?: CSSProperties
    classNameParent?: string
    classNameChildren?: string
    role?:
        | 'group' //should be avoided
        | 'list' //should be avoided
        | 'listbox' //should be avoided
        | 'menu' //should be avoided
        | 'menubar' //should be avoided
        | 'presentation'
        | 'radiogroup' //should be avoided
        | 'tablist'
        | 'toolbar'
        | 'tree' //should be avoided
}

type ConditionalProps =
    | {
          listItems?: {
              itemName: string
              lang?: LangAttributes
              new?: boolean
          }[]
          children?: never
      }
    | {
          listItems?: never
          children?: ReactNode
      }

const WCAGG117H48H58: React.FC<WCAGG117H48H58Props & ConditionalProps> = ({
    additionalAriaAttributes,
    additionalStylingChildren,
    additionalStylingParent,
    listType,
    listItems,
    classNameChildren,
    classNameParent,
    role,
    children,
}) => {
    const errors: string[] = []

    // checks if there are neither children nur listItems
    if (!listItems && !children) {
        errors.push(
            `You have to either provide a value for "listItems" or "children"!`
        )
    }

    // checks if children contain either <li>, <dd> or <dt> elements
    if (
        children &&
        React.Children.toArray(children).some(
            (child) =>
                !React.isValidElement(child) ||
                (child.type !== 'li' &&
                    child.type !== 'dd' &&
                    child.type !== 'dt')
        )
    ) {
        errors.push(
            'Your child elements must be a sequence of <li>, <dd>, or <dt> elements!'
        )
    }

    if (errors.length) {
        for (let i in errors) {
            console.error(errors[i])
        }
        return
    }

    switch (listType) {
        case 'description':
            return (
                <dl
                    className={classNameParent}
                    style={{ ...additionalStylingParent }}
                    role={
                        role === 'group' ||
                        role === 'list' ||
                        role === 'presentation'
                            ? role
                            : undefined
                    }
                    aria-activedescendant={
                        role === 'group'
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
                        role === 'group'
                            ? additionalAriaAttributes?.disabled
                            : undefined
                    }
                    aria-flowto={additionalAriaAttributes?.flowto}
                    aria-hidden={additionalAriaAttributes?.hidden}
                    aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                    aria-label={additionalAriaAttributes?.label}
                    aria-live={additionalAriaAttributes?.live}
                    aria-owns={additionalAriaAttributes?.owns}
                    aria-relevant={additionalAriaAttributes?.relevant}
                    aria-roledescription={
                        additionalAriaAttributes?.roledescription
                    }
                >
                    {!children && listItems && listItems.length > 2 ? (
                        <div>
                            {listItems?.map((data, itemIndex) =>
                                itemIndex % 2 === 0 ? (
                                    <dt
                                        key={itemIndex}
                                        className={classNameChildren}
                                        style={{ ...additionalStylingChildren }}
                                        lang={data?.lang?.language}
                                    >
                                        {data.itemName}
                                    </dt>
                                ) : (
                                    <dd
                                        key={itemIndex}
                                        className={classNameChildren}
                                        style={{ ...additionalStylingChildren }}
                                        lang={data?.lang?.language}
                                    >
                                        {data.itemName}
                                    </dd>
                                )
                            )}
                        </div>
                    ) : (
                        <>
                            <dt
                                className={classNameChildren}
                                style={{ ...additionalStylingChildren }}
                                lang={listItems && listItems[0]?.lang?.language}
                            >
                                {listItems && listItems[0]?.itemName}
                            </dt>
                            <dd
                                className={classNameChildren}
                                style={{ ...additionalStylingChildren }}
                                lang={listItems && listItems[1]?.lang?.language}
                            >
                                {listItems && listItems[1]?.itemName}
                            </dd>
                        </>
                    )}
                    {!listItems && children}
                </dl>
            )
        case 'ordered':
            return (
                <ol
                    className={classNameParent}
                    style={{ ...additionalStylingParent }}
                    role={role !== 'list' ? role : undefined}
                    aria-activedescendant={
                        role === 'group'
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
                        role === 'group' ||
                        role === 'listbox' ||
                        role === 'menu' ||
                        role === 'menubar' ||
                        role === 'radiogroup' ||
                        role === 'toolbar'
                            ? additionalAriaAttributes?.disabled
                            : undefined
                    }
                    aria-errormessage={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.errormessage
                            : undefined
                    }
                    aria-expanded={
                        role === 'listbox'
                            ? additionalAriaAttributes?.expanded
                            : undefined
                    }
                    aria-flowto={additionalAriaAttributes?.flowto}
                    aria-hidden={additionalAriaAttributes?.hidden}
                    aria-invalid={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.invalid
                            : undefined
                    }
                    aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                    aria-label={additionalAriaAttributes?.label}
                    aria-live={additionalAriaAttributes?.live}
                    aria-multiselectable={
                        role === 'listbox' || role === 'tablist'
                            ? additionalAriaAttributes?.multiselectable
                            : undefined
                    }
                    aria-orientation={
                        role === 'tablist' ||
                        role === 'toolbar' ||
                        role === 'listbox' ||
                        role === 'menu' ||
                        role === 'menubar' ||
                        role === 'radiogroup'
                            ? additionalAriaAttributes?.orientation
                            : undefined
                    }
                    aria-owns={additionalAriaAttributes?.owns}
                    aria-readonly={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.readonly
                            : undefined
                    }
                    aria-relevant={additionalAriaAttributes?.relevant}
                    aria-required={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.required
                            : undefined
                    }
                    aria-roledescription={
                        additionalAriaAttributes?.roledescription
                    }
                >
                    {!children &&
                        listItems?.map((data, itemIndex) => (
                            <li
                                key={itemIndex}
                                className={classNameChildren}
                                style={{ ...additionalStylingChildren }}
                                lang={data?.lang?.language}
                            >
                                {data?.new ? (
                                    <strong>{data.itemName}</strong>
                                ) : (
                                    data.itemName
                                )}
                            </li>
                        ))}
                    {!listItems && children}
                </ol>
            )
        case 'unordered':
            return (
                <ul
                    className={classNameParent}
                    style={{ ...additionalStylingParent }}
                    role={role !== 'list' ? role : undefined}
                    aria-activedescendant={
                        role === 'group'
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
                        role === 'group' ||
                        role === 'listbox' ||
                        role === 'menu' ||
                        role === 'menubar' ||
                        role === 'radiogroup' ||
                        role === 'toolbar'
                            ? additionalAriaAttributes?.disabled
                            : undefined
                    }
                    aria-errormessage={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.errormessage
                            : undefined
                    }
                    aria-expanded={
                        role === 'listbox'
                            ? additionalAriaAttributes?.expanded
                            : undefined
                    }
                    aria-flowto={additionalAriaAttributes?.flowto}
                    aria-hidden={additionalAriaAttributes?.hidden}
                    aria-invalid={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.invalid
                            : undefined
                    }
                    aria-keyshortcuts={additionalAriaAttributes?.keyshortcuts}
                    aria-label={additionalAriaAttributes?.label}
                    aria-live={additionalAriaAttributes?.live}
                    aria-multiselectable={
                        role === 'listbox' || role === 'tablist'
                            ? additionalAriaAttributes?.multiselectable
                            : undefined
                    }
                    aria-orientation={
                        role === 'tablist' ||
                        role === 'toolbar' ||
                        role === 'listbox' ||
                        role === 'menu' ||
                        role === 'menubar' ||
                        role === 'radiogroup'
                            ? additionalAriaAttributes?.orientation
                            : undefined
                    }
                    aria-owns={additionalAriaAttributes?.owns}
                    aria-readonly={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.readonly
                            : undefined
                    }
                    aria-relevant={additionalAriaAttributes?.relevant}
                    aria-required={
                        role === 'listbox' || role === 'radiogroup'
                            ? additionalAriaAttributes?.required
                            : undefined
                    }
                    aria-roledescription={
                        additionalAriaAttributes?.roledescription
                    }
                >
                    {!children &&
                        listItems?.map((data, itemIndex) => (
                            <li
                                key={itemIndex}
                                className={classNameChildren}
                                style={{ ...additionalStylingChildren }}
                                lang={data?.lang?.language}
                            >
                                {data?.new ? (
                                    <strong>{data.itemName}</strong>
                                ) : (
                                    data.itemName
                                )}
                            </li>
                        ))}
                    {!listItems && children}
                </ul>
            )
    }
}

export default WCAGG117H48H58
