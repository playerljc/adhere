import { NamedExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { CSSProperties, Context, ReactElement } from 'react';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';

import Auto from './Auto';
import BackLayout from './BackLayout';
import { FlexContext } from './Context';
import Fixed from './Fixed';
import HorizontalFlexLayout from './HorizontalFlexLayout';
import ScrollLayout, { ScrollLayoutContext, useScrollLayout } from './ScrollLayout';
import SpaceAround from './SpaceAround';
import SpaceBetween from './SpaceBetween';
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

/**
 * FlexLayout 方向类型
 */
export type FlexDirection = 'vertical' | 'horizontal';

/**
 * 折叠方向类型
 */
export type CollapseDirection = 'L' | 'R' | 'T' | 'B';

/**
 * 栅格间隙类型
 */
export type GutterType = number | number[];

/**
 * FlexLayout 上下文类型
 */
export interface ContextType {
  /** 布局方向 */
  direction: FlexDirection;
  /** 栅格间隙 */
  gutter?: GutterType;
  /** 子元素 */
  children?: ReactNode[];
}

/**
 * FlexLayout 函数组件类型
 */
export interface FlexLayoutFunction<P> extends NamedExoticComponent<P> {
  Fixed: typeof Fixed;
  Auto: typeof Auto;
  Context: Context<ContextType>;
  HorizontalFlexLayout: typeof HorizontalFlexLayout;
  VerticalFlexLayout: typeof VerticalFlexLayout;
  ToolBarLayout: typeof ToolBarLayout;
  BackLayout: typeof BackLayout;
  ScrollLayout: typeof ScrollLayout;
  SpaceAround: typeof SpaceAround;
  SpaceBetween: typeof SpaceBetween;
  useScrollLayout: () => ScrollLayoutContextType;
  ScrollLayoutContext: Context<ScrollLayoutContextType>;
  selectorPrefix: string;
  TRBLC: {
    CBLayout: typeof CBLayout;
    CBRLayout: typeof CBRLayout;
    CRBLayout: typeof CRBLayout;
    CRLayout: typeof CRLayout;
    LBCLayout: typeof LBCLayout;
    LCBLayout: typeof LCBLayout;
    LCLayout: typeof LCLayout;
    LCRBLayout: typeof LCRBLayout;
    LCRLayout: typeof LCRLayout;
    LRTCBLayout: typeof LRTCBLayout;
    LTCBLayout: typeof LTCBLayout;
    LTCLayout: typeof LTCLayout;
    TBLCRLayout: typeof TBLCRLayout;
    TCBLayout: typeof TCBLayout;
    TCBRLayout: typeof TCBRLayout;
    TCLayout: typeof TCLayout;
    TCRLayout: typeof TCRLayout;
    TLCLayout: typeof TLCLayout;
    TLRCLayout: typeof TLRCLayout;
    TRCLayout: typeof TRCLayout;
  };
}

/**
 * FlexLayout 基础属性
 */
export interface FlexLayoutProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 布局方向 */
  direction?: FlexDirection;
  /** 子元素 */
  children?: ReactNode;
  /** 栅格间隙 */
  gutter?: GutterType;
}

/**
 * Fixed 组件属性
 */
export interface FixedProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 是否适应容器 */
  fit?: boolean;
  /** 子元素 */
  children?: ReactNode;
  /** 栅格跨度 (0-24) */
  span?: number;
  /** 折叠方向 */
  collapseDirection?: CollapseDirection;
  /** 折叠时的尺寸 */
  collapsedSize?: number | string;
  /** 默认是否折叠 */
  defaultCollapsible?: boolean;
  /** 自定义触发器渲染函数 */
  trigger?: (collapsed: boolean, defaultTrigger: ReactNode) => ReactNode;
  /** 折叠状态变化回调 */
  onCollapse?: (collapsed: boolean) => void;
}

/**
 * Auto 组件属性
 */
export interface AutoProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 是否自动固定 */
  autoFixed?: boolean;
  /** 是否适应容器 */
  fit?: boolean;
  /** 子元素 */
  children?: ReactNode;
  /** 是否使用普通模式 */
  isUseNormal?: boolean;
  /** 是否使用最小填充模式 */
  isUseMinFill?: boolean;
}

/**
 * 渲染函数类型
 */
export type RenderFunction = ReactNode | (() => ReactNode);

/**
 * VerticalFlexLayout 属性
 */
