import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LTCBLayout
 * @param lProps
 * @param tProps
 * @param bProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const LTCBLayout: FC<TBLRCLayoutProps> = ({
  lProps,
  tProps,
  bProps,
  cProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
  // @ts-ignore
  const TProps = omit<TBLRProps, string>(tProps, ['render']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-ltcb-layout`, props?.className)}
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
    </FlexLayout>
  );
};

export default LTCBLayout;