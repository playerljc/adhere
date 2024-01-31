import type { CSSProperties, ReactElement, ReactNode } from 'react';

export interface ISuspense {
  fetchData?: fetchData;
  showLoading: showLoading;
  renderInner: renderInner;
  // 第一次
  isFirst: boolean;
  // 第一次加载
  isFirstLoading: boolean;
  onFirstFetchDataBefore?: () => Promise<any>;
  onFirstFetchDataAfter?: (res?: any) => Promise<any>;
}

export interface SuspenseProps {
  className?: string;
  style?: CSSProperties;
  reset: boolean;
  firstLoading: ReactElement;
  renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
}

export interface SuspenseState {}

export interface ISuspenseSync {
  isLoading: boolean;
  reset: () => Promise<any>;
}

export interface SuspenseSyncProps extends SuspenseProps {
  data: any;
  isEmpty: () => boolean;
  renderEmpty?: () => ReactNode;
  children?: any;
}

export interface SuspenseSyncState extends SuspenseState {
  loading: boolean;
}

export interface SuspenseASyncProps extends SuspenseProps {
  isEmpty: () => boolean;
  renderEmpty?: () => ReactNode;
  children?: ReactNode;
  fetchData?: (params?: any) => Promise<any>;
}

export interface SuspenseASyncState extends SuspenseState {
  loading: boolean;
}

export interface fetchData {
  (): any;
}

export interface showLoading {
  (): boolean;
}

export interface renderInner {
  (): ReactNode;
}
