import { SelectProps, TreeSelectProps } from 'antd';
import { NamedExoticComponent } from 'react';
import type { CSSProperties, ReactElement } from 'react';

import TreeAutoComplete from './TreeAutoComplete';

/**
 * AutoComplete 组件类型定义
 * 包含主要的 AutoComplete 组件和 TreeAutoComplete 子组件
 */
export type AutoCompleteComponent = NamedExoticComponent<AutoCompleteProps> & {
  TreeAutoComplete: typeof TreeAutoComplete;
};

/**
 * 通用接口定义，包含 AutoComplete 和 TreeAutoComplete 的共享属性
 */
export interface IAutoComplete {
  /** 外层容器的 CSS 类名 */
  classNameWrap?: string;
  /** 外层容器的样式对象 */
  styleWrap?: CSSProperties;
  /** 自定义加载状态的渲染函数 */
  renderLoading?: () => ReactElement;
  /** 防抖延迟时间（毫秒） */
  debounceTimeout?: number;
  /** 数据加载函数，接收搜索关键词参数 */
  loadData?: (kw?: string) => Promise<void>;
  /** 空状态内容 */
  emptyContent?: ReactElement;
  /** 默认树形数据（仅 TreeAutoComplete 使用） */
  defaultTreeData?: TreeSelectProps['treeData'];
}

/**
 * AutoComplete 组件的属性类型定义
 */
export type AutoCompleteProps = IAutoComplete &
  Omit<SelectProps, 'children'> & {
    /** 默认选项数据 */
    defaultOptions?: SelectProps['options'];
    /** 自定义下拉内容渲染函数 */
    children?: (arg: {
      /** 原始下拉节点 */
      originNode?: ReactElement;
      /** 当前选中的值 */
      value?: SelectProps['value'];
      /** 值变化回调函数 */
      onChange?: SelectProps['onChange'];
      /** 选项数据 */
      options?: SelectProps['options'];
      /** 是否正在加载 */
      loading?: boolean;
    }) => ReactElement;
    /** options的显示策略 **/
    optionsStrategy?: 'normal' | 'merge';
  };

/**
 * TreeAutoComplete 组件的属性类型定义
 */
export type TreeAutoCompleteProps = IAutoComplete &
  Omit<TreeSelectProps, 'children'> & {
    /** 是否使用路径模式，默认为 true */
    isUsePath?: boolean;
    /** 自定义下拉内容渲染函数 */
    children?: (arg: {
      /** 原始下拉节点 */
      originNode?: ReactElement;
      /** 当前选中的值 */
      value?: TreeSelectProps['value'];
      /** 是否为简单模式 */
      treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
      /** 值变化回调函数 */
      onChange?: TreeSelectProps['onChange'];
      /** 树形数据 */
      treeData?: TreeSelectProps['treeData'];
      /** 是否正在加载 */
      loading?: boolean;
    }) => ReactElement;
  };

/**
 * useCommon Hook 的返回类型定义
 */
export type UseCommonReturn = {
  /** 默认防抖延迟时间 */
  defaultDebounceTimeout: number;
  /** 加载状态组件 */
  fetchLoading: ReactElement;
  /** 空状态组件 */
  empty: ReactElement;
  /** 选择器前缀类名 */
  selectorPrefix: string;
  /** 是否正在获取数据 */
  fetching: boolean;
  /** 下拉框是否打开 */
  open: boolean;
  /** 设置下拉框打开状态 */
  setOpen: (open: boolean) => void;
  /** 清空回调函数 */
  onClear: () => void;
  /** 输入防抖处理函数 */
  onInputMemo: (keyword: string) => void;
};

/**
 * useCommon Hook 的参数类型定义
 */
export type UseCommonParams = Pick<
  AutoCompleteProps,
  'renderLoading' | 'emptyContent' | 'loadData'
>;

/**
 * useCommon Hook 的类型定义
 */
export type UseCommon = (params: UseCommonParams) => UseCommonReturn;

/**
 * 树形数据转换配置
 */
export interface TreeTransformConfig {
  /** 键属性名 */
  keyAttr: string;
  /** 标题属性名 */
  titleAttr: string;
  /** 父级ID属性名 */
  parentIdAttr: string;
  /** 根节点父级ID值 */
  rootParentId: number;
}

/**
 * 选项数据类型
 */
export interface OptionType {
  /** 选项值 */
  value: string | number;
  /** 选项标签 */
  label?: string;
  /** 选项标题 */
  title?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子选项 */
  children?: OptionType[];
  /** 其他属性 */
  [key: string]: any;
}

/**
 * 树形节点数据类型
 */
export interface TreeNodeType {
  /** 节点键值 */
  key: string | number;
  /** 节点值 */
  value: string | number;
  /** 节点标题 */
  title: string;
  /** 父级ID */
  pId?: string | number;
  /** 子节点 */
  children?: TreeNodeType[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 其他属性 */
  [key: string]: any;
}
