import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CBLayout
 * @param bProps
 * @param cProps
 * @param props
 * @constructor
 */
const CBLayout: FC<TBLRCLayoutProps> = ({ bProps, cProps, ...props }) => {
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-cb-layout`, props?.className)}
      direction="vertical"
    >
      <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
      <Fixed {...(BProps || {})}>{bProps?.render?.()}</Fixed>
    </FlexLayout>
  );
};

export default CBLayout;
