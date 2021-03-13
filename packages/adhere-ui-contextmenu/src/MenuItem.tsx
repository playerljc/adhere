import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { IMenuItemProps } from './types';
import SubMenu from './SubMenu';
import { ProviderContext } from './ContextMenuContext';

const selectorPrefix = 'adhere-ui-contextmenu-menuitem';

/**
 * MenuItem
 * @class MenuItem
 * @classdesc MenuItem
 */
class MenuItem extends React.PureComponent<IMenuItemProps, any> {
  static propTypes: any;

  private config: { handler: any } | undefined;

  private el: HTMLElement | undefined;

  constructor(props) {
    super(props);

    this.renderInner = this.renderInner.bind(this);
  }

  private onClick = (e) => {
    e.stopPropagation();

    const {
      // @ts-ignore
      data: { id, attribute, children, disabled },
    } = this.props;

    // @ts-ignore
    const { handler } = this.config;

    if (disabled || children.length > 0) return false;

    if (handler) {
      handler(id, attribute);
      // @ts-ignore
      ReactDOM.unmountComponentAtNode(this.el);
    }
  };

  private renderIcon(): React.ReactElement {
    const {
      data: { icon },
    } = this.props;

    return (
      <ConditionalRender
        conditional={typeof icon === 'string'}
        // @ts-ignore
        noMatch={() => <span className={classNames(`${selectorPrefix}-icon`)}>{icon}</span>}
      >
        {() => <span className={classNames(`${selectorPrefix}-icon`, icon)} />}
      </ConditionalRender>
    );
  }

  private renderName(): React.ReactElement {
    const {
      // @ts-ignore
      data: { name },
    } = this.props;

    return <span className={`${selectorPrefix}-name`}>{name}</span>;
  }

  private renderMore(): React.ReactElement | null {
    const {
      // @ts-ignore
      data: { children },
    } = this.props;

    return (
      <ConditionalRender conditional={children.length !== 0}>
        {() => <span className={`${selectorPrefix}-more fa fa-caret-right`} />}
      </ConditionalRender>
    );
  }

  private renderSubMenu(): React.ReactElement | null {
    const {
      // @ts-ignore
      data: { children, subMenuClassName, subMenuStyle },
    } = this.props;

    return (
      <ConditionalRender conditional={children.length !== 0}>
        {() => (
          <SubMenu
            // @ts-ignore
            data={children}
            className={subMenuClassName}
            style={subMenuStyle}
          />
        )}
      </ConditionalRender>
    );
  }

  private renderInner({ config, el }) {
    const {
      // @ts-ignore
      data: { separation, disabled = false, className, style },
    } = this.props;

    // @ts-ignore
    this.config = config;

    // @ts-ignore
    this.el = el;

    return (
      <ConditionalRender
        conditional={!separation}
        // @ts-ignore
        noMatch={() => <li className={`${selectorPrefix}-separation`} />}
      >
        {() => (
          <li
            className={classNames(
              selectorPrefix,
              disabled ? 'disabled' : '',
              // @ts-ignore
              (className || '').split(' '),
            )}
            style={{ ...(style || {}) }}
            onClick={this.onClick}
          >
            {this.renderIcon()}
            {this.renderName()}
            {this.renderMore()}
            {this.renderSubMenu()}
          </li>
        )}
      </ConditionalRender>
    );
  }

  render() {
    return <ProviderContext.Consumer>{this.renderInner}</ProviderContext.Consumer>;
  }
}

MenuItem.propTypes = {
  data: PropTypes.shape({
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
};

export default MenuItem;
