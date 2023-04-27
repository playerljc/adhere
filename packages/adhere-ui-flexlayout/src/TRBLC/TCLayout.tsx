import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout from '../flexlayout';
import { selectorPrefix } from '../flexlayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCLayout
 * @param tProps
 * @param cProps
 * @param props
 * @constructor
 */
const TCLayout: FC<TBLRCLayoutProps> = ({ tProps, cProps, ...props }) => {
  // @ts-ignore
  const TProps = omit<TBLRProps, string>(tProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

  return (
    <FlexLayout
      {...(props || {})}
      className={classNames(`${selectorPrefix}-tc-layout`, props?.className)}
      direction="vertical"
    >
      <Fixed {...(TProps || {})}>{tProps?.render?.()}</Fixed>
      <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
    </FlexLayout>
  );
};

export default TCLayout;
