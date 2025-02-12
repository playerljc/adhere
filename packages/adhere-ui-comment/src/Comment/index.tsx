import { Spin } from 'antd';
import React, { memo, useCallback } from 'react';

import {
  CaretDownOutlined,
  CaretUpOutlined,
  EnterOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import ReplyInfo from '../Reply/Info';
import type { CommentProps } from '../types';
import CommentInfo from './Info';
import ListStandard from './ListStandard';

const selectorPrefix = 'adhere-ui-comment';

/**
 * Comment
 * @param props
 * @constructor
 * @classdesc 评论
 */
const Comment = memo<CommentProps>((props) => {
  const {
    listProps,
    commentDataKeys = {
      current: 'current',
      totalPage: 'totalPage',
      list: 'list',
      totalCount: 'totalCount',
    },
    commentLimit = 10,
    flexLayoutProps,
    commentKeyProp = 'id',
    replyDataKeys = {
      current: 'current',
      totalPage: 'totalPage',
      list: 'list',
      totalCount: 'totalCount',
    },
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
    showReplyText = Intl.v('显示回复内容'),
    hideReplyText = Intl.v('收起回复'),
    loadMoreReplyText = Intl.v('加载更多回复'),
    showReplyTextIcon = <CaretDownOutlined />,
    hideReplyTextIcon = <CaretUpOutlined />,
    loadMoreCollapseTextIcon = <EnterOutlined className="reply-icon" />,
    local = 'zh',
    emojiPickerProps,
  } = props;

  const renderList = useCallback(
    (data) => (
      <ul className={`${selectorPrefix}-list`}>
        {data?.list?.map?.((record) => (
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
              {(record) => (
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
      renderReplyDateTime,
      renderCommentLoading,
      showReplyText,
      hideReplyText,
      loadMoreReplyText,
      showReplyTextIcon,
      hideReplyTextIcon,
      loadMoreCollapseTextIcon,
      local,
      emojiPickerProps,
      renderReplyContent,
      renderReplyAvatar,
      renderReplyAuthor,
      renderReplyActions,
    ],
  );

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
  );
});

Comment.displayName = 'Comment';

export default Comment;
