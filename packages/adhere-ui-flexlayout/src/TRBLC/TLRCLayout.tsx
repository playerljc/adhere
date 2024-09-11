import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TLRCLayout
 * @param wrapClassName
 * @param wrapStyle
 * @param tProps
 * @param tSplit
 * @param lProps
 * @param lSplit
 * @param rProps
 * @param cProps
 * @param autoWrapProps
 * @param rSplit
 * @param autoInnerProps
 * @param props
 * @param ref
 * @constructor
 */
const TLRCLayout = memo<PropsWithoutRef<TBLRCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        tProps,
        tSplit,
        lProps,
        lSplit,
        rProps,
        rSplit,
        cProps,
        ...props
      },
      ref,
    ) => {
      // @ts-ignore
      const TProps = omit<TBLRProps, string>(tProps, ['children']);
      // @ts-ignore
      const LProps = omit<TBLRProps, string>(lProps, ['children']);
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
            `${selectorPrefix}-horizontal-flex-layout`,
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
            className={classNames(`${selectorPrefix}-tlr-layout`, props?.className ?? '')}
            direction="vertical"
          >
            <Fixed collapseDirection="T" {...(TProps ?? {})}>
              {tProps?.children}
            </Fixed>

            {tSplit}

            <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
              <FlexLayout
                {...(autoInnerProps ?? {})}
                className={autoInnerClassList}
                direction="horizontal"
              >
                <Fixed collapseDirection="L" {...(LProps ?? {})}>
                  {lProps?.children}
                </Fixed>

                {lSplit}

                <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

                {tSplit}

                <Fixed collapseDirection="R" {...(RProps ?? {})}>
                  {tProps?.children}
                </Fixed>
              </FlexLayout>
            </Auto>
          </FlexLayout>
        </div>
      );
    },
  ),
);

TLRCLayout.displayName = 'TLRCLayout';

export default TLRCLayout;
