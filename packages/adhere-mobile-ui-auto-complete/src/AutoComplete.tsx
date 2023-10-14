import {
  /*CheckList, */
  ErrorBlock,
  SearchBar,
} from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
// import type { CheckListItemProps } from 'antd-mobile/es/components/check-list/check-list-item';
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
  // checkListProps,
  loadData,
  searchDataSource,
  rowKey,
  labelProp,
  valueProp,
  value,
  onChange,
  // renderItem,
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
    debugger;
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

        {
          !isEmpty() &&
            children?.({
              value,
              onChange: onCheckListChange,
              searchDataSource: [...(searchDataSource ?? [])],
            })
          /*<CheckList {...(checkListProps ?? {})} value={value} onChange={onCheckListChange}>
            {(searchDataSource ?? []).map((_record, _index) => {
              let checkListItemProps: CheckListItemProps = {
                value: getValue(_record) ?? getKey(_record),
              };

              if (renderItem) {
                checkListItemProps = {
                  ...renderItem(_record, _index),
                  ...checkListItemProps,
                };
              } else {
                checkListItemProps = {
                  children: labelProp ?? <span>{getLabel(_record)}</span>,
                  ...checkListItemProps,
                };
              }

              return <CheckList.Item key={getKey(_record)} {...(checkListItemProps ?? {})} />;
            })}
          </CheckList>*/
        }
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
