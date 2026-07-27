import { Tabs } from 'antd';
import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Aop from './Aop';
import AutoTryCatch from './AutoTryCatch';
import ErrorBoundariesClass from './ErrorBoundariesClass';
import ErrorBoundariesCustomInstanceUI from './ErrorBoundariesCustomInstanceUI';
import ErrorBoundariesCustomStaticUI from './ErrorBoundariesCustomStaticUI';
import ErrorBoundariesDefaultUI from './ErrorBoundariesDefaultUI';
import ErrorBoundariesFunction from './ErrorBoundariesFunction';

import './index.less';

/**
 * Decorators E2E 示例入口
 * - ReactErrorBoundaries（class / function / 全局UI / 自定义UI）
 * - ReactAutoTryCatch
 * - ReactAop
 */
e2e.PC({
  children: (
    <div className="DecoratorsE2E">
      <Tabs
        defaultActiveKey="ErrorBoundariesClass"
        items={[
          {
            key: 'ErrorBoundariesClass',
            label: 'ErrorBoundaries(class)',
            children: <ErrorBoundariesClass />,
          },
          {
            key: 'ErrorBoundariesFunction',
            label: 'ErrorBoundaries(function)',
            children: <ErrorBoundariesFunction />,
          },
          {
            key: 'ErrorBoundariesDefaultUI',
            label: '全局缺省错误UI',
            children: <ErrorBoundariesDefaultUI />,
          },
          {
            key: 'ErrorBoundariesCustomStaticUI',
            label: '自定义错误UI(静态)',
            children: <ErrorBoundariesCustomStaticUI />,
          },
          {
            key: 'ErrorBoundariesCustomInstanceUI',
            label: '自定义错误UI(实例)',
            children: <ErrorBoundariesCustomInstanceUI />,
          },
          {
            key: 'AutoTryCatch',
            label: 'ReactAutoTryCatch',
            children: <AutoTryCatch />,
          },
          {
            key: 'Aop',
            label: 'ReactAop',
            children: <Aop />,
          },
        ]}
      />
    </div>
  ),
});
