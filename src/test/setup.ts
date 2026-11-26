import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

import { resetA11yWarnings } from '../utils/dev.js'

afterEach(() => {
    cleanup()
    resetA11yWarnings()
    vi.restoreAllMocks()
})
