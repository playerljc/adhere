import React, { FC, useEffect, useState } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ListMultiSelectFormItemProps } from '../../types';
import ListFormItem from '../ListFormItem';
import MultiSelectFormItem from '../MultiSelectFormItem';

const selectorPrefix = 'adhere-ui-antdformitem';

/**
 * ListMultiSelectFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const ListMultiSelectFormItem: FC<ListMultiSelectFormItemProps> = ({ dataSource, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(props.value ? props.value : []);

  const [selectedRows, setSelectedRows] = useState<any[]>(
    props.value
      ? props.value.map((t) =>
          dataSource.find((_item) => _item[(props.rowKey as string) || 'id'] === t),
        )
      : [],
  );

  function CheckWrap(item) {
    const rowKey = props.rowKey || 'id';

    return (
      <Checkbox
        onChange={(e) => {
          e.stopPropagation();
          const checked = e.target.checked;

          if (checked) {
            setSelectedRowKeys((keys) => [...keys, item[rowKey as string]]);
            setSelectedRows((rows) => [...rows, { ...item }]);
            props?.onChange?.([...selectedRowKeys, item[rowKey as string]]);
          } else {
            setSelectedRowKeys((keys) => keys.filter((key) => key !== item[rowKey as string]));
            setSelectedRows((rows) =>
              rows.filter((row) => row[rowKey as string] !== item[rowKey as string]),
            );
            props?.onChange?.([...selectedRowKeys.filter((key) => key !== item[rowKey as string])]);
          }
        }}
        checked={selectedRowKeys.includes(item[rowKey as string])}
      />
    );
  }

  function renderDropdownRender() {
    const data = inputValue
      ? dataSource.filter((t) => t[props.labelKey || 'name'].indexOf(inputValue) !== -1)
      : dataSource;

    return (
      <ListFormItem
        {...props}
        dataSource={data}
        renderItem={(item, index) => (
          <ConditionalRender
            conditional={!!props.renderItem}
            noMatch={() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{CheckWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
              </div>
            )}
          >
            {() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{CheckWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>
                  {props?.renderItem?.(item, index)}
                </div>
              </div>
            )}
          </ConditionalRender>
        )}
      />
    );
  }

  useEffect(() => {
    if (props.value) {
      setSelectedRowKeys(props.value);
      setSelectedRows(
        props.value.map((t) =>
          dataSource.find((_item) => _item[(props.rowKey as string) || 'id'] === t),
        ),
      );
    } else {
      setSelectedRowKeys([]);
      setSelectedRows([]);
    }
  }, [props.value]);

  return (
    <MultiSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (values) => {
          props?.onChange?.(values);
        },
        filterOption: () => {
          return false;
        },
        onSearch: (inputValue) => setInputValue(inputValue),
        onBlur: () => {
          setInputValue('');
        },
        onClear: () => {
          setInputValue('');
        },
        ...(props.selectProps ?? {}),
      }}
      dataSource={dataSource.map((t) => ({
        label: t[props.labelKey || 'name'],
        value: t[(props.rowKey as string) || 'id'],
      }))}
    />
  );
};

export default ListMultiSelectFormItem;
