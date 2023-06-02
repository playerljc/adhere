import classNames from 'classnames';
import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import ReplyInfo from '../../Reply/Info';
import ReplySubmit from '../../Reply/Submit';
import { NodeProps } from '../../types';

const selectorPrefix = 'adhere-ui-comment-node';

/**
 * Node
 * @param props
 * @constructor
 * @classdesc 节点(评论 | 回复)
 */
const Node: FC<NodeProps> = (props) => {
  const {
    isReply = false,
    dataKeys = {
      current: 'current',
      totalPage: 'totalPage',
      list: 'list',
      totalCount: 'totalCount',
    },
    limit = 10,
    keyProp,
    children,
    isMoreProp,
    renderAuthor,
    renderAvatar,
    renderContent,
    renderDateTime,
    renderLoading,
    showReplyText,
    hideReplyText,
    loadMoreReplyText,
    showReplyTextIcon,
    loadMoreCollapseTextIcon,
    hideReplyTextIcon,
    fetchReply,
    emojiPickerProps,
    local = 'zh',
  } = props;

  const [listData, setListData] = useState({
    [dataKeys.current]: 1,
    [dataKeys.list]: [],
    [dataKeys.totalCount]: 0,
    [dataKeys.totalPage]: 0,
  });

  const [data, setData] = useState(props?.data);

  const [collapse, setCollapse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const paging = useRef({
    page: 1,
    limit: limit,
  });

  const renderActions = useCallback(() => {
    const actions = [
      ...(props?.renderActions?.({ ...data }, (_data) => setData(_data)) || []).map(
        (action, index) =>
          ConditionalRender.conditionalRender({
            conditional: !(action as any)?.props?.className?.endsWith('-actions-action'),
            noMatch: action,
            match: (
              <li key={index} className={`${selectorPrefix}-actions-action`}>
                {action}
              </li>
            ),
          }),
      ),
    ];

    if (!actions.find((t) => t?.props?.children?.key === 'reply')) {
      actions.push(
        <li
          key="reply"
          className={classNames(
            `${selectorPrefix}-actions-action`,
            `${selectorPrefix}-actions-action-reply-btn`,
          )}
          onClick={() => setShowReply(true)}
        >
          {Intl.v('回复')}
        </li>,
      );
    }

    return actions;
  }, [props?.renderActions, data, showReply]);

  const renderChildren = useCallback(() => {
    return (
      <ul className={`${selectorPrefix}-children`}>
        {((listData[dataKeys.list] as []) || [])?.map?.((record) => (
          <li className={`${selectorPrefix}-children-item`} key={record[keyProp!]}>
            <ConditionalRender conditional={!children} noMatch={() => children?.(record)}>
              {() => (
                <ReplyInfo
                  isReply
                  data={record}
                  dataKeys={dataKeys}
                  limit={limit}
                  keyProp={keyProp}
                  isMoreProp={isMoreProp}
                  fetchData={props?.fetchData}
                  fetchReply={props?.fetchReply}
                  renderActions={props?.renderActions}
                  renderAuthor={renderAuthor}
                  renderAvatar={renderAvatar}
                  renderContent={renderContent}
                  renderDateTime={renderDateTime}
                  renderLoading={renderLoading}
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
            </ConditionalRender>
          </li>
        ))}

        <ConditionalRender conditional={!loading && hasMore()}>
          {() => (
            <li className={classNames(`${selectorPrefix}-children-item`, 'more')}>
              <a onClick={appendData}>
                <span>
                  <ConditionalRender
                    conditional={Util.isFunction(loadMoreCollapseTextIcon)}
                    noMatch={() => loadMoreCollapseTextIcon}
                  >
                    {() =>
                      loadMoreCollapseTextIcon instanceof Function
                        ? loadMoreCollapseTextIcon()
                        : loadMoreCollapseTextIcon
                    }
                  </ConditionalRender>
                </span>

                <span>
                  <ConditionalRender
                    conditional={Util.isFunction(loadMoreReplyText)}
                    noMatch={() => loadMoreReplyText}
                  >
                    {() =>
                      loadMoreReplyText instanceof Function
                        ? loadMoreReplyText()
                        : loadMoreReplyText
                    }
                  </ConditionalRender>
                </span>
              </a>
            </li>
          )}
        </ConditionalRender>
      </ul>
    );
  }, [
    listData,
    dataKeys.list,
    keyProp,
    isMoreProp,
    renderActions,
    renderAuthor,
    renderAvatar,
    renderContent,
    renderDateTime,
    renderLoading,
    showReplyText,
    hideReplyText,
    loadMoreReplyText,
    showReplyTextIcon,
    hideReplyTextIcon,
    loadMoreCollapseTextIcon,
    loading,
  ]);

  const renderMore = useCallback(() => {
    return (
      <ConditionalRender
        conditional={!collapse}
        noMatch={() => (
          <a className={`${selectorPrefix}-collapse`} onClick={() => setCollapse(false)}>
            <span>
              <ConditionalRender
                conditional={Util.isFunction(hideReplyTextIcon)}
                noMatch={() => hideReplyTextIcon}
              >
                {() =>
                  hideReplyTextIcon instanceof Function ? hideReplyTextIcon() : hideReplyTextIcon
                }
              </ConditionalRender>
            </span>
            <span>
              <ConditionalRender
                conditional={Util.isFunction(hideReplyText)}
                noMatch={() => hideReplyText}
              >
                {() => (hideReplyText instanceof Function ? hideReplyText() : hideReplyText)}
              </ConditionalRender>
            </span>
          </a>
        )}
      >
        {() => (
          <a
            className={`${selectorPrefix}-collapse`}
            onClick={() => {
              if (!!(listData[dataKeys.list] as []).length) {
                setCollapse(true);
                return;
              }

              loadData()?.then(() => setCollapse(true));
            }}
          >
            <span>
              <ConditionalRender
                conditional={Util.isFunction(showReplyTextIcon)}
                noMatch={() => showReplyTextIcon}
              >
                {() =>
                  showReplyTextIcon instanceof Function ? showReplyTextIcon() : showReplyTextIcon
                }
              </ConditionalRender>
            </span>
            <span>
              <ConditionalRender
                conditional={Util.isFunction(showReplyText)}
                noMatch={() => showReplyText}
              >
                {() => (showReplyText instanceof Function ? showReplyText() : showReplyText)}
              </ConditionalRender>
            </span>
          </a>
        )}
      </ConditionalRender>
    );
  }, [
    collapse,
    listData,
    dataKeys.list,
    hideReplyText,
    hideReplyTextIcon,
    showReplyText,
    showReplyTextIcon,
  ]);

  const hasMore = useCallback(
    // @ts-ignore
    () => (listData[dataKeys.list] as []).length <= listData[dataKeys.totalCount],
    [listData, dataKeys.list, dataKeys.totalCount],
  );

  const fetchData = useCallback(() => {
    return props
      ?.fetchData?.({
        ...paging.current,
        record: { ...data },
      })
      ?.then((data) => {
        setLoading(false);

        return data;
      })
      ?.catch((error) => {
        setLoading(false);

        return error;
      });
  }, [props?.fetchData, paging.current.page, paging.current.limit, data]);

  function loadData(): Promise<any> | undefined {
    setLoading(true);

    paging.current = {
      page: 1,
      limit: limit,
    };

    return fetchData()?.then((res) => {
      setListData(res);
    });
  }

  function appendData(): Promise<any> | undefined {
    setLoading(true);

    paging.current.page = paging.current.page + 1;

    const { list } = dataKeys;

    return fetchData()?.then((res) => {
      setListData((_listData) => ({
        ...res,
        [dataKeys.list]: [...(_listData[list] as any), ...res[list]],
      }));
    });
  }

  useEffect(() => {
    setData(props.data);
  }, [props?.data]);

  return (
    <FlexLayout
      direction="horizontal"
      className={classNames(selectorPrefix, isReply ? `${selectorPrefix}-reply` : null)}
    >
      <FlexLayout.Fixed className={`${selectorPrefix}-avatar-wrap`}>
        {renderAvatar?.({ ...data })}
      </FlexLayout.Fixed>

      <FlexLayout.Auto autoFixed fit>
        <FlexLayout direction="vertical">
          <FlexLayout.Fixed className={`${selectorPrefix}-title-row`} fit={false}>
            <div className={`${selectorPrefix}-title-row-author`}>
              {renderAuthor?.({ ...data })}
            </div>
            <div className={`${selectorPrefix}-title-row-date-time`}>
              {renderDateTime?.({ ...data })}
            </div>
          </FlexLayout.Fixed>

          <FlexLayout.Auto className={`${selectorPrefix}-content-wrap`}>
            {renderContent?.({ ...data })}
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
                    fetchReply?.({
                      id: data?.[keyProp!],
                      record: { ...data },
                      reply,
                    })?.then(() => {
                      setShowReply(false);
                      loadData();
                    });
                  }}
                  local={local}
                  emojiPickerProps={emojiPickerProps}
                />
              </FlexLayout.Fixed>
            )}
          </ConditionalRender>

          <ConditionalRender conditional={data?.[isMoreProp!]}>
            {() => (
              <>
                <ConditionalRender conditional={!loading}>{() => renderMore()}</ConditionalRender>

                <ConditionalRender.Show conditional={collapse}>
                  {renderChildren()}
                </ConditionalRender.Show>

                <ConditionalRender conditional={loading}>
                  {() => renderLoading?.()}
                </ConditionalRender>
              </>
            )}
          </ConditionalRender>
        </FlexLayout>
      </FlexLayout.Auto>
    </FlexLayout>
  );
};

export default memo(Node);
