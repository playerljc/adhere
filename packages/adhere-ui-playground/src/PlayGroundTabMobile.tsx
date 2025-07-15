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
 * PlayGroundTabMobile组件
 * @class PlayGroundTabMobile
 * @description 移动端标签页代码展示组件，支持二维码扫描和全屏预览
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGroundTabMobile 
 *   url="http://localhost:3000"
 *   config={[
 *     { key: 'js', title: 'JavaScript', codeText: 'console.log("JS")' }
 *   ]}
 *   active="js"
 * >
 *   <div>代码演示内容</div>
 * </PlayGroundTabMobile>
 * ```
 */
class PlayGroundTabMobile extends APlayGround<PlayGroundTabMobileProps, PlayGroundTabMobileState> {
  static displayName = 'PlayGroundTabMobile';

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: PlayGroundTabMobileProps) {
    super(props);

    Object.assign(this.state, {
      activeKey: props.active,
      iframeCount: 0,
    });
  }

  /**
   * 组件即将接收新属性时的处理
   * @param nextProps - 新的属性
   */
  componentWillReceiveProps(nextProps: Readonly<PlayGroundTabMobileProps>): void {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      activeKey: nextProps.active,
      iframeCount: nextProps.iframeCount,
    });
  }

  /**
   * 渲染操作按钮
   * @protected renderAction
   * @description 渲染操作按钮，只显示第一个操作按钮
   * @returns ReactNode[] 操作按钮数组
   */
  protected renderAction(): React.ReactNode[] {
    return this.actionConfig.slice(0, 1).map((config) => config.call(this));
  }

  /**
   * 渲染代码展示视图
   * @protected renderCodeView
   * @description 渲染移动端标签页代码展示视图
   * @returns React.ReactElement 代码展示视图
   */
  protected renderCodeView(): React.ReactElement {
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
   * 获取剪贴板文本内容
   * @protected getClipboardText
   * @description 获取当前激活标签页的代码文本内容
   * @returns Promise<string> 当前激活标签页的代码文本
   */
  protected getClipboardText(): Promise<string> {
    const { config } = this.props;
    const { activeKey } = this.state;

    const item = config?.find((c) => c.key === activeKey);

    return Promise.resolve(item ? item.codeText : '');
  }

  /**
   * 渲染组件
   * @returns JSX.Element 组件的渲染结果
   */
  render(): JSX.Element {
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
                // 生成二维码
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
