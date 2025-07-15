import { Typography } from 'antd';
import { ErrorBlock, FloatingPanel, List, NoticeBar, SearchBar } from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import type { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import TreeAutoComplete from './TreeAutoComplete';
import type { AutoCompleteComponent, AutoCompleteProps, DataRecord } from './types';

const selectorPrefix = 'adhere-mobile-ui-auto-complete';

const { Title, Text } = Typography;

const { useTheme } = ConfigProvider;

/**
 * 内部自动完成组件
 * 
 * @description 提供搜索、选择和数据展示功能的自动完成组件
 * 
 * @param props - 组件属性
 * @param props.className - 根容器的CSS类名
 * @param props.style - 根容器的内联样式
 * @param props.searchBarClassName - 搜索栏的CSS类名
 * @param props.searchBarStyle - 搜索栏的内联样式
 * @param props.bodyClassName - 内容区域的CSS类名
 * @param props.bodyStyle - 内容区域的内联样式
 * @param props.placeholder - 搜索框占位符文本
 * @param props.searchBarProps - 搜索栏组件的属性
 * @param props.loadData - 数据加载函数
 * @param props.defaultDataSource - 默认数据源
 * @param props.searchDataSource - 搜索数据源
 * @param props.rowKey - 数据记录的唯一标识字段名
 * @param props.labelProp - 数据记录的显示文本字段名
 * @param props.valueProp - 数据记录的值字段名
 * @param props.value - 当前选中的值
 * @param props.onChange - 值变化回调函数
 * @param props.renderResultItem - 自定义结果项渲染函数
 * @param props.renderEmpty - 自定义空状态渲染函数
 * @param props.showResult - 是否显示结果面板
 * @param props.children - 子渲染函数
 * 
 * @returns 自动完成组件实例
 */
const InternalAutoComplete = memo<AutoCompleteProps>(
  ({
    className,
    style,
    searchBarClassName,
    searchBarStyle,
    bodyClassName,
    bodyStyle,
    placeholder,
    searchBarProps,
    loadData,
    defaultDataSource,
    searchDataSource,
    rowKey,
    labelProp,
    valueProp,
    value,
    onChange,
    renderResultItem,
    renderEmpty,
    showResult = true,
    children,
  }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'AutoComplete',
    });

    const [keyword, setKeyword] = useState<string>('');
    const [dataSource, setDataSource] = useState<DataRecord[]>(defaultDataSource ?? []);

    // 将value转换为ID数组
    const valueToIds = useMemo(
      (): CheckListValue[] =>
        (value ?? []).map((_value) => {
          if (Util.isObject(_value)) {
            return getValue(_value) ?? getKey(_value);
          }
          return _value;
        }).filter((id): id is CheckListValue => id !== undefined),
      [value],
    );

    /**
     * 检查数据源是否为空
     */
    function isEmpty(): boolean {
      return !searchDataSource?.length;
    }

    /**
     * 渲染空状态
     */
    function renderEmptyState(): React.ReactNode {
      return renderEmpty?.() ?? <ErrorBlock status="empty" />;
    }

    /**
     * 获取数据记录的键值
     */
    function getKey(record: DataRecord): string | number | undefined {
      return record?.[rowKey ?? 'id'];
    }

    /**
     * 获取数据记录的值
     */
    function getValue(record: DataRecord): string | number | undefined {
      return record?.[valueProp ?? 'value'];
    }

    /**
     * 获取数据记录的标签
     */
    function getLabel(record: DataRecord): string | null {
      return record?.[labelProp ?? 'label'] ?? null;
    }

    /**
     * 从选中值中排除指定值
     */
    function excludeValue(targetValue: CheckListValue): CheckListValue[] {
      return valueToIds?.filter?.((_v) => _v !== targetValue) ?? [];
    }

    /**
     * 搜索框值变化处理
     */
    function handleSearchChange(newValue: string): void {
      if (!newValue) {
        loadData?.('');
      }
      setKeyword(newValue);
    }

    /**
     * 搜索处理
     */
    function handleSearch(): void {
      loadData?.(keyword);
    }

    /**
     * 选择列表变化处理
     */
    function handleCheckListChange(values: CheckListValue[] | CheckListValue): void {
      const targetValues = Array.isArray(values) ? values : [values];

      setDataSource((_dataSource) =>
        targetValues.map((_value) => {
          return [...(searchDataSource ?? []), ..._dataSource]?.find?.(
            (_r) => (getValue(_r) ?? getKey(_r)) === _value,
          );
        }).filter(Boolean) as DataRecord[],
      );

      onChange?.(targetValues);
    }

    /**
     * 移除选中项
     */
    function removeItem(id: string): void {
      setDataSource((_dataSource) =>
        _dataSource.filter((_r) => (getValue(_r) ?? getKey(_r)) !== id),
      );

      onChange?.(excludeValue(id));
    }

    // 当数据源或值变化时，更新内部数据源
    useEffect(() => {
      setDataSource((_dataSource) => {
        const allDataSource = [
          ...(searchDataSource ?? []),
          ...(defaultDataSource ?? []),
          ..._dataSource,
        ];

        return (
          value?.map?.((_value) => {
            if (Util.isObject(_value)) {
              return _value;
            }

            return allDataSource.find((_r) => (getValue(_r) ?? getKey(_r)) === _value);
          }).filter(Boolean) as DataRecord[] ?? []
        );
      });
    }, [searchDataSource, defaultDataSource, value, rowKey, valueProp]);

    return (
      <div
        ref={wrapperRef}
        className={classNames(selectorPrefix, className ?? '')}
        style={style ?? {}}
      >
        <div
          className={classNames(`${selectorPrefix}-search-bar`, searchBarClassName ?? '')}
          style={searchBarStyle ?? {}}
        >
          <SearchBar
            placeholder={placeholder ?? Intl.get('input_filter_text')}
            value={keyword}
            onChange={handleSearchChange}
            onSearch={handleSearch}
            {...(searchBarProps ?? {})}
          />
        </div>

        <div
          className={classNames(`${selectorPrefix}-body`, bodyClassName ?? '')}
          style={bodyStyle ?? {}}
        >
          {isEmpty() && renderEmptyState()}

          {!isEmpty() &&
            children?.({
              value: valueToIds,
              onChange: handleCheckListChange,
              searchDataSource: searchDataSource ?? [],
            })}
        </div>

        {showResult && !!value?.length && (
          <FloatingPanel
            anchors={[28, (wrapperRef?.current?.offsetHeight ?? 0) - 200].filter((t) => t >= 0)}
          >
            <div className={`${selectorPrefix}-result`}>
              <NoticeBar
                content={Intl.getHTML('total_count', { n: dataSource.length })}
                color="info"
              />

              <List>
                {dataSource?.map((record, index) => {
                  const key = getKey(record);
                  const label = getLabel(record);

                  const defaultItem = (
                    <>
                      <Title level={5} ellipsis>
                        {label}
                      </Title>

                      <Text type="secondary" ellipsis>
                        {label}
                      </Text>
                    </>
                  );

                  return (
                    <List.Item key={key}>
                      <div
                        className={`${selectorPrefix}-result-item-close`}
                        onClick={() => removeItem(valueToIds?.[index] as string)}
                      >
                        <CloseCircleFill />
                      </div>

                      {renderResultItem?.(record, defaultItem) ?? defaultItem}
                    </List.Item>
                  );
                })}
              </List>
            </div>
          </FloatingPanel>
        )}
      </div>
    );
  },
);

const AutoComplete = InternalAutoComplete as AutoCompleteComponent;

AutoComplete.TreeAutoComplete = TreeAutoComplete;

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
