import { Skeleton } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { type ReactElement, type RefObject, createRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { ConfigProviderContext } from '@baifendian/adhere-ui-configprovider/es/types';
import Spin from '@baifendian/adhere-ui-spin';

import type { ISuspense, SuspenseProps, SuspenseState } from './types';

const selectorPrefix = 'adhere-ui-suspense';

/**
 * Suspense - 抽象基类组件
 *
 * 这是一个抽象基类，提供了 Suspense 组件的核心功能。
 * 子类需要实现以下抽象方法：
 * - fetchData: 数据获取方法
 * - renderInner: 渲染实际内容
 * - showLoading: 是否显示加载状态
 * - onFirstFetchDataBefore: 第一次数据获取前的回调
 * - onFirstFetchDataAfter: 第一次数据获取后的回调
 *
 * @template P - 属性类型，继承自 SuspenseProps
 * @template S - 状态类型，继承自 SuspenseState
 * @abstract
 */
abstract class Suspense<
    P extends SuspenseProps = SuspenseProps,
    S extends SuspenseState = SuspenseState,
  >
  extends React.PureComponent<P, S>
  implements ISuspense
{
  /** 是否为第一次加载 */
  isFirst = true;

  /** 是否为第一次加载状态 */
  isFirstLoading = false;

  /** 子组件包装器的引用 */
  protected childrenWrapRef: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement | null>();

  /** 配置提供者上下文 */
  protected _context: ConfigProviderContext | undefined = undefined;

  static displayName = 'Suspense';
  static defaultProps: any;
  static propTypes: any;

  /**
   * 数据获取方法
   * @description 抽象方法，子类必须实现
   * @param params - 可选的参数
   * @returns Promise<any> 数据获取的 Promise
   */
  abstract fetchData(params?: any): Promise<any>;

  /**
   * 渲染实际内容
   * @description 抽象方法，子类必须实现
   * @returns ReactNode 渲染的内容
   */
  abstract renderInner(): React.ReactNode;

  /**
   * 是否显示加载状态
   * @description 抽象方法，子类必须实现
   * @returns boolean 是否显示加载状态
   */
  abstract showLoading(): boolean;

  /**
   * 第一次数据获取前的回调
   * @description 抽象方法，子类必须实现
   * @returns Promise<any> 回调的 Promise
   */
  abstract onFirstFetchDataBefore(): Promise<any>;

  /**
   * 第一次数据获取后的回调
   * @description 抽象方法，子类必须实现
   * @param res - 数据获取的结果
   * @returns Promise<any> 回调的 Promise
   */
  abstract onFirstFetchDataAfter(res?: any): Promise<any>;

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: P) {
    super(props);
  }

  /**
   * 组件即将接收新属性时的生命周期方法
   * @param nextProps - 新的属性对象
   */
  componentWillReceiveProps(nextProps: P): void {
    if (nextProps.reset) {
      // 重置为第一次加载状态
      this.isFirst = true;
      this.isFirstLoading = false;
      this.forceUpdate();
    }

    // this.updateTheme();
  }

  /**
   * 组件挂载后的生命周期方法
   */
  componentDidMount(): void {
    this.updateTheme();
    this.initializeDataFetch();
  }

  /**
   * 更新主题配置
   * @private
   */
  private updateTheme(): void {
    ConfigProvider.theme({
      elRef: this.childrenWrapRef,
      group: 'normal',
      displayName: 'Suspense',
      theme: this._context?.theme || {},
    });
  }

  /**
   * 初始化数据获取
   * @private
   */
  private async initializeDataFetch(): Promise<void> {
    const fetchDataChain = async (): Promise<void> => {
      try {
        await this.onFirstFetchDataBefore();
        const res = await this.fetchData();
        await this.onFirstFetchDataAfter(res);
      } catch (error) {
        console.error('Suspense data fetch error:', error);
      }
    };

    await fetchDataChain();
  }

  /**
   * 渲染默认的首次加载状态
   * @description 创建 7 个骨架屏组件
   * @returns ReactElement 首次加载的 UI
   * @private
   * @static
   */
  private static renderNormalFirstLoading(): ReactElement {
    const result: ReactElement[] = [];

    for (let i = 0; i < 7; i++) {
      result.push(<Skeleton key={i + 1} loading active avatar />);
    }

    return <div className={`${selectorPrefix}-loading`}>{result}</div>;
  }

  /**
   * 渲染首次加载状态
   * @description 根据 props 中的 firstLoading 或默认样式渲染
   * @returns ReactElement 首次加载的 UI
   * @private
   */
  private renderFirstLoading(): ReactElement {
    const { firstLoading } = this.props;

    if (firstLoading !== undefined && firstLoading !== null) {
      return firstLoading;
    }

    return Suspense.renderNormalFirstLoading();
  }

  /**
   * 渲染正常状态
   * @description 根据是否自定义 normalLoading 来决定渲染方式
   * @returns ReactNode 正常状态的 UI
   * @private
   */
  private renderNormal(): React.ReactNode {
    const children = this.renderInner();

    // 如果自定义了 normalLoading 则使用 renderNormalLoading
    if (this.props.renderNormalLoading) {
      return this.props.renderNormalLoading?.({
        children,
        loading: this.showLoading(),
      });
    }

    // 默认的 normalLoading
    return (
      <>
        <Spin size="large" spinning={this.showLoading()} />
        {children}
      </>
    );
  }

  /**
   * 渲染分发器
   * @description 根据加载状态决定渲染首次加载还是正常状态
   * @returns ReactNode 渲染的内容
   * @private
   */
  private renderDispatch(): React.ReactNode {
    const loading = this.showLoading();

    // 更新首次加载状态
    if (this.isFirst && !this.isFirstLoading && loading) {
      this.isFirstLoading = true;
    }

    if (this.isFirst && this.isFirstLoading && !loading) {
      this.isFirst = false;
      this.isFirstLoading = false;
    }

    if (this.isFirst) {
      return this.renderFirstLoading();
    }
    return this.renderNormal();
  }

  /**
   * 渲染组件
   * @returns ReactElement 组件的 JSX
   */
  render(): ReactElement {
    const _self = this;

    const { isUseFirstFetchData = true } = this.props;

    return (
      <ConfigProvider.Context.Consumer>
        {(context) => {
          _self._context = context;

          if (_self?.childrenWrapRef?.current) {
            _self.updateTheme();
          }

          return (
            <div
              ref={this.childrenWrapRef}
              className={classNames(selectorPrefix, this.props.className)}
              style={this.props.style ?? {}}
            >
              {
                // 使用第一次加载数据
                isUseFirstFetchData && this.renderDispatch()
              }
              {
                // 不使用用第一次加载数据
                !isUseFirstFetchData && this.renderNormal()
              }
            </div>
          );
        }}
      </ConfigProvider.Context.Consumer>
    );
  }
}

// 默认属性
Suspense.defaultProps = {
  className: '',
  style: {},
  reset: false,
  firstLoading: null,
  isUseFirstFetchData: true,
};

// 属性类型验证
Suspense.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  reset: PropTypes.bool,
  firstLoading: PropTypes.node,
  renderNormalLoading: PropTypes.func,
  isUseFirstFetchData: PropTypes.bool,
};

export default Suspense;
