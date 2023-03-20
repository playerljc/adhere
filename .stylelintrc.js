const fabric = require('@umijs/fabric');

module.exports = {
  customSyntax: 'postcss-less',
  ...fabric.stylelint,
};
