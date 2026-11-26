/// <reference types="vite/client" />
/**
 * Renders every story and checks it with axe-core, so the documentation of an
 * accessibility library can never silently show inaccessible examples.
 * New stories are picked up automatically.
 */
import { composeStories, setProjectAnnotations } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import type { ComponentType } from 'react'
import { describe, expect, it } from 'vitest'

import preview from '../../.storybook/preview.js'
import { axeViolations } from './axe.js'

setProjectAnnotations(preview)

type StoryModule = Parameters<typeof composeStories>[0]

const modules = import.meta.glob<StoryModule>(
    '../components/**/*.stories.tsx',
    {
        eager: true,
    }
)

describe.each(Object.entries(modules))('%s', (_, module) => {
    const stories = Object.entries(composeStories(module)) as Array<
        [string, ComponentType]
    >

    it.each(stories)('%s has no axe violations', async (_, Story) => {
        const { container } = render(<Story />)
        expect(await axeViolations(container)).toEqual([])
    })
})
