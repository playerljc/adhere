import type { ComponentClass, ErrorInfo, FunctionComponent, ReactElement } from 'react';

/**
 * React错误边界组件的状态接口
 * @interface IReactErrorBoundariesState
 */
export interface IReactErrorBoundariesState {
  /** 是否发生错误 */
  hasError: boolean;
  /** 错误对象 */
  error?: Error;
  /** React错误信息 */
  errorInfo?: ErrorInfo;
}

/**
 * 共享属性接口
 * @interface SharedProps
 */
export interface SharedProps {
  /**
   * 获取React错误边界的错误UI
   * @param params - 错误参数
   * @param params.error - 错误对象
   * @param params.errorInfo - React错误信息
   * @returns React元素
   */
  getReactErrorBoundariesErrorUI?: (params: {
    error?: Error;
    errorInfo?: ErrorInfo;
  }) => ReactElement;
}

/**
 * React组件类型（函数组件或类组件）
 * @template Props - 组件属性类型
 */
export type ReactComponent<Props = Record<string, any>> =
  | (FunctionComponent<Props> & SharedProps) // 函数组件
  | (ComponentClass<Props> & SharedProps); // 类组件

/**
 * AOP装饰器回调函数类型
 */
export type AopCallback = () => boolean | void;

/**
 * 自动try-catch装饰器回调函数类型
 */
export type AutoTryCatchCallback = (error: Error) => void;

/**
 * 装饰器描述符类型
 */
export interface DecoratorDescriptor {
  value: (...args: any[]) => any;
  [key: string]: any;
}

/**
 * 装饰器目标类型
 */
export type DecoratorTarget = any;

/**
 * 装饰器属性名类型
 */
export type DecoratorProperty = string | symbol;
