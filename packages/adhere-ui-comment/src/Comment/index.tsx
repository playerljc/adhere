import { Spin } from 'antd';
import classNames from 'classnames';
import React, { memo, useCallback, useRef } from 'react';

import {
  CaretDownOutlined,
  CaretUpOutlined,
  EnterOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import ReplyInfo from '../Reply/Info';
import type { CommentProps, CommentListData, CommentDataItem, RenderParams } from '../types';
import CommentInfo from './Info';
import ListStandard from './ListStandard';

const selectorPrefix = 'adhere-ui-comment';

const { useTheme } = ConfigProvider;

/**
 * 默认数据键名配置
 */
const DEFAULT_COMMENT_DATA_KEYS = {
  current: 'current',
  totalPage: 'totalPage',
  list: 'list',
  totalCount: 'totalCount',
} as const;

/**
 * 默认回复数据键名配置
 */
const DEFAULT_REPLY_DATA_KEYS = {
  current: 'current',
  totalPage: 'totalPage',
  list: 'list',
  totalCount: 'totalCount',
} as const;

/**
 * 评论组件
 * 
 * @description 一个功能完整的评论组件，支持评论列表展示、回复功能、分页加载等
 * @param props - 组件属性
 * @returns 评论组件实例
 * 
 * @example
 * ```tsx
 * <Comment
 *   fetchCommentData={fetchComments}
 *   fetchReplyData={fetchReplies}
 *   fetchReply={submitReply}
 *   renderCommentAuthor={(data) => <span>{data.author}</span>}
 *   renderCommentContent={(data) => <p>{data.content}</p>}
 *   renderCommentDateTime={(data) => <span>{data.datetime}</span>}
 * />
 * ```
 */
const Comment = memo<CommentProps>((props) => {
  const {
    className,
    style,
    listProps,
    commentDataKeys = DEFAULT_COMMENT_DATA_KEYS,
    commentLimit = 10,
    flexLayoutProps,
    commentKeyProp = 'id',
    replyDataKeys = DEFAULT_REPLY_DATA_KEYS,
    replyLimit = 10,
    replyKeyProp = 'id',
    isMoreProp = 'isMore',
    fetchCommentData,
    fetchReplyData,
    fetchReply,
    renderEmpty,
    renderFirstLoading,
    renderCommentActions,
    renderCommentAuthor,
    renderCommentAvatar,
    renderCommentContent,
    renderCommentDateTime,
    renderCommentLoading,
    renderReplyActions,
    renderReplyAuthor,
    renderReplyAvatar,
    renderReplyContent,
    renderReplyDateTime,
    renderReplyLoading,
    showReplyText = Intl.get('show_reply_content'),
    hideReplyText = Intl.get('collapse_replies'),
    loadMoreReplyText = Intl.get('load_more_replies'),
    showReplyTextIcon = <CaretDownOutlined />,
    hideReplyTextIcon = <CaretUpOutlined />,
    loadMoreCollapseTextIcon = <EnterOutlined className="reply-icon" />,
    local = 'zh',
    emojiPickerProps,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useTheme<HTMLDivElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'Comment',
  });

  /**
   * 渲染评论列表
   * @param data - 评论列表数据
   * @returns 渲染的评论列表JSX
   */
  const renderList = useCallback(
    (data: CommentListData) => (
      <ul className={`${selectorPrefix}-list`}>
        {data?.list?.map?.((record: CommentDataItem) => (
          <li className={`${selectorPrefix}-list-item`} key={record[commentKeyProp!]}>
            <CommentInfo
              data={record}
              dataKeys={replyDataKeys}
              limit={replyLimit}
              keyProp={replyKeyProp}
              isMoreProp={isMoreProp}
              fetchData={fetchReplyData}
              fetchReply={fetchReply}
              renderActions={renderCommentActions}
              renderAuthor={renderCommentAuthor}
              renderAvatar={renderCommentAvatar}
              renderContent={renderCommentContent}
              renderDateTime={renderCommentDateTime}
              renderLoading={renderCommentLoading || renderLoading}
              showReplyText={showReplyText}
              hideReplyText={hideReplyText}
              loadMoreReplyText={loadMoreReplyText}
              showReplyTextIcon={showReplyTextIcon}
              hideReplyTextIcon={hideReplyTextIcon}
              loadMoreCollapseTextIcon={loadMoreCollapseTextIcon}
              local={local}
              emojiPickerProps={emojiPickerProps}
            >
              {(record: CommentDataItem) => (
                <ReplyInfo
                  data={record}
                  dataKeys={replyDataKeys}
                  limit={replyLimit}
                  keyProp={replyKeyProp}
                  isMoreProp={isMoreProp}
                  fetchData={fetchReplyData}
                  fetchReply={fetchReply}
                  renderActions={renderReplyActions}
                  renderAuthor={renderReplyAuthor}
                  renderAvatar={renderReplyAvatar}
                  renderContent={renderReplyContent}
                  renderDateTime={renderReplyDateTime}
                  renderLoading={renderReplyLoading || renderLoading}
                  showReplyText={showReplyText}
                  hideReplyText={hideReplyText}
                  loadMoreReplyText={loadMoreReplyText}
                  showReplyTextIcon={showReplyTextIcon}
                  hideReplyTextIcon={hideReplyTextIcon}
                  loadMoreCollapseTextIcon={loadMoreCollapseTextIcon}
                  local={local}
                  emojiPickerProps={emojiPickerProps}
                />
              )}
            </CommentInfo>
          </li>
        ))}
      </ul>
    ),
    [
      commentKeyProp,
      replyDataKeys,
      replyLimit,
      replyKeyProp,
      isMoreProp,
      fetchReplyData,
      fetchReply,
      renderCommentActions,
      renderCommentAuthor,
      renderCommentAvatar,
      renderCommentContent,
      renderCommentDateTime,
      renderCommentLoading,
      renderReplyActions,
      renderReplyAuthor,
      renderReplyAvatar,
      renderReplyContent,
      renderReplyDateTime,
      renderReplyLoading,
      showReplyText,
      hideReplyText,
      loadMoreReplyText,
      showReplyTextIcon,
      hideReplyTextIcon,
      loadMoreCollapseTextIcon,
      local,
      emojiPickerProps,
    ],
  );

  /**
   * 渲染加载状态
   * @returns 加载状态JSX
   */
  const renderLoading = useCallback(
    () => (
      <div className={`${selectorPrefix}-loading`}>
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
            />
          }
        />
      </div>
    ),
    [],
  );

  return (
    <div
      ref={wrapperRef}
      className={classNames(selectorPrefix, className)}
      style={style ?? {}}
    >
      <ListStandard
        listProps={listProps}
        dataKeys={commentDataKeys}
        limit={commentLimit}
        renderList={renderList}
        renderLoading={renderLoading}
        fetchData={fetchCommentData}
        renderEmpty={renderEmpty}
        renderFirstLoading={renderFirstLoading}
        flexLayoutProps={flexLayoutProps}
      />
    </div>
  );
});

Comment.displayName = 'Comment';

export default Comment;
