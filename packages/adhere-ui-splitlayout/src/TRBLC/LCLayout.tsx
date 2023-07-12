import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * LCLayout
 * @constructor
 */
const LCLayout: FC<TBLRCSplitLayoutProps> = ({ lSplitProps, ...props }) => {
  return <FlexLayout.TRBLC.LCLayout {...props} lSplit={<SplitLayout {...(lSplitProps ?? {})} />} />;
};

export default LCLayout;
