import React, { FC, useMemo } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import Dialog from '../dialog';
import Tag from '../tag';
import type { InputMultipleDialogProps } from '../types';
import InputMultipleHOC from './InputMultipleHOC';

const selectorPrefix = 'adhere-mobile-ui-anthoc-input-multiple';

const { usePropToState } = Hooks;

/**
 * InputMultipleDialog
 */
const InputMultipleDialog: FC<InputMultipleDialogProps<string>> = ({
  triggerProps,
  ...inputMultipleSelectProps
}) => {
  const [targetValue, setTargetValue] = usePropToState(inputMultipleSelectProps.value);

  const targetTriggerProps = useMemo(() => triggerProps ?? {}, [triggerProps]);

  const targetOptions = useMemo(() => {
    return Array.from(
      new Set([
        ...(inputMultipleSelectProps.options ?? []),
        ...(inputMultipleSelectProps.value ?? []),
      ]),
    ).map((_value) => ({
      label: _value,
      value: _value,
    }));
  }, [inputMultipleSelectProps.options, inputMultipleSelectProps.value]);

  return (
    <Dialog.TriggerPrompt
      submitAction={{
        key: 'submit',
        primary: true,
        onClick: () => {
          // @ts-ignore
          inputMultipleSelectProps?.onChange?.(targetValue);

          return Promise.resolve(targetValue);
        },
      }}
      popoverTriggerProps={{
        renderTrigger: (values) => {
          if (!values || !values.length) {
            return <div className={`${selectorPrefix}-placeholder`}>{Intl.v('请输入关键字')}</div>;
          }

          return (
            <ul className={`${selectorPrefix}-render-trigger`}>
              {values?.map((_value) => (
                <li key={_value}>
                  <Tag round color="primary">
                    {_value}
                  </Tag>
                </li>
              ))}
            </ul>
          );
        },
      }}
      {...targetTriggerProps}
      value={inputMultipleSelectProps.value}
    >
      <InputMultipleHOC
        {...inputMultipleSelectProps}
        options={targetOptions}
        onChange={setTargetValue}
      />
    </Dialog.TriggerPrompt>
  );
};

export default InputMultipleDialog;
