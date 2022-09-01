import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Suspense from './suspense';
import { ISuspenseSyncProps, ISuspenseSyncState, ISuspenseSync } from './types';

/**
 * SuspenseSync
 * @class
 * @classdesc 传数据
 */
// @ts-ignore
class SuspenseSync
  extends Suspense<ISuspenseSyncProps, ISuspenseSyncState>
  implements ISuspenseSync
{
  state = {
    loading: true,
  };

  isLoading = true;

  protected componentWillReceiveProps(nextProps) {
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

  protected showLoading(): boolean {
    return this.state.loading;
  }

  protected renderInner(): React.ReactElement | null {
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

  protected fetchData(): void {}
}

SuspenseSync.defaultProps = {};

SuspenseSync.propTypes = {
  firstLoading: PropTypes.node,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isEmpty: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
};

export default SuspenseSync;
