const fs = require('fs');

const doctrine = require('doctrine');

const str = fs.readFileSync(
  'C:\\self\\my\\frameworker\\ctmobile\\adhere\\packages\\adhere-util\\src\\util.ts',
  'utf8',
);

const ast = doctrine.parse([str].join('\n'), { unwrap: true });

console.log(ast);
