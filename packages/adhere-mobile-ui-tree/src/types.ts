import type { CSSProperties, MouseEvent, NamedExoticComponent, ReactNode, TouchEvent } from 'react';

import TreeSelect from './TreeSelect';

/**
 * 树节点数据项接口
 */
export type TreeDataItem = Readonly<{
  /** 节点的唯一标识 */
  key: string;
  /** 节点的显示标题 */
  title?: ReactNode;
  /** 是否禁用节点 */
  disabled?: boolean;
  /** 是否可选择节点 */
  selectable?: boolean;
  /** 是否显示复选框 */
  checkable?: boolean;
  /** 节点的额外属性 */
  props?: Record<string, any>;
  /** 子节点数据 */
  children?: TreeData;
  /** checkbox的宽度(默认是20px) */
  checkboxWidth?: TreeProps['checkboxWidth'];
  /** checkbox的间距 */
  checkboxGap?: TreeProps['checkboxGap'];
  /** title元素的间距 */
  titleGap?: TreeProps['titleGap'];
  /** icon的间距 */
  iconGap?: TreeProps['iconGap'];
  /** 缩进 */
  indent?: TreeProps['indent'];
}>;

/**
 * 扁平化的树节点数据项接口
 */
export type TreeDataFlatItem = Readonly<
  Omit<TreeDataItem, 'children'> & {
    /** 父节点ID */
    pId: number;
  }
>;

/**
 * 扩展的树节点数据项接口，包含层级和叶子节点信息
 */
export type TreeDataItemExtra = Readonly<
  Omit<TreeDataItem | TreeDataFlatItem, 'title' | 'children'> & {
    /** 节点层级(从0开始) */
    level: number;
    /** 是否为叶子节点 */
    isLeaf: boolean;
    /** 节点的额外属性 */
    props?: Record<string, any>;
  }
>;

/**
 * 树数据数组类型
 */
export type TreeData = Readonly<(TreeDataItem | TreeDataFlatItem)[]>;

/**
 * 简单模式配置对象接口
 */
export type TreeDataSimpleModeFromObject = {
  /** 键属性名 */
  keyAttr: string;
  /** 标题属性名 */
  titleAttr: string;
  /** 父ID属性名 */
  parentIdAttr: string;
  /** 根节点父ID值 */
  rootParentId: string | number;
};

/**
 * 树组件属性接口
 */
export interface TreeProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 树形数据 */
  treeData?: TreeData;
  /** 节点前添加 Checkbox 复选框 */
  checkable?: boolean;
  /** （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 checkable 和 checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联） */
  checkedKeys?: string[];
  /** 是否全部展开 */
  expandAll?: boolean;
  /** 展开节点的keys */
  expandedKeys?: string[];
  /** 选择节点的keys */
  selectedKeys?: string[];
  /** 自定义树节点的展开/折叠图标（带有默认 rotate 角度样式） */
  switcherIcon?: (expanded: boolean, nodeData: TreeDataItemExtra) => ReactNode;
  /** 自定义渲染节点 */
  titleRender?: (nodeData: TreeDataItemExtra) => ReactNode;
  /** 没有数据时候的UI */
  renderEmpty?: () => ReactNode;
  /** 节点密度(行之间的间距) */
  size?: 'large' | 'middle' | 'small';
  /** 支持点选多个节点（节点本身） */
  multiple?: boolean;
  /** checkable 状态下节点选择完全受控（父子节点选中状态不再关联） */
  checkStrictly?: boolean;
  /** title之前的节点的图标 */
  icon?: (nodeData: TreeDataItemExtra) => ReactNode;
  /** 异步加载的hook */
  loadData?: (nodeData: TreeDataItemExtra) => Promise<void>;
  /** （受控）已经加载的节点，需要配合 loadData 使用 */
  loadedKeys?: string[];

  /** 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， pId 是父节点的 id) */
  treeDataSimpleMode?: boolean | TreeDataSimpleModeFromObject;

  /** 是否可以搜索(本地数据) */
  showSearch?: boolean;
  /** 当showSearch为true时候，搜索数据的key默认是title，只有值是string类型才可以，也可是级联的如props.a */
  filterKey?: string;

  /** 行距(如果指定行距则size不起作用) */
  rowGap?: number;
  /** checkbox的宽度(默认是20px) */
  checkboxWidth?: number;
  /** checkbox的间距 */
  checkboxGap?: number;
  /** title元素的间距 */
  titleGap?: number;
  /** icon的间距 */
  iconGap?: number;
  /** 缩进 */
  indent?: number;
  /** 选中的hook */
  onSelect?: (
    selectedKeys: string[],
    e: {
      selected: boolean;
      selectedNodes: TreeDataItemExtra[];
      node: TreeDataItemExtra;
      event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>;
    },
  ) => void;
  /** 展开的hook */
  onExpand?: (
    expandedKeys: string[],
    e: {
      expanded: boolean;
      expandedNodes: TreeDataItemExtra[];
      node: TreeDataItemExtra;
      event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>;
    },
  ) => void;
  /** 复选的hook */
  onCheck?: (
    checkedKeys: string[],
    e: {
      checked: boolean;
      checkedNodes: TreeDataItemExtra[];
      node: TreeDataItemExtra;
    },
  ) => void;
}

