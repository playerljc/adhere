import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CRBLayout
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const CRBLayout: FC<TBLRCLayoutProps> = ({
  rProps,
  cProps,
  bProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-crb-layout`, props?.className)}
      direction="vertical"
    >
      <Auto {...(autoWrapProps || {})} fit={false}>
        <FlexLayout
          {...(autoInnerProps || {})}
          className={classNames(
            `${selectorPrefix}-trblc-layout-auto-inner`,
            autoWrapProps?.className,
          )}
          direction="horizontal"
        >
          <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
          <Fixed {...(RProps || {})}>{rProps?.render?.()}</Fixed>
        </FlexLayout>
      </Auto>

      <Fixed {...(BProps || {})}>{bProps?.render?.()}</Fixed>
    </FlexLayout>
  );
};

export default CRBLayout;
