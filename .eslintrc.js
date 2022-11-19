module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    // 'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // 'React' must be in scope when using JSX 에러 지우기(Next.js)
    'react/react-in-jsx-scope': 'off',
    // ts파일에서 tsx구문 허용(Next.js)
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], //should add ".ts" if typescript project
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'prefer-arrow-callback': 0,
    'react/require-default-props': 0,
    'arrow-body-style': 0,
    'import/no-named-as-default': 0,
  },
  settings: {
    'import/resolver': {
      'webpack': {},
      'typescript': {},
    },
  },
}
