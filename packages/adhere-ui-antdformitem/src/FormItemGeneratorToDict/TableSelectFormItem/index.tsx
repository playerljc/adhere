import React, { FC, useEffect, useState } from 'react';

import { TableSelectFormItemProps } from '../../types';
import SelectFormItem from '../SelectFormItem';
import TableFormItem from '../TableFormItem';

/**
 * TableSelectFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TableSelectFormItem: FC<TableSelectFormItemProps> = ({ dataSource, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(props.value ? [props.value] : []);

  const [selectedRows, setSelectedRows] = useState<any[]>(
    // @ts-ignore
    props.value ? dataSource.find((t) => t[props.rowKey || 'id'] === props.value) : [],
  );

  /**
   * renderDropdownRender
   * @return {JSX.Element}
   */
  function renderDropdownRender() {
    const data = inputValue
      ? dataSource.filter((t) => t[props.labelKey || 'name'].startsWith(inputValue))
      : dataSource;

    return (
      <TableFormItem
        rowSelection={{
          type: 'radio',
          selectedRowKeys,
          // @ts-ignore
          selectedRows,
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys);
            setSelectedRows(selectedRows);
            props?.onChange?.(selectedRowKeys.length ? selectedRowKeys[0] : '');
          },
        }}
        {...props}
        dataSource={data}
      />
    );
  }

  useEffect(() => {
    if (props.value) {
      setSelectedRowKeys([props.value]);
      setSelectedRows([dataSource.find((t) => t[props.rowKey || 'id'] === props.value)]);
    } else {
      setSelectedRowKeys([]);
      setSelectedRows([]);
    }
  }, [props.value]);

  return (
    <SelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (value) => {
          props?.onChange?.(value);
        },
        filterOption: (inputValue) => {
          setInputValue(inputValue);
          return false;
        },
        onBlur: () => {
          setInputValue('');
        },
        onClear: () => {
          setInputValue('');
        },
        ...(props.selectProps || {}),
      }}
      dataSource={dataSource.map((t) => ({
        label: t[props.labelKey || 'name'],
        value: t[props.rowKey || 'id'],
      }))}
    />
  );
};

export default TableSelectFormItem;
