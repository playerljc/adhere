import React from 'react';
import { IFlexLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';
export declare type IYgCommentProps = Partial<{
    getScrollWrapContainer: () => HTMLElement;
    fetchData: () => Promise<any>;
    fetchReply: (params?: any) => Promise<any>;
    dataKeys: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    limit: number;
    listProps: any;
    keyProp: string;
    isMoreProp: string;
    renderActions: () => React.ReactNode[] | null;
    renderAuthor: () => React.ReactNode | null;
    renderAvatar: () => React.ReactNode | null;
    renderContent: () => React.ReactNode | null;
    renderDateTime: () => React.ReactNode | null;
}>;
export declare type IReplyProps = Partial<{
    onCancel: Function;
    onResult: Function;
}>;
export declare type IListStandardProps = Partial<{
    getScrollWrapContainer: () => HTMLElement;
    flexLayoutProps: IFlexLayoutProps;
    listProps: IListProps;
    limit: number;
    renderList: (params: any) => React.ReactNode;
    renderEmpty: () => React.ReactElement | null;
    renderFirstLoading: () => React.ReactNode;
    fetchData: (params: any) => Promise<any>;
    renderLoading: () => React.ReactNode | null;
    dataKeys: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
}>;
export declare type IListProps = Partial<{
    getScrollWrapContainer: () => HTMLElement;
    className: string;
    style: React.CSSProperties;
    isLoading: boolean;
    hasMore: boolean;
    onLoadMore: Function;
    renderFirstLoading: () => React.ReactNode | null;
    scrollLoadProps: {
        className: string;
        style: React.CSSProperties;
        loadClassName: string;
        loadStyle: React.CSSProperties;
        emptyClassName: string;
        emptyStyle: React.CSSProperties;
        errorClassName: string;
        errorStyle: React.CSSProperties;
        distance: number;
        onScrollBottom: Function;
        onEmptyClick: Function;
        onErrorClick: Function;
        renderLoading: Function | undefined;
        renderEmpty: Function | undefined;
        renderError: Function | undefined;
    };
    children: React.ReactNode;
}>;
export declare type ICommitProps = Partial<{
    isReply: boolean;
    data: {
        key: string;
    };
    dataKeys: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    renderLoading: () => React.ReactNode | null;
    limit: number;
    fetchData: (params: any) => Promise<any>;
    fetchReply: (params: any) => Promise<any>;
    keyProp: string;
    isMoreProp: string;
    renderActions: (params: any) => React.ReactNode[] | null;
    renderAuthor: (params: any) => React.ReactNode | null;
    renderAvatar: (params: any) => React.ReactNode | null;
    renderContent: (params: any) => React.ReactNode | null;
    renderDateTime: (params: any) => React.ReactNode | null;
}>;