export interface VerticalFlexLayoutProps extends Omit<FlexLayoutProps, 'direction'> {
  /** 顶部区域类名 */
  topClassName?: string;
  /** 顶部区域样式 */
  topStyle?: CSSProperties;
  /** 右侧区域类名 */
  rightClassName?: string;
  /** 右侧区域样式 */
  rightStyle?: CSSProperties;
  /** 底部区域类名 */
  bottomClassName?: string;
  /** 底部区域样式 */
  bottomStyle?: CSSProperties;
  /** 左侧区域类名 */
  leftClassName?: string;
  /** 左侧区域样式 */
  leftStyle?: CSSProperties;
  /** 主区域类名 */
  mainClassName?: string;
  /** 主区域样式 */
  mainStyle?: CSSProperties;
  /** 主区域自动包装类名 */
  mainAutoWrapClassName?: string;
  /** 主区域自动包装样式 */
  mainAutoStyle?: CSSProperties;
  /** 主区域包装类名 */
  mainWrapClassName?: string;
  /** 主区域包装样式 */
  mainWrapStyle?: CSSProperties;
  /** 渲染顶部区域 */
  renderTop?: RenderFunction;
  /** 渲染右侧区域 */
  renderRight?: RenderFunction;
  /** 渲染底部区域 */
  renderBottom?: RenderFunction;
  /** 渲染左侧区域 */
  renderLeft?: RenderFunction;
  /** 渲染主区域 */
  renderMain?: RenderFunction;
  /** 顶部区域属性 */
  topProps?: Partial<FixedProps>;
  /** 右侧区域属性 */
  rightProps?: Partial<FixedProps>;
  /** 底部区域属性 */
  bottomProps?: Partial<FixedProps>;
  /** 左侧区域属性 */
  leftProps?: Partial<FixedProps>;
  /** 主区域属性 */
  mainProps?: Partial<AutoProps>;
  /** 主区域自动包装属性 */
  mainAutoWrapProps?: Partial<AutoProps>;
}

/**
 * HorizontalFlexLayout 属性
 */
export interface HorizontalFlexLayoutProps extends Omit<FlexLayoutProps, 'direction'> {
  /** 顶部区域类名 */
  topClassName?: string;
  /** 顶部区域样式 */
  topStyle?: CSSProperties;
  /** 右侧区域类名 */
  rightClassName?: string;
  /** 右侧区域样式 */
  rightStyle?: CSSProperties;
  /** 底部区域类名 */
  bottomClassName?: string;
  /** 底部区域样式 */
  bottomStyle?: CSSProperties;
  /** 左侧区域类名 */
  leftClassName?: string;
  /** 左侧区域样式 */
  leftStyle?: CSSProperties;
  /** 主区域类名 */
  mainClassName?: string;
  /** 主区域样式 */
  mainStyle?: CSSProperties;
  /** 主区域自动包装类名 */
  mainAutoWrapClassName?: string;
  /** 主区域自动包装样式 */
  mainAutoStyle?: CSSProperties;
  /** 主区域包装类名 */
  mainWrapClassName?: string;
  /** 主区域包装样式 */
  mainWrapStyle?: CSSProperties;
  /** 渲染顶部区域 */
  renderTop?: RenderFunction;
  /** 渲染右侧区域 */
  renderRight?: RenderFunction;
  /** 渲染底部区域 */
  renderBottom?: RenderFunction;
  /** 渲染左侧区域 */
  renderLeft?: RenderFunction;
  /** 渲染主区域 */
  renderMain?: RenderFunction;
  /** 顶部区域属性 */
  topProps?: Partial<FixedProps>;
  /** 右侧区域属性 */
  rightProps?: Partial<FixedProps>;
  /** 底部区域属性 */
  bottomProps?: Partial<FixedProps>;
  /** 左侧区域属性 */
  leftProps?: Partial<FixedProps>;
  /** 主区域属性 */
  mainProps?: Partial<AutoProps>;
  /** 主区域自动包装属性 */
  mainAutoWrapProps?: Partial<AutoProps>;
}

/**
 * ToolBarLayout 属性
 */
export interface ToolBarLayoutProps extends Omit<VerticalFlexLayoutProps, 'direction'> {
  /** 顶部工具栏项目 */
  topToolBarItems?: ReactElement[];
  /** 底部工具栏项目 */
  bottomToolBarItems?: ReactElement[];
  /** 顶部区域属性 */
  topProps?: Partial<FixedProps>;
  /** 底部区域属性 */
  bottomProps?: Partial<FixedProps>;
  /** 主区域属性 */
  mainProps?: Partial<AutoProps>;
  /** 主区域自动包装属性 */
  mainAutoWrapProps?: Partial<AutoProps>;
}

/**
 * BackLayout 属性
 */
