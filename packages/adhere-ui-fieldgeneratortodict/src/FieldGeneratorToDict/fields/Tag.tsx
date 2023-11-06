import React from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteCheckAllTagSelectProps,
  AutoCompleteTagSelectProps,
  CheckAllTagSelectProps,
  HorizontalCheckableTagGroupProps,
  HorizontalTagGroupProps,
  TagSelectProps,
  VerticalCheckableTagGroupProps,
  VerticalTagGroupProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import type { SuspenseComponentProps } from '../../types';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';
import { useAutoCompleteDict, useDict, useDynamicDict } from '../hooks';

/**
 * TagVertical
 */
setItem<VerticalTagGroupProps, VerticalTagGroupProps['options']>(
  'Tag',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<VerticalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.VerticalTagGroup {...props} options={options} />;
    },
);

/**
 * TagVerticalCheckable
 */
setItem<VerticalCheckableTagGroupProps, VerticalCheckableTagGroupProps['options']>(
  'Tag',
  'VerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.VerticalCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagCheckAllVerticalCheckable
 */
setItem<VerticalCheckableTagGroupProps, VerticalCheckableTagGroupProps['options']>(
  'Tag',
  'CheckAllVerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.VerticalCheckAllCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagHorizontal
 */
setItem<HorizontalTagGroupProps, HorizontalTagGroupProps['options']>(
  'Tag',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<HorizontalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.HorizontalTagGroup {...props} options={options} />;
    },
);

/**
 * TagHorizontalCheckable
 */
setItem<HorizontalCheckableTagGroupProps, HorizontalCheckableTagGroupProps['options']>(
  'Tag',
  'HorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.HorizontalCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagCheckAllHorizontalCheckable
 */
setItem<HorizontalCheckableTagGroupProps, HorizontalCheckableTagGroupProps['options']>(
  'Tag',
  'CheckAllHorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.HorizontalCheckAllCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagSuspenseVertical
 */
setItem<SuspenseComponentProps<VerticalTagGroupProps>, VerticalTagGroupProps['options']>(
  'Tag',
  'SuspenseVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<VerticalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.VerticalTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagSuspenseVerticalCheckable
 */
setItem<
  SuspenseComponentProps<VerticalCheckableTagGroupProps>,
  VerticalCheckableTagGroupProps['options']
>(
  'Tag',
  'SuspenseVerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.VerticalCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagSuspenseCheckAllVerticalCheckable
 */
setItem<
  SuspenseComponentProps<VerticalCheckableTagGroupProps>,
  VerticalCheckableTagGroupProps['options']
>(
  'Tag',
  'SuspenseCheckAllVerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.VerticalCheckAllCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagSuspenseHorizontal
 */
setItem<SuspenseComponentProps<HorizontalTagGroupProps>, HorizontalTagGroupProps['options']>(
  'Tag',
  'SuspenseHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<HorizontalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.HorizontalTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagSuspenseHorizontalCheckable
 */
setItem<
  SuspenseComponentProps<HorizontalCheckableTagGroupProps>,
  HorizontalCheckableTagGroupProps['options']
>(
  'Tag',
  'SuspenseHorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.HorizontalCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagSuspenseCheckAllHorizontalCheckable
 */
setItem<
  SuspenseComponentProps<HorizontalCheckableTagGroupProps>,
  HorizontalCheckableTagGroupProps['options']
>(
  'Tag',
  'SuspenseCheckAllHorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.HorizontalCheckAllCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagSelect
 */
setItem<TagSelectProps, TagSelectProps['options']>(
  'Tag',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.TagSelect {...props} options={options} />;
    },
);

/**
 * TagMultiSelect
 */
setItem<TagSelectProps, TagSelectProps['options']>(
  'Tag',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.TagSelect {...props} mode="multiple" options={options} />;
    },
);

/**
 * TagCheckAllSelect
 */
setItem<CheckAllTagSelectProps, CheckAllTagSelectProps['options']>(
  'Tag',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllTagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.CheckAllTagSelect {...props} options={options} />;
    },
);

/**
 * TagDynamicVertical
 */
setItem<VerticalTagGroupProps, VerticalTagGroupProps['options']>(
  'TagDynamic',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<VerticalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.VerticalTagGroup {...props} options={options} />;
    },
);

/**
 * TagDynamicVerticalCheckable
 */
setItem<VerticalCheckableTagGroupProps, VerticalCheckableTagGroupProps['options']>(
  'TagDynamic',
  'VerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.VerticalCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagDynamicCheckAllVerticalCheckable
 */
setItem<VerticalCheckableTagGroupProps, VerticalCheckableTagGroupProps['options']>(
  'TagDynamic',
  'CheckAllVerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.VerticalCheckAllCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagDynamicHorizontal
 */
setItem<HorizontalTagGroupProps, HorizontalTagGroupProps['options']>(
  'TagDynamic',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDDynamicDict<HorizontalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.HorizontalTagGroup {...props} options={options} />;
    },
);

/**
 * TagDynamicHorizontalCheckable
 */
setItem<HorizontalCheckableTagGroupProps, HorizontalCheckableTagGroupProps['options']>(
  'TagDynamic',
  'HorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.HorizontalCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagDynamicCheckAllHorizontalCheckable
 */
setItem<HorizontalCheckableTagGroupProps, HorizontalCheckableTagGroupProps['options']>(
  'TagDynamic',
  'CheckAllHorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.HorizontalCheckAllCheckableTagGroup {...props} options={options} />;
    },
);

/**
 * TagDynamicSuspenseVertical
 */
setItem<SuspenseComponentProps<VerticalTagGroupProps>, VerticalTagGroupProps['options']>(
  'TagDynamic',
  'SuspenseVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<VerticalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.VerticalTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagDynamicSuspenseVerticalCheckable
 */
setItem<
  SuspenseComponentProps<VerticalCheckableTagGroupProps>,
  VerticalCheckableTagGroupProps['options']
>(
  'TagDynamic',
  'SuspenseVerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.VerticalCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagDynamicSuspenseCheckAllVerticalCheckable
 */
setItem<
  SuspenseComponentProps<VerticalCheckableTagGroupProps>,
  VerticalCheckableTagGroupProps['options']
>(
  'TagDynamic',
  'SuspenseCheckAllVerticalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<VerticalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.VerticalCheckAllCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagDynamicSuspenseHorizontal
 */
setItem<SuspenseComponentProps<HorizontalTagGroupProps>, HorizontalTagGroupProps['options']>(
  'TagDynamic',
  'SuspenseHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<HorizontalTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.HorizontalTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagDynamicSuspenseHorizontalCheckable
 */
setItem<
  SuspenseComponentProps<HorizontalCheckableTagGroupProps>,
  HorizontalCheckableTagGroupProps['options']
>(
  'TagDynamic',
  'SuspenseHorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.HorizontalCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagDynamicSuspenseCheckAllHorizontalCheckable
 */
setItem<
  SuspenseComponentProps<HorizontalCheckableTagGroupProps>,
  HorizontalCheckableTagGroupProps['options']
>(
  'TagDynamic',
  'SuspenseCheckAllHorizontalCheckable',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<HorizontalCheckableTagGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Tag.HorizontalCheckAllCheckableTagGroup {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * TagDynamicSelect
 */
setItem<TagSelectProps, TagSelectProps['options']>(
  'TagDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.TagSelect {...props} options={options} />;
    },
);

/**
 * TagDynamicMultiSelect
 */
setItem<TagSelectProps, TagSelectProps['options']>(
  'TagDynamic',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.TagSelect {...props} mode="multiple" options={options} />;
    },
);

/**
 * TagDynamicCheckAllSelect
 */
setItem<CheckAllTagSelectProps, CheckAllTagSelectProps['options']>(
  'TagDynamic',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllTagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.CheckAllTagSelect {...props} options={options} />;
    },
);

/**
 * AutoCompleteTagStandard
 */
setItem<AutoCompleteTagSelectProps, AutoCompleteTagSelectProps['options']>(
  'AutoCompleteTag',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteTagSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.AutoCompleteTagSelect {...props} options={options} loadData={loadData} />;
    },
);

/**
 * AutoCompleteTagCheckAll
 */
setItem<AutoCompleteCheckAllTagSelectProps, AutoCompleteCheckAllTagSelectProps['options']>(
  'AutoCompleteTag',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckAllTagSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Tag.AutoCompleteCheckAllTagSelect {...props} options={options} loadData={loadData} />;
    },
);
