const base = require('../../.eslintrc.js');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react-hooks/exhaustive-deps': 'error',
    'import/order': 'off',
    'no-debugger': 'error',
    'no-alert': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
  },
};
