import React from 'react';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

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
  renderMap = new Map<string, Function>([
    ['CodePanel', ({ type, ...config }) => <CodePanel {...config} />],
    ['CodeTabPanel', ({ type, ...config }) => <CodeTabPanel {...config} />],
  ]);

  /**
   * renderCodeView - 代码展示视图
   * @param config
   * @param index
   *
   * <CodePanel {...config} />
   */
  protected renderCodePanelView(config, index) {
    return (
      <div key={`${index}`} className={`${selectPrefix}-codeviewwrap`}>
        <div className={`${selectPrefix}-codeviewwrap-title`}>{config.title}</div>
        <div className={`${selectPrefix}-codeviewwrap-inner`}>
          {/*@ts-ignore*/}
          {this.renderMap.get(config.type || 'CodePanel')(config)}
        </div>
      </div>
    );
  }

  protected renderCodeView(): React.ReactElement {
    // @ts-ignore
    const { config } = this.props;

    const { expand } = this.state;

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
