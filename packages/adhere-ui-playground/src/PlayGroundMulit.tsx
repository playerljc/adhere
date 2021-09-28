import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlaygroundExt from 'component-playground';
import copy from 'copy-to-clipboard';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Card from './Card';
import Message from './Message';
import Constant from './constant';

import { IPlayGroundMulitProps, IPlayGroundState } from './types';

const selectPrefix = 'adhere-ui-playground-mulit';

/**
 * PlayGroundMulit
 * @class PlayGroundMulit
 * @classdesc PlayGroundMulit
 */
class PlayGroundMulit extends React.Component<IPlayGroundMulitProps, IPlayGroundState> {
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
    const { config, children } = this.props;
    const { expand } = this.state;

    return (
      <div className={classNames(selectPrefix)}>
        {/* 显示区 */}
        <Card actions={this.renderAction()}>{children}</Card>
        {/* 代码区 */}
        <ConditionalRender conditional={expand}>
          {() => <Card>{(config || []).map((c, index) => this.renderCodeView(c, index))}</Card>}
        </ConditionalRender>
      </div>
    );
  }
}

PlayGroundMulit.defaultProps = {
  config: [],
  expand: false,
};

PlayGroundMulit.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      codeText: PropTypes.string,
      // 描述
      title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  expand: PropTypes.bool,
};

export default PlayGroundMulit;
