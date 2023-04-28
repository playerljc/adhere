import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TLCLayout
 * @param tProps
 * @param lProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const TLCLayout: FC<TBLRCLayoutProps> = ({
  tProps,
  lProps,
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
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-tlc-layout`, props?.className)}
      direction="vertical"
    >
      <Fixed {...(TProps || {})}>{tProps?.render?.()}</Fixed>

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
    </FlexLayout>
  );
};

export default TLCLayout;
