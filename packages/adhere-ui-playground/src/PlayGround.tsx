import React from 'react';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Card from './Card';
import CodePanel, { CodePanelPropTypes, CodePanelDefaultProps } from './CodePanel';
import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';

/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
class PlayGround extends APlayGround {
  /**
   * renderCodeView - 代码展示视图
   * @return {*}
   */
  protected renderCodeView(): React.ReactElement {
    const { expand } = this.state;

    const { isFirst } = this;

    // @ts-ignore
    const { cardProps, id, isActive, ...others } = this.props;

    return (
      <ConditionalRender
        conditional={isFirst}
        // @ts-ignore
        noMatch={() => (
          // @ts-ignore
          <Card style={{ display: expand ? '' : 'none' }}>
            <CodePanel {...others} />
          </Card>
        )}
      >
        {() => (
          <ConditionalRender conditional={expand}>
            {() => (
              // @ts-ignore
              <Card>
                <CodePanel {...others} />
              </Card>
            )}
          </ConditionalRender>
        )}
      </ConditionalRender>
    );
  }
}

PlayGround.defaultProps = {
  ...APlayGroundDefaultProps,
  ...CodePanelDefaultProps,
};

// @ts-ignore
PlayGround.propTypes = {
  ...APlayGroundPropTypes,
  ...CodePanelPropTypes,
};

export default PlayGround;
