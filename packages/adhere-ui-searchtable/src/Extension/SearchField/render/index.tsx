import React from 'react';
import type { ReactNode } from 'react';

import type { ColumnSearchConfig } from '../../../types';

/**
 * resolveSearchTitleNode
 * @description 将查询项 title 解析为可渲染节点
 */
export function resolveSearchTitleNode(currentTitle: ReactNode): ReactNode {
  if (typeof currentTitle === 'function') {
    return (currentTitle as (props?: Record<string, unknown>) => ReactNode)({});
  }

  return currentTitle;
}

/**
 * renderSearchRequiredMark
 * @description 渲染查询项必填符号
 */
export function renderSearchRequiredMark(
  searchConfig: ColumnSearchConfig,
  classNamePrefix: string,
): ReactNode {
  if (!searchConfig.required) {
    return null;
  }

  const defaultMark = <span className={`${classNamePrefix}-search-required-mark`}>*</span>;

  return searchConfig.renderRequiredMark?.(defaultMark) ?? defaultMark;
}

/**
 * renderSearchLabelContent
 * @description 渲染查询项 label 文本（含必填符号）
 */
export function renderSearchLabelContent(
  currentTitle: ReactNode,
  searchConfig: ColumnSearchConfig,
  classNamePrefix: string,
): ReactNode {
  const titleNode = resolveSearchTitleNode(currentTitle);
  const requiredMark = renderSearchRequiredMark(searchConfig, classNamePrefix);

  if (!requiredMark) {
    return titleNode;
  }

  const placement = searchConfig.requiredMarkPlacement ?? 'before';

  return placement === 'after' ? (
    <>
      {titleNode}
      {requiredMark}
    </>
  ) : (
    <>
      {requiredMark}
      {titleNode}
    </>
  );
}

/**
 * renderSearchHelp
 * @description 渲染查询项 help 说明
 */
export function renderSearchHelp(
  searchConfig: ColumnSearchConfig,
  classNamePrefix: string,
): ReactNode {
  if (!searchConfig.help) {
    return null;
  }

  return <div className={`${classNamePrefix}-search-help`}>{searchConfig.help}</div>;
}
