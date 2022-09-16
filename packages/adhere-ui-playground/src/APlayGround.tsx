import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { Requireable } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Card, { cardPropTypes } from './Card';
import Message from './Message';
import Constant from './constant';
import { PlayGroundProps, PlayGroundState } from './types';

const selectPrefix = 'adhere-ui-playground';

/**
 * APlayGround
 * @class APlayGround
 * @classdesc APlayGround
 */
abstract class APlayGround<
  P extends PlayGroundProps = PlayGroundProps,
  S extends PlayGroundState = PlayGroundState,
> extends React.Component<P, S> {
  protected isFirst: boolean = true;

  protected clipboardRef = React.createRef<HTMLDivElement>();

  protected actionConfig = [this.renderClipboardAction, this.renderExpandAction];

  static defaultProps: PlayGroundProps;
  static propTypes: {
    cardProps: any;
    expand: Requireable<boolean>;
    id: any;
    isActive: Requireable<boolean>;
  };

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

  constructor(props) {
    super(props);

    // @ts-ignore
    this.state = {
      expand: this.props.expand,
      config: [],
      activeKey: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      expand: nextProps.expand,
    });
  }

  componentWillUpdate(
    nextProps: Readonly<PlayGroundProps>,
    nextState: Readonly<PlayGroundState>,
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
        conditional={!!expand}
        noMatch={() => (
          <div onClick={() => this.setState({ expand: true })}>
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
          <div onClick={() => this.setState({ expand: false })}>
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
  render() {
    const { children, cardProps, isActive, id } = this.props;

    const idProps = {
      id,
    };

    return (
      <div
        {...idProps}
        className={classNames(selectPrefix, isActive ? `${selectPrefix}-active` : '')}
      >
        <Card actions={this.renderAction()} {...(cardProps || {})}>
          {children}
        </Card>
        {this.renderCodeView()}
      </div>
    );
  }
}

export const APlayGroundDefaultProps: PlayGroundProps = {
  codeText: '',
  id: '',
  cardProps: {},
  isActive: false,
  expand: false,
};

export const APlayGroundPropTypes = {
  id: PropTypes.string,
  cardProps: PropTypes.shape(cardPropTypes),
  isActive: PropTypes.bool,
  expand: PropTypes.bool,
};

APlayGround.defaultProps = APlayGroundDefaultProps;

APlayGround.propTypes = APlayGroundPropTypes;

export default APlayGround;
