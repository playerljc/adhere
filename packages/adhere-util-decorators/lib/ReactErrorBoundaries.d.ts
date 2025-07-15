import React from 'react';
import type { ReactElement } from 'react';
import type { ReactComponent } from './types';
/**
 * React错误边界高阶组件
 *
 * 该HOC为React组件添加错误边界功能，当组件渲染出错时能够优雅地处理错误，
 * 防止整个应用崩溃，并提供自定义错误UI的能力。
 *
 * @template ComponentProps - 组件属性类型
 * @param Component - 需要添加错误边界的React组件
 * @returns 包装后的组件，具有错误边界功能
 *
 * @example
 * ```typescript
 * // 使用默认错误UI
 * const SafeComponent = ReactErrorBoundariesHOC(MyComponent);
 *
 * // 使用自定义错误UI
 * class MyComponent extends React.Component {
 *   getReactErrorBoundariesErrorUI = ({ error, errorInfo }) => {
 *     return <div>自定义错误界面: {error?.message}</div>;
 *   }
 *
 *   render() {
 *     // 组件渲染逻辑
 *   }
 * }
 *
 * const SafeComponent = ReactErrorBoundariesHOC(MyComponent);
 * ```
 */
declare function ReactErrorBoundariesHOC<ComponentProps extends Record<string, any> = Record<string, any>>(Component: ReactComponent<ComponentProps>): React.ForwardRefExoticComponent<React.PropsWithoutRef<ComponentProps> & React.RefAttributes<ReactComponent>>;
declare namespace ReactErrorBoundariesHOC {
    var setDefaultErrorUI: (defaultErrorUI: ReactElement) => void;
}
export default ReactErrorBoundariesHOC;
