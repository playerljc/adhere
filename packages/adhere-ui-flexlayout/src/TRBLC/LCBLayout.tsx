import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LCBLayout
 * @param tProps
 * @param lProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const LCBLayout: FC<TBLRCLayoutProps> = ({
  lProps,
  cProps,
  bProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-lcb-layout`, props?.className)}
      direction="vertical"
    >
      <Auto
        {...(autoWrapProps || {})}
        fit={false}
        className={`${selectorPrefix}-trblc-layout-auto`}
      >
        <FlexLayout
          {...(autoInnerProps || {})}
          className={classNames(
            `${selectorPrefix}-trblc-layout-auto-inner`,
            autoWrapProps?.className,
          )}
          direction="horizontal"
        >
          <Fixed {...(LProps || {})}>{lProps?.render?.()}</Fixed>
          <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
        </FlexLayout>
      </Auto>

      <Fixed {...(BProps || {})}>{bProps?.render?.()}</Fixed>
    </FlexLayout>
  );
};

export default LCBLayout;
