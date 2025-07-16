import classNames from 'classnames';
import QRCode from 'qrcode';
import React from 'react';

import { FullscreenOutlined, QrcodeOutlined, ReloadOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import { selectPrefix } from './APlayGround';
import Card from './Card';
import CodeTabPanel, { CodeTabPanelDefaultProps, CodeTabPanelPropTypes } from './CodeTabPanel';
import type { PlayGroundTabMobileProps, PlayGroundTabMobileState } from './types';

/**
 * PlayGroundTabMobile
 * @class PlayGroundTabMobile
 * @classdesc PlayGroundTabMobile
 */
class PlayGroundTabMobile extends APlayGround<PlayGroundTabMobileProps, PlayGroundTabMobileState> {
  static displayName = 'PlayGroundTabMobile';

  constructor(props) {
    super(props);

    Object.assign(this.state, {
      activeKey: props.active,
      iframeCount: 0,
    });
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      activeKey: nextProps.active,
      iframeCount: nextProps.iframeCount,
    });
  }

  /**
   * renderAction
   */
  protected renderAction() {
    return this.actionConfig.slice(0, 1).map((config) => config.call(this));
  }

  /**
   * renderCodeView - 代码展示视图
   * @return {*}
   */
  protected renderCodeView() {
    const { activeKey } = this.state;

    const { isFirst } = this;

    const { cardProps, id, isActive, ...restProps } = this.props;

    return (
      <ConditionalRender
        conditional={isFirst}
        noMatch={() => (
          <Card>
            <CodeTabPanel
              {...restProps}
              active={activeKey as string}
              onChange={(key) =>
                this.setState({
                  activeKey: key,
                })
              }
            />
          </Card>
        )}
      >
        {() => (
          <Card>
            <CodeTabPanel
              {...restProps}
              active={activeKey as string}
              onChange={(key) =>
                this.setState({
                  activeKey: key,
                })
              }
            />
          </Card>
        )}
      </ConditionalRender>
    );
  }

  /**
   * getClipboardText
   */
  protected getClipboardText(): Promise<string> {
    const { config } = this.props;

    const { activeKey } = this.state;

    const item = config?.find((c) => c.key === activeKey);

    return Promise.resolve(item ? item.codeText : '');
  }

  /**
   * render
   * @return {*}
   */
  render() {
    const {
      cardProps,
      isActive,
      id,
      url,
      className,
      style,
      bodyClassName,
      bodyStyle,
      displayClassName,
      displayBodyStyle,
    } = this.props;

    const idProps = {
      id,
    };

    return (
      <div
        {...idProps}
        className={classNames(selectPrefix, `${selectPrefix}-mobile`, className ?? '', {
          [`${selectPrefix}-active`]: isActive,
        })}
        style={style ?? {}}
      >
        {this.state.qrcode && (
          <div
            className={`${selectPrefix}-mobile-display-qr-code-mask`}
            onClick={() => {
              this.setState({
                qrcode: undefined,
              });
            }}
          />
        )}

        <div
          className={classNames(`${selectPrefix}-mobile-body`, bodyClassName ?? '')}
          style={bodyStyle ?? {}}
        >
          <Card actions={this.renderAction()} {...(cardProps ?? {})}>
            {this.renderCodeView()}
          </Card>
        </div>

        <div
          className={classNames(`${selectPrefix}-mobile-display`, displayClassName ?? '')}
          style={displayBodyStyle ?? {}}
        >
          <div className={`${selectPrefix}-mobile-display-inner`}>
            <iframe src={url} key={this.state.iframeCount as number} />
          </div>

          <div className={`${selectPrefix}-mobile-display-actions`}>
            <div
              className={`${selectPrefix}-mobile-display-action`}
              onClick={() => {
                this.setState({
                  iframeCount: (this.state.iframeCount as number) + 1,
                });
              }}
            >
              <ReloadOutlined />
            </div>

            <div
              className={`${selectPrefix}-mobile-display-action`}
              onClick={() => {
                // With promises
                QRCode.toDataURL(url)
                  .then((_url) => {
                    this.setState({
                      qrcode: _url,
                    });
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            >
              {this.state.qrcode && (
                <div className={`${selectPrefix}-mobile-display-qr-code`}>
                  <img src={this.state.qrcode as string} alt="" />
                </div>
              )}
              <QrcodeOutlined />
            </div>

            <div
              className={`${selectPrefix}-mobile-display-action`}
              onClick={() => {
                window.open(url);
              }}
            >
              <FullscreenOutlined />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const PlayGroundTabDefaultProps: PlayGroundTabMobileProps = {
  url: '',
  ...APlayGroundDefaultProps,
  ...CodeTabPanelDefaultProps,
};

export const PlayGroundTabPropTypes = {
  ...APlayGroundPropTypes,
  ...CodeTabPanelPropTypes,
};

PlayGroundTabMobile.defaultProps = PlayGroundTabDefaultProps;

PlayGroundTabMobile.propTypes = PlayGroundTabPropTypes;

export default PlayGroundTabMobile;
