import { IYgCommentProps } from '@/types';
import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import ListStandard from './ListStandard';
import Commit from './Commit';

const selectorPrefix = 'adhere-ui-comment';

/**
 * YgComment
 * @param props
 * @constructor
 */
function YgComment(props: IYgCommentProps) {
  function renderList(data) {
    return (
      <ul className={`${selectorPrefix}-yg-comment-list`}>
        {data.list.map((record) => (
          // @ts-ignore
          <li className={`${selectorPrefix}-yg-comment-list-item`} key={record[props.keyProp]}>
            <Commit
              data={record}
              dataKeys={props.dataKeys}
              limit={props.limit}
              keyProp={props.keyProp}
              isMoreProp={props.isMoreProp}
              renderLoading={renderLoading}
              fetchData={props.fetchData}
              fetchReply={props.fetchReply}
              renderActions={props.renderActions}
              renderAuthor={props.renderAuthor}
              renderAvatar={props.renderAvatar}
              renderContent={props.renderContent}
              renderDateTime={props.renderDateTime}
            />
          </li>
        ))}
      </ul>
    );
  }

  function renderLoading() {
    return (
      <div className={`${selectorPrefix}-yg-comment-loading-wrap`}>
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
      dataKeys={props.dataKeys}
      limit={props.limit}
      renderList={renderList}
      renderLoading={renderLoading}
      fetchData={props.fetchData}
    />
  );
}

YgComment.defaultProps = {
  keyProp: 'id',
  isMoreProp: 'isMore',
  dataKeys: {
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  },
  limit: 10,
};

YgComment.propTypes = {
  getScrollWrapContainer: PropTypes.func,
  fetchData: PropTypes.func,
  fetchReply: PropTypes.func,
  dataKeys: PropTypes.shape({
    current: PropTypes.string,
    totalPage: PropTypes.string,
    list: PropTypes.string,
    totalCount: PropTypes.string,
  }),
  limit: PropTypes.number,
  listProps: PropTypes.object,
  keyProp: PropTypes.string,
  isMoreProp: PropTypes.string,
  renderActions: PropTypes.func,
  renderAuthor: PropTypes.func,
  renderAvatar: PropTypes.func,
  renderContent: PropTypes.func,
  renderDateTime: PropTypes.func,
};

export default YgComment;
