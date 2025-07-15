import { Empty } from 'antd';
import PropTypes from 'prop-types';
import React, { type ReactElement } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Suspense from './Suspense';
import type { SuspenseASyncProps, SuspenseASyncState } from './types';

/**
 * SuspenseAsync - 异步 Suspense 组件
 * 
 * 用于处理异步数据加载的 Suspense 组件，通过 fetchData 函数获取数据。
 * 适用于需要从服务器或异步源获取数据的场景。
 * 
 * @class SuspenseAsync
 * @extends {Suspense<SuspenseASyncProps, SuspenseASyncState>}
 */
class SuspenseAsync extends Suspense<SuspenseASyncProps, SuspenseASyncState> {
  static displayName = 'SuspenseAsync';

  /** 组件状态 */
  state: SuspenseASyncState = {
    loading: false,
  };

  /**
   * 是否显示加载状态
   * @returns boolean 当前加载状态
   */
  showLoading(): boolean {
    return this.state.loading;
  }

  /**
   * 渲染内部内容
   * @description 根据数据是否为空来决定渲染内容或空状态
   * @returns ReactElement | null 渲染的内容
   */
  renderInner(): ReactElement | null {
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

  /**
   * 重置组件状态
   * @description 重置组件到初始加载状态并重新获取数据
   * @returns Promise<any> 返回数据获取的 Promise
   */
  reset(): Promise<any> {
    return new Promise<any>((resolve) => {
      // 重置为第一次加载状态
      this.isFirst = true;
      this.isFirstLoading = false;

      this.fetchData()
        .then((res) => resolve(res))
        .catch(() => resolve(null));
    });
  }

  /**
   * 数据获取方法
   * @description 调用 props 中的 fetchData 函数获取数据
   * @returns Promise<any> 返回数据获取的 Promise
   */
  fetchData(): Promise<any> {
    return new Promise<any>((resolve) => {
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
          this.props
            .fetchData?.()
            ?.then((res) => {
              this.setState(
                {
                  loading: false,
                },
                () => resolve(res),
              );
            })
            ?.catch((error) => {
              console.error('SuspenseAsync fetchData error:', error);
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

  /**
   * 第一次数据获取后的回调
   * @param res - 数据获取的结果
   * @returns Promise<any> 返回一个已解析的 Promise
   */
  onFirstFetchDataAfter(res: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  /**
   * 第一次数据获取前的回调
   * @returns Promise<any> 返回一个已解析的 Promise
   */
  onFirstFetchDataBefore(): Promise<any> {
    return Promise.resolve(undefined);
  }
}

// 默认属性
SuspenseAsync.defaultProps = {};

// 属性类型验证
SuspenseAsync.propTypes = {
  firstLoading: PropTypes.node,
  isEmpty: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
  fetchData: PropTypes.func,
};

export default SuspenseAsync;
