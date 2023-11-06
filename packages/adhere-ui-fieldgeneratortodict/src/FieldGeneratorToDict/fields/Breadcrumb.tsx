import type { BreadcrumbProps } from 'antd';
import React from 'react';

import { Breadcrumb } from '@baifendian/adhere-ui-anthoc';

import type { SuspenseComponentProps } from '../../types';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';
import { useDict, useDynamicDict } from '../hooks';

/**
 * BreadcrumbStandard
 */
setItem<BreadcrumbProps, BreadcrumbProps['items']>(
  'Breadcrumb',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<BreadcrumbProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Breadcrumb {...props} options={options} />;
    },
);

/**
 * BreadcrumbSuspenseStandard
 */
setItem<SuspenseComponentProps<BreadcrumbProps>, BreadcrumbProps['items']>(
  'Breadcrumb',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<BreadcrumbProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Breadcrumb {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * BreadcrumbDynamicStandard
 */
setItem<BreadcrumbProps, BreadcrumbProps['items']>(
  'BreadcrumbDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<BreadcrumbProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Breadcrumb {...props} options={options} />;
    },
);

/**
 * BreadcrumbDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<BreadcrumbProps>, BreadcrumbProps['items']>(
  'BreadcrumbDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<BreadcrumbProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Breadcrumb {...props} options={options} />
        </Suspense>
      );
    },
);
