import React, { Suspense, lazy } from 'react';

import e2e from '@baifendian/adhere-e2e';

import DictConfig from './config/dict/dict.config';

import '../src/index.less';

// 配置字典
DictConfig();

/*const List = lazy(() =>
  import(/!* webpackChunkName: "conditionalrender" *!/ './ProStateSearchList.jsx'),
);*/

const List = lazy(() => import(/* webpackChunkName: "conditionalrender" */ './normalList.jsx'));

e2e.PC({
  children: (
    <div style={{ display: 'flex' }}>
      <Suspense fallback={<div>loading</div>}>
        <List />
      </Suspense>
    </div>
  ),
});
