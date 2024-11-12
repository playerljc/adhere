import React from 'react';

import { InputMultiple } from '@baifendian/adhere-mobile-ui-anthoc';
import type {
  InputMultipleDialogProps,
  InputMultipleProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';

import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * MobileInputMultipleDynamicStandard
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultiple',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicCheckAll
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultiple',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} isCheckAll options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilter
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultiple',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} isFilter options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilterCheckAll
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultiple',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} isCheckAll isFilter options={dataSource} />;
    },
);

// ------------ Select --------------

/**
 * MobileInputMultipleDynamicSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultiple',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicCheckAllSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultiple',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} isCheckAll options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilterSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultiple',
  'FilterSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      debugger;

      return <InputMultiple.Dialog {...props} isFilter options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilterCheckAllSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultiple',
  'FilterCheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} isFilter isCheckAll options={dataSource} />;
    },
);

// ----------------------- Dynamic ----------------------
/**
 * MobileInputMultipleDynamicStandard
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicCheckAll
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} isCheckAll options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilter
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} isFilter options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilterCheckAll
 */
setItem<InputMultipleProps<string>, InputMultipleProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple {...props} isCheckAll isFilter options={dataSource} />;
    },
);

// ------------ Select --------------

/**
 * MobileInputMultipleDynamicSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicCheckAllSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} isCheckAll options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilterSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'FilterSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} isFilter options={dataSource} />;
    },
);

/**
 * MobileInputMultipleDynamicFilterCheckAllSelect
 */
setItem<InputMultipleDialogProps<string>, InputMultipleDialogProps<string>['options']>(
  'MobileInputMultipleDynamic',
  'FilterCheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<InputMultipleDialogProps<string>['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <InputMultiple.Dialog {...props} isFilter isCheckAll options={dataSource} />;
    },
);
