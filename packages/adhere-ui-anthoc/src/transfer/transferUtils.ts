import type { GetProp, TransferProps } from 'antd';
import type { DataNode as TreeDataNode } from 'antd/es/tree';
import type { Key } from 'react';

export type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
export type TransferSelectOptionValue = string | number;

function normalizeTransferKey(key: Key | undefined): TransferSelectOptionValue | undefined {
  if (typeof key === 'string' || typeof key === 'number') {
    return key;
  }

  if (typeof key === 'bigint') {
    return key.toString();
  }

  return undefined;
}

function resolveTreeNodeKey(key: Key | undefined): Key {
  return normalizeTransferKey(key) ?? '';
}

export function normalizeTreeData(treeNodes: TreeDataNode[] = []): TreeDataNode[] {
  return treeNodes.map(({ children, key, ...props }) => ({
    ...props,
    key: resolveTreeNodeKey(
      key ?? (props as { value?: Key; id?: Key }).value ?? (props as { id?: Key }).id,
    ),
    children: children ? normalizeTreeData(children) : undefined,
  }));
}

export function flattenTreeData(
  treeNodes: TreeDataNode[] = [],
  result: TransferItem[] = [],
): TransferItem[] {
  normalizeTreeData(treeNodes).forEach((item) => {
    result.push(item as TransferItem);
    if (item.children) {
      flattenTreeData(item.children, result);
    }
  });

  return result;
}

export function treeToSelectOptions(
  treeNodes: TreeDataNode[] = [],
  result: { label: string; value: TransferSelectOptionValue }[] = [],
) {
  normalizeTreeData(treeNodes).forEach((item) => {
    result.push({
      label: String(item.title ?? ''),
      value: resolveTreeNodeKey(item.key as Key) as TransferSelectOptionValue,
    });

    if (item.children) {
      treeToSelectOptions(item.children, result);
    }
  });

  return result;
}

export function isTransferTreeNodeChecked(selectedKeys: Key[], eventKey: Key) {
  return selectedKeys.includes(eventKey);
}

export function generateTransferTree(
  treeNodes: TreeDataNode[] = [],
  checkedKeys: TransferProps['targetKeys'] = [],
): TreeDataNode[] {
  return normalizeTreeData(treeNodes).map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys?.includes(props.key as string),
    children: generateTransferTree(children, checkedKeys),
  }));
}

export function toTableTransferDataSource<T extends Record<string, any>>(items: unknown): T[] {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item) => {
    if (!item || typeof item !== 'object') {
      return item as T;
    }

    const { children, ...rest } = item as T & { children?: unknown };

    if (Array.isArray(children)) {
      return {
        ...rest,
        children: toTableTransferDataSource(children),
      } as unknown as T;
    }

    return rest as T;
  });
}
