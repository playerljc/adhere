import { FC, NamedExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { CSSProperties, Context, ReactElement } from 'react';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Auto from './Auto';
import BackLayout from './BackLayout';
import { FlexContext } from './Context';
import Fixed from './Fixed';
import HorizontalFlexLayout from './HorizontalFlexLayout';
import ScrollLayout, { ScrollLayoutContext, useScrollLayout } from './ScrollLayout';
import CBLayout from './TRBLC/CBLayout';
import CBRLayout from './TRBLC/CBRLayout';
import CRBLayout from './TRBLC/CRBLayout';
import CRLayout from './TRBLC/CRLayout';
import LBCLayout from './TRBLC/LBCLayout';
import LCBLayout from './TRBLC/LCBLayout';
import LCLayout from './TRBLC/LCLayout';
import LCRBLayout from './TRBLC/LCRBLayout';
import LCRLayout from './TRBLC/LCRLayout';
import LRTCBLayout from './TRBLC/LRTCBLayout';
import LTCBLayout from './TRBLC/LTCBLayout';
import LTCLayout from './TRBLC/LTCLayout';
import TBLCRLayout from './TRBLC/TBLCRLayout';
import TCBLayout from './TRBLC/TCBLayout';
import TCBRLayout from './TRBLC/TCBRLayout';
import TCLayout from './TRBLC/TCLayout';
import TCRLayout from './TRBLC/TCRLayout';
import TLCLayout from './TRBLC/TLCLayout';
import TLRCLayout from './TRBLC/TLRCLayout';
import TRCLayout from './TRBLC/TRCLayout';
import ToolBarLayout from './ToolBarLayout';
import VerticalFlexLayout from './VerticalFlexLayout';
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
    collapseDirection?: 'L' | 'R' | 'T' | 'B';
    collapsedSize?: number | string;
    defaultCollapsible?: boolean;
    trigger?: (collapsed: boolean, defaultTrigger: ReactNode) => ReactNode;
    onCollapse?: (collapsed: boolean) => void;
}
export interface AutoProps {
    className?: string;
    style?: CSSProperties;
    autoFixed?: boolean;
    fit?: boolean;
    children?: any;
    isUseNormal?: boolean;
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
    backTitle?: ReactNode;
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
    media: ConfigProviderProps['media'];
}
export interface TBLRProps extends FixedProps {
    children: ReactNode;
}
export interface CenterProps extends AutoProps {
    children: ReactNode;
}
export interface TBLRCLayoutProps extends FlexLayoutProps {
    wrapClassName?: string;
    wrapStyle?: CSSProperties;
    tProps?: TBLRProps;
    tSplit?: ReactNode;
    bProps?: TBLRProps;
    bSplit?: ReactNode;
    lProps?: TBLRProps;
    lSplit?: ReactNode;
    rProps?: TBLRProps;
    rSplit?: ReactNode;
    cProps?: CenterProps;
    autoWrapProps?: AutoProps;
    autoInnerProps?: FlexLayoutProps;
}
export type FlexLayoutComponent = NamedExoticComponent<PropsWithoutRef<FlexLayoutProps> & RefAttributes<any>> & {
    selectorPrefix: string;
    Context: typeof FlexContext;
    Fixed: typeof Fixed;
    Auto: typeof Auto;
    HorizontalFlexLayout: typeof HorizontalFlexLayout;
    VerticalFlexLayout: typeof VerticalFlexLayout;
    ToolBarLayout: typeof ToolBarLayout;
    BackLayout: typeof BackLayout;
    ScrollLayout: typeof ScrollLayout;
    useScrollLayout: typeof useScrollLayout;
    ScrollLayoutContext: typeof ScrollLayoutContext;
    TRBLC: {
        CBLayout: typeof CBLayout;
        CBRLayout: typeof CBRLayout;
        CRBLayout: typeof CRBLayout;
        CRLayout: typeof CRLayout;
        LBCLayout: typeof LBCLayout;
        LCBLayout: typeof LCBLayout;
        LCLayout: typeof LCLayout;
        LCRLayout: typeof LCRLayout;
        LCRBLayout: typeof LCRBLayout;
        LRTCBLayout: typeof LRTCBLayout;
        LTCBLayout: typeof LTCBLayout;
        LTCLayout: typeof LTCLayout;
        TBLCRLayout: typeof TBLCRLayout;
        TCBRLayout: typeof TCBRLayout;
        TCLayout: typeof TCLayout;
        TCRLayout: typeof TCRLayout;
        TLCLayout: typeof TLCLayout;
        TLRCLayout: typeof TLRCLayout;
        TRCLayout: typeof TRCLayout;
        TCBLayout: typeof TCBLayout;
    };
};
