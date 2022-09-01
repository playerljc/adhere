import React from 'react';
export interface ISuspense {
    fetchData?: fetchData;
    showLoading: showLoading;
    renderInner: renderInner;
    isFirst: boolean;
    isFirstLoading: boolean;
}
export interface ISuspenseProps {
    className?: string;
    style?: React.CSSProperties;
    reset: boolean;
    firstLoading: React.ReactElement;
}
export interface ISuspenseState {
}
export interface ISuspenseSync {
    isLoading: boolean;
    reset: Function;
}
export interface ISuspenseSyncProps extends ISuspenseProps {
    data: any;
    isEmpty: () => boolean;
    renderEmpty?: Function;
    children?: any;
}
export interface ISuspenseSyncState extends ISuspenseState {
    loading: boolean;
}
export interface ISuspenseASyncProps extends ISuspenseProps {
    isEmpty: () => boolean;
    renderEmpty?: Function;
    children?: Function;
    fetchData?: Function;
}
export interface ISuspenseASyncState extends ISuspenseState {
    loading: boolean;
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
