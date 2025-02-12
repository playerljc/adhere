import type { CSSProperties, ReactElement, ReactNode } from 'react';
import type { FlexLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';
import type { ScrollLoadProps } from '@baifendian/adhere-ui-scrollload/es/types';
export type Local = 'ar' | 'de' | 'en' | 'es' | 'fa' | 'fr' | 'it' | 'ja' | 'nl' | 'pl' | 'pt' | 'ru' | 'uk' | 'zh' | string;
export interface CommentProps {
    fetchCommentData?: (params?: any) => Promise<any>;
    commentDataKeys?: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    commentLimit?: number;
    commentKeyProp?: string;
    renderCommentActions?: (params?: any) => ReactNode[] | null;
    renderCommentAuthor?: (params?: any) => ReactNode | null;
    renderCommentAvatar?: (params?: any) => ReactNode | null;
    renderCommentContent?: (params?: any) => ReactNode | null;
    renderCommentDateTime?: (params?: any) => ReactNode | null;
    renderCommentLoading?: (params?: any) => ReactNode | null;
    fetchReplyData?: (params?: any) => Promise<any>;
    replyDataKeys?: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    replyLimit?: number;
    replyKeyProp?: string;
    renderReplyActions?: (params?: any) => ReactNode[] | null;
    renderReplyAuthor?: (params?: any) => ReactNode | null;
    renderReplyAvatar?: (params?: any) => ReactNode | null;
    renderReplyContent?: (params?: any) => ReactNode | null;
    renderReplyDateTime?: (params?: any) => ReactNode | null;
    renderReplyLoading?: (params?: any) => ReactNode | null;
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
    className?: string;
    style?: CSSProperties;
    isLoading?: boolean;
    hasMore?: boolean;
    onLoadMore?: (handle?: (status?: string) => void) => void;
    renderFirstLoading?: () => ReactNode | null;
    scrollLoadProps?: ScrollLoadProps;
    pages: number;
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
