import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TBLCRLayout
 * @param wrapClassName
 * @param wrapStyle
 * @param tProps
 * @param tSplit
 * @param lProps
 * @param lSplit
 * @param rProps
 * @param cProps
 * @param bProps
 * @param autoWrapProps
 * @param rSplit
 * @param autoInnerProps
 * @param bSplit
 * @param props
 * @param ref
 * @constructor
 */
const TBLCRLayout = memo<PropsWithoutRef<TBLRCLayoutProps> & RefAttributes<HTMLDivElement>>(
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
        bProps,
        bSplit,
        ...props
      },
      ref,
    ) => {
      // @ts-ignore
      const TProps = omit<TBLRProps, string>(tProps, ['children']);
      // @ts-ignore
      const BProps = omit<TBLRProps, string>(bProps, ['children']);
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
            className={classNames(`${selectorPrefix}-tblcr-layout`, props?.className ?? '')}
            direction="vertical"
          >
            <Fixed {...(TProps ?? {})}>{tProps?.children}</Fixed>

            {tSplit}

            <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
              <FlexLayout
                {...(autoInnerProps ?? {})}
                className={autoInnerClassList}
                direction="horizontal"
              >
                <Fixed {...(LProps ?? {})}>{lProps?.children}</Fixed>

                {lSplit}

                <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

                {rSplit}

                <Fixed {...(RProps ?? {})}>{rProps?.children}</Fixed>
              </FlexLayout>
            </Auto>

            {bSplit}

            <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

TBLCRLayout.displayName = 'TBLCRLayout';

export default TBLCRLayout;