/**
 * 树选择组件属性接口
 */
export type TreeSelectProps = Omit<TreeProps, 'className' | 'style' | 'checkable' | 'onCheck'> & {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 树组件的类名 */
  treeClassName?: string;
  /** 树组件的样式 */
  treeStyle?: CSSProperties;
  /** 选中的值 */
  value?: string[];
  /** 值变化回调 */
  onChange?: TreeProps['onCheck'];
};

/**
 * 树节点组件属性接口
 */
export type TreeNodeProps = TreeDataItem & {
  /** 层级(从0开始) */
  level: number;
  /** 设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点 */
  isLeaf?: boolean;
  /** 当树为 checkable 时，设置独立节点是否展示 Checkbox */
  // checkable?: TreeDataItem['checkable'];
  /** 禁掉响应 */
  // disabled?: TreeDataItem['disabled'];
  /** 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ */
  id: TreeDataItem['key'];
  /** 设置节点是否可被选中 */
  // selectable?: TreeDataItem['selectable'];
  /** 标题 */
  // title?: TreeDataItem['title'];
};

/**
 * 树节点上下文接口
 */
export interface TreeNodeContext {
  /** 更新父节点选中状态的回调 */
  updateParentChecked?: (params: { key: string; checked: boolean; checkedKeys: string[] }) => void;
  /** 检查父节点子节点中是否存在可选中节点的函数 */
  existsCheckableNodeInParentChildren: () => boolean;
}

/**
 * 树组件上下文接口
 */
export interface TreeContext {
  /** 获取展开的keys */
  expandedKeys: () => string[];
  /** 获取选中的keys */
  selectedKeys: () => string[];
  /** 获取勾选的keys */
  checkedKeys: () => string[];
  /** 获取已加载的keys */
  loadedKeys: () => string[];
  /** 获取树数据 */
  treeData: () => TreeProps['treeData'];
  /** 获取尺寸 */
  size(): 'large' | 'middle' | 'small';
  /** 获取是否严格模式 */
  checkStrictly: () => boolean;
  /** 获取行间距 */
  rowGap: () => number;
  /** 获取是否多选 */
  multiple: () => boolean;
  /** 获取是否可勾选 */
  checkable: () => boolean;
  /** 获取图标渲染函数 */
  icon?: TreeProps['icon'];
  /** 获取复选框宽度 */
  checkboxWidth: () => string;
  /** 获取复选框间距 */
  checkboxGap: () => string;
  /** 获取标题间距 */
  titleGap: () => string;
  /** 获取图标间距 */
  iconGap: () => string;
  /** 获取缩进 */
  indent: () => string;
  /** 获取简单模式配置 */
  teeDataSimpleMode?: () => TreeProps['treeDataSimpleMode'];
  /** 获取标题渲染函数 */
  titleRender?: TreeProps['titleRender'];
  /** 获取切换图标渲染函数 */
  switcherIcon?: TreeProps['switcherIcon'];
  /** 获取子节点数据 */
  children?: TreeDataItem['children'];
  /** 设置展开keys的函数 */
  setExpandedKeys: (keys: string[] | ((prev: string[]) => string[])) => void;
  /** 设置选中keys的函数 */
  setSelectedKeys: (keys: string[] | ((prev: string[]) => string[])) => void;
  /** 设置勾选keys的函数 */
  setCheckedKeys: (keys: string[] | ((prev: string[]) => string[])) => void;
  /** 设置已加载keys的函数 */
  setLoadedKeys: (keys: string[] | ((prev: string[]) => string[])) => void;
  /** 异步加载数据函数 */
  loadData?: TreeProps['loadData'];
  /** 选中回调 */
  onSelect?: TreeProps['onSelect'];
  /** 展开回调 */
  onExpand?: TreeProps['onExpand'];
  /** 勾选回调 */
  onCheck?: TreeProps['onCheck'];
}

/**
 * 树组件类型定义
 */
export type TreeComponent = NamedExoticComponent<TreeProps> & {
  TreeSelect: typeof TreeSelect;
};
