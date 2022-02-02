import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IMenuProps, IConfig } from './types';
import MenuItem from './MenuItem';
import { ProviderContext } from './ContextMenuContext';

const selectorPrefix = 'adhere-ui-contextmenu-submenu';

/**
 * Menu
 * @class Menu
 * @classdesc Menu
 */
class Menu extends React.PureComponent<IMenuProps, any> {
  static propTypes: any;
  static defaultProps: any;

  private config: IConfig | undefined;
  private el: HTMLElement | null | undefined;

  constructor(props) {
    super(props);

    this.renderInner = this.renderInner.bind(this);
  }

  mount() {
    // @ts-ignore
    let { x, y } = this.config;

    const menuWidth = this.el?.offsetWidth;
    const menuHeight = this.el?.offsetHeight;

    const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

    console.log(
      'x',
      x,
      'y',
      y,
      'menuWidth',
      menuWidth,
      'menuHeight',
      menuHeight,
      'clientWidth',
      clientWidth,
      'clientHeight',
      clientHeight,
    );

    // @ts-ignore
    if (clientWidth - x < menuWidth) {
      // @ts-ignore
      x = clientWidth - menuWidth;
    }

    // @ts-ignore
    if (clientHeight - y < menuHeight) {
      // @ts-ignore
      y = clientHeight - menuHeight;
    }

    // @ts-ignore
    this.el?.style.left = `${x}px`;

    // @ts-ignore
    this.el?.style.top = `${y}px`;
  }

  private getStyle() {
    // @ts-ignore
    const { /*x, y, */ width } = this.config;

    return {
      width: `${width}px`,
      // left: `${x}px`,
      // top: `${y}px`,
      zIndex: 99999 * 2 + 1,
    };
  }

  private renderItems(): Array<React.ReactElement> {
    const { data = [] } = this.props;

    return data.map((item) => (
      // @ts-ignore
      <MenuItem
        key={item.id}
        // @ts-ignore
        data={item}
      />
    ));
  }

  private renderInner({ config }) {
    const { className, style } = this.props;

    // @ts-ignore
    this.config = config;

    return (
      <ul
        className={classNames(
          selectorPrefix,
          // @ts-ignore
          (className || '').split(/\s+/),
        )}
        style={{ ...(style || {}), ...this.getStyle() }}
        ref={(el) => (this.el = el)}
      >
        {this.renderItems()}
      </ul>
    );
  }

  render() {
    return <ProviderContext.Consumer>{this.renderInner}</ProviderContext.Consumer>;
  }
}

Menu.defaultProps = {
  data: [],
  className: '',
  style: {},
};

Menu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      disabled: PropTypes.bool,
      separation: PropTypes.bool,
      attribute: PropTypes.object,
      children: PropTypes.array,
      className: PropTypes.string,
      style: PropTypes.object,
      subMenuClassName: PropTypes.string,
      subMenuStyle: PropTypes.object,
    }),
  ),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Menu;
