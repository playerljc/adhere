const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  importOrder: [
    '@/lib/Mobile',
    '^(?=[a-z]).*(?<!(less|css|saas))$',
    '^(?=@[a-z]).*(?<!(less|css|saas))$',
    '^(?=@/).*(?<!(less|css|saas))$',
    '^[../].*(?<!(less|css|saas))$',
    '^[./].*(?<!(less|css|saas))$',
    '^[@/].*\\.(less|css|saas)$',
    '^.*\\.(less|css|saas)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
