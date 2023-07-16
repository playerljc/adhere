import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TLRCLayout
 * @constructor
 */
const TLRCLayout: FC<TBLRCSplitLayoutProps> = ({
  tSplitProps,
  lSplitProps,
  rSplitProps,
  ...props
}) => {
  return (
    <FlexLayout.TRBLC.TLRCLayout
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default TLRCLayout;
