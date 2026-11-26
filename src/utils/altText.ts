import { warnA11y } from './dev.js'

// only alt texts that consist of nothing but a generic word, e.g. "image", "Bild 3" or "IMG_1234", but not "W3C logo"
const GENERIC_ALT_TEXT =
    /^(an? |the |ein |eine |das |der |die )?(graphics?|screenshots?|pictures?|img|images?|photos?|icons?|logos?|diagrams?|tables?|placeholder|grafik(en)?|abbildung(en)?|bild(er)?|fotos?|symbole?|tabellen?|platzhalter)([ _-]?[0-9]+)?$/i

const FILE_NAME_ALT_TEXT =
    /\.(jpe?g|png|gif|tiff?|raw|svg|webp|avif|bmp|ico|heic)$/i

// a single Han, Kana or Hangul character can be a meaningful word
const LOGOGRAPHIC_CHARACTER =
    /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u

/**
 * Returns why an alt text does not describe its image, or `null` if it looks fine.
 * An empty alt text is not checked here: whether it is allowed depends on the component.
 */
export function findAltTextProblem(alt: string): string | null {
    const text = alt.trim()
    if (text.length === 0) return null
    if (GENERIC_ALT_TEXT.test(text)) {
        return `alt="${text}" only names the type of image. Describe what it conveys instead.`
    }
    if (FILE_NAME_ALT_TEXT.test(text)) {
        return `alt="${text}" looks like a file name. Describe what the image conveys instead.`
    }
    // Count code points, not UTF-16 units, so characters outside the BMP count as one.
    if ([...text].length === 1 && !LOGOGRAPHIC_CHARACTER.test(text)) {
        return `alt="${text}" is a single character. Describe what the image conveys instead.`
    }
    return null
}

/** Logs a development warning if `alt` does not describe its image. */
export function checkAltText(component: string, alt: string): void {
    const problem = findAltTextProblem(alt)
    if (problem) warnA11y(component, problem)
}
