import React, { memo } from 'react';

import Checkbox from '../checkbox';
import { CheckboxListProps, DisplayNameInternal } from '../types';
import List from './List';

const selectorPrefix = 'adhere-ui-ant-hoc-checkbox-list';

/**
 * CheckboxList
 * @description 多选的List
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const InternalCheckboxList = memo<CheckboxListProps>(
  ({ value = [], onChange, options, ...props }) => (
    <List
      dataSource={options}
      {...props}
      renderItem={(item, index) => (
        <div className={`${selectorPrefix}`}>
          <div className={`${selectorPrefix}-extra`}>
            <Checkbox
              onChange={(e, rest) => {
                e.stopPropagation();

                const checked = e.target.checked;

                if (checked) {
                  onChange?.([...(value ?? []), item.value], rest);
                } else {
                  onChange?.(
                    (value ?? []).filter((_v) => _v !== item.value),
                    rest,
                  );
                }
              }}
              checked={(value ?? []).includes(item.value)}
            />
          </div>

          <div className={`${selectorPrefix}-body`}>{props?.renderItem?.(item, index)}</div>
        </div>
      )}
    />
  ),
);

const CheckboxList = InternalCheckboxList as DisplayNameInternal<typeof InternalCheckboxList>;
CheckboxList.displayName = 'CheckboxList';

export default CheckboxList;
