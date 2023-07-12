import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * TCLayout
 * @constructor
 */
const TCLayout: FC<TBLRCSplitLayoutProps> = ({ tSplitProps, ...props }) => {
  return <FlexLayout.TRBLC.TCLayout {...props} tSplit={<SplitLayout {...(tSplitProps ?? {})} />} />;
};

export default TCLayout;
