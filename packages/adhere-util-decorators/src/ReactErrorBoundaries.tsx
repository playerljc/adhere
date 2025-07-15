import { Empty } from 'antd';
import classNames from 'classnames';
import React, {
  type ErrorInfo,
  type ForwardedRef,
  type RefObject,
  createRef,
  forwardRef,
} from 'react';
import type { ReactElement } from 'react';

import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import type { IReactErrorBoundariesState, ReactComponent } from './types';

const selectorPrefix = 'adhere-util-decorators';

// 错误图标SVG的base64编码
const errorIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyNzM0NTgwMDkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzODMiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1OC4zMjUzODYgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg0Ij48L3BhdGg+PHBhdGggZD0iTTY2NS40NTY1MTIgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg1Ij48L3BhdGg+PHBhdGggZD0iTTUxMS44OTA5NDkgMGMyNjguNTYwNTc1IDAgNDg2LjI5MDk0OSAyMTcuNzMwMzc0IDQ4Ni4yOTA5NSA0ODYuMjkwOTQ5IDAgMTE5LjYyNzU3NC00My40NTkwNTQgMjMyLjQ3MjY2OC0xMjAuMjY3NDMxIDMyMC4xODQxOTlsLTcuNzAzODcyIDguNTc0MDc3Vjk3Mi41ODE4OTlhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS00Ny4zNzQ5NzYgNTEuMDYwNTQ5bC0zLjgzOTEzOSAwLjEyNzk3MWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTUxLjAzNDk1Ni00Ny4zNzQ5NzZsLTAuMTI3OTcxLTMuODM5MTM5di0xNzguMDg0ODY0YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgMTUuMDc1MDItMzYuMjY3MDY3QTM4Mi40ODA2MjkgMzgyLjQ4MDYyOSAwIDAgMCA4OTUuODA0ODU3IDQ4Ni4yOTA5NDljMC0yMTIuMDIyODU0LTE3MS44OTEwNTMtMzgzLjkxMzkwNy0zODMuOTEzOTA4LTM4My45MTM5MDctMjEyLjAyMjg1NCAwLTM4My45MTM5MDcgMTcxLjg5MTA1My0zODMuOTEzOTA3IDM4My45MTM5MDcgMCAxMDMuNDc3NTk1IDQxLjA3ODc4OCAyMDAuMzI2Mjc3IDExMi45MjE4NzcgMjcxLjkzOTAxOGE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxIDE0Ljg0NDY3MSAzMS43MzY4ODNsMC4yMDQ3NTQgNC41MzAxODRWOTcyLjU4MTg5OWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTEwMi4yNDkwNyAzLjgzOTEzOUwxNTMuNTcxMzAyIDk3Mi41ODE4OTl2LTE1Ny41MzI2NzRBNDg0LjY1MjkxNyA0ODQuNjUyOTE3IDAgMCAxIDI1LjcyNzk3MSA0OTcuNTAxMjM1TDI1LjYgNDg2LjI5MDk0OUMyNS42IDIxNy43MzAzNzQgMjQzLjMzMDM3NCAwIDUxMS44OTA5NDkgMHoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODYiPjwvcGF0aD48cGF0aCBkPSJNNTExLjg5MDk0OSA3OTMuNDIyMDc1YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMDYwNTUgNDcuMzQ5MzgyTDU2My4wNzk0NyA4NDQuNjEwNTk2djEyNy45NzEzMDNhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS0xMDIuMjQ5MDcgMy44MzkxMzlMNDYwLjcwMjQyOCA5NzIuNTgxODk5di0xMjcuOTcxMzAzYTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMTg4NTIxLTUxLjE4ODUyMXoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODciPjwvcGF0aD48L3N2Zz4=';

