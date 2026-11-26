// Text alternatives (WCAG 1.1.1)
export { Image, type ImageProps } from './components/Image/Image.js'
export {
    ImageLink,
    type ImageLinkProps,
} from './components/ImageLink/ImageLink.js'
export { Graphic, type GraphicProps } from './components/Graphic/Graphic.js'
export { Emoji, type EmojiProps } from './components/Emoji/Emoji.js'
export {
    Figure,
    FigureCaption,
    FigureDescription,
    type FigureCaptionProps,
    type FigureDescriptionProps,
    type FigureProps,
} from './components/Figure/Figure.js'
export {
    EmbeddedObject,
    type EmbeddedObjectProps,
} from './components/EmbeddedObject/EmbeddedObject.js'

// Forms (WCAG 1.3.1, 1.3.5, 3.3.1, 3.3.2, 4.1.2)
export {
    Field,
    FieldDescription,
    FieldError,
    FieldInput,
    FieldLabel,
    FieldSelect,
    FieldTextarea,
    useFieldControlProps,
    type FieldDescriptionProps,
    type FieldErrorProps,
    type FieldInputProps,
    type FieldLabelProps,
    type FieldProps,
    type FieldSelectProps,
    type FieldTextareaProps,
} from './components/Field/Field.js'
export { Fieldset, type FieldsetProps } from './components/Fieldset/Fieldset.js'

// Structure and navigation (WCAG 1.3.1, 2.4.1, 2.4.4, 2.4.6)
export {
    Heading,
    HeadingLevel,
    type HeadingLevelProps,
    type HeadingLevelValue,
    type HeadingProps,
} from './components/Heading/Heading.js'
export {
    Landmark,
    type LandmarkElement,
    type LandmarkProps,
} from './components/Landmark/Landmark.js'
export { List, type ListProps } from './components/List/List.js'
export { Link, type LinkProps } from './components/Link/Link.js'
export {
    Nav,
    NavLink,
    type NavLinkProps,
    type NavProps,
} from './components/Nav/Nav.js'
export { SkipLink, type SkipLinkProps } from './components/SkipLink/SkipLink.js'
export {
    Table,
    TableHeaderCell,
    type TableHeaderCellProps,
    type TableProps,
} from './components/Table/Table.js'

// Utilities
export {
    VisuallyHidden,
    visuallyHiddenStyle,
    type VisuallyHiddenProps,
} from './components/VisuallyHidden/VisuallyHidden.js'
