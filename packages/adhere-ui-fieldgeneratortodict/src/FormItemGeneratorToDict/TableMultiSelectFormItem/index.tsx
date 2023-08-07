import React, { FC, useEffect, useState } from 'react';

import { TableMultiSelectFormItemProps } from '../../types';
import MultiSelectFormItem from '../MultiSelectFormItem';
import TableFormItem from '../TableFormItem';

/**
 * TableMultiSelectFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TableMultiSelectFormItem: FC<TableMultiSelectFormItemProps> = ({ dataSource, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? props.value : []);

  const [selectedRows, setSelectedRows] = useState(
    props.value
      ? props.value.map((t) => dataSource.find((_item) => _item[props.rowKey || 'id'] === t))
      : [],
  );

  function renderDropdownRender() {
    const data = inputValue
      ? dataSource.filter((t) => t[props.labelKey || 'name'].indexOf(inputValue) !== -1)
      : dataSource;

    return (
      <TableFormItem
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys,
          // @ts-ignore
          selectedRows,
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys);
            setSelectedRows(selectedRows);
            props?.onChange?.(selectedRowKeys.length ? selectedRowKeys : []);
          },
        }}
        {...props}
        dataSource={data}
      />
    );
  }

  useEffect(() => {
    if (props.value) {
      setSelectedRowKeys(props.value);
      setSelectedRows(
        props.value.map((t) => dataSource.find((_item) => _item[props.rowKey || 'id'] === t)),
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
        value: t[props.rowKey || 'id'],
      }))}
    />
  );
};

export default TableMultiSelectFormItem;
