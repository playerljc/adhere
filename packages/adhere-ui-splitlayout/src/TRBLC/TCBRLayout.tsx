import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCBRLayout
 * @constructor
 */
const TCBRLayout: FC<TBLRCSplitLayoutProps> = ({
  tSplitProps,
  bSplitProps,
  rSplitProps,
  ...props
}) => {
  return (
    <FlexLayout.TRBLC.TCBRLayout
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default TCBRLayout;
