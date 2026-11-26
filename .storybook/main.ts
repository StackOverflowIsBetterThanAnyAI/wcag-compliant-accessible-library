import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
    framework: '@storybook/react-vite',
    staticDirs: [{ from: './assets', to: '/assets' }],
}

export default config
