module.exports = {
  extends: [
    '@react-ddd',
    'plugin:import/electron',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['off'],
  },
};
