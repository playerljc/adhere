const Antd = require('./babel-plugin-import-antd');
const AntdMobile = require('./babel-plugin-import-antd-mobile');

const es = [...Antd.es, ...AntdMobile.es];

const lib = [...Antd.lib, ...AntdMobile.lib];

module.exports = {
  lib,
  es,
};
