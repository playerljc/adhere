import React, { FC, useEffect, useState } from 'react';

import { Checkbox, Tag } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { TagCheckAllFormItemProps } from '../../types';
import TagHorizontalFormItem from '../TagHorizontalFormItem';

const { CheckableTag } = Tag;

/**
 * TagCheckAllHorizontalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TagCheckAllHorizontalFormItem: FC<TagCheckAllFormItemProps> = ({ dataSource, ...props }) => {
  const [checkAll, setCheckAll] = useState<boolean>(
    (props.value || []).length === dataSource.length,
  );

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

  useEffect(() => {
    setCheckAll((props.value || []).length === dataSource.length);
  }, [props.value, dataSource]);

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          checked={checkAll}
          onChange={(e) => {
            if (e.target.checked) {
              props?.onChange?.(dataSource.map((t) => t.value));
            } else {
              props?.onChange?.([]);
            }
          }}
        >
          {Intl.v('全选')}
        </Checkbox>
      </div>

      <div>
        <TagHorizontalFormItem {...props} renderItem={onRenderItem} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default TagCheckAllHorizontalFormItem;
