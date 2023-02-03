import React, { FC, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { Checkbox } from '../../AntFormItemNormalize';
import { ListMulitSelectFormItemProps } from '../../types';
import ListFormItem from '../ListFormItem';
import MulitSelectFormItem from '../MulitSelectFormItem';

const selectorPrefix = 'adhere-ui-antdformitem';

/**
 * ListMulitSelectFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const ListMulitSelectFormItem: FC<ListMulitSelectFormItemProps> = ({ dataSource, ...props }) => {
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
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (values) => {
          props?.onChange?.(values);
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
        value: t[(props.rowKey as string) || 'id'],
      }))}
    />
  );
};

export default ListMulitSelectFormItem;
