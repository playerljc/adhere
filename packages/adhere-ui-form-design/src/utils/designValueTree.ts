import type { DesignValue } from '../types';

/**
 * 是否为 children 中的嵌套数组片段（Outline / flattenDesignChildren 支持的形态）
 */
function isDesignValueArrayFragment(item: unknown): item is DesignValue[] {
  return Array.isArray(item);
}

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

/**
 * 遍历 children 并对每个 DesignValue 节点应用 mapper，保留嵌套数组片段结构。
 * 未发生变化时返回原 children 引用。
 */
export function mapDesignChildren(
  children: DesignValue['props']['children'],
  mapper: (child: DesignValue) => DesignValue,
): DesignValue['props']['children'] {
  if (!children?.length) return children;

  let changed = false;
  const next = children.map((item) => {
    if (!item) return item;
    if (isDesignValueArrayFragment(item)) {
      let arrChanged = false;
      const nextArr = item.map((child) => {
        if (!child) return child;
        const mapped = mapper(child);
        if (mapped !== child) arrChanged = true;
        return mapped;
      });
      if (arrChanged) {
        changed = true;
        return nextArr;
      }
      return item;
    }
    const mapped = mapper(item);
    if (mapped !== item) changed = true;
    return mapped;
  });

  return changed ? (next as DesignValue['props']['children']) : children;
}

/**
 * 沿路径浅拷更新指定 id 的节点；未命中的兄弟子树保持原引用。
 * 遍历含嵌套数组片段，与 Outline / flattenDesignChildren 一致。
 */
export function updateDesignValueById(
  root: DesignValue,
  id: string,
  updater: (node: DesignValue) => DesignValue,
): DesignValue {
  if (root.id === id) {
    return updater(root);
  }

  const children = root.props.children;
  if (!children?.length) return root;

  let found = false;
  const nextChildren = mapDesignChildren(children, (child) => {
    const updated = updateDesignValueById(child, id, updater);
    if (updated !== child) found = true;
    return updated;
  });

  if (!found) return root;

  return {
    ...root,
    props: {
      ...root.props,
      children: nextChildren,
    },
  };
}

/**
 * 不可变删除：规则对齐 deleteDesignValueByIdInChildren（先扫直接子节点再递归）。
 * 同时支持嵌套数组片段中的直接子节点删除，以免破坏 Outline 结构。
 */
export function deleteDesignValueById(root: DesignValue, id: string): DesignValue {
  const children = root.props.children;
  if (!children?.length) return root;

  let removedDirect = false;
  const nextChildren = children
    .map((item) => {
      if (!item) return item;
      if (isDesignValueArrayFragment(item)) {
        const filtered = item.filter((child) => child?.id !== id);
        if (filtered.length !== item.length) {
          removedDirect = true;
          return filtered;
        }
        return item;
      }
      if (item.id === id) {
        removedDirect = true;
        return null;
      }
      return item;
    })
    .filter((item) => item != null);

  if (removedDirect) {
    return {
      ...root,
      props: {
        ...root.props,
        children: nextChildren as DesignValue['props']['children'],
      },
    };
  }

  let found = false;
  const recursed = mapDesignChildren(children, (child) => {
    const next = deleteDesignValueById(child, id);
    if (next !== child) found = true;
    return next;
  });

  if (!found) return root;

  return {
    ...root,
    props: {
      ...root.props,
      children: recursed,
    },
  };
}

/**
 * 浅拷贝从根到指定 id 集合的路径（含目标节点本身），用于 swap 等需同时改多个节点的场景。
 * 返回的树上，ids 中的节点均为新对象，可安全改 props.children 而不污染原树。
 */
export function clonePathContainingIds(
  root: DesignValue,
  ids: Set<string>,
): { root: DesignValue; nodes: Map<string, DesignValue> } {
  const nodes = new Map<string, DesignValue>();

  function walk(node: DesignValue): DesignValue {
    const children = node.props.children;
    let childChanged = false;
    let nextChildren = children;

    if (children?.length) {
      nextChildren = mapDesignChildren(children, (child) => {
        const next = walk(child);
        if (next !== child) childChanged = true;
        return next;
      });
    }

    const hit = ids.has(node.id) || childChanged;
    if (!hit) return node;

    const copy: DesignValue = {
      ...node,
      props: {
        ...node.props,
        ...(childChanged ? { children: nextChildren } : {}),
      },
    };
    if (ids.has(node.id)) {
      nodes.set(node.id, copy);
    }
    return copy;
  }

  return { root: walk(root), nodes };
}
