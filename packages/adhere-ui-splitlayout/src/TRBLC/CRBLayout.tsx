import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CRBLayout
 * @constructor
 */
const CRBLayout: FC<TBLRCSplitLayoutProps> = ({ bSplitProps, rSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.CRBLayout
      {...props}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
    />
  );
};

export default CRBLayout;
