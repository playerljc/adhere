import { ErrorBlock, SearchBar } from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { AutoCompleteProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-auto-complete';

/**
 * AutoComplete
 * @param className
 * @param style
 * @param searchBarProps
 * @param checkListProps
 * @param loadData
 * @param rowKey
 // * @param renderItem
 * @param labelProp
 * @param valueProp
 * @param value
 * @param onChange
 * @param renderEmpty
 * @param children
 * @constructor
 */
const AutoComplete: FC<AutoCompleteProps> = ({
  className,
  style,
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
  children,
}) => {
  const [kw, setKw] = useState<string>('');

  const [dataSource, setDataSource] = useState<any[]>([]);

  const isEmpty = () => !searchDataSource?.length;

  const empty = () => renderEmpty?.() ?? <ErrorBlock status="empty" />;

  const getKey = (record) => {
    return record[rowKey ?? 'id'];
  };

  const getValue = (record) => record[valueProp ?? 'value'];

  const getLabel = (record) => record[labelProp ?? 'label'] ?? null;

  const excludeVal = (_value: CheckListValue): CheckListValue[] =>
    value?.filter?.((_v) => _v !== _value) ?? [];

  const onSearchChange = (_v) => {
    if (!_v) {
      loadData?.('');
    }
    setKw(_v);
  };

  const onSearch = () => {
    loadData?.(kw);
  };

  const onCheckListChange = (_values) => {
    setDataSource((_dataSource) =>
      _values.map((_value) =>
        [...(searchDataSource ?? []), ..._dataSource]?.find?.(
          (_r) => (getValue(_r) ?? getKey(_r)) === _value,
        ),
      ),
    );

    onChange?.(_values);
  };

  const remove = (_id) => {
    setDataSource((_dataSource) =>
      _dataSource.filter((_r) => (getValue(_r) ?? getKey(_r)) !== _id),
    );

    onChange?.(excludeVal(_id));
  };

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
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <div className={`${selectorPrefix}-search-bar`}>
        <SearchBar
          placeholder={Intl.v('输入文字过滤选项')}
          value={kw}
          onChange={onSearchChange}
          onSearch={onSearch}
          {...(searchBarProps ?? {})}
        />
      </div>

      <div className={`${selectorPrefix}-body`}>
        {isEmpty() && empty()}

        {!isEmpty() &&
          children?.({
            value,
            onChange: onCheckListChange,
            searchDataSource: [...(searchDataSource ?? [])],
          })}
      </div>

      {!!value?.length && (
        <div className={`${selectorPrefix}-result`}>
          {dataSource?.map((_record, _index) => (
            <div key={getKey(_record)} className={`${selectorPrefix}-result-item`}>
              <div
                className={`${selectorPrefix}-result-item-close`}
                onClick={() => remove(value?.[_index])}
              >
                <CloseCircleFill />
              </div>

              {renderResultItem?.(_record) ?? <span>{getLabel(_record)}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(AutoComplete);
