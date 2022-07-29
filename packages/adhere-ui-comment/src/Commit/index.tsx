import { ICommitProps } from '@/types';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CaretUpOutlined, CaretDownOutlined, EnterOutlined } from '@ant-design/icons';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Intl from '@baifendian/adhere-util-intl';

import Reply from '../Reply';

const selectorPrefix = 'adhere-ui-comment-commit';

function Commit(props: ICommitProps) {
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
        {((listData[props.dataKeys!.list] as []) || []).map((record) => (
          <li className={`${selectorPrefix}-children-item`} key={record[props.keyProp!]}>
            <Commit
              isReply
              data={record}
              keyProp={props.keyProp}
              isMoreProp={props.isMoreProp}
              renderLoading={props.renderLoading}
              fetchData={props.fetchData}
              renderActions={props.renderActions}
              renderAuthor={props.renderAuthor}
              renderAvatar={props.renderAvatar}
              renderContent={props.renderContent}
              renderDateTime={props.renderDateTime}
            />
          </li>
        ))}
        <ConditionalRender conditional={!loading && hasMore()}>
          {() => (
            <li className={classNames(`${selectorPrefix}-children-item`, 'more')}>
              <a
                onClick={() => {
                  paging.current.page = paging.current.page + 1;

                  appendData();
                }}
              >
                <span>
                  <EnterOutlined className="reply-icon" />
                </span>
                <span>{Intl.v('加载更多回复')}</span>
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
              <CaretUpOutlined />
            </span>
            <span>{Intl.v('收起回复')}</span>
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
              <CaretDownOutlined />
            </span>
            <span>{Intl.v('显示回复内容')}</span>
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
        // @ts-ignore
        [props.dataKeys!.list]: [...listData[list], ...res[list]],
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
    // @ts-ignore
    <FlexLayout
      direction="horizontal"
      className={classNames(selectorPrefix, props.isReply ? `${selectorPrefix}-reply` : null)}
    >
      <FlexLayout.Fixed className={`${selectorPrefix}-reply-avatar-wrap`}>
        {props?.renderAvatar?.(props.data)}
      </FlexLayout.Fixed>

      <FlexLayout.Auto autoFixed fit>
        {/*@ts-ignore*/}
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
                <Reply
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

Commit.defaultProps = {
  isReply: false,
  limit: 10,
  dataKeys: {
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  },
};

Commit.propTypes = {
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
};

export default Commit;
