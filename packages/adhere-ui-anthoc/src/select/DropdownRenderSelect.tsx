import { useUpdateEffect } from 'ahooks';
import type { FC, ReactElement } from 'react';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import Empty from '../empty';
import type { DropdownRenderSelectProps } from '../types';
import Select from './Select';

/**
 * DropdownRenderSelect
 * @description 可以自定义内容的Select
 * @param children
 * @param options
 * @param defaultInputValue
 * @param emptyContent
 * @param props
 * @constructor
 */
const DropdownRenderSelect: FC<DropdownRenderSelectProps> = ({
  children,
  options,
  defaultInputValue,
  emptyContent,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(defaultInputValue ?? '');

  const currentOriginNode = useRef<ReactElement>();

  const dropdownRenderElement = useRef<ReactElement>();

  const filterOptions = useMemo(() => {
    if (inputValue) {
      return options?.filter?.((t) => (t.label as string).indexOf?.(inputValue) !== -1);
    }

    return options;
  }, [inputValue, options]);

  const onDropdownRender = useCallback(
    (_originNode) => {
      currentOriginNode.current = _originNode;

      dropdownRenderElement.current = !!filterOptions?.length
        ? children?.({
            originNode: _originNode,
            value: props.value,
            onChange: props.onChange,
            options: filterOptions,
          }) ?? _originNode
        : emptyContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

      return dropdownRenderElement.current;
    },
    [children, filterOptions, props.value, props.onChange],
  );

  useUpdateEffect(() => {
    setInputValue(defaultInputValue ?? '');
  }, [defaultInputValue]);

  return (
    <Select
      filterOption={() => dropdownRenderElement.current === currentOriginNode.current}
      onSearch={(v) => {
        setInputValue(v);
        props?.onSearch?.(v);
      }}
      // onBlur={(e) => {
      //   e.stopPropagation();
      //   setInputValue('');
      // }}
      onClear={() => {
        setInputValue('');
        props?.onClear?.();
      }}
      dropdownRender={onDropdownRender}
      options={filterOptions}
      {...props}
    />
  );
};

export default memo(DropdownRenderSelect);
