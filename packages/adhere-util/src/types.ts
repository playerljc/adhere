export interface IPoint {
  x: number;
  y: number;
}

export interface ICircle {
  center: IPoint;
  radius: number;
}

export interface IAntdTreeNode {
  key: string;
  title: string;
  isLeaf: boolean;
  children?: IAntdTreeNode[];
  properties?: any;
}

export interface IAntdTreeSelectNode {
  key: string;
  label: string;
  value: string;
  isLeaf: boolean;
  children?: IAntdTreeNode[];
  properties?: any;
}

/**
 * IFlatTreeArrNode - 拉平的数组
 */
export interface IFlatTreeArrNode {
  // 主键属性
  keyAttr: string;
  // title属性
  titleAttr: string;
  // parentId属性
  parentIdAttr: string;
  // root的parentId的值
  rootParentId: string | number;
}
