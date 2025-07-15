import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import Card from './Card';
import CodeTabPanel, { CodeTabPanelDefaultProps, CodeTabPanelPropTypes } from './CodeTabPanel';
import type { PlayGroundTabProps, PlayGroundTabState } from './types';

/**
 * PlayGroundTab组件
 * @class PlayGroundTab
 * @description 带标签页的代码展示组件，支持多个代码标签页的切换展示
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGroundTab 
 *   config={[
 *     { key: 'js', title: 'JavaScript', codeText: 'console.log("JS")' },
 *     { key: 'ts', title: 'TypeScript', codeText: 'console.log("TS")' }
 *   ]}
 *   active="js"
 * >
 *   <div>代码演示内容</div>
 * </PlayGroundTab>
 * ```
 */
class PlayGroundTab extends APlayGround<PlayGroundTabProps, PlayGroundTabState> {
  static displayName = 'PlayGroundTab';

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: PlayGroundTabProps) {
    super(props);

    Object.assign(this.state, {
      activeKey: props.active,
    });
  }

  /**
   * 组件即将接收新属性时的处理
   * @param nextProps - 新的属性
   */
  componentWillReceiveProps(nextProps: Readonly<PlayGroundTabProps>): void {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      activeKey: nextProps.active,
    });
  }

  /**
   * 渲染代码展示视图
   * @protected renderCodeView
   * @description 渲染带标签页的代码面板，支持标签页切换
   * @returns React.ReactElement 代码展示视图
   */
  protected renderCodeView(): React.ReactElement {
    const { expand, activeKey } = this.state;
    const { isFirst } = this;
    const { cardProps, id, isActive, ...restProps } = this.props;

    return (
      <ConditionalRender
        conditional={isFirst}
        noMatch={() => (
          <Card style={{ display: expand ? '' : 'none' }}>
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
          <ConditionalRender conditional={!!expand}>
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
}

export const PlayGroundTabDefaultProps: PlayGroundTabProps = {
  ...APlayGroundDefaultProps,
  ...CodeTabPanelDefaultProps,
};

export const PlayGroundTabPropTypes = {
  ...APlayGroundPropTypes,
  ...CodeTabPanelPropTypes,
};

PlayGroundTab.defaultProps = PlayGroundTabDefaultProps;

PlayGroundTab.propTypes = PlayGroundTabPropTypes;

export default PlayGroundTab;
