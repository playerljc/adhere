const es = [
  [
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
  ],
  [
    'import',
    {
      libraryName: '@baifendian/adhere-ui-anthoc',
      libraryDirectory: 'es',
      style: false,
    },
    'adhere-ui-anthoc',
  ],
  [
    'import',
    {
      libraryName: '@baifendian/adhere-ui-richtext-sandbox',
      libraryDirectory: 'es',
      style: false,
    },
    'adhere-ui-richtext-sandbox',
  ],
  [
    'import',
    {
      libraryName: '@ant-design/icons',
      libraryDirectory: 'es/icons',
      camel2DashComponentName: false,
      style: false,
    },
    '@ant-design/icons',
  ],
];

const lib = [
  [
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
  ],
  [
    'import',
    {
      libraryName: '@baifendian/adhere-ui-anthoc',
      libraryDirectory: 'lib',
      style: false,
    },
    'adhere-ui-anthoc',
  ],
  [
    'import',
    {
      libraryName: '@baifendian/adhere-ui-richtext-sandbox',
      libraryDirectory: 'lib',
      style: false,
    },
    'adhere-ui-richtext-sandbox',
  ],
  [
    'import',
    {
      libraryName: '@ant-design/icons',
      libraryDirectory: 'lib/icons',
      camel2DashComponentName: false,
      style: false,
    },
    '@ant-design/icons',
  ],
];

module.exports = {
  lib,
  es,
};
