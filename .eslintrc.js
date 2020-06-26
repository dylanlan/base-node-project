module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:chai-friendly/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'promise',
    'unicorn',
    'chai-friendly',
  ],
  rules: {
    'chai-friendly/no-unused-expressions': 2
  },
};
