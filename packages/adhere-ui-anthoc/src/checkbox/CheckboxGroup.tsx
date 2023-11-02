import { useUpdateEffect } from 'ahooks';
import { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo, useState } from 'react';
import type { FC } from 'react';

import Space from '../space';
import type { CheckboxGroupExtProps } from '../types';
import Checkbox from './Checkbox';

const selectorPrefix = 'adhere-ui-ant-hoc-checkbox-group-ext';

/**
 * CheckboxGroup
 * @param className
 * @param style
 * @param direction
 * @param options
 * @param onChange
 * @param value
 * @param children
 * @param defaultValue
 * @param disabled
 * @constructor
 */
const CheckboxGroupExt: FC<CheckboxGroupExtProps> = ({
  className,
  style,
  direction,
  options,
  onChange,
  value,
  children,
  defaultValue,
  disabled = false,
}) => {
  const [currentValue, setCurrentValue] = useState(value || defaultValue);

  function onCheckboxChange(e, itemValue) {
    if (e.target.checked) {
      const changeValue = [...(currentValue ?? []), itemValue];

      setCurrentValue(changeValue);

      onChange?.(changeValue, true, [itemValue]);
    } else {
      const changeValue = (currentValue ?? []).filter((_value) => _value !== itemValue);

      setCurrentValue(changeValue);

      onChange?.(changeValue, false, [itemValue]);
    }
  }

  useUpdateEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      {children && children(onCheckboxChange)}

      {!children && (
        <Space direction={direction ?? 'horizontal'}>
          {options?.map?.((t, _index) => {
            const { value: itemValue, disabled: itemDisabled, label } = t as CheckboxOptionType;

            return (
              <Checkbox
                key={itemValue}
                value={currentValue}
                disabled={itemDisabled ?? disabled}
                checked={(currentValue ?? []).includes(itemValue)}
                onChange={(e) => onCheckboxChange(e, itemValue)}
              >
                {label}
              </Checkbox>
            );
          })}
        </Space>
      )}
    </div>
  );
};

export default memo(CheckboxGroupExt);
