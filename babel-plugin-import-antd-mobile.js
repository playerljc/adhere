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
];

module.exports = {
  lib,
  es,
};
