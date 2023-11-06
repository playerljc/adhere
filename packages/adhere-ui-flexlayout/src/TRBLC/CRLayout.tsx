import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CRLayout
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @param ref
 * @constructor
 */
const CRLayout = memo<PropsWithoutRef<TBLRCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCLayoutProps>(
    (
      { wrapClassName, wrapStyle, rProps, rSplit, cProps, autoWrapProps, autoInnerProps, ...props },
      ref,
    ) => {
      // @ts-ignore
      const RProps = omit<TBLRProps, string>(rProps, ['children']);
      // @ts-ignore
      const CProps = omit<CenterProps, string>(cProps, ['children']);

      const classList = useMemo(
        () =>
          classNames(
            `${selectorPrefix}-trblc`,
            {
              [`${selectorPrefix}-trblc-no-autofix`]:
                cProps && 'autoFixed' in cProps && !cProps.autoFixed,
            },
            wrapClassName ?? '',
          ),
        [cProps],
      );

      return (
        <div ref={ref} className={classList} style={wrapStyle ?? {}}>
          <FlexLayout
            {...(props ?? {})}
            className={classNames(`${selectorPrefix}-cr-layout`, props?.className ?? '')}
            direction="horizontal"
          >
            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

            {rSplit}

            <Fixed {...(RProps ?? {})}>{rProps?.children}</Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

export default CRLayout;
