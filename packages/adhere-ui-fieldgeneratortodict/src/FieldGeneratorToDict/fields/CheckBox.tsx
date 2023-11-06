import type { CheckboxGroupProps } from 'antd/es/checkbox';
import React from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteCheckAllCheckboxSelectProps,
  AutoCompleteCheckAllCustomCheckboxSelectProps,
  AutoCompleteCheckboxSelectProps,
  AutoCompleteCustomCheckboxSelectProps,
  CheckAllCheckboxSelectProps,
  CheckboxGroupExtProps,
  CheckboxSelectProps,
  CustomCheckAllCheckboxProps,
  CustomCheckboxProps,
  CustomCheckboxSelectProps,
  HorizontalCheckAllCheckboxProps,
  VerticalCheckAllCheckboxProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { SuspenseComponentProps } from '../../types';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';
import { useAutoCompleteDict, useDict, useDynamicDict } from '../hooks';

/**
 * CheckBoxStandard
 */
setItem<CheckboxGroupProps, CheckboxGroupProps['options']>(
  'CheckBox',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.Group {...props} options={options} />;
    },
);

/**
 * CheckBoxGroupExt
 */
setItem<CheckboxGroupExtProps, CheckboxGroupExtProps['options']>(
  'CheckBox',
  'GroupExt',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckboxGroupExt {...props} options={options} />;
    },
);

/**
 * CheckBoxVertical
 */
