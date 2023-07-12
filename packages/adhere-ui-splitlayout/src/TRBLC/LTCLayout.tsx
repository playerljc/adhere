import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LTCLayout
 * @constructor
 */
const LTCLayout: FC<TBLRCSplitLayoutProps> = ({ lSplitProps, tSplitProps, ...props }) => {
  return (
    <FlexLayout.TRBLC.LTCLayout
      {...props}
      lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
    />
  );
};

export default LTCLayout;
