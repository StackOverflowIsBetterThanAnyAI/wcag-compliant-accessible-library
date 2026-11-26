import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

const TITLE = 'wcag-compliant-accessible-library'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

addons.setConfig({
    theme: create({
        base: prefersDark ? 'dark' : 'light',
        brandTitle: TITLE,
        brandUrl:
            'https://github.com/StackOverflowIsBetterThanAnyAI/wcag-compliant-accessible-library',
    }),
})

function brandDocumentTitle() {
    const title = document.title
        .replace(/ ⋅ Storybook$/, ` ⋅ ${TITLE}`)
        .replace(/^storybook - Storybook$/, TITLE)
    if (title !== document.title) document.title = title
}

brandDocumentTitle()
new MutationObserver(brandDocumentTitle).observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
})
