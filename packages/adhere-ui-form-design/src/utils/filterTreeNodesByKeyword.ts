import type { TreeDataNode } from './treeDataSource';

export type TreeFieldNames = {
  title: string;
  key: string;
  children: string;
};

export const DEFAULT_TREE_FIELD_NAMES: TreeFieldNames = {
  title: 'label',
  key: 'value',
  children: 'children',
};

function getNodeTitle(node: TreeDataNode, fieldNames: TreeFieldNames): string {
  const raw = node[fieldNames.title];
  if (raw == null) return '';
  if (typeof raw === 'string' || typeof raw === 'number') {
    return String(raw);
  }
  return '';
}

function getNodeKey(node: TreeDataNode, fieldNames: TreeFieldNames): string | number | undefined {
  const raw = node[fieldNames.key];
  if (raw == null) return undefined;
  if (typeof raw === 'string' || typeof raw === 'number') {
    return raw;
  }
  return String(raw);
}

function getNodeChildren(
  node: TreeDataNode,
  fieldNames: TreeFieldNames,
): TreeDataNode[] | undefined {
  const raw = node[fieldNames.children];
  return Array.isArray(raw) ? (raw as TreeDataNode[]) : undefined;
}

function nodeMatchesKeyword(
  node: TreeDataNode,
  keyword: string,
  fieldNames: TreeFieldNames,
): boolean {
  return getNodeTitle(node, fieldNames).toLowerCase().includes(keyword);
}

function filterNodes(
  nodes: TreeDataNode[],
  keyword: string,
  fieldNames: TreeFieldNames,
): TreeDataNode[] {
  const result: TreeDataNode[] = [];

  for (const node of nodes) {
    const children = getNodeChildren(node, fieldNames);
    const filteredChildren = children?.length
      ? filterNodes(children, keyword, fieldNames)
      : undefined;
    const selfMatch = nodeMatchesKeyword(node, keyword, fieldNames);
    const hasMatchingChildren = (filteredChildren?.length ?? 0) > 0;

    if (selfMatch || hasMatchingChildren) {
      const next: TreeDataNode = { ...node };
      if (hasMatchingChildren && filteredChildren) {
        next[fieldNames.children] = filteredChildren;
      } else if (!selfMatch) {
        next[fieldNames.children] = filteredChildren ?? [];
      }
      result.push(next);
    }
  }

  return result;
}

/**
 * 按关键字过滤树节点：保留命中节点及其祖先链
 */
export function filterTreeNodesByKeyword(
  nodes: TreeDataNode[],
  keyword: string | undefined | null,
  fieldNames: TreeFieldNames = DEFAULT_TREE_FIELD_NAMES,
): TreeDataNode[] {
  const normalized = (keyword ?? '').trim().toLowerCase();
  if (!normalized) return nodes;
  return filterNodes(nodes, normalized, fieldNames);
}

export type TreeNodeKeyEntry = {
  key: string | number;
  title: string;
  parentKey?: string | number;
};

/**
 * 扁平化树节点，用于搜索后自动展开父节点
 */
export function collectTreeNodeKeyEntries(
  nodes: TreeDataNode[],
  fieldNames: TreeFieldNames = DEFAULT_TREE_FIELD_NAMES,
  parentKey?: string | number,
): TreeNodeKeyEntry[] {
  const entries: TreeNodeKeyEntry[] = [];

  for (const node of nodes) {
    const key = getNodeKey(node, fieldNames);
    if (key == null) continue;

    entries.push({
      key,
      title: getNodeTitle(node, fieldNames),
      parentKey,
    });

    const children = getNodeChildren(node, fieldNames);
    if (children?.length) {
      entries.push(...collectTreeNodeKeyEntries(children, fieldNames, key));
    }
  }

  return entries;
}

/**
 * 根据关键字收集需要展开的父节点 key
 */
export function collectExpandedKeysForKeyword(
  nodes: TreeDataNode[],
  keyword: string | undefined | null,
  fieldNames: TreeFieldNames = DEFAULT_TREE_FIELD_NAMES,
): (string | number)[] {
  const normalized = (keyword ?? '').trim().toLowerCase();
  if (!normalized) return [];

  const entries = collectTreeNodeKeyEntries(nodes, fieldNames);
  const keyToParent = new Map<string | number, string | number | undefined>();
  entries.forEach((entry) => {
    keyToParent.set(entry.key, entry.parentKey);
  });

  const expanded = new Set<string | number>();

  entries.forEach((entry) => {
    if (!entry.title.toLowerCase().includes(normalized)) return;

    let parent = entry.parentKey;
    while (parent != null) {
      expanded.add(parent);
      parent = keyToParent.get(parent);
    }
  });

  return Array.from(expanded);
}