setItem<CheckboxGroupExtProps, CheckboxGroupExtProps['options']>(
  'CheckBox',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.VerticalCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxCheckAllVertical
 */
setItem<VerticalCheckAllCheckboxProps, VerticalCheckAllCheckboxProps['options']>(
  'CheckBox',
  'CheckAllVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<VerticalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.VerticalCheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxHorizontal
 */
setItem<CheckboxGroupExtProps, CheckboxGroupExtProps['options']>(
  'CheckBox',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.HorizontalCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxCheckAllHorizontal
 */
setItem<HorizontalCheckAllCheckboxProps, HorizontalCheckAllCheckboxProps['options']>(
  'CheckBox',
  'CheckAllHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<HorizontalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.HorizontalCheckAllCheckboxProps {...props} options={options} />;
    },
);

/**
 * CheckBoxCustom
 */
setItem<CustomCheckboxProps, CustomCheckboxProps['options']>(
  'CheckBox',
  'Custom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxCheckAllCustom
 */
setItem<CustomCheckAllCheckboxProps, CustomCheckAllCheckboxProps['options']>(
  'CheckBox',
  'CheckAllCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxSuspenseStandard
 */
setItem<SuspenseComponentProps<CheckboxGroupProps>, CheckboxGroupProps['options']>(
  'CheckBox',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CheckboxGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.Group {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseGroupExt
 */
setItem<SuspenseComponentProps<CheckboxGroupExtProps>, CheckboxGroupExtProps['options']>(
  'CheckBox',
  'SuspenseGroupExt',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.CheckboxGroupExt {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseVertical
 */
setItem<SuspenseComponentProps<CheckboxGroupExtProps>, CheckboxGroupExtProps['options']>(
  'CheckBox',
  'SuspenseVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.VerticalCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseCheckAllVertical
 */
setItem<
  SuspenseComponentProps<VerticalCheckAllCheckboxProps>,
  VerticalCheckAllCheckboxProps['options']
>(
  'CheckBox',
  'SuspenseCheckAllVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<VerticalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.VerticalCheckAllCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseHorizontal
 */
setItem<SuspenseComponentProps<CheckboxGroupExtProps>, CheckboxGroupExtProps['options']>(
  'CheckBox',
  'SuspenseHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.HorizontalCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseCheckAllHorizontal
 */
setItem<
  SuspenseComponentProps<HorizontalCheckAllCheckboxProps>,
  HorizontalCheckAllCheckboxProps['options']
>(
  'CheckBox',
  'SuspenseCheckAllHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<HorizontalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.HorizontalCheckAllCheckboxProps {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseCustom
 */
setItem<SuspenseComponentProps<CustomCheckboxProps>, CustomCheckboxProps['options']>(
  'CheckBox',
  'SuspenseCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CustomCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.CustomCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSuspenseCheckAllCustom
 */
setItem<
  SuspenseComponentProps<CustomCheckAllCheckboxProps>,
  CustomCheckAllCheckboxProps['options']
>(
  'CheckBox',
  'SuspenseCheckAllCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CustomCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.CustomCheckAllCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxSelect
 */
setItem<CheckboxSelectProps, CheckboxSelectProps['options']>(
  'CheckBox',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckboxSelect {...props} options={options} />;
    },
);

/**
 * CheckBoxCheckAllSelect
 */
setItem<CheckAllCheckboxSelectProps, CheckAllCheckboxSelectProps['options']>(
  'CheckBox',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllCheckboxSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckAllCheckboxSelect {...props} options={options} />;
    },
);

/**
 * CheckBoxCustomSelect
 */
setItem<CustomCheckboxSelectProps, CustomCheckboxSelectProps['options']>(
  'CheckBox',
  'CustomSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomCheckboxSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckboxSelect {...props} options={options} />;
    },
);

/**
 * CheckBoxCheckAllCustomSelect
 */
setItem<CustomCheckAllCheckboxProps, CustomCheckAllCheckboxProps['options']>(
  'CheckBox',
  'CheckAllCustomSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckAllCheckbox {...props} options={options} />;
    },
);

// ----------------------

/**
 * CheckBoxDynamicStandard
 */
setItem<CheckboxGroupProps, CheckboxGroupProps['options']>(
  'CheckBoxDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.Group {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicGroupExt
 */
setItem<CheckboxGroupExtProps, CheckboxGroupExtProps['options']>(
  'CheckBoxDynamic',
  'GroupExt',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckboxGroupExt {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicVertical
 */
setItem<CheckboxGroupExtProps, CheckboxGroupExtProps['options']>(
  'CheckBoxDynamic',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.VerticalCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCheckAllVertical
 */
setItem<VerticalCheckAllCheckboxProps, VerticalCheckAllCheckboxProps['options']>(
  'CheckBoxDynamic',
  'CheckAllVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<VerticalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.VerticalCheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicHorizontal
 */
setItem<CheckboxGroupExtProps, CheckboxGroupExtProps['options']>(
  'CheckBoxDynamic',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.HorizontalCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCheckAllHorizontal
 */
setItem<HorizontalCheckAllCheckboxProps, HorizontalCheckAllCheckboxProps['options']>(
  'CheckBoxDynamic',
  'CheckAllHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<HorizontalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.HorizontalCheckAllCheckboxProps {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCustom
 */
setItem<CustomCheckboxProps, CustomCheckboxProps['options']>(
  'CheckBoxDynamic',
  'Custom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCheckAllCustom
 */
setItem<CustomCheckAllCheckboxProps, CustomCheckAllCheckboxProps['options']>(
  'CheckBoxDynamic',
  'CheckAllCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<CheckboxGroupProps>, CheckboxGroupProps['options']>(
  'CheckBoxDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CheckboxGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.Group {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseGroupExt
 */
setItem<SuspenseComponentProps<CheckboxGroupExtProps>, CheckboxGroupExtProps['options']>(
  'CheckBoxDynamic',
  'SuspenseGroupExt',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.CheckboxGroupExt {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseVertical
 */
setItem<SuspenseComponentProps<CheckboxGroupExtProps>, CheckboxGroupExtProps['options']>(
  'CheckBoxDynamic',
  'SuspenseVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.VerticalCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseCheckAllVertical
 */
setItem<
  SuspenseComponentProps<VerticalCheckAllCheckboxProps>,
  VerticalCheckAllCheckboxProps['options']
>(
  'CheckBoxDynamic',
  'SuspenseCheckAllVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<VerticalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.VerticalCheckAllCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseHorizontal
 */
setItem<SuspenseComponentProps<CheckboxGroupExtProps>, CheckboxGroupExtProps['options']>(
  'CheckBoxDynamic',
  'SuspenseHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CheckboxGroupExtProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.HorizontalCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseCheckAllHorizontal
 */
setItem<
  SuspenseComponentProps<HorizontalCheckAllCheckboxProps>,
  HorizontalCheckAllCheckboxProps['options']
>(
  'CheckBoxDynamic',
  'SuspenseCheckAllHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<HorizontalCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.HorizontalCheckAllCheckboxProps {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseCustom
 */
setItem<SuspenseComponentProps<CustomCheckboxProps>, CustomCheckboxProps['options']>(
  'CheckBoxDynamic',
  'SuspenseCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CustomCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.CustomCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSuspenseCheckAllCustom
 */
setItem<
  SuspenseComponentProps<CustomCheckAllCheckboxProps>,
  CustomCheckAllCheckboxProps['options']
>(
  'CheckBoxDynamic',
  'SuspenseCheckAllCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CustomCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Checkbox.CustomCheckAllCheckbox {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * CheckBoxDynamicSelect
 */
setItem<CheckboxSelectProps, CheckboxSelectProps['options']>(
  'CheckBoxDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckboxSelect {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCheckAllSelect
 */
setItem<CheckAllCheckboxSelectProps, CheckAllCheckboxSelectProps['options']>(
  'CheckBoxDynamic',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllCheckboxSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckAllCheckboxSelect {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCustomSelect
 */
setItem<CustomCheckboxSelectProps, CustomCheckboxSelectProps['options']>(
  'CheckBoxDynamic',
  'CustomSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomCheckboxSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckboxSelect {...props} options={options} />;
    },
);

/**
 * CheckBoxDynamicCheckAllCustomSelect
 */
setItem<CustomCheckAllCheckboxProps, CustomCheckAllCheckboxProps['options']>(
  'CheckBoxDynamic',
  'CheckAllCustomSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CustomCheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * AutoCompleteCheckBoxStandard
 */
setItem<AutoCompleteCheckboxSelectProps, AutoCompleteCheckboxSelectProps['options']>(
  'AutoCompleteCheckBox',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteCheckboxSelectProps['options']>(
        {
          dictName,
          cascadeParams,
          onDataSourceChange,
        },
      );

      return (
        <Checkbox.AutoCompleteCheckboxSelect {...props} options={options} loadData={loadData} />
      );
    },
);

/**
 * AutoCompleteCheckBoxCheckAll
 */
setItem<
  AutoCompleteCheckAllCheckboxSelectProps,
  AutoCompleteCheckAllCheckboxSelectProps['options']
>(
  'AutoCompleteCheckBox',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckAllCheckboxSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Checkbox.AutoCompleteCheckAllCheckboxSelect
          {...props}
          options={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * AutoCompleteCheckBoxCustom
 */
setItem<AutoCompleteCustomCheckboxSelectProps, AutoCompleteCustomCheckboxSelectProps['options']>(
  'AutoCompleteCheckBox',
  'Custom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCustomCheckboxSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Checkbox.AutoCompleteCustomCheckboxSelect
          {...props}
          options={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * AutoCompleteCheckBoxCheckAllCustom
 */
setItem<
  AutoCompleteCheckAllCustomCheckboxSelectProps,
  AutoCompleteCheckAllCustomCheckboxSelectProps['options']
>(
  'AutoCompleteCheckBox',
  'CheckAllCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckAllCustomCheckboxSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Checkbox.AutoCompleteCheckAllCustomCheckboxSelect
          {...props}
          options={options}
          loadData={loadData}
        />
      );
    },
);
