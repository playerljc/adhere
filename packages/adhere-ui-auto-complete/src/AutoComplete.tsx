import { useUpdateEffect } from 'ahooks';
import { Select } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import uniqby from 'lodash.uniqby';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import TreeAutoComplete from './TreeAutoComplete';
import type { AutoCompleteComponent, AutoCompleteProps, OptionType } from './types';
import useCommon from './useCommon';

const { useTheme } = ConfigProvider;

/**
 * 内部 AutoComplete 组件
 * 提供自动完成功能，支持搜索、防抖、自定义渲染等特性
 *
 * @param props - 组件属性
 * @param props.classNameWrap - 外层容器类名
 * @param props.styleWrap - 外层容器样式
 * @param props.renderLoading - 自定义加载状态渲染函数
 * @param props.debounceTimeout - 防抖延迟时间
 * @param props.options - 选项数据
 * @param props.loadData - 数据加载函数
 * @param props.defaultOptions - 默认选项数据
 * @param props.emptyContent - 空状态内容
 * @param props.children - 自定义下拉内容渲染函数
 * @param props.selectProps - Select 组件的其他属性
 * @returns 渲染的组件
 *
 * @example
 * ```tsx
 * <AutoComplete
 *   placeholder="请输入搜索内容"
 *   loadData={async (keyword) => {
 *     const data = await fetchOptions(keyword);
 *     setOptions(data);
 *   }}
 *   options={options}
 *   onChange={(value) => console.log('选中:', value)}
 * />
 * ```
 */
