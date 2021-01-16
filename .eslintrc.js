module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    APP_ENV: true,
    NO_MOCK: true,
    Constent: true,
    CustomEvnVars: true,
    EmitterExternal: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': 0,

    'react/no-children-prop': 0,
  },
};
