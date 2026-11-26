import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import {
    EmbeddedObject,
    Emoji,
    Figure,
    FigureCaption,
    FigureDescription,
    Graphic,
    Image,
    ImageLink,
} from '../index.js'
import { findAltTextProblem } from '../utils/altText.js'
import { axeViolations } from './axe.js'

describe('Image', () => {
    it('renders an informative image with its alt text', async () => {
        const { container } = render(
            <Image src="/star.png" alt="Five-star rating" />
        )
        expect(
            screen.getByRole('img', { name: 'Five-star rating' })
        ).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })

    it('renders a decorative image with an empty alt so it is ignored', async () => {
        const { container } = render(<Image src="/star.png" decorative />)
        expect(container.querySelector('img')).toHaveAttribute('alt', '')
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })

    it('passes through className, style, ref and native attributes', () => {
        let element: HTMLImageElement | null = null
        render(
            <Image
                ref={(node) => {
                    element = node
                }}
                src="/star.png"
                alt="Star"
                className="custom"
                style={{ width: 10 }}
                loading="lazy"
                data-testid="img"
            />
        )
        const img = screen.getByTestId('img')
        expect(element).toBe(img)
        expect(img).toHaveClass('custom')
        expect(img).toHaveStyle({ width: '10px' })
        expect(img).toHaveAttribute('loading', 'lazy')
    })

    it('warns about meaningless alt texts', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(<Image src="/star.png" alt="image" />)
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('only names the type of image')
        )
        warn.mockRestore()
    })
})

describe('findAltTextProblem', () => {
    it.each([
        'image',
        'Image 3',
        'an icon',
        'the logo',
        'Bild',
        'Bild 3',
        'eine Grafik',
        'Abbildungen',
        'Platzhalter',
        'die Grafik',
        'der Platzhalter',
        'Screenshot 2',
        'img',
        'IMG_1234',
        'image-2',
        'team-photo.JPG',
        'scan.tiff',
        'x',
        '🔍',
    ])('flags %j', (alt) => {
        expect(findAltTextProblem(alt)).not.toBeNull()
    })

    it.each([
        'W3C logo',
        'Image of the week: a red fox',
        'Bar chart of sales in 2025',
        'Logo der Firma Acme',
        '猫',
        'あ',
        '한',
        '𠀋',
        '',
    ])('accepts %j', (alt) => {
        expect(findAltTextProblem(alt)).toBeNull()
    })
})

describe('ImageLink', () => {
    it('uses the text as name and makes the image decorative (H2)', async () => {
        const { container } = render(
            <ImageLink href="/" image={{ src: '/star.png' }}>
                Home
            </ImageLink>
        )
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
        expect(container.querySelector('img')).toHaveAttribute('alt', '')
        expect(await axeViolations(container)).toEqual([])
    })

    it('uses alt as name for image-only links (H30)', async () => {
        const { container } = render(
            <ImageLink href="/" image={{ src: '/star.png' }} alt="Home" />
        )
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })

    it('warns about a generic alt on image-only links', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(<ImageLink href="/" image={{ src: '/logo.svg' }} alt="Logo" />)
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('only names the type of image')
        )
        warn.mockRestore()
    })
})

describe('Graphic and Emoji', () => {
    it('exposes a graphic as one named image', async () => {
        const { container } = render(
            <Graphic label="Rating: 4 of 5 stars">
                <span>★★★★☆</span>
            </Graphic>
        )
        expect(
            screen.getByRole('img', { name: 'Rating: 4 of 5 stars' })
        ).toBeInTheDocument()
        expect(await axeViolations(container)).toEqual([])
    })

    it('labels emoji and hides decorative ones', async () => {
        const { container } = render(
            <p>
                <Emoji label="Warning">⚠️</Emoji> Disk almost full{' '}
                <Emoji decorative>✨</Emoji>
            </p>
        )
        expect(screen.getByRole('img', { name: 'Warning' })).toBeInTheDocument()
        expect(screen.getByText('✨')).toHaveAttribute('aria-hidden', 'true')
        expect(await axeViolations(container)).toEqual([])
    })
})

describe('Figure', () => {
    it('links the long description via aria-describedby only while it is rendered', async () => {
        const { container, rerender } = render(
            <Figure>
                <Image src="/chart.png" alt="Revenue 2025" />
                <FigureCaption>Revenue per quarter</FigureCaption>
                <FigureDescription>
                    Q1: 10, Q2: 12, Q3: 15, Q4: 20
                </FigureDescription>
            </Figure>
        )
        // jsdom does not derive a figure's name from <figcaption>; browsers do.
        const figure = screen.getByRole('figure')
        expect(figure).toHaveAccessibleDescription(
            'Q1: 10, Q2: 12, Q3: 15, Q4: 20'
        )
        expect(await axeViolations(container)).toEqual([])

        rerender(
            <Figure>
                <Image src="/chart.png" alt="Revenue 2025" />
                <FigureCaption>Revenue per quarter</FigureCaption>
            </Figure>
        )
        expect(screen.getByRole('figure')).not.toHaveAttribute(
            'aria-describedby'
        )
    })
})

describe('EmbeddedObject', () => {
    it('renders the fallback content inside the object', () => {
        const { container } = render(
            <EmbeddedObject
                data="/report.pdf"
                type="application/pdf"
                title="Annual report 2025 (PDF)"
            >
                <a href="/report.pdf">Download the annual report (PDF)</a>
            </EmbeddedObject>
        )
        expect(container.querySelector('object a')).toHaveTextContent(
            'Download the annual report'
        )
        expect(container.querySelector('object')).toHaveAttribute(
            'title',
            'Annual report 2025 (PDF)'
        )
    })
})

describe('label checks and misplaced parts', () => {
    it.each([
        ['Graphic', () => <Graphic label="Diagram">x</Graphic>],
        ['Emoji', () => <Emoji label="icon">⚠️</Emoji>],
        [
            'EmbeddedObject',
            () => (
                <EmbeddedObject data="/a.pdf" title="Grafik">
                    Fallback
                </EmbeddedObject>
            ),
        ],
    ])('%s warns about a meaningless name', (_, ui) => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(ui())
        expect(warn).toHaveBeenCalledTimes(1)
        warn.mockRestore()
    })

    it('warns when FigureDescription is outside a Figure', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
        render(<FigureDescription>Lost</FigureDescription>)
        expect(warn).toHaveBeenCalledWith(
            expect.stringContaining('must be placed inside a <Figure>')
        )
        warn.mockRestore()
    })
})
