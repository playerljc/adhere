import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CBLayout
 * @constructor
 */
const CBLayout: FC<TBLRCSplitLayoutProps> = ({ bSplitProps, ...props }) => {
  return <FlexLayout.TRBLC.CBLayout {...props} bSplit={<SplitLayout {...(bSplitProps ?? {})} />} />;
};

export default CBLayout;
