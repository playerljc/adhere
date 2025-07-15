import type { CSSProperties, ReactElement, ReactNode } from 'react';

import type { FlexLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';
import type { ScrollLoadProps } from '@baifendian/adhere-ui-scrollload/es/types';

/**
 * 支持的语言类型
 */
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

/**
 * 数据键名配置
 */
export interface DataKeys {
  /** 当前页码 */
  current: string;
  /** 总页数 */
  totalPage: string;
  /** 列表数据 */
  list: string;
  /** 总数量 */
  totalCount: string;
}

/**
 * 分页参数
 */
export interface PagingParams {
  /** 页码 */
  page: number;
  /** 每页数量 */
  limit: number;
}

/**
 * 评论数据项
 */
export interface CommentDataItem {
  /** 唯一标识 */
  id: string;
  /** 作者信息 */
  author?: string;
  /** 头像 */
  avatar?: string;
  /** 内容 */
  content?: string;
  /** 时间 */
  datetime?: string;
  /** 是否有更多回复 */
  isMore?: boolean;
  /** 其他属性 */
  [key: string]: any;
}

/**
 * 评论列表数据
 */
export interface CommentListData {
  /** 当前页码 */
  current: number;
  /** 总页数 */
  totalPage: number;
  /** 评论列表 */
  list: CommentDataItem[];
  /** 总数量 */
  totalCount: number;
}

/**
 * 获取评论数据的参数
 */
export interface FetchCommentParams extends PagingParams {
  /** 其他参数 */
  [key: string]: any;
}

/**
 * 获取回复数据的参数
 */
export interface FetchReplyParams extends PagingParams {
  /** 评论记录 */
  record: CommentDataItem;
  /** 其他参数 */
  [key: string]: any;
}

/**
 * 提交回复的参数
 */
export interface SubmitReplyParams {
  /** 评论ID */
  id: string;
  /** 评论记录 */
  record: CommentDataItem;
  /** 回复内容 */
  reply: string;
}

/**
 * 渲染函数参数
 */
export interface RenderParams {
  /** 数据项 */
  data: CommentDataItem;
  /** 其他参数 */
  [key: string]: any;
}

/**
 * 表情选择器属性
 */
export interface EmojiPickerProps {
  /** 表情选择器配置 */
  [key: string]: any;
}

/**
 * 评论组件属性
 */
export interface CommentProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 获取评论数据的函数 */
  fetchCommentData?: (params?: FetchCommentParams) => Promise<CommentListData>;
  /** 评论数据键名配置 */
  commentDataKeys?: DataKeys;
  /** 评论每页数量限制 */
  commentLimit?: number;
  /** 评论唯一标识属性名 */
  commentKeyProp?: string;
  /** 渲染评论操作按钮 */
  renderCommentActions?: (params: RenderParams) => ReactNode[] | null;
  /** 渲染评论作者 */
  renderCommentAuthor?: (params: RenderParams) => ReactNode | null;
  /** 渲染评论头像 */
  renderCommentAvatar?: (params: RenderParams) => ReactNode | null;
  /** 渲染评论内容 */
  renderCommentContent?: (params: RenderParams) => ReactNode | null;
  /** 渲染评论时间 */
  renderCommentDateTime?: (params: RenderParams) => ReactNode | null;
  /** 渲染评论加载状态 */
  renderCommentLoading?: () => ReactNode | null;
  /** 获取回复数据的函数 */
  fetchReplyData?: (params?: FetchReplyParams) => Promise<CommentListData>;
  /** 回复数据键名配置 */
  replyDataKeys?: DataKeys;
  /** 回复每页数量限制 */
  replyLimit?: number;
  /** 回复唯一标识属性名 */
  replyKeyProp?: string;
  /** 渲染回复操作按钮 */
  renderReplyActions?: (params: RenderParams) => ReactNode[] | null;
  /** 渲染回复作者 */
  renderReplyAuthor?: (params: RenderParams) => ReactNode | null;
  /** 渲染回复头像 */
  renderReplyAvatar?: (params: RenderParams) => ReactNode | null;
  /** 渲染回复内容 */
  renderReplyContent?: (params: RenderParams) => ReactNode | null;
  /** 渲染回复时间 */
  renderReplyDateTime?: (params: RenderParams) => ReactNode | null;
  /** 渲染回复加载状态 */
  renderReplyLoading?: () => ReactNode | null;
  /** 提交回复的函数 */
  fetchReply?: (params: SubmitReplyParams) => Promise<any>;
  /** 列表组件属性 */
  listProps?: ListProps;
  /** 是否有更多回复的属性名 */
  isMoreProp?: string;
  /** 弹性布局属性 */
  flexLayoutProps?: FlexLayoutProps;
  /** 渲染空状态 */
  renderEmpty?: () => ReactElement | null;
  /** 渲染首次加载状态 */
  renderFirstLoading?: () => ReactNode;
  /** 显示回复文本 */
  showReplyText?: string | (() => string);
  /** 隐藏回复文本 */
  hideReplyText?: string | (() => string);
  /** 加载更多回复文本 */
  loadMoreReplyText?: string | (() => string);
  /** 显示回复图标 */
  showReplyTextIcon?: ReactNode | (() => ReactNode);
  /** 隐藏回复图标 */
  hideReplyTextIcon?: ReactNode | (() => ReactNode);
  /** 加载更多回复图标 */
  loadMoreCollapseTextIcon?: ReactNode | (() => ReactNode);
  /** 语言设置 */
  local?: Local;
  /** 表情选择器属性 */
  emojiPickerProps?: EmojiPickerProps;
}

