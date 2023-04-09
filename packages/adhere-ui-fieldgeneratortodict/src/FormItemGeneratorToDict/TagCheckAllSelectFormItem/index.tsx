import React, { FC, useEffect, useState } from 'react';

import { Checkbox, Tag } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { RadioSelectFormItemProps } from '../../types';
import MulitSelectFormItem from '../MulitSelectFormItem';
import TagVerticalFormItem from '../TagVerticalFormItem';

const { CheckableTag } = Tag;

/**
 * TagSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const TagSelectFormItem: FC<RadioSelectFormItemProps> = (props) => {
  const [inputValue, setInputValue] = useState('');

  const [checkAll, setCheckAll] = useState(props.value.length === props.dataSource.length);

  /**
   * renderDropdownRender
   * @return {JSX.Element}
   */
  function renderDropdownRender() {
    const data = inputValue
      ? props.dataSource.filter((t) => t.label.indexOf(inputValue) !== -1)
      : props.dataSource;

    const onRenderItem = (params) => {
      const { record } = params;

      return {
        props: {
          checked: (props.value || []).includes(record.value),
          onChange: (checked) => {
            let _values = [...(props.value || [])];

            if (checked) {
              _values = [..._values, record.value];
            } else {
              _values = _values.filter((t) => t !== record.value);
            }

            props?.onChange?.(_values);
            // setCheckAll(_values.length === (props.dataSource || []).length);
          },
        },
        component: CheckableTag,
        children: record?.label,
      };
    };

    return (
      <div>
        <div>
          <Checkbox
            style={{ marginLeft: 10 }}
            checked={checkAll}
            onChange={(e) => {
              if (e.target.checked) {
                props?.onChange?.(props.dataSource.map((t) => t.value));
                setCheckAll(true);
              } else {
                props?.onChange?.([]);
                setCheckAll(false);
              }
            }}
          >
            {Intl.v('全选')}
          </Checkbox>
        </div>

        <div>
          <TagVerticalFormItem {...props} dataSource={data} renderItem={onRenderItem} />
        </div>
      </div>
    );
  }

  useEffect(() => {
    setCheckAll(props.value.length === props.dataSource.length);
  }, [props.value, props.dataSource]);

  return (
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        // @ts-ignore
        onChange: (values) => {
          props?.onChange?.(values);
          setCheckAll(values.length === (props.dataSource || []).length);
        },
        filterOption: () => false,
        onSearch: (inputValue) => setInputValue(inputValue),
        onBlur: () => {
          setInputValue('');
        },
        onClear: () => {
          setInputValue('');
        },
        ...(props.selectProps || {}),
      }}
      dataSource={props.dataSource}
    />
  );
};

export default TagSelectFormItem;
