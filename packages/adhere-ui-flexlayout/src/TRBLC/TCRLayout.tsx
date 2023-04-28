import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCRLayout
 * @param lProps
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const TCRLayout: FC<TBLRCLayoutProps> = ({
  rProps,
  tProps,
  cProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['render']);
  // @ts-ignore
  const TProps = omit<TBLRProps, string>(tProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-tcr-layout`, props?.className)}
      direction="horizontal"
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
          direction="vertical"
        >
          <Fixed {...(TProps || {})}>{tProps?.render?.()}</Fixed>
          <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
        </FlexLayout>
      </Auto>
      <Fixed {...(RProps || {})}>{rProps?.render?.()}</Fixed>
    </FlexLayout>
  );
};

export default TCRLayout;
