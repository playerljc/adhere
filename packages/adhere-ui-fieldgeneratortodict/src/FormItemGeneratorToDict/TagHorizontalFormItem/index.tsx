import React, { FC } from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';

import { TagFormItemProps } from '../../types';

/**
 * TagHorizontalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TagHorizontalFormItem: FC<TagFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <div>
      {dataSource.map((t, _index) => {
        if (props.renderItem) {
          const res = props.renderItem({
            record: t,
            index: _index,
            value: props.value,
            onChange: props.onChange,
          });

          const Component = res.component ?? Tag;

          return (
            <Component key={t.value} {...(res.props || {})}>
              {res.children ?? t.label}
            </Component>
          );
        }

        return <Tag key={t.value}>{t.label}</Tag>;
      })}
    </div>
  );
};

export default TagHorizontalFormItem;
