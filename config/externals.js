exports.defaultExternals = {
  antd: 'antd',
  'antd-mobile': 'ant-mobile',
  react: 'React',
  'react-dom/client': 'ReactDOM',
  'react-dom': 'ReactDOM',
  'react-dom/server': 'ReactDOM',
};

exports.externals = function (externals) {
  const result = {};

  externals.forEach(({ module, external }) => {
    result[external] = `${module} ${external}`;
  });

  return result;
};
