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
  title?: string;
  value: string;
  isLeaf: boolean;
  children?: IAntdTreeNode[];
  properties?: any;
}

export interface IAntdTreeSelectNode {
  key: string;
  label?: string;
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

/**
 * IUrlConfig
 * @description - Url库的parse和stringify的配置
 */
export interface IUrlConfig {
  // 是否排除无效值
  ignoreInvalid: boolean;
  // 是否encode
  isEncode: boolean;
  // 是否decode
  isDecode: boolean;
}
