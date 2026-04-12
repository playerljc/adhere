import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone, normalizeDesignChildren } from '../../../utils';

/** 从单个布局节点的 props.children 中按 id 删除子项 */
export function removeSourceFromLayoutChildren(layoutNode: DesignValue, sourceId: string): boolean {
  const children = layoutNode.props.children;
  if (!children?.length) return false;
  const idx = children.findIndex((c) => c.id === sourceId);
  if (idx === -1) return false;
  children.splice(idx, 1);
  return true;
}

export function layoutReducerToRemove(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): DesignValue[] {
  const designValue = findDesignValueByIdToClone(action.targetId, state);

  if (designValue?.props?.children) {
    removeSourceFromLayoutChildren(designValue, action.sourceDesignValue.id);
  }

  return normalizeDesignChildren(designValue?.props?.children) ?? [];
}
