import type { StepsProps } from 'antd';
import React from 'react';

import { Steps } from '@baifendian/adhere-ui-anthoc';

import type { SuspenseComponentProps } from '../../types';
import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * StepsStandard
 */
setItem<StepsProps, StepsProps['items']>(
  'Steps',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<StepsProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Steps {...props} items={options} />;
    },
);

/**
 * StepsSuspenseStandard
 */
setItem<SuspenseComponentProps<StepsProps>, StepsProps['items']>(
  'Steps',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<StepsProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Steps {...props} items={options} />
        </Suspense>
      );
    },
);

/**
 * StepsDynamicStandard
 */
setItem<StepsProps, StepsProps['items']>(
  'StepsDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<StepsProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Steps {...props} items={options} />;
    },
);

/**
 * StepsDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<StepsProps>, StepsProps['items']>(
  'StepsDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<StepsProps['items']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Steps {...props} items={options} />
        </Suspense>
      );
    },
);
