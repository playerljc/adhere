import { ICommentProps } from '@/types';
import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import {
  CaretUpOutlined,
  EnterOutlined,
  LoadingOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import ListStandard from './ListStandard';
import CommentInfo from './Info';
import ReplyInfo from '../Reply/Info';

const selectorPrefix = 'adhere-ui-comment';

/**
 * Comment
 * @param props
 * @constructor
 */
function Comment(props: ICommentProps) {
  function renderList(data) {
    return (
      <ul className={`${selectorPrefix}-list`}>
        {data?.list?.map?.((record) => (
          <li className={`${selectorPrefix}-list-item`} key={record[props.commentKeyProp!]}>
            <CommentInfo
              // @ts-ignore
              data={record}
              dataKeys={props.replyDataKeys}
              limit={props.replyLimit}
              keyProp={props.replyKeyProp}
              isMoreProp={props.isMoreProp}
              fetchData={props.fetchReplyData}
              fetchReply={props.fetchReply}
              renderActions={props.renderCommentActions}
              renderAuthor={props.renderCommentAuthor}
              renderAvatar={props.renderCommentAvatar}
              renderContent={props.renderCommentContent}
              renderDateTime={props.renderCommentDateTime}
              renderLoading={props.renderCommentLoading || renderLoading}
              showReplyText={props.showReplyText}
              hideReplyText={props.hideReplyText}
              loadMoreReplyText={props.loadMoreReplyText}
              showReplyTextIcon={props.showReplyTextIcon}
              hideReplyTextIcon={props.hideReplyTextIcon}
              loadMoreCollapseTextIcon={props.loadMoreCollapseTextIcon}
            >
              {(record) => (
                <ReplyInfo
                  data={record}
                  dataKeys={props.replyDataKeys}
                  limit={props.replyLimit}
                  keyProp={props.replyKeyProp}
                  isMoreProp={props.isMoreProp}
                  fetchData={props.fetchReplyData}
                  fetchReply={props.fetchReply}
                  renderActions={props.renderReplyActions}
                  renderAuthor={props.renderReplyAuthor}
                  renderAvatar={props.renderReplyAvatar}
                  renderContent={props.renderReplyContent}
                  renderDateTime={props.renderReplyDateTime}
                  renderLoading={props.renderReplyLoading || renderLoading}
                  showReplyText={props.showReplyText}
                  hideReplyText={props.hideReplyText}
                  loadMoreReplyText={props.loadMoreReplyText}
                  showReplyTextIcon={props.showReplyTextIcon}
                  hideReplyTextIcon={props.hideReplyTextIcon}
                  loadMoreCollapseTextIcon={props.loadMoreCollapseTextIcon}
                />
              )}
            </CommentInfo>
          </li>
        ))}
      </ul>
    );
  }

  function renderLoading() {
    return (
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
    );
  }

  return (
    <ListStandard
      getScrollWrapContainer={props.getScrollWrapContainer}
      listProps={props.listProps}
      dataKeys={props.commentDataKeys}
      limit={props.commentLimit}
      renderList={renderList}
      renderLoading={renderLoading}
      fetchData={props.fetchCommentData}
      renderEmpty={props.renderEmpty}
      renderFirstLoading={props.renderFirstLoading}
      flexLayoutProps={props.flexLayoutProps}
    />
  );
}

Comment.defaultProps = {
  commentKeyProp: 'id',
  commentDataKeys: {
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  },
  commentLimit: 10,
  replyKeyProp: 'id',
  replyDataKeys: {
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  },
  replyLimit: 10,
  isMoreProp: 'isMore',
  showReplyText: Intl.v('显示回复内容'),
  hideReplyText: Intl.v('收起回复'),
  loadMoreReplyText: Intl.v('加载更多回复'),
  showReplyTextIcon: <CaretDownOutlined />,
  hideReplyTextIcon: <CaretUpOutlined />,
  loadMoreCollapseTextIcon: <EnterOutlined className="reply-icon" />,
};

Comment.propTypes = {
  getScrollWrapContainer: PropTypes.func,

  fetchCommentData: PropTypes.func,
  commentDataKeys: PropTypes.shape({
    current: PropTypes.string,
    totalPage: PropTypes.string,
    list: PropTypes.string,
    totalCount: PropTypes.string,
  }),
  commentLimit: PropTypes.number,
  commentKeyProp: PropTypes.string,
  renderCommentActions: PropTypes.func,
  renderCommentAuthor: PropTypes.func,
  renderCommentAvatar: PropTypes.func,
  renderCommentContent: PropTypes.func,
  renderCommentDateTime: PropTypes.func,
  renderCommentLoading: PropTypes.func,

  fetchReplyData: PropTypes.func,
  replyDataKeys: PropTypes.shape({
    current: PropTypes.string,
    totalPage: PropTypes.string,
    list: PropTypes.string,
    totalCount: PropTypes.string,
  }),
  replyLimit: PropTypes.number,
  replyKeyProp: PropTypes.string,
  renderReplyActions: PropTypes.func,
  renderReplyAuthor: PropTypes.func,
  renderReplyAvatar: PropTypes.func,
  renderReplyContent: PropTypes.func,
  renderReplyDateTime: PropTypes.func,
  renderReplyLoading: PropTypes.func,

  renderEmpty: PropTypes.func,
  renderFirstLoading: PropTypes.func,
  flexLayoutProps: PropTypes.object,

  fetchReply: PropTypes.func,
  listProps: PropTypes.object,
  isMoreProp: PropTypes.string,

  showReplyText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  hideReplyText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loadMoreReplyText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  showReplyTextIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  hideReplyTextIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  loadMoreCollapseTextIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  scrollLoadProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object,
    loadClassName: PropTypes.string,
    loadStyle: PropTypes.object,
    emptyClassName: PropTypes.string,
    emptyStyle: PropTypes.object,
    errorClassName: PropTypes.string,
    errorStyle: PropTypes.object,
    distance: PropTypes.number,
    onScrollBottom: PropTypes.func,
    onEmptyClick: PropTypes.func,
    onErrorClick: PropTypes.func,
    renderLoading: PropTypes.func,
    renderEmpty: PropTypes.func,
    renderError: PropTypes.func,
  }),
};

export default Comment;
