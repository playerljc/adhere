import omit from 'omit.js';
import React, { isValidElement, useEffect, useMemo, useRef } from 'react';

import Util from '@baifendian/adhere-util';

import type { ArrayEntityValueHOCProps } from './types';
import {
  childPassesThroughValue,
  isMultiplePrimitiveValue,
  isMultipleRefValue,
  isPrimitiveValue,
  isRefValue,
  readEntityValue,
  sameEntityValue,
} from './value-hoc/entityValue';

const ARRAY_ENTITY_VALUE_HOC_OMIT_KEYS = [
  'children',
  'options',
  'valueProp',
  'optionsProp',
  'isUsePrimaryValue',
  'changePropagation',
  'pagingPropsPath',
  'getOptionsByDataSource',
];

export default (props: ArrayEntityValueHOCProps) => {
  const { value, onChange, children, options } = props;

  const _isUsePrimaryValue = useMemo(() => {
    if ('isUsePrimaryValue' in props) {
      return props.isUsePrimaryValue;
    }

    return true;
  }, [props.isUsePrimaryValue]);

  const childProps = isValidElement(children) ? (children.props as any) : undefined;
  const preferredKey = props.valueProp || childProps?.fieldNames?.value;
  const passThrough = childPassesThroughValue(childProps);

  function valueToEntity(_value) {
    const targetOptions = [...(options ?? [])];

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (Util.isObject(item)) {
          targetOptions.push(item);
        }
      });
    } else if (Util.isObject(value)) {
      targetOptions.push(value);
    }

    return (
      targetOptions.find((item) => Object.is(readEntityValue(item, preferredKey), _value)) ?? _value
    );
  }

  function valuesToEntities(_values) {
    return _values.map((item) => {
      if (isPrimitiveValue(item)) {
        return valueToEntity(item);
      }

      return item;
    });
  }

  function valuesToPrimitive(_values) {
    return _values.map((item) => readEntityValue(item, preferredKey));
  }

  const internalValue = useMemo(() => {
    if (passThrough || !_isUsePrimaryValue) return value;
    if (isRefValue(value)) return readEntityValue(value, preferredKey);
    if (isMultipleRefValue(value)) return valuesToPrimitive(value);
    return value;
    // valuesToPrimitive 只依赖 value 与 preferredKey，选项变化不应生成新的 value 引用
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, preferredKey, passThrough, _isUsePrimaryValue]);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (passThrough || !isValidElement(children)) return;

    const next = isPrimitiveValue(value)
      ? valueToEntity(value)
      : isMultiplePrimitiveValue(value)
        ? valuesToEntities(value)
        : value;

    if (sameEntityValue(next, value)) return;
    onChangeRef.current?.(next);
    // 选项晚到时要重新还原；结果与当前 value 相同时不向外写入
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, options, preferredKey, passThrough]);

  if (!isValidElement(children)) {
    return children;
  }

  const element = children as React.ReactElement<any>;

  return React.cloneElement(element, {
    ...omit(props, ARRAY_ENTITY_VALUE_HOC_OMIT_KEYS),
    ...element.props,
    value: internalValue,
    realValue: value,
    onChange: (_selectValue, ...rest) => {
      if (isPrimitiveValue(_selectValue)) {
        onChange?.(valueToEntity(_selectValue), ...rest);
      } else if (isMultiplePrimitiveValue(_selectValue)) {
        onChange?.(valuesToEntities(_selectValue), ...rest);
      } else {
        onChange?.(_selectValue, ...rest);
      }

      if (!Object.is(onChange, childProps?.onChange)) {
        if (!('changePropagation' in props) || props.changePropagation) {
          childProps?.onChange?.(_selectValue, ...rest);
        }
      }
    },
  });
};
