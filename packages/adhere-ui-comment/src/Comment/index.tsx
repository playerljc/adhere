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
import type { CommentProps } from '../types';
import CommentInfo from './Info';
import ListStandard from './ListStandard';

const selectorPrefix = 'adhere-ui-comment';

const { useTheme } = ConfigProvider;

/**
 * Comment
 * @param props
 * @constructor
 * @classdesc 评论
 */
const Comment = memo<CommentProps>((props) => {
  const {
    className,
    style,
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
    showReplyText = Intl.get('show_reply_content'),
    hideReplyText = Intl.get('collapse_replies'),
    loadMoreReplyText = Intl.get('load_more_replies'),
    showReplyTextIcon = <CaretDownOutlined />,
    hideReplyTextIcon = <CaretUpOutlined />,
    loadMoreCollapseTextIcon = <EnterOutlined className="reply-icon" />,
    local = 'zh',
    emojiPickerProps,
  } = props;

  const wrapperRef = useRef<HTMLElement | undefined>(undefined);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'Comment',
  });

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
    <div
      // @ts-ignore
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
