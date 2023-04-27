import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LBCLayout
 * @param lProps
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const LBCLayout: FC<TBLRCLayoutProps> = ({
  lProps,
  bProps,
  cProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-lbc-layout`, props?.className)}
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
          <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
          <Fixed {...(BProps || {})}>{bProps?.render?.()}</Fixed>
        </FlexLayout>
      </Auto>
    </FlexLayout>
  );
};

export default LBCLayout;
