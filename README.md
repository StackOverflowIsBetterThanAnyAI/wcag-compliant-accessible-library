# wcag-compliant-accessible-library

Unstyled React components that are **accessible by default**.

The components render plain, native HTML and ship **no CSS**. What they do ship is the part that is
easy to get wrong: text alternatives, labels, names, ID references and ARIA attributes, enforced by
TypeScript wherever possible.

```tsx
<Image src="/logo.png" />                      // ✗ does not compile: alt or decorative?
<Image src="/logo.png" alt="Acme home page" /> // ✓
<Image src="/divider.png" decorative />        // ✓ alt="" on purpose
```

📖 **[Storybook with live examples](https://stackoverflowisbetterthananyai.github.io/wcag-compliant-accessible-library/)**

## Installation

```sh
npm install wcag-compliant-accessible-library
```

Requires React 19 or newer. The package is ESM-only, tree-shakeable and works with React Server
Components (interactive parts are marked `'use client'`).

## Principles

- **Accessible by construction.** Required accessibility information is a required prop. A table
  without a caption, a navigation without a name or a header cell without `scope` is a type error.
- **Native first.** Every component renders the semantic HTML element. ARIA is only added where HTML
  alone is not enough.
- **Bring your own styles.** Every component accepts `className`, `style`, `ref`, event handlers and
  every native attribute. State is exposed as attributes (`data-invalid`, `data-required`,
  `data-disabled`, `aria-current`), so Tailwind, CSS Modules or plain CSS all work.
- **Warn, never break.** Mistakes the type system cannot catch (an empty `alt`, a control without a
  label) are logged as warnings in development. Components always render.

## Example

```tsx
import {
    Field,
    FieldDescription,
    FieldError,
    FieldInput,
    FieldLabel,
} from 'wcag-compliant-accessible-library'

function EmailField({ error }: { error?: string }) {
    return (
        <Field invalid={!!error} required className="field">
            <FieldLabel>Email</FieldLabel>
            <FieldInput type="email" autoComplete="email" className="input" />
            <FieldDescription>
                We only use it to send your receipt.
            </FieldDescription>
            {error && <FieldError>{error}</FieldError>}
        </Field>
    )
}
```

All IDs are generated and wired up: the label is associated with the input, the description and
(while invalid) the error are linked through `aria-describedby`, and `aria-invalid` and `required`
are set. Style the invalid state with `.input[data-invalid]` or Tailwind's
`data-[invalid]:border-red-600`.

## Components

| Component                                                                                             | Renders                     | Enforces                                        | WCAG 2.2                   |
| ----------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------- | -------------------------- |
| `Image`                                                                                               | `img`                       | `alt` **or** `decorative`                       | 1.1.1                      |
| `ImageLink`                                                                                           | `a` + `img`                 | exactly one name source: link text **or** `alt` | 1.1.1, 2.4.4               |
| `Graphic`                                                                                             | `div role="img"`            | `label` or `labelledBy`                         | 1.1.1                      |
| `Emoji`                                                                                               | `span role="img"`           | `label` **or** `decorative`                     | 1.1.1                      |
| `Figure`, `FigureCaption`, `FigureDescription`                                                        | `figure` + `figcaption`     | long description linked via `aria-describedby`  | 1.1.1, 1.3.1               |
| `EmbeddedObject`                                                                                      | `object`                    | `title` and fallback content                    | 1.1.1                      |
| `Field`, `FieldLabel`, `FieldInput`, `FieldSelect`, `FieldTextarea`, `FieldDescription`, `FieldError` | `div` + native controls     | label, description and error association        | 1.3.1, 1.3.5, 3.3.1, 3.3.2 |
| `useFieldControlProps`                                                                                | –                           | connects any custom control to a `Field`        | 1.3.1, 4.1.2               |
| `Fieldset`                                                                                            | `fieldset` + `legend`       | `legend`, group description and error           | 1.3.1, 3.3.1, 3.3.2        |
| `Heading`, `HeadingLevel`                                                                             | `h1`–`h6`                   | correct nesting without hard-coded levels       | 1.3.1, 2.4.6               |
| `Landmark`                                                                                            | `main`, `nav`, `section`, … | a name for `section` and `form`                 | 1.3.1, 2.4.1               |
| `List`                                                                                                | `ul` / `ol`                 | list semantics even with `list-style: none`     | 1.3.1                      |
| `Table`, `TableHeaderCell`                                                                            | `table` + `caption`, `th`   | `caption`, `scope`                              | 1.3.1                      |
| `Link`                                                                                                | `a` (or your router link)   | new-tab warning, `rel="noopener"`               | 2.4.4, 3.2.5               |
| `Nav`, `NavLink`                                                                                      | `nav` + `ul` + `li` + `a`   | a name, list structure, `aria-current`          | 1.3.1, 2.4.1               |
| `SkipLink`                                                                                            | `a`                         | moves focus to the target                       | 2.4.1                      |
| `VisuallyHidden`, `visuallyHiddenStyle`                                                               | `span`                      | content for screen readers only                 | –                          |

Each component's JSDoc and Storybook page lists the W3C techniques it implements.

### Router links

`Link` and `NavLink` accept a `render` prop, so the accessibility features work with any router:

```tsx
<NavLink
    href="/blog"
    current={pathname === '/blog'}
    render={(props) => <NextLink {...props} />}
>
    Blog
</NavLink>
```

## Development

```sh
npm install
npm run storybook   # component workshop with the axe accessibility panel
npm test            # unit, type-level and axe-core tests, including every story
npm run lint
npm run build
```

Every pull request also runs the [Full Accessibility Audit](https://github.com/StackOverflowIsBetterThanAnyAI/full-accessibility-audit)
against every story in a real browser, on mobile and desktop (`npm run audit:serve` starts the same setup locally).

## Background

The foundation of this library was built as part of a bachelor's thesis. Version 2 is a complete
rewrite with a new API.

## Migrating from v1

v2 replaces the technique-based component names with semantic ones and drops components that were
thin wrappers around native elements. Use the native element with the `lang` attribute instead.

| v1                                                                                          | v2                                                       |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `WCAGH37`, `WCAGH67`, `WCAGG196`                                                            | `Image`                                                  |
| `WCAGH36`                                                                                   | native `<button>` with an icon and `VisuallyHidden` text |
| `WCAGH2H58`, `WCAGH30H58`                                                                   | `ImageLink`                                              |
| `WCAGH24`                                                                                   | an SVG with `<a>` elements, which scales with the layout |
| `WCAGARIA6H58`, `WCAGARIA10H58`, `WCAGARIA15H58` (+ `…Text`)                                | `Graphic`                                                |
| `WCAGG73H58`, `WCAGG74G92H58` (+ `…Text`)                                                   | `Figure`, `FigureDescription`                            |
| `WCAGH58H86`                                                                                | `Emoji`                                                  |
| `WCAGH53`                                                                                   | `EmbeddedObject`                                         |
| `WCAGH44H58`, `WCAGARIA2H58H65`, `WCAGG13H32H58H98`                                         | `Field` + parts                                          |
| `WCAGARIA2H58H71`                                                                           | `Fieldset`                                               |
| `WCAGARIA2H58H85`                                                                           | `FieldSelect` with native `optgroup`                     |
| `WCAGARIA11H58`                                                                             | `Landmark`                                               |
| `WCAGARIA12H58`                                                                             | `Heading`                                                |
| `WCAGG117H48H58`                                                                            | `List`                                                   |
| `WCAGG117H58H97H101`                                                                        | `Nav`, `NavLink`                                         |
| `WCAGH39H43H51H58H63`                                                                       | `Table`, `TableHeaderCell`                               |
| `WCAGG115H49H58A`                                                                           | `Link`                                                   |
| `WCAGG115H49Code`, `…B`, `…Cite`, `…Em`, `…Quote`, `…ShortQuote`, `…Strong`, `…Sub`, `…Sup` | native `code`, `b`, `cite`, `em`, …                      |

Other changes:

- Props are the native ones: `className`, `style`, `onClick`, `aria-*` instead of `additionalStyling`,
  `classNameLink`, `onClickFunction`, `additionalAriaAttributes` and the `…Data` objects.
- `lang` is a plain string (`lang="de"`) instead of `{ language: 'de' }`.
- Components never render nothing on invalid input; they render and warn in development.
- React 19+ and ESM only.

## License

[MIT](./LICENSE)
