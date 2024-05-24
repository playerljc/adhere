const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  importOrder: [
    './Mobile',
    '@/lib/Mobile',
    '^(?=[a-z]).*(?<!(less|css|sass|styl))$',
    '^(?=@[a-z]).*(?<!(less|css|sass|styl))$',
    '^(?=@/).*(?<!(less|css|sass|styl))$',
    '^[../].*(?<!(less|css|sass|styl))$',
    '^[./].*(?<!(less|css|sass|styl))$',
    '^(?=[a-z]).*\\.(less|css|sass|styl)$',
    '^(?=@[a-z]).*\\.(less|css|sass|styl)$',
    '^(?=@/).*\\.(less|css|sass|styl)$',
    '^.*\\.(less|css|sass|styl)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
