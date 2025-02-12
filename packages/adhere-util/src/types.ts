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
  value?: string;
  isLeaf?: boolean;
  children?: IAntdTreeNode[];
  properties?: any;
}

export interface IAntdTreeSelectNode {
  key: string;
  label?: string;
  value?: string;
  isLeaf?: boolean;
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

/**
 * PrettyBytesOptions
 */
export interface PrettyBytesOptions {
  signed?: boolean;
  bits?: boolean;
  binary?: boolean;
  locale?: boolean | string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  space?: boolean;
}

/**
 * ProcessAsyncQueueItem
 * @description 异步执行队列的任务项
 */
export interface ProcessAsyncQueueItem {
  // func函数的参数
  argv?: any[];
  // 任务要执行的函数
  run: (...argv: any[]) => Promise<any>;
  // run方法执行的上下文
  context?: any;
  // run方法成功后的回调
  success?: (params?: any) => void;
  // run方法失败后的回调
  fail?: (error?: any) => void;
}
