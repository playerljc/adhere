import PropTypes from 'prop-types';
import React from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';

import APlayGround, { APlayGroundDefaultProps, APlayGroundPropTypes } from './APlayGround';
import Card from './Card';
import CodePanel, { CodePanelPropTypes } from './CodePanel';
import CodeTabPanel, { CodeTabPanelPropTypes } from './CodeTabPanel';
import type { PlayGroundMultiProps, PlayGroundMultiState } from './types';

const selectPrefix = 'adhere-ui-playground-multi';

/**
 * 配置映射项接口
 * @interface ConfigMapItem
 * @description 定义配置映射项的结构
 */
interface ConfigMapItem {
  /** 渲染函数 */
  render: (config: any, index: number) => React.ReactElement;
  /** 获取代码文本函数 */
  getCodeText: (config: any) => string;
}

/**
 * PlayGroundMulti组件
 * @class PlayGroundMulti
 * @description 多配置代码展示组件，支持多种类型的代码展示配置
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGroundMulti 
 *   config={[
 *     { type: 'CodePanel', title: '代码1', codeText: 'console.log("1")' },
 *     { type: 'CodeTabPanel', title: '代码2', config: [...] }
 *   ]}
 * >
 *   <div>代码演示内容</div>
 * </PlayGroundMulti>
 * ```
 */
class PlayGroundMulti extends APlayGround<PlayGroundMultiProps, PlayGroundMultiState> {
  static displayName = 'PlayGroundMulti';

  /** 配置映射表 */
  configMap = new Map<string, ConfigMapItem>([
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

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: PlayGroundMultiProps) {
    super(props);

    Object.assign(this.state, {
      config: [...(props.config || [])],
    });
  }

  /**
   * 组件即将接收新属性时的处理
   * @param nextProps - 新的属性
   */
  componentWillReceiveProps(nextProps: Readonly<PlayGroundMultiProps>): void {
    super.componentWillReceiveProps(nextProps);

    this.setState({
      config: [...(nextProps.config || [])],
    });
  }

  /**
   * 获取剪贴板文本内容
   * @protected getClipboardText
   * @description 通过右键菜单选择要复制的代码文本内容
   * @param e - 点击事件对象
   * @returns Promise<string> 选中的代码文本内容
   */
  protected getClipboardText(e: React.MouseEvent): Promise<string> {
    const { config } = this.state;

    return new Promise<string>((resolve) => {
      ContextMenu.open(
        (config || []).map((c, index) => ({
          name: String(c.title || `配置${index + 1}`),
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
              this.configMap
                .get(attribute.config.type || 'CodePanel')
                ?.getCodeText(attribute.config) || '',
            );
          },
        },
      );
    });
  }

  /**
   * 渲染代码面板视图
   * @protected renderCodePanelView
   * @description 渲染单个代码面板配置项
   * @param config - 配置项
   * @param index - 配置项索引
   * @returns React.ReactElement 代码面板视图
   */
  protected renderCodePanelView(config: any, index: number): React.ReactElement {
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
   * 渲染代码展示视图
   * @protected renderCodeView
   * @description 渲染多配置的代码展示视图
   * @returns React.ReactElement 代码展示视图
   */
  protected renderCodeView(): React.ReactElement {
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
