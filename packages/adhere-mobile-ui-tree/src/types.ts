import type { CSSProperties, MouseEvent, NamedExoticComponent, ReactNode, TouchEvent } from 'react';

import TreeSelect from './TreeSelect';

export type TreeDataItem = Readonly<{
  key: string;
  title?: ReactNode;
  disabled?: boolean;
  selectable?: boolean;
  checkable?: boolean;
  props?: any;
  children?: TreeData;
  // checkbox的宽度(默认是20px)
  checkboxWidth?: TreeProps['checkboxWidth'];
  // checkbox的间距
  checkboxGap?: TreeProps['checkboxGap'];
  // title元素的间距
  titleGap?: TreeProps['titleGap'];
  // icon的间距
  iconGap?: TreeProps['iconGap'];
  // 缩进
  indent?: TreeProps['indent'];
}>;

export type TreeDataFlatItem = Readonly<
  Omit<TreeDataItem, 'children'> & {
    pId: number;
  }
>;

export type TreeDataItemExtra = Readonly<
  Omit<TreeDataItem | TreeDataFlatItem, 'title' | 'children'> & {
    level: number;
    isLeaf: boolean;
    props?: any;
  }
>;

export type TreeData = Readonly<(TreeDataItem | TreeDataFlatItem)[]>;

export type TreeDataSimpleModeFromObject = {
  keyAttr: string;
  titleAttr: string;
  parentIdAttr: string;
  rootParentId: string | number;
};

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
  switcherIcon?: (expanded: boolean, nodeData: TreeDataItemExtra) => ReactNode;
  // 自定义渲染节点
  titleRender?: (nodeData: TreeDataItemExtra) => ReactNode;
  // 没有数据时候的UI
  renderEmpty?: () => ReactNode;
  // 节点密度(行之间的间距)
  size?: 'large' | 'middle' | 'small';
  // 支持点选多个节点（节点本身）
  multiple?: boolean;
  // checkable 状态下节点选择完全受控（父子节点选中状态不再关联）
  checkStrictly?: boolean;
  // title之前的节点的图标
  icon?: (nodeData: TreeDataItemExtra) => ReactNode;
  // 异步加载的hook
  loadData?: (nodeData: TreeDataItemExtra) => Promise<TreeData>;
  // （受控）已经加载的节点，需要配合 loadData 使用
  loadedKeys?: string[];

  // 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， pId 是父节点的 id)
  treeDataSimpleMode?: boolean | TreeDataSimpleModeFromObject;

  // 是否可以搜索(本地数据)
  showSearch?: boolean;
  // 当showSearch为true时候，搜索数据的key默认是title，只有值是string类型才可以，也可是级联的如props.a
  filterKey?: string;

  // 行距(如果指定行距则size不起作用)
  rowGap?: number;
  // checkbox的宽度(默认是20px)
  checkboxWidth?: number;
  // checkbox的间距
  checkboxGap?: number;
  // title元素的间距
  titleGap?: number;
  // icon的间距
  iconGap?: number;
  // 缩进
  indent?: number;
  // 选中的hook
  onSelect?: (
    selectedKeys: string[],
    e: {
      selected: boolean;
      selectedNodes: TreeDataItemExtra[];
      node: TreeDataItemExtra;
      event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>;
    },
  ) => void;
  // 展开的hook
  onExpand?: (
    expandedKeys: string[],
    e: {
      expanded: boolean;
      expandedNodes: TreeDataItemExtra[];
      node: TreeDataItemExtra;
      event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>;
    },
  ) => void;
  // 复选的hook
  onCheck?: (
    checkedKeys: string[],
    e: {
      checked: boolean;
      checkedNodes: TreeDataItemExtra[];
      node: TreeDataItemExtra;
    },
  ) => void;
}

export type TreeSelectProps = Omit<TreeProps, 'className' | 'style' | 'checkable' | 'onCheck'> & {
  className?: string;
  style?: CSSProperties;
  treeClassName?: string;
  treeStyle?: CSSProperties;
  value?: string[];
  onChange?: TreeProps['onCheck'];
};

export type TreeNodeProps = TreeDataItem & {
  // 层级(从0开始)
  level: number;
  // 设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点	boolean
  isLeaf?: boolean;
  // 当树为 checkable 时，设置独立节点是否展示 Checkbox
  // checkable?: TreeDataItem['checkable'];
  // 禁掉响应
  // disabled?: TreeDataItem['disabled'];
  // 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！	string	(内部计算出的节点位置)
  id: TreeDataItem['key'];
  // 设置节点是否可被选中	boolean	true
  // selectable?: TreeDataItem['selectable'];
  // 标题
  // title?: TreeDataItem['title'];
};

export interface TreeNodeContext {
  updateParentChecked?: (params: { key: string; checked: boolean; checkedKeys: string[] }) => void;
  existsCheckableNodeInParentChildren: () => boolean;
}

export interface TreeContext {
  expandedKeys: () => string[];
  selectedKeys: () => string[];
  checkedKeys: () => string[];
  loadedKeys: () => string[];
  treeData: () => TreeProps['treeData'];
  size(): 'large' | 'middle' | 'small';
  checkStrictly: () => boolean;
  rowGap: () => number;
  multiple: () => boolean;
  checkable: () => boolean;
  icon?: TreeProps['icon'];
  checkboxWidth: () => string;
  checkboxGap: () => string;
  titleGap: () => string;
  iconGap: () => string;
  indent: () => string;
  teeDataSimpleMode?: () => TreeProps['treeDataSimpleMode'];
  titleRender?: TreeProps['titleRender'];
  switcherIcon?: TreeProps['switcherIcon'];
  children?: TreeDataItem['children'];
  setExpandedKeys: Function;
  setSelectedKeys: Function;
  setCheckedKeys: Function;
  setLoadedKeys: Function;
  setTreeData: Function;
  loadData?: TreeProps['loadData'];
  onSelect?: TreeProps['onSelect'];
  onExpand?: TreeProps['onExpand'];
  onCheck?: TreeProps['onCheck'];
}

export type TreeComponent = NamedExoticComponent<TreeProps> & {
  TreeSelect: typeof TreeSelect;
};
