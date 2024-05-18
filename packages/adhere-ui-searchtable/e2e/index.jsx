import React, { Suspense, lazy } from 'react';

import e2e from '@baifendian/adhere-e2e';
import { createLoggerMiddleware } from '@ctsj/state/lib/middleware';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { Provider } from '@ctsj/state/lib/react';
import { applyMiddleware, createStore } from '@ctsj/state/lib/state';

import DictConfig from './config/dict/dict.config';
import sage from './saga';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

import '../src/index.less';

// 设置Saga实例
ServiceRegister.setSage(sage);

// 配置字典
DictConfig();

/**
 * serviceRegister - 注册所有的services
 */
function serviceRegister() {
  const services = {};

  let requireComponent = require.context('./service', false, /.*\.([j|t]s)$/);

  requireComponent.keys().forEach((fileName) => {
    const ServiceConfig = requireComponent(fileName);
    services[ServiceConfig.default.name] = ServiceConfig;
  });

  ServiceRegister.initConfig(services);
}

/**
 * registerModels - 注册Models
 */
function registerModels() {
  let requireComponent = require.context('./model', false, /.*\.([j|t]s)$/);

  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    sage.model(model.default());
  });
}

// 注册services
serviceRegister();

// store初始化
const store = createStore(null, {}, applyMiddleware(createLoggerMiddleware(), sage));

// 注册models
registerModels();

const ProSearchStateTableImpl = lazy(() =>
  import(/* webpackChunkName: "conditionalrender" */ './proEditableCellRowDragSortSearchTable.jsx'),
);

e2e.PC({
  children: (
    <Provider store={store}>
      <div style={{ height: 700 }}>
        <Suspense fallback={<div>loading</div>}>
          <ProSearchStateTableImpl pagination={true} />
        </Suspense>
      </div>
    </Provider>
  ),
});
