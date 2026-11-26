/// <reference types="vite/client" />
import type { Preview } from '@storybook/react-vite'

import './preview.css'

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        a11y: {
            // Fail the a11y panel (and test runs) on violations instead of only reporting them.
            test: 'error',
        },
        controls: { expanded: true },
        docs: { codePanel: true },
    },
}

export default preview