// 缺省的错误UI
let DEFAULT_ERROR_UI: ReactElement = (
  <div className={classNames(`${selectorPrefix}-default-error-ui-wrapper`)}>
    <Empty
      image={errorIcon}
      styles={{
        image: {
          height: 60,
        },
      }}
      description={Intl.get('error_occurred')}
    />
  </div>
);

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
function ReactErrorBoundariesHOC<ComponentProps extends Record<string, any> = Record<string, any>>(
  Component: ReactComponent<ComponentProps>,
) {
  interface ReactErrorBoundariesProps {
    forwardedRef?: ForwardedRef<ReactComponent>;
    [key: string]: any;
  }

  class ReactErrorBoundaries extends React.Component<
    ReactErrorBoundariesProps,
    IReactErrorBoundariesState
  > {
    state: IReactErrorBoundariesState = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    };

    refIns: RefObject<any> | null = null;

    /**
     * 从错误中获取派生状态
     * @param error - 捕获的错误
     * @returns 更新后的状态
     */
    static getDerivedStateFromError(error: Error): Partial<IReactErrorBoundariesState> {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return {
        hasError: true,
      };
    }

    /**
     * 错误边界捕获到错误时的回调
     * @param error - 错误对象
     * @param errorInfo - React错误信息
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      this.setState({
        error,
        errorInfo,
      });

      // 处理代码分割加载错误，自动刷新页面
      if (String(error).includes('Loading chunk')) {
        const hash = +new Date();
        const separator = window.location.search ? '&' : '?';
        window.location.href = `${window.location.href}${separator}_ijt=${hash}`;
      }
    }

    /**
     * 渲染错误UI
     * @returns React元素
     */
    private renderErrorUI(): ReactElement {
      const { refIns } = this;

      // 优先使用组件实例的自定义错误UI
      if (
        refIns?.current?.getReactErrorBoundariesErrorUI &&
        Util.isFunction(refIns.current.getReactErrorBoundariesErrorUI)
      ) {
        return refIns.current.getReactErrorBoundariesErrorUI({
          error: this.state.error,
          errorInfo: this.state.errorInfo,
        });
      }

      // 其次使用组件类的自定义错误UI
      if (
        Component &&
        'getReactErrorBoundariesErrorUI' in Component &&
        Util.isFunction(Component.getReactErrorBoundariesErrorUI)
      ) {
        return Component.getReactErrorBoundariesErrorUI?.({
          error: this.state.error,
          errorInfo: this.state.errorInfo,
        }) as ReactElement;
      }

      // 最后使用全局默认错误UI
      return DEFAULT_ERROR_UI;
    }

    render(): ReactElement {
      if (this.state.hasError) {
        return this.renderErrorUI();
      }

      const { forwardedRef, ...props } = this.props;

      const allProps: Record<string, any> = {
        ...props,
      };

      // 为类组件添加ref引用
      if (Util.isArray(Component)) {
        if (Component.prototype?.isReactComponent) {
          this.refIns = createRef();
          allProps.ref = this.refIns;
        }
      } else if (Util.isObject(Component)) {
        if (Component.constructor?.prototype?.isReactComponent) {
          this.refIns = createRef();
          allProps.ref = this.refIns;
        }
      }

      // 使用类型断言来解决泛型约束问题
      return React.createElement(Component as any, allProps);
    }
  }

  return forwardRef<ReactComponent, ComponentProps>((props, ref) => {
    return <ReactErrorBoundaries {...props} forwardedRef={ref} />;
  });
}

/**
 * 设置默认错误UI
 *
 * @param defaultErrorUI - 默认的错误UI组件
 *
 * @example
 * ```typescript
 * ReactErrorBoundariesHOC.setDefaultErrorUI(
 *   <div className="custom-error">
 *     <h3>出错了！</h3>
 *     <p>请稍后重试</p>
 *   </div>
 * );
 * ```
 */
ReactErrorBoundariesHOC.setDefaultErrorUI = function (defaultErrorUI: ReactElement): void {
  DEFAULT_ERROR_UI = defaultErrorUI;
};

export default ReactErrorBoundariesHOC;
