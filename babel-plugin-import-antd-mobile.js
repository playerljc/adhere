const es = [
  [
    'import',
    {
      libraryName: 'antd-mobile',
      libraryDirectory: 'es/components',
      style: false,
    },
    'antd-mobile',
  ],
  [
    'import',
    {
      libraryName: 'antd-mobile-icons',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: false,
    },
    'antd-mobile-icons',
  ],
  [
    'import',
    {
      libraryName: '@baifendian/adhere-mobile-ui-anthoc',
      libraryDirectory: 'es',
      style: false,
    },
    'adhere-mobile-ui-anthoc',
  ],
];

const lib = [
  [
    'import',
    {
      libraryName: 'antd-mobile',
      libraryDirectory: 'cjs/components',
      style: false,
    },
    'antd-mobile',
  ],
  [
    'import',
    {
      libraryName: 'antd-mobile-icons',
      libraryDirectory: 'cjs',
      camel2DashComponentName: false,
      style: false,
    },
    'antd-mobile-icons',
  ],
  [
    'import',
    {
      libraryName: '@baifendian/adhere-mobile-ui-anthoc',
      libraryDirectory: 'lib',
      style: false,
    },
    'adhere-mobile-ui-anthoc',
  ],
];

module.exports = {
  lib,
  es,
};
