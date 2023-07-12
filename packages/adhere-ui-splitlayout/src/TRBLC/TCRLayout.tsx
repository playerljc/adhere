import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCRLayout
 * @constructor
 */
const TCRLayout: FC<TBLRCSplitLayoutProps> = ({ tSplitProps, rSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.TCRLayout
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default TCRLayout;
