import React, { FC, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { Radio } from '../../AntFormItemNormalize';
import { ListSelectFormItemProps } from '../../types';
import ListFormItem from '../ListFormItem';
import SelectFormItem from '../SelectFormItem';

const selectorPrefix = 'adhere-ui-antdformitem';

/**
 * ListSelectFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const ListSelectFormItem: FC<ListSelectFormItemProps> = ({ dataSource, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(props.value ? [props.value] : []);

  const [selectedRows, setSelectedRows] = useState<any[]>(
    // @ts-ignore
    props.value ? dataSource.find((t) => t[props.rowKey || 'id'] === props.value) : [],
  );

  function RadioWrap(item) {
    const rowKey = props.rowKey || 'id';

    return (
      <Radio
        onChange={(e) => {
          e.stopPropagation();

          const checked = e.target.checked;

          if (checked) {
            setSelectedRowKeys([item[rowKey as string]]);
            setSelectedRows([{ ...item }]);
            props?.onChange?.(item[rowKey as string]);
          }
        }}
        checked={selectedRowKeys.includes(item[rowKey as string])}
      />
    );
  }

  function renderDropdownRender() {
    const data = inputValue
      ? dataSource.filter((t) => t[props.labelKey || 'name'].startsWith(inputValue))
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
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{RadioWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>{item}</div>
              </div>
            )}
          >
            {() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{RadioWrap(item)}</div>
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
      setSelectedRowKeys([props.value]);
      setSelectedRows([
        dataSource.find((t) => t[(props.rowKey as string) || 'id'] === props.value),
      ]);
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
        value: t[(props.rowKey as string) || 'id'],
      }))}
    />
  );
};

export default ListSelectFormItem;
