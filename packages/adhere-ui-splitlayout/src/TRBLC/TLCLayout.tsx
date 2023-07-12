import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TLCLayout
 * @constructor
 */
const TLCLayout: FC<TBLRCSplitLayoutProps> = ({ tSplitProps, lSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.TLCLayout
      {...props}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
    />
  );
};

export default TLCLayout;
