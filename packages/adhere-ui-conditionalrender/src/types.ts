import type { FC, NamedExoticComponent, ReactElement, ReactNode } from 'react';

/**
 * 条件渲染组件的属性接口
 * @interface ConditionalRenderProps
 */
export interface ConditionalRenderProps {
  /** 控制是否渲染的条件 */
  conditional: boolean;
  /** 当条件不满足时渲染的内容 */
  noMatch?: ReactNode | (() => ReactNode);
  /** 当条件满足时渲染的内容 */
  children?: ReactNode | (() => ReactNode);
}

/**
 * 条件渲染组件的完整类型定义
 */
export type ConditionalRenderComponent = NamedExoticComponent<ConditionalRenderProps> & {
  /** 通过display属性控制显示/隐藏的子组件 */
  Show: FC<ConditionalRenderShowProps>;
  /** 通过visibility属性控制显示/隐藏的子组件 */
  Visibility: FC<ConditionalRenderShowProps>;
  /** 静态方法：条件渲染函数 */
  conditionalRender: ConditionalRenderFunctionStatic;
  /** 静态方法：条件过滤数组 */
  conditionalArr: ConditionalRenderArrayFunctionStatic;
  /** 静态方法：过滤空值数组 */
  conditionalNotEmptyArr: ConditionalNotEmptyArrFunctionStatic;
};

/**
 * 条件渲染函数的参数接口
 */
export interface ConditionalRenderParams {
  /** 控制条件 */
  conditional: boolean;
  /** 条件满足时的返回值 */
  match: ReactNode;
  /** 条件不满足时的返回值 */
  noMatch?: ReactNode;
}

/**
 * 条件渲染静态函数类型
 */
export interface ConditionalRenderFunctionStatic {
  (params: ConditionalRenderParams): ReactNode;
}

/**
 * 条件数组过滤静态函数类型
 */
export interface ConditionalRenderArrayFunctionStatic {
  (arr: ReactElement[]): ReactElement[];
}

/**
 * 非空数组过滤静态函数类型
 */
export interface ConditionalNotEmptyArrFunctionStatic {
  <T>(arr: (T | null | undefined)[]): T[];
}

/**
 * 条件渲染显示组件的属性接口
 * @interface ConditionalRenderShowProps
 */
export interface ConditionalRenderShowProps {
  /** 控制是否显示的条件 */
  conditional: boolean;
  /** 当条件不满足时显示的内容 */
  noMatch?: ReactNode;
  /** 当条件满足时显示的内容 */
  children?: ReactNode;
}

/**
 * 样式处理参数接口
 * @interface Deal
 */
export interface Deal {
  /** 要处理的React元素 */
  element: ReactNode;
  /** 控制条件 */
  conditional: boolean;
  /** CSS属性名 */
  prop: string;
  /** CSS属性值 */
  value: string;
}

/**
 * 样式处理结果类型
 */
export type DealResult = ReactElement | ReactElement[] | null;
