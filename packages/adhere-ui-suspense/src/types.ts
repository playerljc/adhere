import type { CSSProperties, ReactElement, ReactNode } from 'react';

/**
 * Suspense 组件核心接口
 */
export interface ISuspense {
  /** 数据获取方法 */
  fetchData?: fetchData;
  /** 是否显示加载状态 */
  showLoading: showLoading;
  /** 渲染内部内容 */
  renderInner: renderInner;
  /** 是否为第一次加载 */
  isFirst: boolean;
  /** 是否为第一次加载状态 */
  isFirstLoading: boolean;
  /** 第一次数据获取前的回调 */
  onFirstFetchDataBefore?: () => Promise<any>;
  /** 第一次数据获取后的回调 */
  onFirstFetchDataAfter?: (res?: any) => Promise<any>;
}

/**
 * Suspense 基础属性
 */
export interface SuspenseProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 是否重置状态 */
  reset: boolean;
  /** 首次加载时的显示内容 */
  firstLoading: ReactElement;
  /** 自定义正常加载状态的渲染函数 */
  renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
}

/**
 * Suspense 基础状态
 */
export interface SuspenseState {
  /** 加载状态 */
  loading?: boolean;
}

/**
 * 同步 Suspense 接口
 */
export interface ISuspenseSync {
  /** 是否正在加载 */
  isLoading: boolean;
  /** 重置方法 */
  reset: () => Promise<any>;
}

/**
 * 同步 Suspense 属性
 */
export interface SuspenseSyncProps extends SuspenseProps {
  /** 数据对象 */
  data: any;
  /** 判断数据是否为空 */
  isEmpty: () => boolean;
  /** 自定义空状态渲染 */
  renderEmpty?: () => ReactNode;
  /** 子组件 */
  children?: ReactNode;
}

/**
 * 同步 Suspense 状态
 */
export interface SuspenseSyncState extends SuspenseState {
  /** 加载状态 */
  loading: boolean;
}

/**
 * 异步 Suspense 属性
 */
export interface SuspenseASyncProps extends SuspenseProps {
  /** 判断数据是否为空 */
  isEmpty: () => boolean;
  /** 自定义空状态渲染 */
  renderEmpty?: () => ReactNode;
  /** 子组件 */
  children?: ReactNode;
  /** 数据获取函数 */
  fetchData?: (params?: any) => Promise<any>;
}

/**
 * 异步 Suspense 状态
 */
export interface SuspenseASyncState extends SuspenseState {
  /** 加载状态 */
  loading: boolean;
}

/**
 * 数据获取函数类型
 */
export interface fetchData {
  (params?: any): Promise<any>;
}

/**
 * 显示加载状态函数类型
 */
export interface showLoading {
  (): boolean;
}

/**
 * 渲染内部内容函数类型
 */
export interface renderInner {
  (): ReactNode;
}

/**
 * 配置提供者上下文类型
 */
export interface ConfigProviderContext {
  /** 主题配置 */
  theme?: any;
}
