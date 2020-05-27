module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
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
    plugins: [
        'vue',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.vue'],
            },
        },
    },
    rules: {
        'global-require': 0,
        semi: ['error', 'never'],
        'implicit-arrow-linebreak': 0,
        'linebreak-style': ['off', 'windows'],
        'import/extensions': [
            2,
            {
                vue: 'never',
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
