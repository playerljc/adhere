import { FC, NamedExoticComponent } from 'react';
import type { CSSProperties } from 'react';

import type { TBLRCLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';

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

export interface SplitLayoutFunction<P> extends NamedExoticComponent<P> {
  TRBLC: {
    CBSplitLayout: FC<TBLRCSplitLayoutProps>;
    CBRSplitLayout: FC<TBLRCSplitLayoutProps>;
    CRBSplitLayout: FC<TBLRCSplitLayoutProps>;
    CRSplitLayout: FC<TBLRCSplitLayoutProps>;
    LBCSplitLayout: FC<TBLRCSplitLayoutProps>;
    LCBSplitLayout: FC<TBLRCSplitLayoutProps>;
    LCSplitLayout: FC<TBLRCSplitLayoutProps>;
    LCRBSplitLayout: FC<TBLRCSplitLayoutProps>;
    LRTCBSplitLayout: FC<TBLRCSplitLayoutProps>;
    LTCBSplitLayout: FC<TBLRCSplitLayoutProps>;
    LTCSplitLayout: FC<TBLRCSplitLayoutProps>;
    TBLCRSplitLayout: FC<TBLRCSplitLayoutProps>;
    TCBRSplitLayout: FC<TBLRCSplitLayoutProps>;
    TCSplitLayout: FC<TBLRCSplitLayoutProps>;
    TCRSplitLayout: FC<TBLRCSplitLayoutProps>;
    TLCSplitLayout: FC<TBLRCSplitLayoutProps>;
    TLRCSplitLayout: FC<TBLRCSplitLayoutProps>;
    TRCSplitLayout: FC<TBLRCSplitLayoutProps>;
  };
}

/**
 * TBLRCSplitLayoutProps
 */
export interface TBLRCSplitLayoutProps extends TBLRCLayoutProps {
  tSplitProps?: SplitLayoutProps;
  bSplitProps?: SplitLayoutProps;
  lSplitProps?: SplitLayoutProps;
  rSplitProps?: SplitLayoutProps;
}
