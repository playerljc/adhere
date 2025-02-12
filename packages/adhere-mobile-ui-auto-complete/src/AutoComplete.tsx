import { Typography } from 'antd';
import { ErrorBlock, FloatingPanel, List, NoticeBar, SearchBar } from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import type { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import TreeAutoComplete from './TreeAutoComplete';
import type { AutoCompleteComponent, AutoCompleteProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-auto-complete';

const { Title, Text } = Typography;

/**
 * InternalAutoComplete
 * @param className
 * @param style
 * @param searchBarProps
 * @param checkListProps
 * @param loadData
 * @param rowKey
 * @param labelProp
 * @param valueProp
 * @param value
 * @param onChange
 * @param renderEmpty
 * @param children
 * @constructor
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
    const wrapperRef = useRef<HTMLDivElement | null>();

    const [kw, setKw] = useState<string>('');

    const [dataSource, setDataSource] = useState<any[]>(defaultDataSource ?? []);

    const valueToIds = useMemo(
      () =>
        (value ?? []).map((_value) => {
          if (Util.isObject(_value)) {
            return getValue(_value) ?? getKey(_value);
          }

          return _value;
        }),
      [value],
    );

    function isEmpty() {
      return !searchDataSource?.length;
    }

    function empty() {
      return renderEmpty?.() ?? <ErrorBlock status="empty" />;
    }

    function getKey(record) {
      return record?.[rowKey ?? 'id'];
    }

    function getValue(record) {
      return record?.[valueProp ?? 'value'];
    }

    function getLabel(record) {
      return record?.[labelProp ?? 'label'] ?? null;
    }

    function excludeVal(_value: CheckListValue): CheckListValue[] {
      return valueToIds?.filter?.((_v) => _v !== _value) ?? [];
    }

    function onSearchChange(_v) {
      if (!_v) {
        loadData?.('');
      }
      setKw(_v);
    }

    function onSearch() {
      loadData?.(kw);
    }

    function onCheckListChange(_values) {
      const targetValues = Array.isArray(_values) ? _values : [_values];

      setDataSource((_dataSource) =>
        targetValues.map((_value) => {
          return [...(searchDataSource ?? []), ..._dataSource]?.find?.(
            (_r) => (getValue(_r) ?? getKey(_r)) === _value,
          );
        }),
      );

      onChange?.(_values);
    }

    function remove(_id) {
      setDataSource((_dataSource) =>
        _dataSource.filter((_r) => (getValue(_r) ?? getKey(_r)) !== _id),
      );

      onChange?.(excludeVal(_id));
    }

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
          }) ?? []
        );
      });
    }, [searchDataSource, defaultDataSource, value]);

    return (
      <div
        className={classNames(selectorPrefix, className ?? '')}
        style={style ?? {}}
        // @ts-ignore
        ref={wrapperRef}
      >
        <div
          className={classNames(`${selectorPrefix}-search-bar`, searchBarClassName ?? '')}
          style={searchBarStyle ?? {}}
        >
          <SearchBar
            placeholder={placeholder ?? Intl.v('输入文字过滤选项')}
            value={kw}
            onChange={onSearchChange}
            onSearch={onSearch}
            {...(searchBarProps ?? {})}
          />
        </div>

        <div
          className={classNames(`${selectorPrefix}-body`, bodyClassName ?? '')}
          style={bodyStyle ?? {}}
        >
          {isEmpty() && empty()}

          {!isEmpty() &&
            children?.({
              value: valueToIds,
              onChange: onCheckListChange,
              searchDataSource: searchDataSource ?? [],
            })}
        </div>

        {showResult && !!value?.length && (
          <FloatingPanel
            anchors={[28, (wrapperRef?.current?.offsetHeight ?? 0) - 200].filter((t) => t >= 0)}
          >
            <div className={`${selectorPrefix}-result`}>
              <NoticeBar
                content={Intl.vHtml('共 <em>{n}</em> 条', { n: dataSource.length })}
                color="info"
              />

              <List>
                {dataSource?.map((_record, _index) => {
                  const key = getKey(_record);
                  const label = getLabel(_record);

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
                        onClick={() => remove(valueToIds?.[_index])}
                      >
                        <CloseCircleFill />
                      </div>

                      {renderResultItem?.(_record, defaultItem) ?? defaultItem}
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
