import React from 'react';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

import Card from './Card';
import CodePanel, { CodePanelPropTypes } from './CodePanel';
import CodeTabPanel, { CodeTabPanelPropTypes } from './CodeTabPanel';
import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';

import { IPlayGroundMulitProps } from './types';

const selectPrefix = 'adhere-ui-playground-mulit';

/**
 * PlayGroundMulit
 * @class PlayGroundMulit
 * @classdesc PlayGroundMulit
 */
class PlayGroundMulit extends APlayGround {
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
                // @ts-ignore
                const config = [...this.state.config];

                config[index].active = key;

                this.setState({
                  // @ts-ignore
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

    this.state = {
      ...this.state,
      // @ts-ignore
      config: [...(props.config || [])],
    };
  }

  protected componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      // @ts-ignore
      config: [...(nextProps.config || [])],
    });
  }

  /**
   * getClipboardText
   * @return Promise<string>
   */
  protected getClipboardText(e: React.MouseEvent): Promise<string> {
    // @ts-ignore
    const { config } = this.state;

    return new Promise<string>((resolve) => {
      ContextMenu.open(
        config.map((c, index) => ({
          name: c.title,
          id: `${index}`,
          separation: false,
          attribute: {
            config: c,
          },
          children: [],
        })),
        // @ts-ignore
        {
          width: 200,
          x: e.clientX,
          y: e.clientY,
          maskClosable: true,
          handler: (id, attribute) => {
            // @ts-ignore
            resolve(this.configMap.get(attribute.config.type || 'CodePanel')?.getCodeText(attribute.config));
          },
        },
      );
    });
  }

  /**
   * renderCodeView - 代码展示视图
   * @param config
   * @param index
   * @return React.ReactElement
   * <CodePanel {...config} />
   */
  protected renderCodePanelView(config, index): React.ReactElement {
    return (
      <div key={`${index}`} className={`${selectPrefix}-codeviewwrap`}>
        <div className={`${selectPrefix}-codeviewwrap-title`}>{config.title}</div>
        <div className={`${selectPrefix}-codeviewwrap-inner`}>
          {/*@ts-ignore*/}
          {this.configMap.get(config.type || 'CodePanel').render(config, index)}
        </div>
      </div>
    );
  }

  /**
   * renderCodeView
   * @return React.ReactElement
   */
  protected renderCodeView(): React.ReactElement {
    // @ts-ignore*
    const { config, expand } = this.state;

    const { isFirst } = this;
    return (
      <ConditionalRender
        conditional={isFirst}
        // @ts-ignore
        noMatch={() => (
          // @ts-ignore
          <Card style={{ display: expand ? '' : 'none' }}>
            {(config || []).map((c, index) => this.renderCodePanelView(c, index))}
          </Card>
        )}
      >
        {() => (
          <ConditionalRender conditional={expand}>
            {() => (
              // @ts-ignore
              <Card>{(config || []).map((c, index) => this.renderCodePanelView(c, index))}</Card>
            )}
          </ConditionalRender>
        )}
      </ConditionalRender>
    );
  }
}

export const PlayGroundMulitDefaultProps: IPlayGroundMulitProps = {
  config: [],
  ...APlayGroundDefaultProps,
};

export const PlayGroundMulitPropTypes = {
  // @ts-ignore
  config: PropTypes.arrayOf(PropTypes.oneOfType([CodePanelPropTypes, CodeTabPanelPropTypes])),
  ...APlayGroundPropTypes,
};

// @ts-ignore
PlayGroundMulit.defaultProps = {
  ...PlayGroundMulitDefaultProps,
};

PlayGroundMulit.propTypes = {
  ...PlayGroundMulitPropTypes,
};

export default PlayGroundMulit;
