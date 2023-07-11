import { FC, NamedExoticComponent, ReactNode } from 'react';
import type { CSSProperties, Context, ReactElement } from 'react';

export interface ContextType {
  direction: 'vertical' | 'horizontal';
  gutter?: number | number[];
  children?: ReactNode[];
}

export interface FlexLayoutFunction<P> extends NamedExoticComponent<P> {
  Fixed: FC<FixedProps>;
  Auto: FC<AutoProps>;
  Context: Context<ContextType>;
  HorizontalFlexLayout: FC<HorizontalFlexLayoutProps>;
  VerticalFlexLayout: FC<VerticalFlexLayoutProps>;
  ToolBarLayout: FC<ToolBarLayoutProps>;
  BackLayout: FC<BackLayoutProps>;
  ScrollLayout: FC<ScrollLayoutProps>;
  useScrollLayout: () => ScrollLayoutContextType;
  ScrollLayoutContext: Context<ScrollLayoutContextType>;
  selectorPrefix: string;
  TRBLC: {
    CBLayout: FC<TBLRCLayoutProps>;
    CBRLayout: FC<TBLRCLayoutProps>;
    CRBLayout: FC<TBLRCLayoutProps>;
    CRLayout: FC<TBLRCLayoutProps>;
    LBCLayout: FC<TBLRCLayoutProps>;
    LCBLayout: FC<TBLRCLayoutProps>;
    LCLayout: FC<TBLRCLayoutProps>;
    LCRBLayout: FC<TBLRCLayoutProps>;
    LRTCBLayout: FC<TBLRCLayoutProps>;
    LTCBLayout: FC<TBLRCLayoutProps>;
    LTCLayout: FC<TBLRCLayoutProps>;
    TBLCRLayout: FC<TBLRCLayoutProps>;
    TCBRLayout: FC<TBLRCLayoutProps>;
    TCLayout: FC<TBLRCLayoutProps>;
    TCRLayout: FC<TBLRCLayoutProps>;
    TLCLayout: FC<TBLRCLayoutProps>;
    TLRCLayout: FC<TBLRCLayoutProps>;
    TRCLayout: FC<TBLRCLayoutProps>;
  };
}

export interface FlexLayoutProps {
  className?: string;
  style?: CSSProperties;
  direction?: 'vertical' | 'horizontal';
  children?: any;
  gutter?: number | number[];
}

export interface FixedProps {
  className?: string;
  style?: CSSProperties;
  fit?: boolean;
  children?: any;
  span?: number;
}

export interface AutoProps {
  className?: string;
  style?: CSSProperties;
  autoFixed?: boolean;
  fit?: boolean;
  children?: any;
}

export interface VerticalFlexLayoutProps {
  className?: string;
  style?: CSSProperties;
  topClassName?: string;
  topStyle?: CSSProperties;
  rightClassName?: string;
  rightStyle?: CSSProperties;
  bottomClassName?: string;
  bottomStyle?: CSSProperties;
  leftClassName?: string;
  leftStyle?: CSSProperties;
  mainClassName?: string;
  mainStyle?: CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: CSSProperties;
  renderTop?: any;
  renderRight?: any;
  renderBottom?: any;
  renderLeft?: any;
  renderMain?: any;
  topProps?: FixedProps;
  rightProps?: FixedProps;
  bottomProps?: FixedProps;
  leftProps?: FixedProps;
  mainProps?: AutoProps;
  mainAutoWrapProps?: AutoProps;
  children?: any;
}

export interface HorizontalFlexLayoutProps {
  className?: string;
  style?: CSSProperties;
  topClassName?: string;
  topStyle?: CSSProperties;
  rightClassName?: string;
  rightStyle?: CSSProperties;
  bottomClassName?: string;
  bottomStyle?: CSSProperties;
  leftClassName?: string;
  leftStyle?: CSSProperties;
  mainClassName?: string;
  mainStyle?: CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: CSSProperties;
  renderTop?: any;
  renderRight?: any;
  renderBottom?: any;
  renderLeft?: any;
  renderMain?: any;
  topProps?: FixedProps;
  rightProps?: FixedProps;
  bottomProps?: FixedProps;
  leftProps?: FixedProps;
  mainProps?: AutoProps;
  mainAutoWrapProps?: AutoProps;
  children?: any;
}

export interface ToolBarLayoutProps {
  className?: string;
  style?: CSSProperties;
  topClassName?: string;
  topStyle?: CSSProperties;
  bottomClassName?: string;
  bottomStyle?: CSSProperties;
  mainClassName?: string;
  mainStyle?: CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: CSSProperties;
  topToolBarItems?: ReactElement[];
  bottomToolBarItems?: ReactElement[];
  topProps?: FixedProps;
  bottomProps?: FixedProps;
  mainProps?: AutoProps;
  mainAutoWrapProps?: AutoProps;
  children?: any;
}

export interface BackLayoutProps {
  className?: string;
  style?: CSSProperties;
  topClassName?: string;
  topStyle?: CSSProperties;
  bottomClassName?: string;
  bottomStyle?: CSSProperties;
  mainClassName?: string;
  mainStyle?: CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: CSSProperties;
  topToolBarItems?: ReactElement[];
  topProps?: FixedProps;
  bottomProps?: FixedProps;
  mainProps?: AutoProps;
  mainAutoWrapProps?: AutoProps;
  backPath?: string;
  enforceBackPath?: string;
  isShowBack?: boolean;
  history?: any;
  backTitle?: string | ReactElement;
  children?: any;
}

export interface ScrollLayoutProps {
  className?: string;
  style?: CSSProperties;
  scrollY?: boolean;
  children?: any;
}

export interface ScrollLayoutContextType {
  getEl: () => HTMLElement | null | undefined;
}

export interface getGridStyleParams {
  gutter?: number | number[];
  children?: any;
  span?: number | null;
  direction: 'vertical' | 'horizontal';
}

export interface TBLRProps extends FixedProps {
  render: () => ReactNode;
}

export interface CenterProps extends AutoProps {
  render: () => ReactNode;
}

export interface TBLRCLayoutProps extends FlexLayoutProps {
  wrapClassName?: string;
  wrapStyle?: CSSProperties;
  tProps?: TBLRProps;
  bProps?: TBLRProps;
  lProps?: TBLRProps;
  rProps?: TBLRProps;
  cProps?: CenterProps;
  autoWrapProps?: AutoProps;
  autoInnerProps?: FlexLayoutProps;
}
