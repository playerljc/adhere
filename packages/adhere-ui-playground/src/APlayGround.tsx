import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { Requireable } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Card, { cardPropTypes } from './Card';
import Message from './Message';
import Constant from './constant';
import type { PlayGroundProps, PlayGroundState } from './types';

export const selectPrefix = 'adhere-ui-playground';

/**
 * PlayGround抽象基类
 * @abstract APlayGround
 * @description PlayGround组件的抽象基类，提供通用的功能实现，包括代码展示、复制、展开/收起等功能
 * @template P - 属性类型，继承自PlayGroundProps
 * @template S - 状态类型，继承自PlayGroundState
 * @example
 * ```tsx
 * class MyPlayGround extends APlayGround<MyProps, MyState> {
 *   protected renderCodeView(): React.ReactElement {
 *     return <div>代码视图</div>;
 *   }
 *   
 *   protected getClipboardText(): Promise<string> {
 *     return Promise.resolve('代码内容');
 *   }
 * }
 * ```
 */
abstract class APlayGround<
  P extends PlayGroundProps = PlayGroundProps,
  S extends PlayGroundState = PlayGroundState,
> extends React.PureComponent<P, S> {
  /** 是否首次渲染标识 */
  protected isFirst: boolean = true;

  /** 剪贴板引用 */
  protected clipboardRef = React.createRef<HTMLDivElement>();

  /** 操作配置列表 */
  protected actionConfig = [this.renderClipboardAction, this.renderExpandAction];

  /** 默认属性 */
  static defaultProps: PlayGroundProps;
  
  /** 属性类型定义 */
  static propTypes: {
    id: Requireable<string>;
    cardProps: Requireable<object>;
    expand: Requireable<boolean>;
    isActive: Requireable<boolean>;
  };

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: P) {
    super(props);

    this.state = {
      expand: this.props.expand,
      config: [],
      activeKey: '',
    } as unknown as S;
  }

  /**
   * 组件即将接收新属性时的处理
   * @param nextProps - 新的属性
   */
  componentWillReceiveProps(nextProps: Readonly<P>): void {
    this.setState({
      expand: nextProps.expand,
    } as S);
  }

  /**
   * 组件即将更新时的处理
   * @param nextProps - 新的属性
   * @param nextState - 新的状态
   * @param nextContext - 新的上下文
   */
  componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): void {
    if (this.isFirst && nextState.expand) {
      this.isFirst = false;
    }
  }

  /**
   * 渲染代码视图
   * @abstract renderCodeView
   * @description 子类必须实现的抽象方法，用于渲染代码视图
   * @returns React.ReactElement 代码视图的React元素
   */
  protected abstract renderCodeView(): React.ReactElement;

  /**
   * 获取剪贴板文本
   * @abstract getClipboardText
   * @description 子类必须实现的抽象方法，用于获取要复制的文本内容
   * @param e - 点击事件对象
   * @returns Promise<string> 要复制的文本内容
   */
  protected abstract getClipboardText(e: React.MouseEvent): Promise<string>;

  /**
   * 渲染操作按钮
   * @protected renderAction
   * @description 渲染所有操作按钮，包括复制和展开/收起按钮
   * @returns ReactNode[] 操作按钮数组
   */
  protected renderAction(): React.ReactNode[] {
    return this.actionConfig.map((config) => config.call(this));
  }

  /**
   * 渲染复制按钮
   * @protected renderClipboardAction
   * @description 渲染复制到剪贴板的操作按钮
   * @returns React.ReactNode 复制按钮元素
   */
  protected renderClipboardAction(): React.ReactNode {
    return (
      <div
        key="clipboard"
        className={`${selectPrefix}-action`}
        onClick={this.handleClipboardClick}
        title={Intl.get('copy')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleClipboardClick(e as any);
          }
        }}
      >
        <img src={Constant.CopyOutlined} alt="copy" />
      </div>
    );
  }

  /**
   * 渲染展开/收起按钮
   * @protected renderExpandAction
   * @description 渲染展开或收起代码视图的操作按钮
   * @returns React.ReactNode 展开/收起按钮元素
   */
  protected renderExpandAction(): React.ReactNode {
    const { expand } = this.state;

    return (
      <div
        key="expand"
        className={`${selectPrefix}-action`}
        onClick={this.handleExpandClick}
        title={expand ? Intl.get('collapse') : Intl.get('expand')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleExpandClick(e as any);
          }
        }}
      >
        <img
          src={expand ? Constant.DownSquareOutlined : Constant.UpSquareOutlined}
          alt={expand ? 'collapse' : 'expand'}
        />
      </div>
    );
  }

  /**
   * 处理复制按钮点击事件
   * @protected handleClipboardClick
   * @description 处理复制按钮的点击事件，将代码内容复制到剪贴板
   * @param e - 点击事件对象
   */
  protected handleClipboardClick = async (e: React.MouseEvent): Promise<void> => {
    try {
      const text = await this.getClipboardText(e);
      
      if (copy(text)) {
        Message.success(Intl.get('copy_success'));
      } else {
        console.error('Copy failed');
      }
    } catch (error) {
      console.error('Copy error:', error);
    }
  };

  /**
   * 处理展开/收起按钮点击事件
   * @protected handleExpandClick
   * @description 处理展开/收起按钮的点击事件，切换代码视图的显示状态
   * @param e - 点击事件对象
   */
  protected handleExpandClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    this.setState((prevState) => ({
      expand: !prevState.expand,
    } as S));
  };

  /**
   * 渲染组件
   * @returns JSX.Element 组件的渲染结果
   */
  render(): JSX.Element {
    const { children, cardProps, isActive, id } = this.props;

    const idProps = id ? { id } : {};

    return (
      <div
        {...idProps}
        className={classNames(selectPrefix, {
          [`${selectPrefix}-active`]: isActive,
        })}
      >
        <Card actions={this.renderAction()} {...(cardProps ?? {})}>
          {children}
        </Card>

        {this.renderCodeView()}
      </div>
    );
  }
}

/**
 * 默认属性
 * @constant APlayGroundDefaultProps
 * @description APlayGround组件的默认属性配置
 */
export const APlayGroundDefaultProps: PlayGroundProps = {
  codeText: '',
  id: '',
  cardProps: {},
  isActive: false,
  expand: false,
};

/**
 * 属性类型定义
 * @constant APlayGroundPropTypes
 * @description APlayGround组件的PropTypes定义
 */
export const APlayGroundPropTypes = {
  id: PropTypes.string,
  cardProps: PropTypes.shape(cardPropTypes),
  isActive: PropTypes.bool,
  expand: PropTypes.bool,
};

APlayGround.defaultProps = APlayGroundDefaultProps;
APlayGround.propTypes = APlayGroundPropTypes;

export default APlayGround;
