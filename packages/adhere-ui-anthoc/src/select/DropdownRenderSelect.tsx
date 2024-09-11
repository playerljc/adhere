import { useUpdateEffect } from 'ahooks';
import type { ReactElement } from 'react';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import Empty from '../empty';
import type { DisplayNameInternal, DropdownRenderSelectProps } from '../types';
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
const InternalDropdownRenderSelect = memo<DropdownRenderSelectProps>(
  ({ children, options, defaultInputValue, emptyContent, ...props }) => {
    const isMultiple = 'mode' in props && props.mode === 'multiple';

    /**
     * onSelectChange
     * @description 从下方组件触发的
     * @param _values
     */
    const onSelectChange = (_values) => {
      // @ts-ignore
      props.onChange?.(_values);

      if (!isMultiple) {
        // 单选
        setOpen(false);
      }
    };

    const [inputValue, setInputValue] = useState(defaultInputValue ?? '');

    const [open, setOpen] = useState(false);

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
              onChange: (...arg) => {
                onSelectChange(arg[0]);
                props.onChange?.(...arg);
              },
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
        options={filterOptions}
        filterOption={() => Object.is(dropdownRenderElement.current, currentOriginNode.current)}
        dropdownRender={onDropdownRender}
        open={open}
        onDropdownVisibleChange={setOpen}
        onSearch={(v) => {
          setInputValue(v?.trim?.());
          props?.onSearch?.(v?.trim?.());
        }}
        onClear={() => {
          setInputValue('');
          props?.onClear?.();
        }}
        {...props}
        onChange={(_value) => onSelectChange(_value)}
      />
    );
  },
);

const DropdownRenderSelect = InternalDropdownRenderSelect as DisplayNameInternal<
  typeof InternalDropdownRenderSelect
>;
DropdownRenderSelect.displayName = 'DropdownRenderSelect';

export default DropdownRenderSelect;