/**
 * 回复组件属性
 */
export interface ReplyProps {
  /** 取消回调 */
  onCancel?: () => void;
  /** 提交结果回调 */
  onResult?: (value: string) => void;
  /** 语言设置 */
  local?: Local;
  /** 表情选择器属性 */
  emojiPickerProps?: EmojiPickerProps;
}

/**
 * 列表标准组件属性
 */
export interface ListStandardProps {
  /** 弹性布局属性 */
  flexLayoutProps?: FlexLayoutProps;
  /** 列表组件属性 */
  listProps?: ListProps;
  /** 每页数量限制 */
  limit?: number;
  /** 渲染列表函数 */
  renderList?: (data: CommentListData) => ReactNode;
  /** 渲染空状态 */
  renderEmpty?: () => ReactElement | null;
  /** 渲染首次加载状态 */
  renderFirstLoading?: () => ReactNode;
  /** 获取数据函数 */
  fetchData?: (params: PagingParams) => Promise<CommentListData>;
  /** 渲染加载状态 */
  renderLoading?: () => ReactNode | null;
  /** 数据键名配置 */
  dataKeys?: DataKeys;
}

/**
 * 列表组件属性
 */
export interface ListProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 是否正在加载 */
  isLoading?: boolean;
  /** 是否有更多数据 */
  hasMore?: boolean;
  /** 加载更多回调 */
  onLoadMore?: (handle?: (status?: string) => void) => void;
  /** 渲染首次加载状态 */
  renderFirstLoading?: () => ReactNode | null;
  /** 滚动加载属性 */
  scrollLoadProps?: ScrollLoadProps;
  /** 总页数 */
  pages: number;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 节点组件属性
 */
export interface NodeProps {
  /** 是否为回复节点 */
  isReply?: boolean;
  /** 数据项 */
  data?: CommentDataItem;
  /** 数据键名配置 */
  dataKeys?: DataKeys;
  /** 渲染加载状态 */
  renderLoading?: () => ReactNode | null;
  /** 每页数量限制 */
  limit?: number;
  /** 获取数据函数 */
  fetchData?: (params: FetchReplyParams) => Promise<CommentListData> | undefined;
  /** 提交回复函数 */
  fetchReply?: (params: SubmitReplyParams) => Promise<any>;
  /** 唯一标识属性名 */
  keyProp?: string;
  /** 是否有更多回复的属性名 */
  isMoreProp?: string;
  /** 渲染操作按钮 */
  renderActions?: (params: RenderParams, callback: (data?: CommentDataItem) => void) => ReactNode[] | null;
  /** 渲染作者 */
  renderAuthor?: (params: RenderParams) => ReactNode | null;
  /** 渲染头像 */
  renderAvatar?: (params: RenderParams) => ReactNode | null;
  /** 渲染内容 */
  renderContent?: (params: RenderParams) => ReactNode | null;
  /** 渲染时间 */
  renderDateTime?: (params: RenderParams) => ReactNode | null;
  /** 子元素渲染函数 */
  children?: (record: CommentDataItem) => ReactNode;
  /** 显示回复文本 */
  showReplyText?: string | (() => string);
  /** 隐藏回复文本 */
  hideReplyText?: string | (() => string);
  /** 加载更多回复文本 */
  loadMoreReplyText?: string | (() => string);
  /** 显示回复图标 */
  showReplyTextIcon?: ReactNode | (() => ReactNode);
  /** 隐藏回复图标 */
  hideReplyTextIcon?: ReactNode | (() => ReactNode);
  /** 加载更多回复图标 */
  loadMoreCollapseTextIcon?: ReactNode | (() => ReactNode);
  /** 语言设置 */
  local?: Local;
  /** 表情选择器属性 */
  emojiPickerProps?: EmojiPickerProps;
}
