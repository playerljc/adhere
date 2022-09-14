import type { CSSProperties, ReactElement } from 'react';

export interface ISuspense {
  fetchData?: fetchData;
  showLoading: showLoading;
  renderInner: renderInner;
  // 第一次
  isFirst: boolean;
  // 第一次加载
  isFirstLoading: boolean;
}

export interface SuspenseProps {
  className?: string;
  style?: CSSProperties;
  reset: boolean;
  firstLoading: ReactElement;
}

export interface SuspenseState {}

export interface ISuspenseSync {
  isLoading: boolean;
  reset: Function;
}

export interface SuspenseSyncProps extends SuspenseProps {
  data: any;
  isEmpty: () => boolean;
  renderEmpty?: Function;
  children?: any;
}

export interface SuspenseSyncState extends SuspenseState {
  loading: boolean;
}

export interface SuspenseASyncProps extends SuspenseProps {
  isEmpty: () => boolean;
  renderEmpty?: Function;
  children?: Function;
  fetchData?: Function;
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
  (): ReactElement | null;
}
