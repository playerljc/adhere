import { Skeleton } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import Spin from '@baifendian/adhere-ui-spin';

import { ISuspense, SuspenseProps, SuspenseState } from './types';

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
abstract class Suspense<
    P extends SuspenseProps = SuspenseProps,
    S extends SuspenseState = SuspenseState,
  >
  extends React.PureComponent<P, S>
  implements ISuspense
{
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

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      // console.log('suspense componentWillReceiveProps', nextProps.reset);

      // 第一次
      this.isFirst = true;

      // 第一次加载
      this.isFirstLoading = false;

      this.forceUpdate();
    }
  }

  componentDidMount() {
    // console.log('suspense mount');
    this?.fetchData?.();
  }

  /**
   * renderNormalFirstLoading
   * @return React.ReactElement
   */
  private static renderNormalFirstLoading() {
    const result: ReactElement[] = [];

    for (let i = 0; i < 7; i++) {
      result.push(<Skeleton key={i + 1} loading active avatar />);
    }

    return <div className={`${selectorPrefix}-loading`}>{result}</div>;
  }

  /**
   * renderFirstLoading - 渲染第一次Loading的UI
   * @return {React.Element}
   */
  private renderFirstLoading() {
    const { firstLoading } = this.props;

    if (firstLoading !== undefined && firstLoading !== null) {
      // console.log('renderFirstLoading');
      return firstLoading;
    }

    return Suspense.renderNormalFirstLoading();
  }

  /**
   * renderNormal - 渲染正常的UI
   * @return {React.Element}
   */
  private renderNormal() {
    const children = this.renderInner();

    // 如果自定义了normalLoading则使用renderNormalLoading
    if (this.props.renderNormalLoading) {
      return this.props.renderNormalLoading?.({
        children,
        loading: this.showLoading(),
      });
    }

    // 缺省的normalLoading
    return (
      <>
        <Spin size="large" spinning={this.showLoading()}></Spin>
        {children}
      </>
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

    if (this.isFirst && this.isFirstLoading && !loading) {
      this.isFirst = false;
      this.isFirstLoading = false;
    }

    // console.log('suspense loading', loading);
    // console.log('suspense isFirst', this.isFirst);
    // console.log('suspense isFirstLoading', this.isFirstLoading);

    if (this.isFirst) {
      return this.renderFirstLoading();
    }
    return this.renderNormal();
  }

  render() {
    return (
      <div
        className={classNames(selectorPrefix, this.props.className ?? '')}
        style={this.props.style ?? {}}
      >
        {this.renderDispatch()}
      </div>
    );
  }
}

Suspense.defaultProps = {
  className: '',
  style: {},
  reset: false,
  firstLoading: null,
};

Suspense.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  reset: PropTypes.bool,
  firstLoading: PropTypes.node,
  renderNormalLoading: PropTypes.func,
};

// 前女友閨密

export default Suspense;
