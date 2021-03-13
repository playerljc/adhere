import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { IContextMenuComponentProps, IData, IConfig } from './types';
import Menu from './Menu';
import { ProviderContext } from './ContextMenuContext';

const selectorPrefix = 'adhere-ui-contextmenu';

/**
 * ContextMenuComponent
 * @class ContextMenuComponent
 * @classdesc ContextMenuComponent
 */
class ContextMenuComponent extends React.PureComponent<IContextMenuComponentProps, any> {
  static propTypes: any;
  static defaultProps: any;

  private menuIns: Menu | undefined;

  mount() {
    this.menuIns?.mount();
  }

  private onClick = (e) => {
    e.stopPropagation();

    const { el } = this.props;

    const flag = ReactDOM.unmountComponentAtNode(el);

    if (flag) {
      // @ts-ignore
      el.parentElement.removeChild(el);
    }
  };

  private onContextMenu = (e) => {
    const { el } = this.props;

    e.preventDefault();

    const flag = ReactDOM.unmountComponentAtNode(el);

    if (flag) {
      // @ts-ignore
      el.parentElement.removeChild(el);
    }
  };

  render() {
    const { data = [], config, el } = this.props;

    return (
      <ProviderContext.Provider
        value={{
          config,
          // @ts-ignore
          el,
        }}
      >
        <div
          className={classNames(selectorPrefix)}
          style={{ zIndex: 9999 * 2 }}
          onClick={this.onClick}
          onContextMenu={this.onContextMenu}
        >
          <Menu
            data={data}
            className={config.className}
            style={config.style}
            ref={(ins) =>
              // @ts-ignore
              (this.menuIns = ins)
            }
          />
        </div>
      </ProviderContext.Provider>
    );
  }
}

ContextMenuComponent.defaultProps = {
  data: [],
  config: {},
};

ContextMenuComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      disabled: PropTypes.bool,
      separation: PropTypes.bool,
      attribute: PropTypes.object,
      children: PropTypes.array,
    }),
  ),
  config: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    maskClosable: PropTypes.bool,
    handler: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    subMenuClassName: PropTypes.string,
    subMenuStyle: PropTypes.object,
  }),
  el: PropTypes.any,
};

const ContextMenu = {
  /**
   * config
   * {
   *   name - {String} 名字
   *   icon - {String} 图标
   *   id - {String} 唯一的id
   *   disabled - {Boolean} 不可用
   *   separation - {Bolean} 分割线
   *   attribute - {Object} 自定义属性
   *   children - {Array<Object> 孩子
   * }
   *{
   *   width - {Number} 宽度
   *   x - {Number} 显示的x坐标 相对于body
   *   y - {Number} 现实的y坐标 相对于body
   *   maskClosable - {Boolean} 点击其他位置是否关闭菜单
   *   handler - {Function} 点击的事件句柄
   * }
   * @return {HTMLDivElement}
   * @param data
   * @param config
   */
  open(data: IData, config: IConfig) {
    let contextMenuIns = null;

    config = Object.assign({ width: 200, maskClosable: true }, config);

    const parentEl = document.createElement('div');

    document.body.appendChild(parentEl);

    // @ts-ignore
    ReactDOM.render(
      // @ts-ignore
      <ContextMenuComponent
        data={data}
        config={config}
        el={parentEl}
        ref={(ins) =>
          // @ts-ignore
          (contextMenuIns = ins)
        }
      />,
      parentEl,
      () => {
        // @ts-ignore
        contextMenuIns.mount();
      },
    );

    return parentEl;
  },
  close(el) {
    const flag = ReactDOM.unmountComponentAtNode(el);
    if (flag) {
      el.parentElement.removeChild(el);
    }
  },
};

export default ContextMenu;
