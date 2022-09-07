import type { ReactNode, ReactElement, CSSProperties } from 'react';
import type { FlexLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';

export type Local =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fa'
  | 'fr'
  | 'it'
  | 'ja'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'uk'
  | 'zh'
  | string;

export interface CommentProps {
  getScrollWrapContainer?: () => HTMLElement;
  fetchCommentData?: () => Promise<any>;
  commentDataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  commentLimit?: number;
  commentKeyProp?: string;
  renderCommentActions?: () => ReactNode[] | null;
  renderCommentAuthor?: () => ReactNode | null;
  renderCommentAvatar?: () => ReactNode | null;
  renderCommentContent?: () => ReactNode | null;
  renderCommentDateTime?: () => ReactNode | null;
  renderCommentLoading?: () => ReactNode | null;

  fetchReplyData?: () => Promise<any>;
  replyDataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  replyLimit?: number;
  replyKeyProp?: string;
  renderReplyActions?: () => ReactNode[] | null;
  renderReplyAuthor?: () => ReactNode | null;
  renderReplyAvatar?: () => ReactNode | null;
  renderReplyContent?: () => ReactNode | null;
  renderReplyDateTime?: () => ReactNode | null;
  renderReplyLoading?: () => ReactNode | null;

  fetchReply?: (params?: any) => Promise<any>;
  listProps?: any;
  isMoreProp?: string;

  flexLayoutProps?: FlexLayoutProps;
  renderEmpty?: () => ReactElement | null;
  renderFirstLoading?: () => ReactNode;

  showReplyText?: string | Function;
  hideReplyText?: string | Function;
  loadMoreReplyText?: string | Function;
  showReplyTextIcon?: ReactNode | Function;
  hideReplyTextIcon?: ReactNode | Function;
  loadMoreCollapseTextIcon?: ReactNode | Function;
  local?: Local;
  emojiPickerProps?: any;
}

export interface ReplyProps {
  onCancel?: () => void;
  onResult?: (value?: string) => void;
  local?: Local;
  emojiPickerProps?: any;
}

export interface ListStandardProps {
  getScrollWrapContainer?: () => HTMLElement;
  flexLayoutProps?: FlexLayoutProps;
  listProps?: ListProps;
  limit?: number;
  renderList?: (params?: any) => ReactNode;
  renderEmpty?: () => ReactElement | null;
  renderFirstLoading?: () => ReactNode;
  fetchData?: (params?: any) => Promise<any>;
  renderLoading?: () => ReactNode | null;
  dataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
}

export interface ListProps {
  getScrollWrapContainer?: () => HTMLElement;
  className?: string;
  style?: CSSProperties;
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: Function;
  renderFirstLoading?: () => ReactNode | null;
  scrollLoadProps?: {
    className: string;
    style: CSSProperties;
    loadClassName: string;
    loadStyle: CSSProperties;
    emptyClassName: string;
    emptyStyle: CSSProperties;
    errorClassName: string;
    errorStyle: CSSProperties;
    distance: number;
    onScrollBottom: Function;
    onEmptyClick: Function;
    onErrorClick: Function;
    renderLoading: Function | undefined;
    renderEmpty: Function | undefined;
    renderError: Function | undefined;
  };
  children?: any;
}

export interface NodeProps {
  isReply?: boolean;
  data?: {
    key: string;
  };
  dataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  renderLoading?: () => ReactNode | null;
  limit?: number;
  fetchData?: (params?: any) => Promise<any> | undefined;
  fetchReply?: (params?: any) => Promise<any>;
  keyProp?: string;
  isMoreProp?: string;
  renderActions?: (params: any, callback: (data?: any) => void) => ReactNode[] | null;
  renderAuthor?: (params?: any) => ReactNode | null;
  renderAvatar?: (params?: any) => ReactNode | null;
  renderContent?: (params?: any) => ReactNode | null;
  renderDateTime?: (params?: any) => ReactNode | null;
  children?: any;
  showReplyText?: string | Function;
  hideReplyText?: string | Function;
  loadMoreReplyText?: string | Function;
  showReplyTextIcon?: ReactNode | Function;
  hideReplyTextIcon?: ReactNode | Function;
  loadMoreCollapseTextIcon?: ReactNode | Function;
  local?: Local;
  emojiPickerProps?: any;
}
