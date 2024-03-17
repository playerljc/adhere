import React from 'react';

import { CascaderView } from '@baifendian/adhere-mobile-ui-anthoc';
import type { InternalCascaderViewProps } from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import {
  type AsyncCascaderViewProps,
  FilterCascaderViewProps,
} from '@baifendian/adhere-mobile-ui-anthoc/src/types';

import { useAsyncTree, useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * MobileCascaderViewStandard
 */
setItem<InternalCascaderViewProps, InternalCascaderViewProps['options']>(
  'MobileCascaderView',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<InternalCascaderViewProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CascaderView {...props} options={options} />;
    },
);

/**
 * MobileCascaderViewFilter
 */
setItem<FilterCascaderViewProps, FilterCascaderViewProps['options']>(
  'MobileCascaderView',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCascaderViewProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CascaderView.FilterCascaderView {...props} options={options} />;
    },
);

// -------------------------
/**
 * MobileCascaderViewDynamicStandard
 */
setItem<InternalCascaderViewProps, InternalCascaderViewProps['options']>(
  'MobileCascaderViewDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<InternalCascaderViewProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CascaderView {...props} options={options} />;
    },
);

/**
 * MobileCascaderViewDynamicFilter
 */
setItem<FilterCascaderViewProps, FilterCascaderViewProps['options']>(
  'MobileCascaderViewDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCascaderViewProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CascaderView.FilterCascaderView {...props} options={options} />;
    },
);

// -----------------------------
/**
 * MobileCascaderViewAsyncStandard
 */
setItem<AsyncCascaderViewProps, AsyncCascaderViewProps['options']>(
  'MobileCascaderViewAsync',
  'Standard',
  (dictName) => (props) => {
    const loadData = useAsyncTree<AsyncCascaderViewProps['options']>({
      dictName,
    });

    return <CascaderView.AsyncCascaderView {...props} loadData={loadData} />;
  },
);
