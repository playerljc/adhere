import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LRTCBLayout
 * @param tProps
 * @param lProps
 * @param rProps
 * @param cProps
 * @param bProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const LRTCBLayout: FC<TBLRCLayoutProps> = ({
  tProps,
  lProps,
  rProps,
  cProps,
  bProps,
  autoWrapProps,
  autoInnerProps,
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

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-lrtcb-layout`, props?.className)}
      direction="horizontal"
    >
      <Fixed {...(LProps || {})}>{lProps?.render?.()}</Fixed>

      <Auto {...(autoWrapProps || {})} fit={false}>
        <FlexLayout
          {...(autoInnerProps || {})}
          className={classNames(
            `${selectorPrefix}-trblc-layout-auto-inner`,
            autoWrapProps?.className,
          )}
          direction="vertical"
        >
          <Fixed {...(TProps || {})}>{tProps?.render?.()}</Fixed>
          <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
          <Fixed {...(BProps || {})}>{bProps?.render?.()}</Fixed>
        </FlexLayout>
      </Auto>
      <Fixed {...(RProps || {})}>{rProps?.render?.()}</Fixed>
    </FlexLayout>
  );
};

export default LRTCBLayout;
