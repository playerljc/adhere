import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

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
 * @constructor
 */
const TBLCRLayout: FC<TBLRCLayoutProps> = ({
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
}) => {
  // @ts-ignore
  const TProps = omit<TBLRProps, string>(tProps, ['render']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

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
    <div className={classList} style={wrapStyle ?? {}}>
      <FlexLayout
        {...(props ?? {})}
        className={classNames(`${selectorPrefix}-tblcr-layout`, props?.className ?? '')}
        direction="vertical"
      >
        <Fixed {...(TProps ?? {})}>{tProps?.render?.()}</Fixed>

        {tSplit}

        <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
          <FlexLayout
            {...(autoInnerProps ?? {})}
            className={autoInnerClassList}
            direction="horizontal"
          >
            <Fixed {...(LProps ?? {})}>{lProps?.render?.()}</Fixed>

            {lSplit}

            <Auto {...(CProps ?? {})}>{cProps?.render?.()}</Auto>

            {rSplit}

            <Fixed {...(RProps ?? {})}>{rProps?.render?.()}</Fixed>
          </FlexLayout>
        </Auto>

        {bSplit}

        <Fixed {...(BProps ?? {})}>{bProps?.render?.()}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default TBLCRLayout;
