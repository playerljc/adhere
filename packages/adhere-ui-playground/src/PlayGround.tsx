import classNames from 'classnames';
import React from 'react';
import PropTypes, { Requireable } from 'prop-types';
import PlayGroundExt from 'component-playground';
import copy from 'copy-to-clipboard';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Card, { cardPropTypes } from './Card';
import Message from './Message';
import Constant from './constant';

import { IPlayGroundProps, IPlayGroundState } from './types';
import { CodeBoxContext } from './CodeBoxContext';

const selectPrefix = 'adhere-ui-playground';

/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
class PlayGround extends React.Component<IPlayGroundProps, IPlayGroundState> {
  static defaultProps: IPlayGroundProps;
  static propTypes: { expand: Requireable<boolean>; codeText: Requireable<string> };

  // @ts-ignore
  state = {
    expand: this.props.expand,
  };

  actionConfig = [this.renderClipboardAction, this.renderExpandAction];

  protected componentWillReceiveProps(nextProps) {
    this.setState({
      expand: nextProps.expand,
    });
  }

  protected renderAction() {
    return this.actionConfig.map((config) => config.call(this));
  }

  /**
   * renderClipboardAction
   */
  protected renderClipboardAction() {
    const { codeText } = this.props;

    return (
      <div
        onClick={() => {
          copy(codeText);
          Message.success(Intl.v('复制成功'));
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
   * renderCodeView - 代码展示视图
   * @return {*}
   */
  protected renderCodeView() {
    const { expand } = this.state;
    // @ts-ignore
    const { cardProps, ...others } = this.props;

    return (
      <ConditionalRender conditional={expand}>
        {() => (
          // @ts-ignore
          <Card>
            <PlayGroundExt
              docClass={null}
              propDescriptionMap={null}
              scope={{ React }}
              collapsableCode={false}
              initiallyExpanded={false}
              es6Console={false}
              {...others}
            />
          </Card>
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
      <CodeBoxContext.Consumer>
        {({ activeAnchor }) => (
          <div
            {...idProps}
            className={classNames(
              selectPrefix,
              activeAnchor === id || isActive ? `${selectPrefix}-active` : '',
            )}
          >
            {/* @ts-ignore*/}
            <Card actions={this.renderAction()} {...(cardProps || {})}>
              {children}
            </Card>
            {this.renderCodeView()}
          </div>
        )}
      </CodeBoxContext.Consumer>
    );
  }
}

PlayGround.defaultProps = {
  id: undefined,
  codeText: '',
  expand: false,
  // @ts-ignore
  cardProps: null,
  isActive: false,
};

PlayGround.propTypes = {
  // @ts-ignore
  id: PropTypes.string,
  codeText: PropTypes.string,
  expand: PropTypes.bool,
  // @ts-ignore
  cardProps: PropTypes.shape(cardPropTypes),
  isActive: PropTypes.bool,
};

export default PlayGround;
