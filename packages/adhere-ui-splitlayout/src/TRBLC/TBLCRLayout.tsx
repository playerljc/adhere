import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TBLCRLayout
 * @constructor
 */
const TBLCRLayout: FC<TBLRCSplitLayoutProps> = ({
  tSplitProps,
  bSplitProps,
  lSplitProps,
  rSplitProps,
  ...props
}) => {
  return (
    <FlexLayout.TRBLC.TBLCRLayout
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default TBLCRLayout;
