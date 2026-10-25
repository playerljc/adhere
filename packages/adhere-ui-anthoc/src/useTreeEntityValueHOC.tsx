import omit from 'omit.js';
import React, { isValidElement, useEffect, useMemo, useRef } from 'react';

import Util from '@baifendian/adhere-util';

import type { TreeEntityValueHOCProps } from './types';
import {
  childPassesThroughValue,
  isMultiplePrimitiveValue,
  isMultipleRefValue,
  isPrimitiveValue,
  isRefValue,
  readEntityValue,
  sameEntityValue,
} from './value-hoc/entityValue';

const TREE_ENTITY_VALUE_HOC_OMIT_KEYS = [
  'children',
  'treeData',
  'treeDataProp',
  'valueProp',
  'childrenProp',
  'isUsePrimaryValue',
  'changePropagation',
];

export default (props: TreeEntityValueHOCProps) => {
  const { value, onChange, children, treeData } = props;

  const _isUsePrimaryValue = useMemo(() => {
    if ('isUsePrimaryValue' in props) {
      return props.isUsePrimaryValue;
    }

    return true;
  }, [props.isUsePrimaryValue]);

  const childProps = isValidElement(children) ? (children.props as any) : undefined;
  const preferredKey = props.valueProp || childProps?.fieldNames?.value;
  const childrenKey = props.childrenProp || childProps?.fieldNames?.children || 'children';
  const passThrough = childPassesThroughValue(childProps);
  const simpleMode = Boolean(childProps?.treeDataSimpleMode);

  function valueToEntity(_value) {
    function loop(nodes) {
      if (!Array.isArray(nodes)) return undefined;

      let entity;
      for (let index = 0; index < nodes.length; index++) {
        if (Object.is(readEntityValue(nodes[index], preferredKey), _value)) {
          entity = nodes[index];
          break;
        }

        entity = loop(nodes[index]?.[childrenKey] ?? []);
        if (entity) break;
      }

      return entity;
    }

    const targetTreeData = [...(treeData ?? [])];

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (Util.isObject(item)) {
          targetTreeData.push(item);
        }
      });
    } else if (Util.isObject(value)) {
      targetTreeData.push(value);
    }

    if (simpleMode) {
      return (
        targetTreeData.find((item) => Object.is(readEntityValue(item, preferredKey), _value)) ??
        _value
      );
    }

    return loop(targetTreeData) ?? _value;
  }

  function valuesToEntities(_values) {
    return _values.map((item) => {
      if (isPrimitiveValue(item)) {
        return valueToEntity(item);
      }

      return Util.isArray(item) ? valuesToEntities(item) : item;
    });
  }

  function valuesToPrimitive(_values) {
    return _values.map((item) => {
      if (Util.isArray(item)) {
        return valuesToPrimitive(item);
      }

      return readEntityValue(item, preferredKey);
    });
  }

  const internalValue = useMemo(() => {
    if (passThrough || !_isUsePrimaryValue) return value;
    if (isRefValue(value)) return readEntityValue(value, preferredKey);
    if (isMultipleRefValue(value, true)) return valuesToPrimitive(value);
    return value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, preferredKey, passThrough, _isUsePrimaryValue]);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (passThrough || !isValidElement(children)) return;

    const next = isPrimitiveValue(value)
      ? valueToEntity(value)
      : isMultiplePrimitiveValue(value, true)
        ? valuesToEntities(value)
        : value;

    if (sameEntityValue(next, value)) return;
    onChangeRef.current?.(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, treeData, preferredKey, childrenKey, passThrough, simpleMode]);

  if (!isValidElement(children)) {
    return children;
  }

  const element = children as React.ReactElement<any>;

  return React.cloneElement(element, {
    ...omit(props, TREE_ENTITY_VALUE_HOC_OMIT_KEYS),
    ...element.props,
    value: internalValue,
    realValue: value,
    onChange: (val, ...rest) => {
      if (isPrimitiveValue(val)) {
        onChange?.(valueToEntity(val), ...rest);
      } else if (isMultiplePrimitiveValue(val, true)) {
        onChange?.(valuesToEntities(val), ...rest);
      } else {
        onChange?.(val, ...rest);
      }

      if (!Object.is(onChange, childProps?.onChange)) {
        if (!('changePropagation' in props) || props.changePropagation) {
          childProps?.onChange?.(val, ...rest);
        }
      }
    },
  });
};
