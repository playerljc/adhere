import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import Card from './Card';
import CodePanel, { CodePanelDefaultProps, CodePanelPropTypes } from './CodePanel';
import type { PlayGroundProps } from './types';

/**
 * PlayGround组件
 * @class PlayGround
 * @description 基础的代码展示组件，继承自APlayGround，提供简单的代码展示功能
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGround codeText="console.log('Hello World')">
 *   <div>代码演示内容</div>
 * </PlayGround>
 * ```
 */
class PlayGround extends APlayGround<PlayGroundProps> {
  static displayName = 'PlayGround';

  /**
   * 渲染代码展示视图
   * @protected renderCodeView
   * @description 渲染代码面板，根据展开状态显示或隐藏代码内容
   * @returns React.ReactElement 代码展示视图
   */
  protected renderCodeView(): React.ReactElement {
    const { expand } = this.state;
    const { isFirst } = this;
    const { cardProps, id, isActive, ...restProps } = this.props;

    return (
      <ConditionalRender
        conditional={isFirst}
        noMatch={() => (
          <Card style={{ display: expand ? '' : 'none' }}>
            <CodePanel {...restProps} />
          </Card>
        )}
      >
        {() => (
          <ConditionalRender conditional={!!expand}>
            {() => (
              <Card>
                <CodePanel {...restProps} />
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
   * @description 获取要复制到剪贴板的代码文本内容
   * @returns Promise<string> 代码文本内容
   */
  protected getClipboardText(): Promise<string> {
    return Promise.resolve(this.props.codeText);
  }
}

PlayGround.defaultProps = {
  ...APlayGroundDefaultProps,
  ...CodePanelDefaultProps,
};

PlayGround.propTypes = {
  ...APlayGroundPropTypes,
  ...CodePanelPropTypes,
};

export default PlayGround;
