import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import ReplyInfo from '../../Reply/Info';
import ReplySubmit from '../../Reply/Submit';
import type { 
  NodeProps, 
  CommentDataItem, 
  CommentListData, 
  FetchReplyParams, 
  SubmitReplyParams,
  RenderParams,
  PagingParams 
} from '../../types';

const selectorPrefix = 'adhere-ui-comment-node';

/**
 * 默认数据键名配置
 */
const DEFAULT_KEYS = {
  current: 'current',
  totalPage: 'totalPage',
  list: 'list',
  totalCount: 'totalCount',
} as const;

/**
 * 节点组件状态
 */
interface NodeState {
  /** 列表数据 */
  listData: CommentListData;
  /** 当前数据项 */
  data: CommentDataItem | undefined;
  /** 是否折叠 */
  collapse: boolean;
  /** 是否加载中 */
  loading: boolean;
  /** 是否显示回复框 */
  showReply: boolean;
}

/**
 * 节点组件（评论 | 回复）
 * 
 * @description 评论或回复的节点组件，支持回复功能、分页加载、折叠展开等
 * @param props - 组件属性
 * @returns 节点组件实例
 * 
 * @example
 * ```tsx
 * <Node
 *   data={commentData}
 *   renderAuthor={(data) => <span>{data.author}</span>}
 *   renderContent={(data) => <p>{data.content}</p>}
 *   renderDateTime={(data) => <span>{data.datetime}</span>}
 *   fetchReply={submitReply}
 * />
 * ```
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

  // 组件状态
  const [state, setState] = useState<NodeState>({
    listData: {
      current: 1,
      totalPage: 0,
      list: [],
      totalCount: 0,
    },
    data: props?.data,
    collapse: false,
    loading: false,
    showReply: false,
  });

  // 分页信息
  const paging = useRef<PagingParams>({
    page: 1,
    limit: limit,
  });

  /**
   * 更新状态
   * @param updates - 要更新的状态
   */
  const updateState = useCallback((updates: Partial<NodeState> | ((prev: NodeState) => Partial<NodeState>)) => {
    setState(prev => {
      if (typeof updates === 'function') {
        return { ...prev, ...updates(prev) };
      }
      return { ...prev, ...updates };
    });
  }, []);

  /**
   * 渲染操作按钮
   * @returns 操作按钮列表
   */
  const renderActions = useCallback(() => {
    const actions = [
      ...(props?.renderActions?.({ data: state.data! }, (newData) => 
        updateState({ data: newData })
      ) || []).map(
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

    // 如果没有回复按钮，则添加默认回复按钮
    if (!actions.find((t) => (t as any)?.props?.children?.key === 'reply')) {
      actions.push(
        <li
          key="reply"
          className={classNames(
            `${selectorPrefix}-actions-action`,
            `${selectorPrefix}-actions-action-reply-btn`,
          )}
          onClick={() => updateState({ showReply: true })}
        >
          {Intl.get('reply')}
        </li>,
      );
    }

    return actions;
  }, [props?.renderActions, state.data, updateState]);

  /**
   * 渲染子节点列表
   * @returns 子节点列表JSX
   */
  const renderChildren = useCallback(() => {
    const list = state.listData.list;
    
    return (
      <ul className={`${selectorPrefix}-children`}>
        {list?.map?.((record: CommentDataItem) => (
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

        <ConditionalRender conditional={!state.loading && hasMore()}>
          {() => (
            <li className={classNames(`${selectorPrefix}-children-item`, 'more')}>
              <a onClick={appendData}>
                <span>
                  {Util.isFunction(loadMoreCollapseTextIcon)
                    ? loadMoreCollapseTextIcon()
                    : loadMoreCollapseTextIcon}
                </span>

                <span>
                  {Util.isFunction(loadMoreReplyText)
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
    state.listData,
    state.loading,
    keyProp,
    children,
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
    local,
    emojiPickerProps,
    props?.fetchData,
    props?.fetchReply,
    props?.renderActions,
    dataKeys,
    limit,
  ]);

  /**
   * 渲染更多按钮
   * @returns 更多按钮JSX
   */
  const renderMore = useCallback(() => {
    return (
              <ConditionalRender
          conditional={!state.collapse}
          noMatch={() => (
            <a className={`${selectorPrefix}-collapse`} onClick={() => updateState({ collapse: false })}>
              <span>
                {Util.isFunction(hideReplyTextIcon)
                  ? hideReplyTextIcon()
                  : hideReplyTextIcon}
              </span>
              <span>
                {Util.isFunction(hideReplyText)
                  ? hideReplyText()
                  : hideReplyText}
              </span>
            </a>
          )}
        >
          {() => (
            <a
              className={`${selectorPrefix}-collapse`}
              onClick={() => {
                const list = state.listData.list;
                if (list.length > 0) {
                  updateState({ collapse: true });
                  return;
                }

                loadData()?.then(() => updateState({ collapse: true }));
              }}
            >
              <span>
                {Util.isFunction(showReplyTextIcon)
                  ? showReplyTextIcon()
                  : showReplyTextIcon}
              </span>
              <span>
                {Util.isFunction(showReplyText)
                  ? showReplyText()
                  : showReplyText}
              </span>
            </a>
          )}
        </ConditionalRender>
    );
  }, [
    state.collapse,
    state.listData,
    hideReplyText,
    hideReplyTextIcon,
    showReplyText,
    showReplyTextIcon,
    updateState,
  ]);

  /**
   * 检查是否有更多数据
   * @returns 是否有更多数据
   */
  const hasMore = useCallback(
    () => state.listData.list.length < state.listData.totalCount,
    [state.listData],
  );

  /**
   * 获取数据
   * @returns 数据获取Promise
   */
  const fetchData = useCallback(() => {
    return props
      ?.fetchData?.({
        ...paging.current,
        record: state.data as CommentDataItem,
      })
      ?.then((data: CommentListData) => {
        updateState({ loading: false });
        return data;
      })
      ?.catch((error: any) => {
        updateState({ loading: false });
        return error;
      });
  }, [props?.fetchData, paging.current.page, paging.current.limit, state.data, updateState]);

  /**
   * 加载数据
   * @returns 数据加载Promise
   */
  function loadData(): Promise<CommentListData> | undefined {
    updateState({ loading: true });

    paging.current = {
      page: 1,
      limit: limit,
    };

    return fetchData()?.then((res: CommentListData) => {
      updateState({ listData: res });
      return res;
    });
  }

  /**
   * 追加数据
   * @returns 数据追加Promise
   */
  function appendData(): Promise<CommentListData> | undefined {
    updateState({ loading: true });

    paging.current.page = paging.current.page + 1;

    return fetchData()?.then((res: CommentListData) => {
      updateState((prev) => ({
        listData: {
          ...res,
          list: [...prev.listData.list, ...res.list],
        },
      }));
      return res;
    });
  }

  // 监听数据变化
  useEffect(() => {
    updateState({ data: props.data });
  }, [props?.data, updateState]);

  return (
    <FlexLayout
      direction="horizontal"
      className={classNames(selectorPrefix, {
        [`${selectorPrefix}-reply`]: isReply,
      })}
    >
      <FlexLayout.Fixed className={`${selectorPrefix}-avatar-wrap`}>
        {renderAvatar?.({ data: state.data! })}
      </FlexLayout.Fixed>

      <FlexLayout.Auto autoFixed fit>
        <FlexLayout direction="vertical">
          <FlexLayout.Fixed className={`${selectorPrefix}-title-row`} fit={false}>
            <div className={`${selectorPrefix}-title-row-author`}>
              {renderAuthor?.({ data: state.data! })}
            </div>
            <div className={`${selectorPrefix}-title-row-date-time`}>
              {renderDateTime?.({ data: state.data! })}
            </div>
          </FlexLayout.Fixed>

          <FlexLayout.Auto className={`${selectorPrefix}-content-wrap`}>
            {renderContent?.({ data: state.data! })}
          </FlexLayout.Auto>

          <FlexLayout.Fixed>
            <ul className={`${selectorPrefix}-actions`}>{renderActions()}</ul>
          </FlexLayout.Fixed>

          <ConditionalRender conditional={state.showReply}>
            {() => (
              <FlexLayout.Fixed style={{ marginTop: 15 }}>
                <ReplySubmit
                  onCancel={() => updateState({ showReply: false })}
                  onResult={(reply: string) => {
                    const params: SubmitReplyParams = {
                      id: state.data?.[keyProp!] || '',
                      record: state.data as CommentDataItem,
                      reply,
                    };
                    
                    fetchReply?.(params)?.then(() => {
                      updateState({ showReply: false });
                      loadData();
                    });
                  }}
                  local={local}
                  emojiPickerProps={emojiPickerProps}
                />
              </FlexLayout.Fixed>
            )}
          </ConditionalRender>

          <ConditionalRender conditional={state.data?.[isMoreProp!]}>
            {() => (
              <>
                <ConditionalRender conditional={!state.loading}>{() => renderMore()}</ConditionalRender>

                <ConditionalRender.Show conditional={state.collapse}>
                  {renderChildren()}
                </ConditionalRender.Show>

                <ConditionalRender conditional={state.loading}>
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
