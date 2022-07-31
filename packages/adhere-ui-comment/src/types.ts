import React from 'react';
import { IFlexLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';

export type ICommentProps = Partial<{
  getScrollWrapContainer: () => HTMLElement;

  fetchCommentData: () => Promise<any>;
  commentDataKeys: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  commentLimit: number;
  commentKeyProp: string;
  renderCommentActions: () => React.ReactNode[] | null;
  renderCommentAuthor: () => React.ReactNode | null;
  renderCommentAvatar: () => React.ReactNode | null;
  renderCommentContent: () => React.ReactNode | null;
  renderCommentDateTime: () => React.ReactNode | null;
  renderCommentLoading: () => React.ReactNode | null;

  fetchReplyData: () => Promise<any>;
  replyDataKeys: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  replyLimit: number;
  replyKeyProp: string;
  renderReplyActions: () => React.ReactNode[] | null;
  renderReplyAuthor: () => React.ReactNode | null;
  renderReplyAvatar: () => React.ReactNode | null;
  renderReplyContent: () => React.ReactNode | null;
  renderReplyDateTime: () => React.ReactNode | null;
  renderReplyLoading: () => React.ReactNode | null;

  fetchReply: (params?: any) => Promise<any>;
  listProps: any;
  isMoreProp: string;

  flexLayoutProps: IFlexLayoutProps;
  renderEmpty: () => React.ReactElement | null;
  renderFirstLoading: () => React.ReactNode;

  showReplyText: string | Function;
  hideReplyText: string | Function;
  loadMoreReplyText: string | Function;
  showReplyTextIcon: React.ReactNode | Function;
  hideReplyTextIcon: React.ReactNode | Function;
  loadMoreCollapseTextIcon: React.ReactNode | Function;
}>;

export type IReplyProps = Partial<{
  onCancel: Function;
  onResult: Function;
}>;

export type IListStandardProps = Partial<{
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

export type IListProps = Partial<{
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

export interface INodeCommonProps {}

export type INodeProps = Partial<{
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
  children: Function;

  showReplyText: string | Function;
  hideReplyText: string | Function;
  loadMoreReplyText: string | Function;
  showReplyTextIcon: React.ReactNode | Function;
  hideReplyTextIcon: React.ReactNode | Function;
  loadMoreCollapseTextIcon: React.ReactNode | Function;
}>;