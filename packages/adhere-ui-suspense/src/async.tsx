import { Empty } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Suspense from './suspense';
import { SuspenseASyncProps, SuspenseASyncState } from './types';

/**
 * SuspenseAsync
 * @class
 * @classdesc 调用接口
 */
class SuspenseAsync extends Suspense<SuspenseASyncProps, SuspenseASyncState> {
  state = {
    loading: false,
  };

  showLoading(): boolean {
    return this.state.loading;
  }

  renderInner(): React.ReactElement | null {
    const { isEmpty, renderEmpty, children } = this.props;

    return (
      <ConditionalRender
        conditional={!isEmpty()}
        noMatch={() => (renderEmpty ? renderEmpty() : <Empty />)}
      >
        {() => children}
      </ConditionalRender>
    );
  }

  reset(): Promise<any> {
    return new Promise<any>((resolve) => {
      // 第一次
      this.isFirst = true;

      // 第一次加载
      this.isFirstLoading = false;

      this.fetchData()
        .then((res) => resolve(res))
        .catch(() => resolve(null));
    });
  }

  fetchData(): Promise<any> {
    return new Promise<any>((resolve) => {
      if (!this.props.fetchData) {
        this.setState({
          loading: false,
        });

        resolve(null);
        return;
      }

      this.setState({
        loading: true,
      });

      return this?.props
        ?.fetchData?.()
        ?.then((res) => {
          this.setState(
            {
              loading: false,
            },
            () => resolve(res),
          );
        })
        ?.catch(() => {
          this.setState(
            {
              loading: false,
            },
            () => resolve(null),
          );
        });
    });
  }
}

SuspenseAsync.defaultProps = {};

SuspenseAsync.propTypes = {
  firstLoading: PropTypes.node,
  isEmpty: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
  fetchData: PropTypes.func,
};

export default SuspenseAsync;
