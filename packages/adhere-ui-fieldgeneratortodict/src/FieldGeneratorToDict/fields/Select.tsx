import type { SelectProps } from 'antd';
import React from 'react';

import { MultipleSelect, Select } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteCheckAllMultipleSelectProps,
  CheckAllSelectProps,
  DropdownRenderSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import { useAutoCompleteDict, useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * SelectStandard
 */
setItem<SelectProps, SelectProps['options']>(
  'Select',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<SelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Select {...props} options={options} />;
    },
);

/**
 * SelectMulti
 */
setItem<SelectProps, SelectProps['options']>(
  'Select',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<SelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <MultipleSelect {...props} options={options} />;
    },
);

/**
 * SelectCheckAll
 */
setItem<CheckAllSelectProps, CheckAllSelectProps['options']>(
  'Select',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<SelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <MultipleSelect.CheckAllSelect {...props} options={options} />;
    },
);

/**
 * SelectDropdownRender
 */
setItem<DropdownRenderSelectProps, DropdownRenderSelectProps['options']>(
  'Select',
  'DropdownRender',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<DropdownRenderSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Select.DropdownRenderSelect {...props} options={options} />;
    },
);

/**
 * SelectDynamicStandard
 */
setItem<SelectProps, SelectProps['options']>(
  'SelectDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<SelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Select {...props} options={options} />;
    },
);

/**
 * SelectDynamicMulti
 */
setItem<SelectProps, SelectProps['options']>(
  'SelectDynamic',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<SelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <MultipleSelect {...props} options={options} />;
    },
);

/**
 * SelectDynamicCheckAll
 */
setItem<CheckAllSelectProps, CheckAllSelectProps['options']>(
  'SelectDynamic',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <MultipleSelect.CheckAllSelect {...props} options={options} />;
    },
);

/**
 * SelectDynamicDropdownRender
 */
setItem<DropdownRenderSelectProps, DropdownRenderSelectProps['options']>(
  'SelectDynamic',
  'DropdownRender',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<DropdownRenderSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Select.DropdownRenderSelect {...props} options={options} />;
    },
);

/**
 * SelectACStandard
 */
setItem<AutoCompleteProps, AutoCompleteProps['options']>(
  'SelectAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Select.AutoCompleteSelect {...props} options={options} loadData={loadData} />;
    },
);

/**
 * SelectACMulti
 */
setItem<AutoCompleteProps, AutoCompleteProps['options']>(
  'SelectAC',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <MultipleSelect.AutoCompleteMultipleSelect
          {...props}
          options={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * SelectACCheckAll
 */
setItem<
  AutoCompleteCheckAllMultipleSelectProps,
  AutoCompleteCheckAllMultipleSelectProps['options']
>('SelectAC', 'CheckAll', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
  const { options, loadData } = useAutoCompleteDict<
    AutoCompleteCheckAllMultipleSelectProps['options']
  >({
    dictName,
    cascadeParams,
    onDataSourceChange,
  });

  return (
    <MultipleSelect.AutoCompleteCheckAllMultipleSelect
      {...props}
      options={options}
      loadData={loadData}
    />
  );
});
