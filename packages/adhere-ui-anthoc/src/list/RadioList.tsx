import React, { memo } from 'react';
import type { FC } from 'react';

import Radio from '../radio';
import type { RadioListProps } from '../types';
import List from './List';

const selectorPrefix = 'adhere-ui-ant-hoc-radio-list';

/**
 * RadioList
 * @description 单选的List
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const RadioList: FC<RadioListProps> = ({ value, onChange, options, ...props }) => (
  <List
    dataSource={options}
    {...props}
    renderItem={(item, index) => (
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-extra`}>
          <Radio
            onChange={(e) => {
              e.stopPropagation();

              const checked = e.target.checked;

              if (checked) {
                onChange?.(item.value, []);
              }
            }}
            checked={item.value === value}
          />
        </div>

        <div className={`${selectorPrefix}-body`}>{props?.renderItem?.(item, index)}</div>
      </div>
    )}
  />
);

export default memo(RadioList);
