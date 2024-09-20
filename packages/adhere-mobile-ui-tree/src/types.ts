import type { CSSProperties, ReactNode } from 'react';

export interface TreeDataItem {
  key: string;
  title?: ReactNode;
  disabled?: boolean;
  selectable?: boolean;
  checkable?: boolean;
  children?: TreeData;
}

export type TreeData = TreeDataItem[];

export interface TreeProps {
  className?: string;
  style?: CSSProperties;
  treeData?: TreeData;
  // 节点前添加 Checkbox 复选框
  checkable?: boolean;
  // （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 checkable 和 checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联
  checkedKeys?: string[];
  // 是否全部展开
  expandAll?: boolean;
  // 展开节点的keys
  expandedKeys?: string[];
  // 选择节点的keys
  selectedKeys?: string[];
  // 自定义树节点的展开/折叠图标（带有默认 rotate 角度样式）
  switcherIcon?: (expanded: boolean) => ReactNode;
  // 自定义渲染节点
  titleRender?: (nodeData: TreeDataItem) => ReactNode;
  // 没有数据时候的UI
  renderEmpty?: () => ReactNode;
  // 节点密度(行之间的间距)
  size?: 'large' | 'middle' | 'small';
  // 支持点选多个节点（节点本身）
  multiple?: boolean;
}

export type TreeNodeProps = {
  // 层级(从0开始)
  level: number;
  // 设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点	boolean
  isLeaf?: boolean;
  // 自定义图标。可接收组件，props 为当前节点 props
  icon?: TreeProps['switcherIcon'];
  titleRender?: TreeProps['titleRender'];
  // 当树为 checkable 时，设置独立节点是否展示 Checkbox
  checkable?: TreeDataItem['checkable'];
  // 禁掉响应
  disabled?: TreeDataItem['disabled'];
  // 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！	string	(内部计算出的节点位置)
  id: TreeDataItem['key'];
  // 设置节点是否可被选中	boolean	true
  selectable?: TreeDataItem['selectable'];
  // 标题
  title?: TreeDataItem['title'];
  children?: TreeDataItem['children'];
};

export interface TreeNodeContext {
  updateParentChecked: (params: { key: string; checked: boolean; checkedKeys: string[] }) => void;
}

export interface TreeContext {
  expandedKeys: () => string[];
  selectedKeys: () => string[];
  checkedKeys: () => string[];
  treeData: () => TreeProps['treeData'];
  size(): 'large' | 'middle' | 'small';
  rowGap: () => number;
  multiple: () => boolean;
  checkable: () => boolean;
  setExpandedKeys: Function;
  setSelectedKeys: Function;
  setCheckedKeys: Function;
}
