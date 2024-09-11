import type { TimelineProps } from 'antd';
import React from 'react';

import { Timeline } from '@baifendian/adhere-ui-anthoc';

import type { SuspenseComponentProps } from '../../types';
import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * TimelineStandard
 */
setItem<TimelineProps, TimelineProps['items']>(
  'Timeline',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TimelineProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Timeline {...props} items={options} />;
    },
);

/**
 * TimelineSuspenseStandard
 */
setItem<SuspenseComponentProps<TimelineProps>, TimelineProps['items']>(
  'Timeline',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<TimelineProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Timeline {...props} items={options} />
        </Suspense>
      );
    },
);

/**
 * TimelineDynamicStandard
 */
setItem<TimelineProps, TimelineProps['items']>(
  'TimelineDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TimelineProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Timeline {...props} items={options} />;
    },
);

/**
 * TimelineDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<TimelineProps>, TimelineProps['items']>(
  'TimelineDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<TimelineProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Timeline {...props} items={options} />
        </Suspense>
      );
    },
);
