import React from 'react';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Card from './Card';
import CodeTabPanel, { CodeTabPanelDefaultProps, CodeTabPanelPropTypes } from './CodeTabPanel';
import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import { IPlayGroundTabProps } from './types';

/**
 * PlayGroundTab
 * @class PlayGroundTab
 * @classdesc PlayGroundTab
 */
class PlayGroundTab extends APlayGround {
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      // @ts-ignore
      activeKey: props.active,
    };
  }

  protected componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      // @ts-ignore
      activeKey: nextProps.active,
    });
  }

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
            <CodeTabPanel
              {...others}
              // @ts-ignore
              active={this.state.activeKey}
              onChange={(key) =>
                this.setState({
                  // @ts-ignore
                  activeKey: key,
                })
              }
            />
          </Card>
        )}
      >
        {() => (
          <ConditionalRender conditional={expand}>
            {() => (
              // @ts-ignore
              <Card>
                <CodeTabPanel
                  {...others}
                  // @ts-ignore
                  active={this.state.activeKey}
                  onChange={(key) =>
                    this.setState({
                      // @ts-ignore
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
   * getClipboardText
   */
  protected getClipboardText(): Promise<string> {
    // @ts-ignore
    const { config } = this.props;

    // @ts-ignore
    const { activeKey } = this.state;

    return Promise.resolve(config.find((c) => c.key === activeKey)?.codeText);
  }
}

export const PlayGroundTabDefaultProps: IPlayGroundTabProps = {
  ...APlayGroundDefaultProps,
  ...CodeTabPanelDefaultProps,
};

export const PlayGroundTabPropTypes = {
  ...APlayGroundPropTypes,
  ...CodeTabPanelPropTypes,
};

// @ts-ignore
PlayGroundTab.defaultProps = PlayGroundTabDefaultProps;

// @ts-ignore
PlayGroundTab.propTypes = PlayGroundTabPropTypes;

export default PlayGroundTab;
