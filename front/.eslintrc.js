module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,

    // warnとerrorをワーニング対象から外す
    'no-console': [2, { allow: ['warn', 'error'] }],

    // function componentの型指定を省略していい
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // memo化したときに無名関数になってしまう。対応見つけたら修正する
    'react/display-name': 0,

    // underscoreから始まる変数をワーニング対象から外す。
    '@typescript-eslint/no-unused-vars': [2, {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}]
  }
};
