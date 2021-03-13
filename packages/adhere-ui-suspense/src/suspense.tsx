import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Spin } from 'antd';

import { ISuspense, ISuspenseProps, ISuspenseState } from './types';

const selectorPrefix = 'adhere-ui-suspense';

/**
 * Suspense
 * @class Suspense
 * @classdesc Suspense
 *
 * 需要重写的方法
 * fetchData
 * renderInner
 * showLoading
 */
abstract class Suspense
  extends React.Component<ISuspenseProps, ISuspenseState>
  implements ISuspense {
  // 第一次
  isFirst = true;

  // 第一次加载
  isFirstLoading = false;

  static defaultProps: any;
  static propTypes: any;

  /**
   * fetchData - 加载数据
   */
  abstract fetchData(): void;

  /**
   * renderInner - 渲染实际内容
   * @return React.ReactElement
   */
  abstract renderInner(): React.ReactElement | null;

  /**
   * showLoading - 是否显示遮罩
   * @return boolean
   */
  abstract showLoading(): boolean;

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      // 第一次
      this.isFirst = true;

      // 第一次加载
      this.isFirstLoading = false;

      this.forceUpdate();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  /**
   * renderNormalFirstLoading
   * @return React.ReactElement
   */
  private static renderNormalFirstLoading() {
    const result = [];

    for (let i = 0; i < 7; i++) {
      // @ts-ignore
      result.push(<Skeleton key={i + 1} loading active avatar />);
    }

    return <div className={`${selectorPrefix}-loading`}>{result}</div>;
  }

  /**
   * renderFirstLoading - 渲染第一次Loading的UI
   * @return {React.Element}
   */
  private renderFirstLoading() {
    // @ts-ignore
    const { firstLoading } = this.props;

    if (firstLoading !== undefined && firstLoading !== null) {
      return firstLoading;
    }

    return Suspense.renderNormalFirstLoading();
  }

  /**
   * renderNormal - 渲染正常的UI
   * @return {React.Element}
   */
  private renderNormal() {
    return (
      <Spin size="large" spinning={this.showLoading()}>
        {this.renderInner()}
      </Spin>
    );
  }

  /**
   * renderDispatch
   * @return {React.Element|*}
   */
  private renderDispatch() {
    const loading = this.showLoading();

    if (this.isFirst && !this.isFirstLoading && loading) {
      this.isFirstLoading = true;
    }

    // @ts-ignore
    if (this.isFirst && this.isFirstLoading && !loading) {
      this.isFirst = false;
      this.isFirstLoading = false;
    }

    if (this.isFirst) {
      return this.renderFirstLoading();
    }
    return this.renderNormal();
  }

  render() {
    return <div className={selectorPrefix}>{this.renderDispatch()}</div>;
  }
}

Suspense.defaultProps = {
  reset: false,
  firstLoading: null,
};

Suspense.propTypes = {
  reset: PropTypes.bool,
  firstLoading: PropTypes.node,
};

export default Suspense;
