import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import ReactDOM from 'react-dom';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ProviderContext } from './ContextMenuContext';
import SubMenu from './SubMenu';
import { ContextMenuContext, MenuItemProps } from './types';

const selectorPrefix = 'adhere-ui-contextmenu-menuitem';

const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    data: {
      separation,
      disabled = false,
      className = '',
      style = {},
      subMenuClassName = '',
      subMenuStyle = {},
      id,
      attribute,
      children = [],
      name,
      icon,
    },
  } = props;

  const { config, el } = useContext<ContextMenuContext>(ProviderContext);

  function onClick(e) {
    e.stopPropagation();

    const { handler } = config;

    if (disabled || (children || []).length > 0) return false;

    if (handler) {
      handler(id, attribute);
      ReactDOM.unmountComponentAtNode(el as HTMLElement);
    }
  }

  function renderIcon() {
    return (
      <ConditionalRender
        conditional={typeof icon === 'string'}
        noMatch={() => <span className={classNames(`${selectorPrefix}-icon`)}>{icon}</span>}
      >
        {() => <span className={classNames(`${selectorPrefix}-icon`, icon)} />}
      </ConditionalRender>
    );
  }

  function renderName() {
    return <span className={`${selectorPrefix}-name`}>{name}</span>;
  }

  function renderMore() {
    return (
      <ConditionalRender conditional={(children || []).length !== 0}>
        {() => <span className={`${selectorPrefix}-more fa fa-caret-right`} />}
      </ConditionalRender>
    );
  }

  function renderSubMenu() {
    return (
      <ConditionalRender conditional={(children || []).length !== 0}>
        {() => <SubMenu data={children} className={subMenuClassName} style={subMenuStyle} />}
      </ConditionalRender>
    );
  }

  return (
    <ConditionalRender
      conditional={!separation}
      noMatch={() => <li className={`${selectorPrefix}-separation`} />}
    >
      {() => (
        <li
          className={classNames(selectorPrefix, disabled ? 'disabled' : '', className || '')}
          style={{ ...(style || {}) }}
          onClick={onClick}
        >
          {renderIcon()}
          {renderName()}
          {renderMore()}
          {renderSubMenu()}
        </li>
      )}
    </ConditionalRender>
  );
};

export default MenuItem;
