import { Empty } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Suspense from './suspense';
import { ISuspenseSync, SuspenseSyncProps, SuspenseSyncState } from './types';

/**
 * SuspenseSync
 * @class
 * @classdesc 传数据
 */
class SuspenseSync extends Suspense<SuspenseSyncProps, SuspenseSyncState> implements ISuspenseSync {
  state = {
    loading: true,
  };

  isLoading = true;

  componentWillReceiveProps(nextProps) {
    const { data } = this.props;

    if (this.isLoading && JSON.stringify(nextProps.data || []) !== JSON.stringify(data || [])) {
      this.setState(
        {
          loading: false,
        },
        () => {
          this.isLoading = false;
        },
      );
    }
  }

  reset(): Promise<void> {
    return new Promise<void>((resolve) => {
      // 第一次
      this.isFirst = true;

      // 第一次加载
      this.isFirstLoading = false;

      this.isLoading = true;

      this.setState(
        {
          loading: true,
        },
        () => resolve(),
      );
    });
  }

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

  fetchData(): void {}
}

SuspenseSync.defaultProps = {};

SuspenseSync.propTypes = {
  firstLoading: PropTypes.node,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isEmpty: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
};

export default SuspenseSync;
