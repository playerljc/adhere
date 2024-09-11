import type { RadioGroupProps } from 'antd';
import React from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteButtonRadioSelectProps,
  AutoCompleteCustomRadioSelectProps,
  AutoCompleteRadioSelectProps,
  ButtonRadioSelectProps,
  CustomRadioProps,
  CustomRadioSelectProps,
  RadioSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import type { SuspenseComponentProps } from '../../types';
import { useAutoCompleteDict, useDict, useDynamicDict } from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * RadioVertical
 */
setItem<RadioGroupProps, RadioGroupProps['options']>(
  'Radio',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.VerticalRadio {...props} options={options} />;
    },
);

/**
 * RadioHorizontal
 */
setItem<RadioGroupProps, RadioGroupProps['options']>(
  'Radio',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.HorizontalRadio {...props} options={options} />;
    },
);

/**
 * RadioCustom
 */
setItem<CustomRadioProps, CustomRadioProps['options']>(
  'Radio',
  'Custom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.CustomRadio {...props} options={options} />;
    },
);

/**
 * RadioButton
 */
setItem<CustomRadioProps, CustomRadioProps['options']>(
  'Radio',
  'Button',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.ButtonRadio {...props} options={options} />;
    },
);

/**
 * RadioSuspenseVertical
 */
setItem<SuspenseComponentProps<RadioGroupProps>, RadioGroupProps['options']>(
  'Radio',
  'SuspenseVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.VerticalRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioSuspenseHorizontal
 */
setItem<SuspenseComponentProps<RadioGroupProps>, RadioGroupProps['options']>(
  'Radio',
  'SuspenseHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.HorizontalRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioSuspenseCustom
 */
setItem<SuspenseComponentProps<CustomRadioProps>, CustomRadioProps['options']>(
  'Radio',
  'SuspenseCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.CustomRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioSuspenseButton
 */
setItem<SuspenseComponentProps<CustomRadioProps>, CustomRadioProps['options']>(
  'Radio',
  'SuspenseButton',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.ButtonRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioSelect
 */
setItem<RadioSelectProps, RadioSelectProps['options']>(
  'Radio',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<RadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.RadioSelect {...props} options={options} />;
    },
);

/**
 * RadioCustomSelect
 */
setItem<CustomRadioSelectProps, CustomRadioSelectProps['options']>(
  'Radio',
  'CustomSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CustomRadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.CustomRadioSelect {...props} options={options} />;
    },
);

/**
 * RadioButtonSelect
 */
setItem<ButtonRadioSelectProps, ButtonRadioSelectProps['options']>(
  'Radio',
  'ButtonSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<ButtonRadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.ButtonRadioSelect {...props} options={options} />;
    },
);

////////////////////////////////////////////////////////////
/**
 * RadioDynamicVertical
 */
setItem<RadioGroupProps, RadioGroupProps['options']>(
  'RadioDynamic',
  'Vertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.VerticalRadio {...props} options={options} />;
    },
);

/**
 * RadioDynamicHorizontal
 */
setItem<RadioGroupProps, RadioGroupProps['options']>(
  'RadioDynamic',
  'Horizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.HorizontalRadio {...props} options={options} />;
    },
);

/**
 * RadioDynamicCustom
 */
setItem<CustomRadioProps, CustomRadioProps['options']>(
  'RadioDynamic',
  'Custom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.CustomRadio {...props} options={options} />;
    },
);

/**
 * RadioDynamicButton
 */
setItem<CustomRadioProps, CustomRadioProps['options']>(
  'RadioDynamic',
  'Button',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.ButtonRadio {...props} options={options} />;
    },
);

/**
 * RadioDynamicSuspenseVertical
 */
setItem<SuspenseComponentProps<RadioGroupProps>, RadioGroupProps['options']>(
  'RadioDynamic',
  'SuspenseVertical',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.VerticalRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioDynamicSuspenseHorizontal
 */
setItem<SuspenseComponentProps<RadioGroupProps>, RadioGroupProps['options']>(
  'RadioDynamic',
  'SuspenseHorizontal',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.HorizontalRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioDynamicSuspenseCustom
 */
setItem<SuspenseComponentProps<CustomRadioProps>, CustomRadioProps['options']>(
  'RadioDynamic',
  'SuspenseCustom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.CustomRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioDynamicSuspenseButton
 */
setItem<SuspenseComponentProps<CustomRadioProps>, CustomRadioProps['options']>(
  'RadioDynamic',
  'SuspenseButton',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const options = useDynamicDict<CustomRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={options}>
          <Radio.ButtonRadio {...props} options={options} />
        </Suspense>
      );
    },
);

/**
 * RadioDynamicSelect
 */
setItem<RadioSelectProps, RadioSelectProps['options']>(
  'RadioDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<RadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.RadioSelect {...props} options={options} />;
    },
);

/**
 * RadioDynamicCustomSelect
 */
setItem<CustomRadioSelectProps, CustomRadioSelectProps['options']>(
  'RadioDynamic',
  'CustomSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CustomRadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.CustomRadioSelect {...props} options={options} />;
    },
);

/**
 * RadioDynamicButtonSelect
 */
setItem<ButtonRadioSelectProps, ButtonRadioSelectProps['options']>(
  'RadioDynamic',
  'ButtonSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<ButtonRadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.ButtonRadioSelect {...props} options={options} />;
    },
);

/**
 * RadioACStandard
 */
setItem<AutoCompleteRadioSelectProps, AutoCompleteRadioSelectProps['options']>(
  'RadioAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteRadioSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.AutoCompleteRadioSelect {...props} options={options} loadData={loadData} />;
    },
);

/**
 * RadioACCustom
 */
setItem<AutoCompleteCustomRadioSelectProps, AutoCompleteCustomRadioSelectProps['options']>(
  'RadioAC',
  'Custom',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCustomRadioSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Radio.AutoCompleteCustomRadioSelect {...props} options={options} loadData={loadData} />
      );
    },
);

/**
 * RadioACButton
 */
setItem<AutoCompleteButtonRadioSelectProps, AutoCompleteButtonRadioSelectProps['options']>(
  'RadioAC',
  'Button',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteButtonRadioSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Radio.AutoCompleteButtonRadioSelect {...props} options={options} loadData={loadData} />
      );
    },
);
