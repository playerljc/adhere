import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCBLayout
 * @constructor
 */
const LCBLayout: FC<TBLRCSplitLayoutProps> = ({ bSplitProps, lSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.LCBLayout
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default LCBLayout;
