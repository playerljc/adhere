import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TLRCLayout
 * @param tProps
 * @param lProps
 * @param rProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const TLRCLayout: FC<TBLRCLayoutProps> = ({
  tProps,
  lProps,
  rProps,
  cProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const TProps = omit<TBLRProps, string>(tProps, ['render']);
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-tlr-layout`, props?.className)}
      direction="vertical"
    >
      <Fixed {...(TProps || {})}>{tProps?.render?.()}</Fixed>

      <Auto {...(autoWrapProps || {})} fit={false}>
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
          <Fixed {...(RProps || {})}>{tProps?.render?.()}</Fixed>
        </FlexLayout>
      </Auto>
    </FlexLayout>
  );
};

export default TLRCLayout;
