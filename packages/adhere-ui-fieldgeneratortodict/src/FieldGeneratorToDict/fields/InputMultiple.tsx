import React from 'react';

import { InputMultiple } from '@baifendian/adhere-ui-anthoc';
import type {
  InputMultipleProps,
  InputMultipleSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * InputMultipleStandard
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultiple',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} options={dataSource} />;
    },
);

/**
 * InputMultipleVertical
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultiple',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="vertical" options={dataSource} />;
    },
);

/**
 * InputMultipleHorizontal
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultiple',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="horizontal" options={dataSource} />;
    },
);

/**
 * InputMultipleVerticalCheckAll
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultiple',
  'VerticalCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="vertical" isCheckAll options={dataSource} />;
    },
);

/**
 * InputMultipleHorizontalCheckAll
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultiple',
  'HorizontalCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="horizontal" isCheckAll options={dataSource} />;
    },
);

// -------------------Select---------------------
/**
 * InputMultipleSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultiple',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Select {...props} options={dataSource} />;
    },
);

/**
 * InputMultipleVerticalSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultiple',
  'VerticalSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Select {...props} direction="vertical" options={dataSource} />;
    },
);

/**
 * InputMultipleHorizontalSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultiple',
  'HorizontalSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Select {...props} direction="horizontal" options={dataSource} />;
    },
);

/**
 * InputMultipleVerticalCheckAllSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultiple',
  'VerticalCheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <InputMultiple.Select {...props} direction="vertical" isCheckAll options={dataSource} />
      );
    },
);

/**
 * InputMultipleHorizontalCheckAllSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultiple',
  'HorizontalCheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <InputMultiple.Select {...props} direction="horizontal" isCheckAll options={dataSource} />
      );
    },
);

// -----------------------Dynamic----------------------
/**
 * InputMultipleDynamicStandard
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultipleDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicVertical
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultipleDynamic',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="vertical" options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicHorizontal
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultipleDynamic',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="horizontal" options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicVerticalCheckAll
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultipleDynamic',
  'VerticalCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="vertical" isCheckAll options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicHorizontalCheckAll
 */
setItem<InputMultipleProps, InputMultipleProps['options']>(
  'InputMultipleDynamic',
  'HorizontalCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} direction="horizontal" isCheckAll options={dataSource} />;
    },
);

// -------------------Select---------------------
/**
 * InputMultipleDynamicSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultipleDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Select {...props} options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicVerticalSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultipleDynamic',
  'VerticalSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Select {...props} direction="vertical" options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicHorizontalSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultipleDynamic',
  'HorizontalSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Select {...props} direction="horizontal" options={dataSource} />;
    },
);

/**
 * InputMultipleDynamicVerticalCheckAllSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultipleDynamic',
  'VerticalCheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <InputMultiple.Select {...props} direction="vertical" isCheckAll options={dataSource} />
      );
    },
);

/**
 * InputMultipleDynamicHorizontalCheckAllSelect
 */
setItem<InputMultipleSelectProps, InputMultipleSelectProps['options']>(
  'InputMultipleDynamic',
  'HorizontalCheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <InputMultiple.Select {...props} direction="horizontal" isCheckAll options={dataSource} />
      );
    },
);