const InternalAutoComplete = memo<AutoCompleteProps>(
  ({
    classNameWrap,
    styleWrap,
    renderLoading,
    debounceTimeout,
    defaultOptions,
    options,
    loadData,
    emptyContent,
    optionsStrategy = 'merge',
    children,
    ...selectProps
  }) => {
    /** 外层容器引用 */
    const wrapperRef = useRef<HTMLDivElement>(null);

    /** 应用主题配置 */
    useTheme<HTMLDivElement>({
      elRef: wrapperRef,
      group: 'normal',
      displayName: 'AutoComplete',
    });

    /** 当前选中的行数据 */
    const [selectedRows, setSelectedRows] = useState<OptionType[]>(
      (defaultOptions as OptionType[]) ?? [],
    );

    /** 选择变化开始时间戳，用于防抖处理 */
    const onSelectChangeStartTime = useRef<number>(0);

    /** 是否为多选模式 */
    const isMultiple = 'mode' in selectProps && selectProps.mode === 'multiple';

    /** 使用通用 Hook 获取共享逻辑 */
    const {
      defaultDebounceTimeout,
      selectorPrefix,
      fetchLoading,
      empty,
      fetching,
      open,
      setOpen,
      onClear,
      onInputMemo,
    } = useCommon({
      renderLoading,
      emptyContent,
      loadData,
    });

    /**
     * 所有选项数据
     * 合并 options、defaultOptions 和 selectedRows
     */
    const allOptions = useMemo<OptionType[]>(() => {
      return [
        ...((options as OptionType[]) ?? []),
        ...((defaultOptions as OptionType[]) ?? []).filter((item) =>
          Array.isArray(selectProps.value)
            ? selectProps.value.includes(item.value)
            : selectProps.value === item.value,
        ),
        ...selectedRows,
      ];
    }, [options, defaultOptions, selectedRows, selectProps.value]);

    /**
     * 选择变化处理函数
     * 从下方组件触发的选择变化事件
     *
     * @param values - 选中的值
     */
    const onSelectChange = useCallback(
      (values: any): void => {
        if (Array.isArray(values)) {
          // 多选模式
          setSelectedRows(
            values
              .map((value) => allOptions?.find((option) => option.value === value))
              .filter((item): item is OptionType => !!item),
          );
        } else {
          // 单选模式
          setSelectedRows(
            [(allOptions ?? []).find((option) => option.value === values)].filter(
              (value): value is OptionType => !!value,
            ),
          );
        }

        // 调用外部传入的 onChange 回调
        selectProps.onChange?.(values);

        if (isMultiple) {
          // 多选模式记录时间戳用于防抖
          onSelectChangeStartTime.current = Date.now();
        } else {
          // 单选模式关闭下拉框
          setOpen(false);
        }
      },
      [allOptions, isMultiple, selectProps, setOpen],
    );

    /**
     * 输入处理函数（带防抖）
     * 处理用户输入，触发搜索
     *
     * @param e - 输入事件对象
     */
    const onInput = useCallback(
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const currentTime = Date.now();

        // 忽略复选框输入事件
        if (
          ['ant-checkbox-input'].some((className) => e.target.className.indexOf(className) !== -1)
        ) {
          return;
        }

        // 多选模式下的防抖处理
        if (
          isMultiple &&
          onSelectChangeStartTime.current !== 0 &&
          currentTime - onSelectChangeStartTime.current <= 400
        ) {
          onSelectChangeStartTime.current = 0;
          return;
        }

        onSelectChangeStartTime.current = 0;

        const keyword = e.target.value.trim();

        onInputMemo(keyword);
      }, debounceTimeout ?? defaultDebounceTimeout),
      [debounceTimeout, defaultDebounceTimeout, isMultiple, onInputMemo],
    );

    /**
     * 去重后的目标选项数据
     * 根据 value 去重，保留第一个出现的选项
     */
    const targetOptions = useMemo<OptionType[]>(() => {
      // merge模式
      if (optionsStrategy === 'merge') {
        const allOptionKeys = allOptions.map(({ value }) => value);
        const distinctKeys = Array.from(new Set(allOptionKeys));

        return distinctKeys
          .map((value) => allOptions.find((option) => option.value === value))
          .filter((option): option is OptionType => !!option);
      }
      // 缺省模式
      else if (optionsStrategy === 'normal') {
        let _options: OptionType[] = [];

        if (!!options?.length) {
          _options = uniqby(
            [
              ...((options as OptionType[]) ?? []),
              // ...((defaultOptions as OptionType[]) ?? []).filter((item) =>
              //   Array.isArray(selectProps.value)
              //     ? selectProps.value.includes(item.value)
              //     : selectProps.value === item.value,
              // ),
            ],
            'value',
          );
        } else {
          // @ts-ignore
          _options = defaultOptions ?? [];
        }

        return _options.filter((option): option is OptionType => !!option);
      }

      return (options ?? []).filter((option): option is OptionType => !!option);
    }, [allOptions, optionsStrategy, defaultOptions, selectProps.value]);

    /**
     * 当 defaultOptions 变化时更新 selectedRows
     */
    useUpdateEffect(() => {
      setSelectedRows((defaultOptions as OptionType[]) ?? []);
    }, [defaultOptions]);

    return (
      <div
        ref={wrapperRef}
        className={classNames(selectorPrefix, classNameWrap)}
        style={styleWrap ?? {}}
      >
        <Select
          allowClear
          showSearch
          filterOption={false}
          open={open}
          options={targetOptions}
          // onSearch={onInput}
          // @ts-ignore
          onInput={onInput}
          onClear={onClear}
          popupRender={(originNode) => {
            if (fetching) return fetchLoading;

            return !!targetOptions?.length
              ? children?.({
                  originNode,
                  value: selectProps.value,
                  onChange: onSelectChange,
                  options: targetOptions ?? [],
                  loading: fetching,
                }) ?? originNode
              : empty;
          }}
          onOpenChange={setOpen}
          {...selectProps}
          onChange={onSelectChange}
        />
      </div>
    );
  },
);

/** 导出 AutoComplete 组件 */
const AutoComplete = InternalAutoComplete as AutoCompleteComponent;

/** 添加 TreeAutoComplete 子组件 */
AutoComplete.TreeAutoComplete = TreeAutoComplete;

/** 设置组件显示名称 */
AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
