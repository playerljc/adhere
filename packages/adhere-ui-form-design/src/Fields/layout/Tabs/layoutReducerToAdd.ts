import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone } from '../../../utils';

/**
 * layoutReducerToAdd
 * @param state
 * @param action
 */
export function layoutReducerToAdd(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): (DesignValue | DesignValue[])[] {
  const tabsLayoutDesignValue = findDesignValueByIdToClone(action.targetId, state);

  if (!tabsLayoutDesignValue) return [];

  if (!tabsLayoutDesignValue.props.children) {
    tabsLayoutDesignValue.props.children = [];
  }

  const { children } = tabsLayoutDesignValue.props;

  // Tabs 布局：children 与 tabItems 按下标对应
  // 新增控件时，插入到当前激活 tab 的索引位置，而不是直接 push 到末尾
  const fieldProps = (tabsLayoutDesignValue.props.fieldProps ?? {}) as any;
  const tabItems: Array<{ key?: string }> = Array.isArray(fieldProps.tabItems)
    ? fieldProps.tabItems
    : [];
  const activeKey: string | undefined = fieldProps.activeKey ?? fieldProps.defaultActiveKey;

  const activeIndex =
    activeKey != null ? tabItems.findIndex((t) => String(t.key ?? '') === String(activeKey)) : -1;

  const insertIndex = activeIndex > -1 ? Math.min(activeIndex, children.length) : children.length;

  // Tabs 的 children 约定为二维数组：每个 tab 对应一个 children 数组
  const current = children[insertIndex];
  if (!Array.isArray(current)) {
    children[insertIndex] = [];
  }
  (children[insertIndex] as DesignValue[]).push(action.sourceDesignValue);

  return [...children];
}
