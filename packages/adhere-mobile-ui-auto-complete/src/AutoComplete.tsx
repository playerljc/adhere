import { Typography } from 'antd';
import { ErrorBlock, FloatingPanel, List, NoticeBar, SearchBar } from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import type { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import classNames from 'classnames';
import React, { memo, useEffect, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { AutoCompleteProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-auto-complete';

const { Title, Text } = Typography;

/**
 * AutoComplete
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
const AutoComplete = memo<AutoCompleteProps>(
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

    const [dataSource, setDataSource] = useState<any[]>([]);

    function isEmpty() {
      return !searchDataSource?.length;
    }

    function empty() {
      return renderEmpty?.() ?? <ErrorBlock status="empty" />;
    }

    function getKey(record) {
      return record[rowKey ?? 'id'];
    }

    function getValue(record) {
      return record[valueProp ?? 'value'];
    }

    function getLabel(record) {
      return record[labelProp ?? 'label'] ?? null;
    }

    function excludeVal(_value: CheckListValue): CheckListValue[] {
      return value?.filter?.((_v) => _v !== _value) ?? [];
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
        targetValues.map((_value) =>
          [...(searchDataSource ?? []), ..._dataSource]?.find?.(
            (_r) => (getValue(_r) ?? getKey(_r)) === _value,
          ),
        ),
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
      setDataSource(
        (_dataSource) =>
          value?.map?.((_value) =>
            [...(searchDataSource ?? []), ..._dataSource]?.find?.(
              (_r) => (getValue(_r) ?? getKey(_r)) === _value,
            ),
          ) ?? [],
      );
    }, [searchDataSource, value]);

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
              value,
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
                        onClick={() => remove(value?.[_index])}
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

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
