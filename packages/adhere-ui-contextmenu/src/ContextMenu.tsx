import classNames from 'classnames';
import React, { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useRef } from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import { ProviderContext } from './ContextMenuContext';
import Menu from './Menu';
import type {
  Config,
  ContextMenuComponentProps,
  ContextMenuComponentRefHandle,
  MenuData,
  MenuRefHandle,
} from './types';

const selectorPrefix = 'adhere-ui-contextmenu';

const ContextMenuComponent: ForwardRefRenderFunction<
  ContextMenuComponentRefHandle,
  ContextMenuComponentProps
> = (props, ref) => {
  const { data = [], config, el } = props;

  const menuIns = useRef<MenuRefHandle>(null);

  function onClick(e) {
    e.stopPropagation();

    const root = openHandlers.get(el);
    if (root) {
      root.unmount();
    }
    // const flag = ReactDOM.unmountComponentAtNode(el);

    // if (flag) {
    //   el?.parentElement?.removeChild(el);
    // }
  }

  function onContextMenu(e) {
    e.preventDefault();

    const root = openHandlers.get(el);
    if (root) {
      root.unmount();
    }

    // const flag = ReactDOM.unmountComponentAtNode(el);

    // if (flag) {
    //   el?.parentElement?.removeChild(el);
    // }
  }

  useImperativeHandle(ref, () => ({
    mount: () => menuIns.current?.mount(),
  }));

  return (
    <ProviderContext.Provider
      value={{
        config,
        el,
      }}
    >
      <div
        className={classNames(selectorPrefix)}
        style={{ zIndex: 9999 * 2 }}
        onClick={onClick}
        onContextMenu={onContextMenu}
      >
        <Menu data={data} className={config.className} style={config.style} ref={menuIns} />
      </div>
    </ProviderContext.Provider>
  );
};

const ContextMenuComponentHOC = forwardRef<
  ContextMenuComponentRefHandle,
  ContextMenuComponentProps
>(ContextMenuComponent);

const openHandlers = new WeakMap<HTMLElement, Root>();

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
  open(data: MenuData[], config: Config) {
    let contextMenuIns = React.createRef<ContextMenuComponentRefHandle>();

    config = Object.assign({ width: 200, maskClosable: true }, config);

    const parentEl = document.createElement('div');

    document.body.appendChild(parentEl);

    const root = ReactDOM.createRoot(
      parentEl,
      // () => contextMenuIns.current?.mount(),
    );

    root.render(
      <ContextMenuComponentHOC
        data={data}
        config={config}
        el={parentEl}
        ref={(ins) => {
          // @ts-ignore
          contextMenuIns.current = ins;
          contextMenuIns.current?.mount();
        }}
      />,
    );

    openHandlers.set(parentEl, root);

    return parentEl;
  },
  close(el) {
    const root = openHandlers.get(el);
    if (root) {
      root.unmount();
    }
    // const flag = ReactDOM.unmountComponentAtNode(el);
    //
    // if (flag) {
    //   el.parentElement.removeChild(el);
    // }
  },
};

export default ContextMenu;
