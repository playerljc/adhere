import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Card, { cardPropTypes } from './Card';
import Message from './Message';
import Constant from './constant';

import { IPlayGroundProps, IPlayGroundState } from './types';

const selectPrefix = 'adhere-ui-playground';

/**
 * APlayGround
 * @class APlayGround
 * @classdesc APlayGround
 */
abstract class APlayGround extends React.Component<IPlayGroundProps, IPlayGroundState> {
  static propTypes: { cardProps: any; expand: any; id: any; isActive: any; config: any };

  static defaultProps: IPlayGroundProps;

  protected isFirst: boolean = true;

  protected clipboardRef = React.createRef<HTMLElement>();

  // @ts-ignore
  protected state = {
    expand: this.props.expand,
  };

  protected actionConfig = [this.renderClipboardAction, this.renderExpandAction];

  /**
   * renderExpandAction
   * @description - 渲染代码视图
   * @return React.ReactElement
   */
  protected abstract renderCodeView(): React.ReactElement;

  /**
   * getClipboardText
   * @description - 获取复制的数据
   * @return Promise<string>
   */
  protected abstract getClipboardText(e: React.MouseEvent): Promise<string>;

  protected componentWillReceiveProps(nextProps) {
    this.setState({
      expand: nextProps.expand,
    });
  }

  componentWillUpdate(
    nextProps: Readonly<IPlayGroundProps>,
    nextState: Readonly<IPlayGroundState>,
    nextContext: any,
  ) {
    if (this.isFirst && nextState.expand) {
      this.isFirst = false;
    }
  }

  /**
   * renderAction
   */
  protected renderAction() {
    return this.actionConfig.map((config) => config.call(this));
  }

  /**
   * renderClipboardAction
   */
  protected renderClipboardAction() {
    return (
      <div
        // @ts-ignore
        ref={this.clipboardRef}
        onClick={(e) => {
          this.getClipboardText(e).then((text) => {
            copy(text);
            Message.success(Intl.v('复制成功'));
          });
        }}
      >
        <img
          title={Intl.v('复制')}
          className={`${selectPrefix}-action-btn`}
          src={Constant.CopyOutlined}
          alt={Intl.v('复制')}
        />
      </div>
    );
  }

  /**
   * renderExpandAction
   * @return {*}
   */
  protected renderExpandAction() {
    const { expand } = this.state;

    return (
      <ConditionalRender
        conditional={expand}
        // @ts-ignore
        noMatch={() => (
          <div
            onClick={() => {
              this.setState({ expand: true });
            }}
          >
            <img
              title={Intl.v('收起')}
              className={`${selectPrefix}-action-btn`}
              src={Constant.DownSquareOutlined}
              alt={Intl.v('收起')}
            />
          </div>
        )}
      >
        {() => (
          <div
            onClick={() => {
              this.setState({ expand: false });
            }}
          >
            <img
              title={Intl.v('展开')}
              className={`${selectPrefix}-action-btn`}
              src={Constant.UpSquareOutlined}
              alt={Intl.v('展开')}
            />
          </div>
        )}
      </ConditionalRender>
    );
  }

  /**
   * render
   * @return {*}
   */
  protected render() {
    const { children, cardProps, isActive, id } = this.props;

    const idProps = {};
    // @ts-ignore
    id && (idProps.id = id);

    return (
      <div
        {...idProps}
        className={classNames(selectPrefix, isActive ? `${selectPrefix}-active` : '')}
      >
        {/* @ts-ignore*/}
        <Card actions={this.renderAction()} {...(cardProps || {})}>
          {children}
        </Card>
        {this.renderCodeView()}
      </div>
    );
  }
}

export const APlayGroundDefaultProps: IPlayGroundProps = {
  id: undefined,
  // @ts-ignore
  cardProps: null,
  isActive: false,
  expand: false,
};

export const APlayGroundPropTypes = {
  // @ts-ignore
  id: PropTypes.string,
  // @ts-ignore
  cardProps: PropTypes.shape(cardPropTypes),
  isActive: PropTypes.bool,
  expand: PropTypes.bool,
};

APlayGround.defaultProps = APlayGroundDefaultProps;

// @ts-ignore
APlayGround.propTypes = APlayGroundPropTypes;

export default APlayGround;
