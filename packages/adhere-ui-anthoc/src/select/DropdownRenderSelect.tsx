import { useUpdateEffect } from 'ahooks';
import type { ReactElement } from 'react';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import Empty from '../empty';
import type { DisplayNameInternal, DropdownRenderSelectProps } from '../types';
import { normalizeOptionFilterProp } from '../util';
import Select from './Select';

/**
 * DropdownRenderSelect
 * @description 可以自定义内容的Select
 * @param children
 * @param options
 * @param defaultInputValue
 * @param emptyContent
 * @param optionFilterProp
 * @param props
 * @constructor
 */
const InternalDropdownRenderSelect = memo<DropdownRenderSelectProps>(
  ({
    children,
    options,
    defaultInputValue,
    emptyContent,
    shouldRenderEmptyData = false,
    optionFilterProp = 'label',
    localFilter = true,
    ...props
  }) => {
    const isMultiple = 'mode' in props && props.mode === 'multiple';

    const [inputValue, setInputValue] = useState(defaultInputValue ?? '');

    const [open, setOpen] = useState(false);

    /**
     * resetInputValue
     * @description 重置本地搜索关键字，恢复未过滤前的状态
     */
    const resetInputValue = useCallback(() => {
      setInputValue(defaultInputValue ?? '');
    }, [defaultInputValue]);

    /**
     * onSelectChange
     * @description 从下方组件触发的
     */
    const onSelectChange = (...args: [any, ...any[]]) => {
      // @ts-ignore
      props.onChange?.(...args);

      if (!isMultiple) {
        // 单选，选中后下拉框会关闭，一并重置搜索关键字
        setOpen(false);
        resetInputValue();
      }
    };

    const currentOriginNode = useRef<ReactElement | undefined>(undefined);

    const dropdownRenderElement = useRef<ReactElement | undefined>(undefined);

    const filterFields = useMemo(
      () => normalizeOptionFilterProp(optionFilterProp),
      [optionFilterProp],
    );

    const filterOptions = useMemo(() => {
      if (!localFilter || !inputValue) {
        return options;
      }

      return options?.filter?.((option) =>
        filterFields.some((field) => {
          const fieldValue = option?.[field as keyof typeof option];

          if (fieldValue == null) {
            return false;
          }

          return String(fieldValue).indexOf(inputValue) !== -1;
        }),
      );
    }, [inputValue, options, filterFields, localFilter]);

    const onDropdownRender = useCallback(
      (_originNode) => {
        currentOriginNode.current = _originNode;

        const renderChildrenParams = {
          originNode: _originNode,
          value: props.value,
          onChange: (...arg: [any, ...any[]]) => {
            onSelectChange(...arg);
          },
          options: filterOptions,
        };

        if (shouldRenderEmptyData) {
          return children?.(renderChildrenParams) ?? _originNode;
        }

        dropdownRenderElement.current = !!filterOptions?.length
          ? children?.(renderChildrenParams) ?? _originNode
          : emptyContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

        return dropdownRenderElement.current;
      },
      [children, emptyContent, filterOptions, props.value, props.onChange],
    );

    useUpdateEffect(() => {
      setInputValue(defaultInputValue ?? '');
    }, [defaultInputValue]);

    return (
      <Select
        options={filterOptions}
        filterOption={() => Object.is(dropdownRenderElement.current, currentOriginNode.current)}
        popupRender={onDropdownRender}
        open={open}
        {...props}
        onSearch={(v) => {
          const trimmed = v?.trim?.() ?? '';
          setInputValue(trimmed);
          props?.onSearch?.(trimmed);
        }}
        onClear={() => {
          setInputValue('');
          props?.onClear?.();
        }}
        onChange={onSelectChange}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);

          if (!nextOpen) {
            // 下拉框关闭（失焦/点击外部）时重置搜索关键字，避免下次打开时数据仍是过滤后的结果
            resetInputValue();
          }

          props?.onOpenChange?.(nextOpen);
        }}
      />
    );
  },
);

const DropdownRenderSelect = InternalDropdownRenderSelect as DisplayNameInternal<
  typeof InternalDropdownRenderSelect
>;
DropdownRenderSelect.displayName = 'DropdownRenderSelect';

export default DropdownRenderSelect;
