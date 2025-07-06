import type { ComponentClass, ErrorInfo, FunctionComponent, ReactElement } from 'react';

/**
 * IReactErrorBoundariesState
 * @interface IReactErrorBoundariesState
 */
export interface IReactErrorBoundariesState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export interface SharedProps {
  getReactErrorBoundariesErrorUI?: (params: {
    error?: Error;
    errorInfo?: ErrorInfo;
  }) => ReactElement;
}

export type ReactComponent<Props = {}> =
  | (FunctionComponent<Props> & SharedProps) // 函数组件
  | (ComponentClass<Props> & SharedProps); // 类组件
