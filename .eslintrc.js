module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'jsx-a11y', 'import',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 2,
        'global-require': 0,
        semi: ['error', 'never'],
        'implicit-arrow-linebreak': 0,
        'linebreak-style': ['off', 'windows'],
        'import/extensions': [
            2,
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/interactive-supports-focus': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
        'no-console': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-script-url': 0,
        'no-underscore-dangle': 0,
        'object-curly-newline': 0,
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/static-property-placement': 0,
    },
}
