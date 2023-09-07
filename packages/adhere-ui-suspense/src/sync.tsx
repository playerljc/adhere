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

    if (this.isLoading && this.isDataDirty(data, nextProps.data)) {
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

  isDataDirty(data, nextData) {
    // if (typeof data !== typeof nextData) return true;
    //
    // if (Util.isObject(data) && Util.isObject(nextData)) {
    //   return !Object.is(data, nextData);
    // }
    //
    // if (Util.isArray(data) && Util.isArray(nextData)) {
    //   if (data.length !== nextData.length) return true;
    //
    //   return data.some((t1, index) => !Object.is(t1, nextData[index]));
    // }
    //
    // return false;
    return !Object.is(data, nextData);
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
  isEmpty: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
  data: PropTypes.object,
};

export default SuspenseSync;
