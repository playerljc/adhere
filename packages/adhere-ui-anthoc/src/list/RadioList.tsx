import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import Radio from '../radio';
import type { DisplayNameInternal, RadioListProps } from '../types';
import List from './List';

const selectorPrefix = 'adhere-ui-ant-hoc-radio-list';

const { useTheme } = ConfigProvider;

/**
 * RadioList
 * @description 单选的List
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const InternalRadioList = memo<RadioListProps>(
  ({ wrapperClassName, wrapperStyle, value, onChange, options, ...props }) => {
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(wrapperClassName)}
        style={wrapperStyle ?? {}}
      >
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
                  checked={Object.is(item.value, value)}
                />
              </div>

              <div className={`${selectorPrefix}-body`}>{props?.renderItem?.(item, index)}</div>
            </div>
          )}
        />
      </div>
    );
  },
);

const RadioList = InternalRadioList as DisplayNameInternal<typeof InternalRadioList>;
RadioList.displayName = 'RadioList';

export default RadioList;
