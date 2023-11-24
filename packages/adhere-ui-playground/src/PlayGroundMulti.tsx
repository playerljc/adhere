import PropTypes from 'prop-types';
import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import Card from './Card';
import CodePanel, { CodePanelPropTypes } from './CodePanel';
import CodeTabPanel, { CodeTabPanelPropTypes } from './CodeTabPanel';
import { PlayGroundMultiProps, PlayGroundMultiState } from './types';

const selectPrefix = 'adhere-ui-playground-multi';

/**
 * PlayGroundMulti
 * @class PlayGroundMulti
 * @classdesc PlayGroundMulti
 */
class PlayGroundMulti extends APlayGround<PlayGroundMultiProps, PlayGroundMultiState> {
  static displayName = 'PlayGroundMulti';

  configMap = new Map<
    string,
    {
      render: (config: any, index: number) => React.ReactElement;
      getCodeText: (config: any) => string;
    }
  >([
    [
      'CodePanel',
      {
        render: ({ type, ...config }) => <CodePanel {...config} />,
        getCodeText: (config) => config.codeText,
      },
    ],
    [
      'CodeTabPanel',
      {
        render: ({ type, ...props }, index: number) => {
          return (
            <CodeTabPanel
              {...props}
              onChange={(key) => {
                const config = [...(this.state.config || [])];

                config[index].active = key;

                this.setState({
                  config,
                });
              }}
            />
          );
        },
        getCodeText: (item) => item.config.find((c) => c.key === item.active)?.codeText,
      },
    ],
  ]);

  constructor(props) {
    super(props);

    Object.assign(this.state, {
      config: [...(props.config || [])],
    });
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      config: [...(nextProps.config || [])],
    });
  }

  /**
   * getClipboardText
   * @return Promise<string>
   */
  protected getClipboardText(e: React.MouseEvent): Promise<string> {
    const { config } = this.state;

    return new Promise<string>((resolve) => {
      ContextMenu.open(
        (config || []).map((c, index) => ({
          name: c.title,
          id: `${index}`,
          separation: false,
          attribute: {
            config: c,
          },
          children: [],
        })),

        {
          width: 200,
          x: e.clientX,
          y: e.clientY,
          maskClosable: true,
          handler: (id, attribute) => {
            resolve(
              // @ts-ignore
              this.configMap
                .get(attribute.config.type || 'CodePanel')
                ?.getCodeText(attribute.config),
            );
          },
        },
      );
    });
  }

  /**
   * renderCodeView - 代码展示视图
   * @param config
   * @param index
   * <CodePanel {...config} />
   */
  protected renderCodePanelView(config, index) {
    return (
      <div key={`${index}`} className={`${selectPrefix}-code-view-wrap`}>
        <div className={`${selectPrefix}-code-view-wrap-title`}>{config.title}</div>
        <div className={`${selectPrefix}-code-view-wrap-inner`}>
          {this.configMap.get(config.type || 'CodePanel')?.render?.(config, index)}
        </div>
      </div>
    );
  }

  /**
   * renderCodeView
   */
  protected renderCodeView() {
    // @ts-ignore
    const { config, expand } = this.state;

    const { isFirst } = this;
    return (
      <ConditionalRender
        conditional={isFirst}
        noMatch={() => (
          <Card style={{ display: expand ? '' : 'none' }}>
            {(config || []).map((c, index) => this.renderCodePanelView(c, index))}
          </Card>
        )}
      >
        {() => (
          <ConditionalRender conditional={!!expand}>
            {() => (
              <Card>{(config || []).map((c, index) => this.renderCodePanelView(c, index))}</Card>
            )}
          </ConditionalRender>
        )}
      </ConditionalRender>
    );
  }
}

export const PlayGroundMultiDefaultProps: PlayGroundMultiProps = {
  config: [],
  ...APlayGroundDefaultProps,
};

export const PlayGroundMultiPropTypes = {
  config: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(CodePanelPropTypes),
      PropTypes.shape(CodeTabPanelPropTypes),
    ]),
  ),
  ...APlayGroundPropTypes,
};

PlayGroundMulti.defaultProps = {
  ...PlayGroundMultiDefaultProps,
};

PlayGroundMulti.propTypes = {
  ...PlayGroundMultiPropTypes,
};

export default PlayGroundMulti;
