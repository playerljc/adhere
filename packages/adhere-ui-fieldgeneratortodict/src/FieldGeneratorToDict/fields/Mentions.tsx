import type { MentionProps } from 'antd';
import React from 'react';

import { Mentions } from '@baifendian/adhere-ui-anthoc';

import type { SuspenseComponentProps } from '../../types';
import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * MentionsStandard
 */
setItem<MentionProps, MentionProps['options']>(
  'Mentions',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<MentionProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Mentions {...props} options={options} />;
    },
);

/**
 * MentionsSuspenseStandard
 */
setItem<SuspenseComponentProps<MentionProps>, MentionProps['options']>(
  'Mentions',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<MentionProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Mentions {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * MentionsDynamicStandard
 */
setItem<MentionProps, MentionProps['options']>(
  'MentionsDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<MentionProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Mentions {...props} options={options} />;
    },
);

/**
 * MentionsDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<MentionProps>, MentionProps['options']>(
  'MentionsDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<MentionProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Mentions {...props} options={options} />
        </Suspense>
      );
    },
);
