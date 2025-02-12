import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import Card from './Card';
import CodePanel, { CodePanelDefaultProps, CodePanelPropTypes } from './CodePanel';

/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
class PlayGround extends APlayGround {
  static displayName = 'PlayGround';

  /**
   * renderCodeView - 代码展示视图
   * @return {*}
   */
  protected renderCodeView() {
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
   * getClipboardText
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
