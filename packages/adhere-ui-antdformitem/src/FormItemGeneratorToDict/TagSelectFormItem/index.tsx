import React, { FC, useState } from 'react';

import { Tag } from '../../AntFormItemNormalize';
import { TagSelectFormItemProps } from '../../types';
import SelectFormItem from '../SelectFormItem';
import TagVerticalFormItem from '../TagVerticalFormItem';

const { CheckableTag } = Tag;

/**
 * TagSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const TagSelectFormItem: FC<TagSelectFormItemProps> = (props) => {
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
          checked: props.value == record.value,
          onChange: (checked) => {
            props?.onChange?.(checked ? record.value : '');
          },
        },
        component: CheckableTag,
        children: record?.label,
      };
    };

    return <TagVerticalFormItem {...props} dataSource={data} renderItem={onRenderItem} />;
  }

  return (
    <SelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (value) => {
          props?.onChange?.(value);
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
