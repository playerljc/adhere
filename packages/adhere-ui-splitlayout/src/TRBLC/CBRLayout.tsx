import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CBRLayout
 * @constructor
 */
const CBRLayout: FC<TBLRCSplitLayoutProps> = ({ bSplitProps, rSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.CBRLayout
      {...props}
      bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
    />
  );
};

export default CBRLayout;
