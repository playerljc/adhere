import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlaygroundExt from 'component-playground';
import copy from 'copy-to-clipboard';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Card, { cardPropTypes } from './Card';
import Message from './Message';
import Constant from './constant';
import { CodeBoxContext } from './CodeBoxContext';
import { IPlayGroundMulitProps, IPlayGroundState } from './types';

const selectPrefix = 'adhere-ui-playground-mulit';

class InferPropsInner<T> {}

class InferType<T> {}

/**
 * PlayGroundMulit
 * @class PlayGroundMulit
 * @classdesc PlayGroundMulit
 */
// @ts-ignore
class PlayGroundMulit extends React.Component<IPlayGroundMulitProps, IPlayGroundState> {
  state = {
    expand: this.props.expand,
  };

  actionConfig = [this.renderClipboardAction, this.renderExpandAction];
  static defaultProps: IPlayGroundMulitProps;
  static propTypes: {
    expand: Requireable<boolean>;
    config: Requireable<
      (
        | (InferPropsInner<
            Pick<
              {
                codeText: Requireable<string>;
                title: Requireable<
                  NonNullable<InferType<Requireable<object> | Requireable<string>>>
                >;
              },
              never
            >
          > &
            Partial<
              InferPropsInner<
                Pick<
                  {
                    codeText: Requireable<string>;
                    title: Requireable<
                      NonNullable<InferType<Requireable<object> | Requireable<string>>>
                    >;
                  },
                  'codeText' | 'title'
                >
              >
            >)
        | undefined
        | null
      )[]
    >;
  };

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
    return (
      <div
        onClick={() => {
          const { config } = this.props;
          copy(config.map((c) => c.codeText).join('\r\n'));
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
   * @param config
   * @param index
   */
  protected renderCodeView(config, index) {
    const defaultProps = {
      docClass: null,
      propDescriptionMap: null,
      scope: { React },
      expand: false,
      collapsableCode: false,
      initiallyExpanded: false,
      es6Console: false,
    };

    return (
      <div key={`${index}`} className={`${selectPrefix}-codeviewwrap`}>
        <div className={`${selectPrefix}-codeviewwrap-title`}>{config.title}</div>
        <div className={`${selectPrefix}-codeviewwrap-inner`}>
          <PlaygroundExt {...defaultProps} {...config} />
        </div>
      </div>
    );
  }

  /**
   * render
   * @return {*}
   */
  protected render() {
    // @ts-ignore
    const { config, children, cardProps, isActive, id } = this.props;
    const { expand } = this.state;

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
            {/* 显示区 */}
            {/*@ts-ignore*/}
            <Card actions={this.renderAction()} {...(cardProps || {})}>
              {children}
            </Card>
            {/* 代码区 */}
            <ConditionalRender conditional={expand}>
              {/*@ts-ignore*/}
              {() => <Card>{(config || []).map((c, index) => this.renderCodeView(c, index))}</Card>}
            </ConditionalRender>
          </div>
        )}
      </CodeBoxContext.Consumer>
    );
  }
}

PlayGroundMulit.defaultProps = {
  // @ts-ignore*
  id: undefined,
  config: [],
  expand: false,
  isActive: false,
};

PlayGroundMulit.propTypes = {
  // @ts-ignore*
  id: PropTypes.string,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      codeText: PropTypes.string,
      // 描述
      title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  expand: PropTypes.bool,
  // @ts-ignore
  cardProps: PropTypes.shape(cardPropTypes),
  isActive: PropTypes.bool,
};

export default PlayGroundMulit;
