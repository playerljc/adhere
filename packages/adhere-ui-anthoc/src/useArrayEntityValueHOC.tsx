import omit from 'omit.js';
import React, { useMemo } from 'react';

import Util from '@baifendian/adhere-util';

import type { ArrayEntityValueHOCProps } from './types';

const optionKeys = ['value', 'key', 'id'];

const DEFAULT_VALUE_PROP = 'value';

export default (props: ArrayEntityValueHOCProps) => {
  const { value, onChange, children, options } = props;

  const _isUsePrimaryValue = useMemo(() => {
    if ('isUsePrimaryValue' in props) {
      return props.isUsePrimaryValue;
    }

    return true;
  }, [props.isUsePrimaryValue]);

  function getEntityValue(entity) {
    if (props.valueProp ?? DEFAULT_VALUE_PROP in entity) {
      return entity[props.valueProp ?? DEFAULT_VALUE_PROP];
    }

    let value = entity[DEFAULT_VALUE_PROP];

    for (let i = 0; i < optionKeys.length; i++) {
      if (optionKeys[i] in entity) {
        value = entity[optionKeys[i]];
        break;
      }
    }

    return value;
  }

  function isPrimitive(_value) {
    return (
      _value !== null && _value !== undefined && _value?.trim?.() !== '' && Util.isPrimitive(_value)
    );
  }

  function isRef(_value) {
    return (
      _value !== null &&
      _value !== undefined &&
      _value?.trim?.() !== '' &&
      !Util.isArray(_value) &&
      Util.isRef(_value)
    );
  }

  function isMultiplePrimitive(_value) {
    return (
      _value !== null &&
      _value !== undefined &&
      _value?.trim?.() !== '' &&
      Util.isArray(_value) &&
      !!_value.length &&
      _value.some((t) => Util.isPrimitive(t))
    );
  }

  function isMultipleRef(_value) {
    return (
      _value !== null &&
      _value !== undefined &&
      _value?.trim?.() !== '' &&
      Util.isArray(_value) &&
      !!_value.length &&
      _value.every((t) => Util.isRef(t))
    );
  }

  function valuesToEntities(_values) {
    return _values.map((t) => {
      if (isPrimitive(t)) {
        return valueToEntity(t);
      }

      return t;
    });
  }

  function valuesToPrimitive(_values) {
    return _values.map((t) => valueToPrimitive(t));
  }

  function valueToEntity(_value) {
    const targetOptions = [...(options ?? [])];

    if (Array.isArray(props.value)) {
      props.value.forEach((_value) => {
        if (Util.isObject(_value)) {
          targetOptions.push(_value);
        }
      });
    } else {
      if (Util.isObject(props.value)) {
        targetOptions.push(props.value);
      }
    }

    return (
      (targetOptions ?? []).find((t) => {
        return Object.is(getEntityValue(t), _value);
      }) ?? _value
    );
  }

  function valueToPrimitive(_value) {
    let res = _value[DEFAULT_VALUE_PROP];

    for (let i = 0; i < optionKeys.length; i++) {
      if (optionKeys[i] in _value) {
        res = _value[optionKeys[i]];
        break;
      }
    }

    return res;
  }

  function getInternalValue() {
    if (isRef(value)) {
      return valueToPrimitive(value);
    } else if (isMultipleRef(value)) {
      return valuesToPrimitive(value);
    }

    return value;
  }

  if (isPrimitive(value)) {
    onChange?.(valueToEntity(value));
  } else if (isMultiplePrimitive(value)) {
    onChange?.(valuesToEntities(value));
  }

  return React.cloneElement(children, {
    ...omit(props, ['children', 'options']),
    ...children.props,
    value: _isUsePrimaryValue ? getInternalValue() : value,
    realValue: value,
    onChange: (_selectValue, ...rest) => {
      if (isPrimitive(_selectValue)) {
        onChange?.(valueToEntity(_selectValue), ...rest);
      } else if (isMultiplePrimitive(_selectValue)) {
        onChange?.(valuesToEntities(_selectValue), ...rest);
      } else {
        onChange?.(_selectValue, ...rest);
      }

      if (!Object.is(onChange, children.props?.onChange)) {
        if (!('changePropagation' in props) || props.changePropagation) {
          children.props?.onChange?.(_selectValue, ...rest);
        }
      }
    },
  });
};
