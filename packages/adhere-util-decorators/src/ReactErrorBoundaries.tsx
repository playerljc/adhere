import React from 'react';
import { Empty } from 'antd';

import intl from '@baifendian/adhere-util-intl';

import IReactErrorBoundariesState from './types';

import errorIcon from './component_error.svg';

/**
 * React的边界错误捕获
 * @param Component
 */
export default (Component) => {
  class ReactErrorBoundaries extends React.Component<any, IReactErrorBoundariesState> {
    state = {
      hasError: false,
    };

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
    }

    render() {
      if (this.state.hasError) {
        return (
          <Empty
            image={errorIcon}
            imageStyle={{
              height: 60,
            }}
            description={intl.v('糟糕！，出了些问题')}
          />
        );
      }

      const { ...rest } = this.props;

      return <Component {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <ReactErrorBoundaries {...props} forwardedRef={ref} />;
  });
};
