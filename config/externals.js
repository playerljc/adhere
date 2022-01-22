exports.defaultExternals = {
  antd: 'antd',
  react: 'React',
  'react-dom': 'ReactDOM',
  moment: 'moment',
};

exports.externals = function (externals) {
  const result = {};

  externals.forEach(({ module, external }) => {
    result[external] = `${module} ${external}`;
  });

  return result;
};
