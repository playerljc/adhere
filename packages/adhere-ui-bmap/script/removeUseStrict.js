const fs = require('fs');
const path = require('path');

function replaceUseStrict(filePath) {
  const options = {
    encoding: 'utf-8',
  };

  const rs = fs.createReadStream(filePath, options);

  let data = '';
  rs.on('data', (itemData) => {
    data += itemData;
  });

  rs.on('end', () => {
    // console.log(data);
    // console.log('----------------');
    data = data.replace('"use strict";', '');
    // console.log(data);
    fs.writeFileSync(filePath, data, options);
  });
}

replaceUseStrict(path.join(__dirname, '../lib/heatmap.js'));
replaceUseStrict(path.join(__dirname, '../es/heatmap.js'));
