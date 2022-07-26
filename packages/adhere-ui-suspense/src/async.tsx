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

  reset(): Promise<void> {
    return new Promise<void>((resolve) => {
      // 第一次
      this.isFirst = true;

      // 第一次加载
      this.isFirstLoading = false;

      this.fetchData()
        .then(() => resolve())
        .catch(() => resolve());
    });
  }

  fetchData(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.props.fetchData) {
        this.setState({
          loading: false,
        });

        resolve();
        return;
      }

      this.setState({
        loading: true,
      });

      return this?.props
        ?.fetchData?.()
        ?.then(() => {
          this.setState(
            {
              loading: false,
            },
            () => resolve(),
          );
        })
        ?.catch(() => {
          this.setState(
            {
              loading: false,
            },
            () => resolve(),
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
