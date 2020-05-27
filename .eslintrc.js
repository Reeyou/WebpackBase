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
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'global-require': 0,
        'linebreak-style': ['error', 'windows'],
        semi: ['error', 'never'],
        'implicit-arrow-linebreak': 0,
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
        'no-console': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-script-url': 0,
        'no-underscore-dangle': 0,
        'object-curly-newline': 0,
    },
}
