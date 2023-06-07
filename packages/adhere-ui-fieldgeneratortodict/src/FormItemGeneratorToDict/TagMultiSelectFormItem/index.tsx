import React, { FC, useState } from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';

import { TagSelectFormItemProps } from '../../types';
import MulitSelectFormItem from '../MulitSelectFormItem';
import TagVerticalFormItem from '../TagVerticalFormItem';

const { CheckableTag } = Tag;

/**
 * TagMultiSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const TagMultiSelectFormItem: FC<TagSelectFormItemProps> = (props) => {
  const [inputValue, setInputValue] = useState('');

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
          },
        },
        component: CheckableTag,
        children: record?.label,
      };
    };

    return <TagVerticalFormItem {...props} dataSource={data} renderItem={onRenderItem} />;
  }

  return (
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (values) => {
          props?.onChange?.(values);
        },
        filterOption: () => false,
        onSearch: (inputValue) => setInputValue(inputValue),
        onBlur: () => {
          setInputValue('');
        },
        onClear: () => {
          setInputValue('');
        },
        ...(props.selectProps ?? {}),
      }}
      dataSource={props.dataSource}
    />
  );
};

export default TagMultiSelectFormItem;
