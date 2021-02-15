module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    APP_ENV: true,
    NO_MOCK: true,
  },
  rules: {
    'import/no-unresolved': 0,
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
