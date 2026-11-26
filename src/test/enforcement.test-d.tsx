/**
 * Compile-time tests: every `@ts-expect-error` below proves that TypeScript
 * rejects an inaccessible usage. If a line stops erroring, the test fails.
 */
import { describe, it } from 'vitest'

import {
    EmbeddedObject,
    FieldInput,
    FieldSelect,
    FieldTextarea,
    Emoji,
    Fieldset,
    Graphic,
    Image,
    ImageLink,
    Landmark,
    Nav,
    Table,
    TableHeaderCell,
} from '../index.js'

describe('type-level enforcement', () => {
    it('Image requires a decision about alt', () => {
        // @ts-expect-error -- neither alt nor decorative
        void (<Image src="/a.png" />)
        // @ts-expect-error -- alt and decorative contradict each other
        void (<Image src="/a.png" alt="A" decorative />)
        void (<Image src="/a.png" alt="A" />)
        void (<Image src="/a.png" decorative />)
    })

    it('ImageLink needs exactly one name source', () => {
        // @ts-expect-error -- no text and no alt
        void (<ImageLink href="/" image={{ src: '/a.png' }} />)
        const both = {
            href: '/',
            image: { src: '/a.png' },
            alt: 'Home',
            children: 'Home',
        }
        // @ts-expect-error -- both text and alt
        void (<ImageLink {...both} />)
    })

    it('Graphic and Emoji require a name', () => {
        // @ts-expect-error -- unnamed graphic
        void (<Graphic>x</Graphic>)
        // @ts-expect-error -- unnamed emoji
        void (<Emoji>🙂</Emoji>)
    })

    it('EmbeddedObject requires a title', () => {
        // @ts-expect-error -- missing title
        void (<EmbeddedObject data="/a.pdf">Fallback</EmbeddedObject>)
    })

    it('Sections and forms need names to be landmarks', () => {
        // @ts-expect-error -- unnamed section
        void (<Landmark as="section">x</Landmark>)
        void (<Landmark as="main">x</Landmark>)
        void (
            <Landmark as="form" labelledBy="h">
                x
            </Landmark>
        )
    })

    it('Field controls take their id from <Field controlId>', () => {
        // @ts-expect-error -- id would disconnect the label
        void (<FieldInput id="email" />)
        // @ts-expect-error -- id would disconnect the label
        void (<FieldSelect id="country" />)
        // @ts-expect-error -- id would disconnect the label
        void (<FieldTextarea id="message" />)
    })

    it('Groups, navigation and tables need their names', () => {
        // @ts-expect-error -- missing legend
        void (<Fieldset>x</Fieldset>)
        // @ts-expect-error -- missing label
        void (<Nav>x</Nav>)
        // @ts-expect-error -- missing caption
        void (<Table>x</Table>)
        // @ts-expect-error -- missing scope
        void (<TableHeaderCell>x</TableHeaderCell>)
    })
})
