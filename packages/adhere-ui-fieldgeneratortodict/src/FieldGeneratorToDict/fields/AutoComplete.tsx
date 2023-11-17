import { AutoCompleteProps } from 'antd';
import React from 'react';

import { AutoComplete } from '@baifendian/adhere-ui-anthoc';
import type { AutoCompleteSelectInputProps } from '@baifendian/adhere-ui-anthoc/es/types';

import { useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * AutoCompleteStandard
 */
setItem<AutoCompleteProps, AutoCompleteProps['options']>(
  'AutoComplete',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<AutoCompleteProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <AutoComplete {...props} options={options} />;
    },
);

/**
 * AutoCompleteSelectInput
 */
setItem<AutoCompleteSelectInputProps, AutoCompleteSelectInputProps['options']>(
  'AutoComplete',
  'SelectInput',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<AutoCompleteSelectInputProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <AutoComplete.AutoCompleteSelectInput {...props} options={options} />;
    },
);

/**
 * AutoCompleteDynamicStandard
 */
setItem<AutoCompleteProps, AutoCompleteProps['options']>(
  'AutoCompleteDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<AutoCompleteProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <AutoComplete {...props} options={options} />;
    },
);

/**
 * AutoCompleteDynamicSelectInput
 */
setItem<AutoCompleteSelectInputProps, AutoCompleteSelectInputProps['options']>(
  'AutoCompleteDynamic',
  'SelectInput',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<AutoCompleteSelectInputProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <AutoComplete.AutoCompleteSelectInput {...props} options={options} />;
    },
);
