//turning off eslint for this file
/* eslint no-use-before-define: 0 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.json', '.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      2,
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-types': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type',
        ],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'class',
        format: ['StrictPascalCase'],
      },
    ],
    'require-await': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
      },
    ],
    'no-console': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    'no-return-assign': 'error',
    'no-unreachable': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
  },
};
