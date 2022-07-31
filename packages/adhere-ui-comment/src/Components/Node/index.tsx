import { INodeProps } from '@/types';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Intl from '@baifendian/adhere-util-intl';
import Util from '@baifendian/adhere-util';

import ReplySubmit from '../../Reply/Submit';
import ReplyInfo from '../../Reply/Info';

const selectorPrefix = 'adhere-ui-comment-node';

/**
 * Node
 * @param props
 * @constructor
 */
function Node(props: INodeProps) {
  const [listData, setListData] = useState({
    [props.dataKeys!.current]: 1,
    [props.dataKeys!.list]: [],
    [props.dataKeys!.totalCount]: 0,
    [props.dataKeys!.totalPage]: 0,
  });
  const [collapse, setCollapse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const paging = useRef({
    page: 1,
    limit: props.limit,
  });

  function renderActions() {
    return [
      ...(props?.renderActions?.(props?.data) || []).map((action, index) => (
        <li key={index} className={`${selectorPrefix}-actions-action`}>
          {action}
        </li>
      )),
      <li
        className={classNames(
          `${selectorPrefix}-actions-action`,
          `${selectorPrefix}-actions-action-reply-btn`,
        )}
        onClick={() => setShowReply(true)}
      >
        {Intl.v('回复')}
      </li>,
    ];
  }

  function renderChildren() {
    return (
      <ul className={`${selectorPrefix}-children`}>
        {((listData[props.dataKeys!.list] as []) || [])?.map?.((record) => (
          <li className={`${selectorPrefix}-children-item`} key={record[props.keyProp!]}>
            <ConditionalRender
              conditional={!props?.children}
              noMatch={() => props?.children?.(record)}
            >
              {() => (
                <ReplyInfo
                  isReply
                  data={record}
                  keyProp={props.keyProp}
                  isMoreProp={props.isMoreProp}
                  fetchData={props.fetchData}
                  renderActions={props.renderActions}
                  renderAuthor={props.renderAuthor}
                  renderAvatar={props.renderAvatar}
                  renderContent={props.renderContent}
                  renderDateTime={props.renderDateTime}
                  renderLoading={props.renderLoading}
                  showReplyText={props.showReplyText}
                  hideReplyText={props.hideReplyText}
                  loadMoreReplyText={props.loadMoreReplyText}
                  showReplyTextIcon={props.showReplyTextIcon}
                  hideReplyTextIcon={props.hideReplyTextIcon}
                  loadMoreCollapseTextIcon={props.loadMoreCollapseTextIcon}
                />
              )}
            </ConditionalRender>
          </li>
        ))}
        <ConditionalRender conditional={!loading && hasMore()}>
          {() => (
            <li className={classNames(`${selectorPrefix}-children-item`, 'more')}>
              <a onClick={appendData}>
                <span>
                  <ConditionalRender
                    conditional={Util.isFunction(props?.loadMoreCollapseTextIcon)}
                    // @ts-ignore
                    noMatch={() => props?.loadMoreCollapseTextIcon}
                  >
                    {() => (props?.loadMoreCollapseTextIcon as Function)()}
                  </ConditionalRender>
                </span>
                <span>
                  <ConditionalRender
                    conditional={Util.isFunction(props.loadMoreReplyText)}
                    // @ts-ignore
                    noMatch={() => props.loadMoreReplyText}
                  >
                    {() => (props?.loadMoreReplyText as Function)()}
                  </ConditionalRender>
                </span>
              </a>
            </li>
          )}
        </ConditionalRender>
      </ul>
    );
  }

  function renderMore() {
    return (
      <ConditionalRender
        conditional={!collapse}
        noMatch={() => (
          <a
            className={`${selectorPrefix}-collapse`}
            onClick={() => {
              // hide
              setCollapse(false);
            }}
          >
            <span>
              <ConditionalRender
                conditional={Util.isFunction(props.hideReplyTextIcon)}
                // @ts-ignore
                noMatch={() => props.hideReplyTextIcon}
              >
                {() => (props?.hideReplyTextIcon as Function)()}
              </ConditionalRender>
            </span>
            <span>
              <ConditionalRender
                conditional={Util.isFunction(props.hideReplyText)}
                // @ts-ignore
                noMatch={() => props.hideReplyText}
              >
                {() => (props?.hideReplyText as Function)()}
              </ConditionalRender>
            </span>
          </a>
        )}
      >
        {() => (
          <a
            className={`${selectorPrefix}-collapse`}
            onClick={() => {
              // show
              if (!!(listData[props.dataKeys!.list] as []).length) {
                setCollapse(true);
                return;
              }

              loadData()?.then(() => {
                setCollapse(true);
              });
            }}
          >
            <span>
              <ConditionalRender
                conditional={Util.isFunction(props.showReplyTextIcon)}
                // @ts-ignore
                noMatch={() => props.showReplyTextIcon}
              >
                {() => (props?.showReplyTextIcon as Function)()}
              </ConditionalRender>
            </span>
            <span>
              <ConditionalRender
                conditional={Util.isFunction(props.showReplyText)}
                // @ts-ignore
                noMatch={() => props.showReplyText}
              >
                {() => (props?.showReplyText as Function)()}
              </ConditionalRender>
            </span>
          </a>
        )}
      </ConditionalRender>
    );
  }

  function hasMore() {
    return (listData[props.dataKeys!.list] as []).length <= listData[props.dataKeys!.totalCount];
  }

  function loadData() {
    setLoading(true);

    paging.current = {
      page: 1,
      limit: props.limit,
    };

    return fetchData((res) => {
      setListData(res);
    });
  }

  function appendData() {
    setLoading(true);

    paging.current.page = paging.current.page + 1;

    // @ts-ignore
    const { list } = props.dataKeys;

    return fetchData((res) => {
      setListData({
        ...res,
        [props.dataKeys!.list]: [...(listData[list] as any), ...res[list]],
      });
    });
  }

  function fetchData(callback) {
    return props
      ?.fetchData?.({
        ...paging.current,
        id: props?.data?.[props.keyProp!],
      })
      .then((data) => {
        callback(data);

        setLoading(false);

        return data;
      })
      .catch((error) => {
        setLoading(false);

        return error;
      });
  }

  return (
    <FlexLayout
      direction="horizontal"
      className={classNames(selectorPrefix, props.isReply ? `${selectorPrefix}-reply` : null)}
    >
      <FlexLayout.Fixed className={`${selectorPrefix}-avatar-wrap`}>
        {props?.renderAvatar?.(props.data)}
      </FlexLayout.Fixed>

      <FlexLayout.Auto autoFixed fit>
        <FlexLayout direction="vertical">
          <FlexLayout.Fixed className={`${selectorPrefix}-title-row`} fit={false}>
            <div className={`${selectorPrefix}-title-row-author`}>
              {props?.renderAuthor?.(props.data)}
            </div>
            <div className={`${selectorPrefix}-title-row-date-time`}>
              {props?.renderDateTime?.(props.data)}
            </div>
          </FlexLayout.Fixed>

          <FlexLayout.Auto className={`${selectorPrefix}-content-wrap`}>
            {props?.renderContent?.(props.data)}
          </FlexLayout.Auto>

          <FlexLayout.Fixed>
            <ul className={`${selectorPrefix}-actions`}>{renderActions()}</ul>
          </FlexLayout.Fixed>

          <ConditionalRender conditional={showReply}>
            {() => (
              <FlexLayout.Fixed style={{ marginTop: 15 }}>
                <ReplySubmit
                  onCancel={() => setShowReply(false)}
                  onResult={(reply) => {
                    props
                      ?.fetchReply?.({
                        id: props?.data?.[props.keyProp!],
                        reply,
                      })
                      ?.then(() => {
                        setShowReply(false);
                        loadData();
                      });
                  }}
                />
              </FlexLayout.Fixed>
            )}
          </ConditionalRender>

          <ConditionalRender conditional={props?.data?.[props.isMoreProp!]}>
            {() => (
              <>
                <ConditionalRender conditional={!loading}>{() => renderMore()}</ConditionalRender>

                <ConditionalRender conditional={collapse}>
                  {() => renderChildren()}
                </ConditionalRender>

                <ConditionalRender conditional={loading}>
                  {() => props?.renderLoading?.()}
                </ConditionalRender>
              </>
            )}
          </ConditionalRender>
        </FlexLayout>
      </FlexLayout.Auto>
    </FlexLayout>
  );
}

export const defaultProps = {
  isReply: false,
  limit: 10,
  dataKeys: {
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  },
};

export const propTypes = {
  isReply: PropTypes.bool,
  data: PropTypes.shape({
    key: PropTypes.string,
  }),
  dataKeys: PropTypes.shape({
    current: PropTypes.string,
    totalPage: PropTypes.string,
    list: PropTypes.string,
    totalCount: PropTypes.string,
  }),
  renderLoading: PropTypes.func,
  limit: PropTypes.number,
  fetchData: PropTypes.func,
  fetchReply: PropTypes.func,
  keyProp: PropTypes.string,
  isMoreProp: PropTypes.string,
  renderActions: PropTypes.func,
  renderAuthor: PropTypes.func,
  renderAvatar: PropTypes.func,
  renderContent: PropTypes.func,
  renderDateTime: PropTypes.func,
  showReplyText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  hideReplyText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loadMoreReplyText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  showReplyTextIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  hideReplyTextIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  loadMoreCollapseTextIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

Node.defaultProps = defaultProps;

Node.propTypes = propTypes;

export default Node;
