import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import CheckAllWrapper from '../CheckAllWrapper';
import type { DisplayNameInternal, VerticalCheckableTagGroupProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

const { useTheme } = ConfigProvider;

/**
 * VerticalCheckAllCheckableTagGroup
 * @description 带有全选按钮的竖向VerticalCheckableTagGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalVerticalCheckAllCheckableTagGroup = memo<VerticalCheckableTagGroupProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    render,
    ...props
  }) => {
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    const CheckAllOrigin = useMemo(
      () => (
        <CheckAllWrapper
          value={props.value}
          onChange={(...arg) => props.onChange?.(...arg)}
          options={
            props?.options?.map((t) => {
              const option = t as CheckboxOptionType;

              return {
                ...option,
                label: option.label,
                value: option.value as string,
              };
            }) ?? []
          }
        />
      ),
      [props.value, props.onChange, props.options],
    );

    const ChildrenOrigin = <VerticalCheckableTagGroup {...props} mode="multiple" />;

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

const VerticalCheckAllCheckableTagGroup =
  InternalVerticalCheckAllCheckableTagGroup as DisplayNameInternal<
    typeof InternalVerticalCheckAllCheckableTagGroup
  >;
VerticalCheckAllCheckableTagGroup.displayName = 'VerticalCheckAllCheckableTagGroup';

export default VerticalCheckAllCheckableTagGroup;
