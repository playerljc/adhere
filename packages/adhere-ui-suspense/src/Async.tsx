import { Empty } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Suspense from './Suspense';
import type { SuspenseASyncProps, SuspenseASyncState } from './types';

/**
 * SuspenseAsync
 * @class
 * @classdesc 调用接口
 */
class SuspenseAsync extends Suspense<SuspenseASyncProps, SuspenseASyncState> {
  static displayName = 'SuspenseAsync';

  state = {
    loading: false,
  };

  showLoading(): boolean {
    return this.state.loading;
  }

  renderInner(): React.ReactNode {
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
      // console.log('async reset');

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
      // console.log('suspense fetchData loading', this.showLoading());
      // console.log('suspense fetchData isFirst', this.isFirst);
      // console.log('suspense fetchData isFirstLoading', this.isFirstLoading);

      if (!this.props.fetchData) {
        this.setState({
          loading: false,
        });

        resolve(null);
        return;
      }

      this.setState(
        {
          loading: true,
        },
        () => {
          this?.props
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
        },
      );
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
