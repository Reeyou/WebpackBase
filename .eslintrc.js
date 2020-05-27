module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
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
        'object-curly-newlisne': 0,
    },
}
