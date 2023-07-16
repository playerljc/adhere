import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../splitlayout';
import { TBLRCSplitLayoutProps } from '../types';

/**
 * CRLayout
 * @constructor
 */
const CRLayout: FC<TBLRCSplitLayoutProps> = ({ bSplitProps, rSplitProps, ...props }) => {
  return <FlexLayout.TRBLC.CRLayout {...props} rSplit={<SplitLayout {...(rSplitProps ?? {})} />} />;
};

export default CRLayout;