export interface BackLayoutProps extends Omit<ToolBarLayoutProps, 'direction'> {
  /** 返回路径 */
  backPath?: string;
  /** 强制返回路径 */
  enforceBackPath?: string;
  /** 是否显示返回按钮 */
  isShowBack?: boolean;
  /** 历史对象 */
  history?: any;
  /** 返回按钮标题 */
  backTitle?: ReactNode;
}

/**
 * ScrollLayout 属性
 */
export interface ScrollLayoutProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 是否启用垂直滚动 */
  scrollY?: boolean;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * ScrollLayout 上下文类型
 */
export interface ScrollLayoutContextType {
  /** 获取元素引用 */
  getEl: () => HTMLElement | null | undefined;
}

/**
 * 获取栅格样式参数
 */
export interface GetGridStyleParams {
  /** 栅格间隙 */
  gutter?: GutterType;
  /** 子元素 */
  children?: ReactNode[];
  /** 栅格跨度 */
  span?: number | null;
  /** 布局方向 */
  direction: FlexDirection;
  /** 媒体配置 */
  media: ConfigProviderProps['media'];
}

/**
 * TBLR 属性
 */
export interface TBLRProps extends FixedProps {
  /** 子元素 */
  children: ReactNode;
}

/**
 * Center 属性
 */
export interface CenterProps extends AutoProps {
  /** 子元素 */
  children: ReactNode;
}

/**
 * TBLRC 布局属性
 */
export interface TBLRCLayoutProps extends FlexLayoutProps {
  /** 包装类名 */
  wrapClassName?: string;
  /** 包装样式 */
  wrapStyle?: CSSProperties;

  // 顶部
  /** 顶部属性 */
  tProps?: TBLRProps;
  /** 顶部分割线 */
  tSplit?: ReactNode;

  // 底部
  /** 底部属性 */
  bProps?: TBLRProps;
  /** 底部分割线 */
  bSplit?: ReactNode;

  // 左侧
  /** 左侧属性 */
  lProps?: TBLRProps;
  /** 左侧分割线 */
  lSplit?: ReactNode;

  // 右侧
  /** 右侧属性 */
  rProps?: TBLRProps;
  /** 右侧分割线 */
  rSplit?: ReactNode;

  // 中心
  /** 中心属性 */
  cProps?: CenterProps;

  /** 自动包装属性 */
  autoWrapProps?: AutoProps;
  /** 自动内部属性 */
  autoInnerProps?: FlexLayoutProps;
}

/**
 * FlexLayout 组件类型
 */
export type FlexLayoutComponent = NamedExoticComponent<
  PropsWithoutRef<FlexLayoutProps> & RefAttributes<HTMLDivElement>
> & {
  selectorPrefix: string;
  Context: typeof FlexContext;
  Fixed: typeof Fixed;
  Auto: typeof Auto;
  HorizontalFlexLayout: typeof HorizontalFlexLayout;
  VerticalFlexLayout: typeof VerticalFlexLayout;
  ToolBarLayout: typeof ToolBarLayout;
  BackLayout: typeof BackLayout;
  ScrollLayout: typeof ScrollLayout;
  SpaceAround: typeof SpaceAround;
  SpaceBetween: typeof SpaceBetween;
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
    LCRBLayout: typeof LCRBLayout;
    LCRLayout: typeof LCRLayout;
    LRTCBLayout: typeof LRTCBLayout;
    LTCBLayout: typeof LTCBLayout;
    LTCLayout: typeof LTCLayout;
    TBLCRLayout: typeof TBLCRLayout;
    TCBLayout: typeof TCBLayout;
    TCBRLayout: typeof TCBRLayout;
    TCLayout: typeof TCLayout;
    TCRLayout: typeof TCRLayout;
    TLCLayout: typeof TLCLayout;
    TLRCLayout: typeof TLRCLayout;
    TRCLayout: typeof TRCLayout;
  };
};

/**
 * SpaceBetween 组件类型
 */
export type SpaceBetweenComponent = NamedExoticComponent<InternalSpaceBetweenProps>;

/**
 * SpaceAround 组件类型
 */
export type SpaceAroundComponent = NamedExoticComponent<InternalSpaceAroundProps>;

/**
 * 内部 SpaceBetween 属性
 */
export interface InternalSpaceBetweenProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 布局方向 */
  direction: FlexLayoutProps['direction'];
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 内部 SpaceAround 属性
 */
export interface InternalSpaceAroundProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 布局方向 */
  direction: FlexLayoutProps['direction'];
  /** 子元素 */
  children?: ReactNode;
}
