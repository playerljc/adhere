import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LBCLayout
 * @constructor
 */
const LBCLayout: FC<TBLRCSplitLayoutProps> = ({ bSplitProps, lSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.LBCLayout
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default LBCLayout;
