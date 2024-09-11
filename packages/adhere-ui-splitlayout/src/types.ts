import type { CSSProperties, NamedExoticComponent } from 'react';

import type { TBLRCLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';

import CBSplitLayout from './TRBLC/CBLayout';
import CBRSplitLayout from './TRBLC/CBRLayout';
import CRBSplitLayout from './TRBLC/CRBLayout';
import CRSplitLayout from './TRBLC/CRLayout';
import LBCSplitLayout from './TRBLC/LBCLayout';
import LCBSplitLayout from './TRBLC/LCBLayout';
import LCSplitLayout from './TRBLC/LCLayout';
import LCRBSplitLayout from './TRBLC/LCRBLayout';
import LCRSplitLayout from './TRBLC/LCRLayout';
import LRTCBSplitLayout from './TRBLC/LRTCBLayout';
import LTCBSplitLayout from './TRBLC/LTCBLayout';
import LTCSplitLayout from './TRBLC/LTCLayout';
import TBLCRSplitLayout from './TRBLC/TBLCRLayout';
import TCBSplitLayout from './TRBLC/TCBLayout';
import TCBRSplitLayout from './TRBLC/TCBRLayout';
import TCSplitLayout from './TRBLC/TCLayout';
import TCRSplitLayout from './TRBLC/TCRLayout';
import TLCSplitLayout from './TRBLC/TLCLayout';
import TLRCSplitLayout from './TRBLC/TLRCLayout';
import TRCSplitLayout from './TRBLC/TRCLayout';

/**
 * SplitLayoutProps
 */
export interface SplitLayoutProps {
  className?: string;
  style?: CSSProperties;
  maxSize?: string | number;
  minSize?: string | number;
  onCanDrag?: (params?: any) => void;
  onDragStarted?: (params?: any) => void;
  onDragFinished?: (params?: any) => void;
  onChange?: (params?: any) => void;
  onOut?: Function;
}

export type SplitLayoutComponent = NamedExoticComponent<SplitLayoutProps> & {
  TRBLC: {
    CBSplitLayout: typeof CBSplitLayout;
    CBRSplitLayout: typeof CBRSplitLayout;
    CRBSplitLayout: typeof CRBSplitLayout;
    CRSplitLayout: typeof CRSplitLayout;
    LBCSplitLayout: typeof LBCSplitLayout;
    LCBSplitLayout: typeof LCBSplitLayout;
    LCSplitLayout: typeof LCSplitLayout;
    LCRBSplitLayout: typeof LCRBSplitLayout;
    LRTCBSplitLayout: typeof LRTCBSplitLayout;
    LTCBSplitLayout: typeof LTCBSplitLayout;
    LTCSplitLayout: typeof LTCSplitLayout;
    LCRSplitLayout: typeof LCRSplitLayout;
    TBLCRSplitLayout: typeof TBLCRSplitLayout;
    TCBRSplitLayout: typeof TCBRSplitLayout;
    TCSplitLayout: typeof TCSplitLayout;
    TCRSplitLayout: typeof TCRSplitLayout;
    TLCSplitLayout: typeof TLCSplitLayout;
    TLRCSplitLayout: typeof TLRCSplitLayout;
    TRCSplitLayout: typeof TRCSplitLayout;
    TCBSplitLayout: typeof TCBSplitLayout;
  };
};

/**
 * TBLRCSplitLayoutProps
 */
export interface TBLRCSplitLayoutProps extends TBLRCLayoutProps {
  tSplitProps?: SplitLayoutProps;
  bSplitProps?: SplitLayoutProps;
  lSplitProps?: SplitLayoutProps;
  rSplitProps?: SplitLayoutProps;
}
