import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist', 'storybook-static', 'coverage', '!.storybook'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    reactHooks.configs.flat['recommended-latest'],
    jsxA11y.flatConfigs.recommended,
    ...storybook.configs['flat/recommended'],
    {
        languageOptions: {
            globals: { ...globals.browser },
        },
        rules: {
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { ignoreRestSiblings: true },
            ],
        },
    }
)
