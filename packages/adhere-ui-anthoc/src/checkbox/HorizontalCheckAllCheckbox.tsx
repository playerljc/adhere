import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import CheckAllWrapper from '../CheckAllWrapper';
import type { DisplayNameInternal, HorizontalCheckAllCheckboxProps } from '../types';
import HorizontalCheckbox from './HorizontalCheckbox';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

const { useTheme } = ConfigProvider;

/**
 * HorizontalCheckAllCheckbox
 * @description 横向的可以多选的CheckboxGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalHorizontalCheckAllCheckbox = memo<HorizontalCheckAllCheckboxProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    render,
    ...props
  }) => {
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    const CheckAllOrigin = useMemo(
      () => (
        <CheckAllWrapper
          value={props.value}
          onChange={(...arg) => {
            props.onChange?.(...arg);
          }}
          options={
            props?.options?.map((t) => {
              const option = t as CheckboxOptionType;

              return {
                label: option.label,
                value: option.value as string,
              };
            }) ?? []
          }
        />
      ),
      [props.value, props.options, props.onChange],
    );

    const ChildrenOrigin = <HorizontalCheckbox {...props} />;

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={selectorPrefix}
      >
        {render?.(CheckAllOrigin, ChildrenOrigin) ?? (
          <>
            <div
              className={classNames(`${selectorPrefix}-check-all`, checkAllWrapperClassName ?? '')}
              style={checkAllWrapperStyle ?? {}}
            >
              {CheckAllOrigin}
            </div>

            <div
              className={classNames(`${selectorPrefix}-body`, dropdownWrapperClassName ?? '')}
              style={dropdownWrapperStyle ?? {}}
            >
              {ChildrenOrigin}
            </div>
          </>
        )}
      </div>
    );
  },
);

const HorizontalCheckAllCheckbox = InternalHorizontalCheckAllCheckbox as DisplayNameInternal<
  typeof InternalHorizontalCheckAllCheckbox
>;
HorizontalCheckAllCheckbox.displayName = 'HorizontalCheckAllCheckbox';

export default HorizontalCheckAllCheckbox;
