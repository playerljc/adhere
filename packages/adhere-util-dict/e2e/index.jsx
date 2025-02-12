import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import GenModule from './GenModule';

// import DictConfig from './dict';
//
// import 'antd/dist/reset.css';
// import 'font-awesome/css/font-awesome.min.css';
//
// import '@baifendian/adhere/es/css.less';
//
// DictConfig();
//
// import('./Normal').then((Module) => {
//   const Test = Module.default;
//
//   e2e.PC({
//     children: <Test />,
//   });
// });
import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/es/css.less';

e2e.PC({
  children: <GenModule />,
});
