module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: [
    'flowtype',
    'import',
    'react'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'brace-style': 'error',
    camelcase: ['error', { properties: 'always' }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'guard-for-in': 'error',
    indent: ['error', 2],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-console': 'warn',  // override eslint:recommended
    'no-new-object': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'warn', // override eslint:recommended
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'warn',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'sort-imports': ['error'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    strict: ['warn', 'safe'],
    'valid-jsdoc': 'error'
  }
};
