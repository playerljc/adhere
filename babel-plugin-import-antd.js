const es = [
  'import',
  {
    libraryName: 'antd',
    // libraryDirectory: 'es',
    customName: (name, file) => {
      if (name === 'q-r-code') {
        return 'antd/es/qrcode';
      }

      return `antd/es/${name}`;
    },
    style: false,
  },
  'ant',
];

const lib = [
  'import',
  {
    libraryName: 'antd',
    // libraryDirectory: 'es',
    customName: (name, file) => {
      if (name === 'q-r-code') {
        return 'antd/lib/qrcode';
      }

      return `antd/lib/${name}`;
    },
    style: false,
  },
  'ant',
];

module.exports = {
  lib,
  es,
};
