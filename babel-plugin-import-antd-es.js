module.exports = [
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
