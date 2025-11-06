import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Intl from '@baifendian/adhere-util-intl';

import ReplyInfo from '../../Reply/Info';
import ReplySubmit from '../../Reply/Submit';
import type { NodeProps } from '../../types';

const selectorPrefix = 'adhere-ui-comment-node';

const DEFAULT_KEYS = {
  current: 'current',
  totalPage: 'totalPage',
  list: 'list',
  totalCount: 'totalCount',
};
/**
 * Node
 * @param props
 * @constructor
 * @classdesc 节点(评论 | 回复)
 */
const Node = memo<NodeProps>((props) => {
  const {
    isReply = false,
    dataKeys = DEFAULT_KEYS,
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

    if (
      !actions.find((t) => {
        if (!React.isValidElement(t)) return false;
        const child = (t.props as any)?.children;
        return React.isValidElement(child) && child.key === 'reply';
      })
    ) {
      actions.push(
        <li
          key="reply"
          className={classNames(
            `${selectorPrefix}-actions-action`,
            `${selectorPrefix}-actions-action-reply-btn`,
          )}
          onClick={() => setShowReply(true)}
        >
          {Intl.get('reply')}
        </li>,
      );
    }

    return actions;
  }, [props?.renderActions, data, showReply]);

  const renderChildren = useCallback(() => {
    return (
      <ul className={`${selectorPrefix}-children`}>
        {((listData[dataKeys.list] as any[]) || [])?.map?.((record) => (
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
                  {typeof loadMoreCollapseTextIcon === 'function'
                    ? loadMoreCollapseTextIcon()
                    : loadMoreCollapseTextIcon}
                </span>

                <span>
                  {typeof loadMoreReplyText === 'function'
                    ? loadMoreReplyText()
                    : loadMoreReplyText}
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
              {typeof hideReplyTextIcon === 'function' ? hideReplyTextIcon() : hideReplyTextIcon}
            </span>
            <span>{typeof hideReplyText === 'function' ? hideReplyText() : hideReplyText}</span>
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
              {typeof showReplyTextIcon === 'function' ? showReplyTextIcon() : showReplyTextIcon}
            </span>
            <span>{typeof showReplyText === 'function' ? showReplyText() : showReplyText}</span>
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
    () => (listData[dataKeys.list] as any[]).length < (listData[dataKeys.totalCount] as number),
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
      className={classNames(selectorPrefix, {
        [`${selectorPrefix}-reply`]: isReply,
      })}
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
});

Node.displayName = 'Node';

export default Node;
