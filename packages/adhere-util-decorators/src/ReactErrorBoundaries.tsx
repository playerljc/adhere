import { Empty } from 'antd';
import React from 'react';

import Util from '@baifendian/adhere-util';
import intl from '@baifendian/adhere-util-intl';

import { IReactErrorBoundariesState } from './types';

// import errorIcon from './component_error.svg';

const errorIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyNzM0NTgwMDkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzODMiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1OC4zMjUzODYgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg0Ij48L3BhdGg+PHBhdGggZD0iTTY2NS40NTY1MTIgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg1Ij48L3BhdGg+PHBhdGggZD0iTTUxMS44OTA5NDkgMGMyNjguNTYwNTc1IDAgNDg2LjI5MDk0OSAyMTcuNzMwMzc0IDQ4Ni4yOTA5NSA0ODYuMjkwOTQ5IDAgMTE5LjYyNzU3NC00My40NTkwNTQgMjMyLjQ3MjY2OC0xMjAuMjY3NDMxIDMyMC4xODQxOTlsLTcuNzAzODcyIDguNTc0MDc3Vjk3Mi41ODE4OTlhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS00Ny4zNzQ5NzYgNTEuMDYwNTQ5bC0zLjgzOTEzOSAwLjEyNzk3MWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTUxLjAzNDk1Ni00Ny4zNzQ5NzZsLTAuMTI3OTcxLTMuODM5MTM5di0xNzguMDg0ODY0YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgMTUuMDc1MDItMzYuMjY3MDY3QTM4Mi40ODA2MjkgMzgyLjQ4MDYyOSAwIDAgMCA4OTUuODA0ODU3IDQ4Ni4yOTA5NDljMC0yMTIuMDIyODU0LTE3MS44OTEwNTMtMzgzLjkxMzkwNy0zODMuOTEzOTA4LTM4My45MTM5MDctMjEyLjAyMjg1NCAwLTM4My45MTM5MDcgMTcxLjg5MTA1My0zODMuOTEzOTA3IDM4My45MTM5MDcgMCAxMDMuNDc3NTk1IDQxLjA3ODc4OCAyMDAuMzI2Mjc3IDExMi45MjE4NzcgMjcxLjkzOTAxOGE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxIDE0Ljg0NDY3MSAzMS43MzY4ODNsMC4yMDQ3NTQgNC41MzAxODRWOTcyLjU4MTg5OWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTEwMi4yNDkwNyAzLjgzOTEzOUwxNTMuNTcxMzAyIDk3Mi41ODE4OTl2LTE1Ny41MzI2NzRBNDg0LjY1MjkxNyA0ODQuNjUyOTE3IDAgMCAxIDI1LjcyNzk3MSA0OTcuNTAxMjM1TDI1LjYgNDg2LjI5MDk0OUMyNS42IDIxNy43MzAzNzQgMjQzLjMzMDM3NCAwIDUxMS44OTA5NDkgMHoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODYiPjwvcGF0aD48cGF0aCBkPSJNNTExLjg5MDk0OSA3OTMuNDIyMDc1YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMDYwNTUgNDcuMzQ5MzgyTDU2My4wNzk0NyA4NDQuNjEwNTk2djEyNy45NzEzMDNhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS0xMDIuMjQ5MDcgMy44MzkxMzlMNDYwLjcwMjQyOCA5NzIuNTgxODk5di0xMjcuOTcxMzAzYTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMTg4NTIxLTUxLjE4ODUyMXoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODciPjwvcGF0aD48L3N2Zz4=';

// 缺省的错误UI
let DEFAULT_ERROR_UI = (
  <Empty
    image={errorIcon}
    imageStyle={{
      height: 60,
    }}
    description={intl.v('糟糕！，出了些问题')}
  />
);

/**
 * React的边界错误捕获
 * @param Component
 */
const ReactErrorBoundariesHOC = (Component) => {
  class ReactErrorBoundaries extends React.Component<any, IReactErrorBoundariesState> {
    state = {
      hasError: false,
    };

    refIns = null;

    static getDerivedStateFromError(error) {
      console.error(error);
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return {
        hasError: true,
      };
    }

    componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
      console.error(error, errorInfo);
      if (String(error).includes('Loading chunk')) {
        const hash = +new Date();
        window.location.href = `${window.location.href}${
          window.location.search ? '&' : '?'
        }=_ijt=${hash}`;
      }
    }

    private renderErrorUI(): React.ReactElement {
      const { refIns } = this;

      // 如果Component的实例提供了getReactErrorBoundariesErrorUI方法则可以自定义错误UI显示
      if (
        refIns &&
        // @ts-ignore
        refIns.current &&
        // @ts-ignore
        refIns.current.getReactErrorBoundariesErrorUI &&
        // @ts-ignore
        Util.isFunction(refIns.current.getReactErrorBoundariesErrorUI)
      ) {
        // @ts-ignore
        return refIns.current.getReactErrorBoundariesErrorUI();
      }

      if (
        'getReactErrorBoundariesErrorUI' in Component &&
        Util.isFunction(Component.getReactErrorBoundariesErrorUI)
      ) {
        // 如果Component提供了getReactErrorBoundariesErrorUI方法则可以自定义错误UI显示
        return Component.getReactErrorBoundariesErrorUI();
      }

      // 如果没有自定义错误UI则显示全局错误UI
      return DEFAULT_ERROR_UI;
    }

    render() {
      if (this.state.hasError) {
        return this.renderErrorUI();
      }

      const { forwardedRef, ...props } = this.props;

      const allProps = {
        ...props,
      };

      // 如果 Component 是 FunctionComponent 就不赋值ref了
      if (Util.isArray(Component)) {
        if (Component.prototype.isReactComponent) {
          this.refIns = forwardedRef || React.createRef();
          allProps.ref = this.refIns;
        }
      } else if (Util.isObject(Component)) {
        if (Component.constructor.prototype.isReactComponent) {
          this.refIns = forwardedRef || React.createRef();
          allProps.ref = this.refIns;
        }
      }

      return <Component {...allProps} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <ReactErrorBoundaries {...props} forwardedRef={ref} />;
  });
};

/**
 * setDefaultErrorUI - 设置缺省的错误UI
 * @param defaultErrorUI
 */
ReactErrorBoundariesHOC.setDefaultErrorUI = function (defaultErrorUI: React.ReactElement) {
  DEFAULT_ERROR_UI = defaultErrorUI;
};

export default ReactErrorBoundariesHOC;
