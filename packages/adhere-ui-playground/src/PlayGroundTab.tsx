import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import Card from './Card';
import CodeTabPanel, { CodeTabPanelDefaultProps, CodeTabPanelPropTypes } from './CodeTabPanel';
import { PlayGroundTabProps, PlayGroundTabState } from './types';

/**
 * PlayGroundTab
 * @class PlayGroundTab
 * @classdesc PlayGroundTab
 */
class PlayGroundTab extends APlayGround<PlayGroundTabProps, PlayGroundTabState> {
  static displayName = 'PlayGroundTab';

  constructor(props) {
    super(props);

    Object.assign(this.state, {
      activeKey: props.active,
    });
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      activeKey: nextProps.active,
    });
  }

  /**
   * renderCodeView - 代码展示视图
   * @return {*}
   */
  protected renderCodeView() {
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
   * getClipboardText
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
