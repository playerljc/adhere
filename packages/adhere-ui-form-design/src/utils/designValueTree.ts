import type { DesignValue } from '../types';

/**
 * flattenDesignChildren
 * @description 与 Outline 等视图一致：将 props.children 展平为一维 DesignValue[]（支持嵌套数组片段）
 */
export function flattenDesignChildren(children: unknown): DesignValue[] {
  if (!children) return [];
  if (!Array.isArray(children)) return [];

  const result: DesignValue[] = [];

  for (const item of children) {
    if (!item) continue;
    if (Array.isArray(item)) {
      for (const child of item) {
        if (child) result.push(child);
      }
    } else {
      result.push(item as DesignValue);
    }
  }

  return result;
}

/**
 * findParentWithChildIndex
 * @description 在设计树中查找 childId 的直接父节点及其在父节点扁平 children 中的下标
 */
export function findParentWithChildIndex(
  root: DesignValue,
  childId: string,
): { parent: DesignValue; index: number } | null {
  const direct = flattenDesignChildren(root.props?.children);

  for (let i = 0; i < direct.length; i++) {
    if (direct[i].id === childId) {
      return { parent: root, index: i };
    }
  }

  for (const child of direct) {
    const sub = findParentWithChildIndex(child, childId);
    if (sub) return sub;
  }

  return null;
}
