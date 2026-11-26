/**
 * Writes the config for the Full Accessibility Audit from the built Storybook:
 * every story becomes one page (`/iframe.html?id=…`), rendered on its own without
 * the Storybook UI, so the audit checks exactly the component examples.
 *
 * Usage: node scripts/audit-sitemap.mjs (after `npm run build-storybook`)
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const index = JSON.parse(readFileSync('storybook-static/index.json', 'utf8'))

const pages = Object.values(index.entries)
    .filter((entry) => entry.type === 'story')
    .map((entry) => `/iframe.html?id=${entry.id}&viewMode=story`)
    .sort()

if (pages.length === 0) {
    console.error('No stories found in storybook-static/index.json.')
    process.exit(1)
}

const sitemap = {
    config: {
        only: pages,
        included: [],
        excluded: [],
        // every story is its own page, although they only differ in `id`
        queryParams: ['id'],
    },
    urls: [],
    state: null,
}

mkdirSync('cypress/fixtures', { recursive: true })
writeFileSync(
    'cypress/fixtures/sitemap.json',
    `${JSON.stringify(sitemap, null, 4)}\n`
)
console.log(`Wrote ${pages.length} stories to cypress/fixtures/sitemap.json`)
