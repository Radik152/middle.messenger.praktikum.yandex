module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    rules: {
        'max-len': [2, { code: 180 }],
        'no-underscore-dangle': [2, { allowAfterThis: true }],
        'no-console': 'warn',
        'padding-line-between-statements': [2, { blankLine: 'always', prev: '*', next: 'return' }],
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-restricted-exports': 'off',
        'no-param-reassign': 'off',
        'import/no-absolute-path': 'off',
        'arrow-body-style': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'linebreak-style': 'off',
    },
};
