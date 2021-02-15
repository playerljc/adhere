import React from 'react';

export interface ISuspenseProps {
  reset: boolean;
}

export interface ISuspenseState {
  // 第一次
  isFirst: boolean;

  // 第一次加载
  isFirstLoading: boolean;
}

export interface fetchData {
  (): any;
}

export interface showLoading {
  (): boolean;
}

export interface renderInner {
  (): React.ReactElement | null;
}

export interface ISuspense {
  fetchData: fetchData;
  showLoading: showLoading;
  renderInner: renderInner;
}
