/**
 * In production builds (`process.env.NODE_ENV === "production"`), the accessibility
 * warnings must stay silent, while the components still render correctly.
 */
import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
})

async function loadInProduction() {
    vi.stubEnv('NODE_ENV', 'production')
    // re-evaluate the modules so `isDev` is computed with the stubbed environment
    vi.resetModules()
    return import('../index.js')
}

describe('production builds', () => {
    it('do not log accessibility warnings', async () => {
        const { Image, Nav, NavLink, SkipLink } = await loadInProduction()
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

        render(
            <>
                <Image src="/a.png" alt="image" />
                <Nav label="Main navigation">
                    <NavLink href="/">Home</NavLink>
                </Nav>
                <SkipLink targetId="missing" />
            </>
        )

        expect(warn).not.toHaveBeenCalled()
        expect(screen.getByRole('img', { name: 'image' })).toBeInTheDocument()
        expect(
            screen.getByRole('navigation', { name: 'Main navigation' })
        ).toBeInTheDocument()
    })

    it('still warn in development, so the test above is meaningful', async () => {
        vi.stubEnv('NODE_ENV', 'development')
        vi.resetModules()
        const { Image } = await import('../index.js')
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

        render(<Image src="/a.png" alt="image" />)

        expect(warn).toHaveBeenCalled()
    })
})
