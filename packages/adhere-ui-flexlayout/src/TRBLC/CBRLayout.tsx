import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CBRLayout
 * @param lProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @param ref
 * @constructor
 */
const CBRLayout = memo<PropsWithoutRef<TBLRCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        rProps,
        rSplit,
        bProps,
        bSplit,
        cProps,
        ...props
      },
      ref,
    ) => {
      // @ts-ignore
      const RProps = omit<TBLRProps, string>(rProps, ['children']);
      // @ts-ignore
      const BProps = omit<TBLRProps, string>(bProps, ['children']);
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

      const autoWrapClassList = useMemo(
        () =>
          classNames(
            `${selectorPrefix}-trblc-auto`,
            {
              [`${selectorPrefix}-trblc-auto-no-autofix`]:
                autoWrapProps && 'autoFixed' in autoWrapProps && !autoWrapProps.autoFixed,
            },
            autoWrapProps?.className ?? '',
          ),
        [autoWrapProps],
      );

      const autoInnerClassList = useMemo(
        () =>
          classNames(
            `${selectorPrefix}-trblc-auto-inner`,
            {
              [`${selectorPrefix}-trblc-auto-inner-no-autofix`]:
                autoInnerProps && 'autoFixed' in autoInnerProps && !autoInnerProps.autoFixed,
            },
            autoInnerProps?.className ?? '',
          ),
        [autoInnerProps],
      );

      return (
        <div ref={ref} className={classList} style={wrapStyle ?? {}}>
          <FlexLayout
            {...(props ?? {})}
            className={classNames(`${selectorPrefix}-cbr-layout`, props?.className ?? '')}
            direction="horizontal"
          >
            <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
              <FlexLayout
                {...(autoInnerProps ?? {})}
                className={autoInnerClassList}
                direction="vertical"
              >
                <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

                {bSplit}

                <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
              </FlexLayout>
            </Auto>

            {rSplit}

            <Fixed {...(RProps ?? {})}>{rProps?.children}</Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

CBRLayout.displayName = 'CBRLayout';

export default CBRLayout;
