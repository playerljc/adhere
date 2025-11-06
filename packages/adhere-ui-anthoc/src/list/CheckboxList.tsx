import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import Checkbox from '../checkbox';
import { CheckboxListProps, DisplayNameInternal } from '../types';
import List from './List';

const selectorPrefix = 'adhere-ui-ant-hoc-checkbox-list';

const { useTheme } = ConfigProvider;

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
  ({ wrapperClassName, wrapperStyle, value = [], onChange, options, ...props }) => {
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
      </div>
    );
  },
);

const CheckboxList = InternalCheckboxList as DisplayNameInternal<typeof InternalCheckboxList>;
CheckboxList.displayName = 'CheckboxList';

export default CheckboxList;
