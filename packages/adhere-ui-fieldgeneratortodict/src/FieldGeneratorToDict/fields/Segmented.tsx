import type { SegmentedProps } from 'antd';
import React from 'react';

import { Segmented } from '@baifendian/adhere-ui-anthoc';

import type { SuspenseComponentProps } from '../../types';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';
import { useDict, useDynamicDict } from '../hooks';

/**
 * SegmentedStandard
 */
setItem<SegmentedProps, SegmentedProps['options']>(
  'Segmented',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<SegmentedProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Segmented {...props} options={options} />;
    },
);

/**
 * SegmentedSuspenseStandard
 */
setItem<SuspenseComponentProps<SegmentedProps>, SegmentedProps['options']>(
  'Segmented',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<SegmentedProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Segmented {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * SegmentedDynamicStandard
 */
setItem<SegmentedProps, SegmentedProps['options']>(
  'SegmentedDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<SegmentedProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Segmented {...props} options={options} />;
    },
);

/**
 * SegmentedDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<SegmentedProps>, SegmentedProps['options']>(
  'SegmentedDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<SegmentedProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Segmented {...props} options={options} />
        </Suspense>
      );
    },
);
