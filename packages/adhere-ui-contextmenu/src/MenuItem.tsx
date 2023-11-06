import classNames from 'classnames';
import React, { memo, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ProviderContext } from './ContextMenuContext';
import SubMenu from './SubMenu';
import type { ContextMenuContext, MenuItemProps } from './types';

const selectorPrefix = 'adhere-ui-context-menu-menu-item';

const MenuItem = memo<MenuItemProps>((props) => {
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

  const renderIcon = useCallback(
    () => (
      <ConditionalRender
        conditional={typeof icon === 'string'}
        noMatch={() => <span className={classNames(`${selectorPrefix}-icon`)}>{icon}</span>}
      >
        {() => <span className={classNames(`${selectorPrefix}-icon`, icon as string)} />}
      </ConditionalRender>
    ),
    [icon],
  );

  const renderName = useCallback(
    () => <span className={`${selectorPrefix}-name`}>{name}</span>,
    [name],
  );

  const renderMore = useCallback(
    () => (
      <ConditionalRender conditional={(children || []).length !== 0}>
        {() => <span className={`${selectorPrefix}-more fa fa-caret-right`} />}
      </ConditionalRender>
    ),
    [children],
  );

  const renderSubMenu = useCallback(
    () => (
      <ConditionalRender conditional={(children || []).length !== 0}>
        {() => <SubMenu data={children} className={subMenuClassName} style={subMenuStyle} />}
      </ConditionalRender>
    ),
    [children, subMenuClassName, subMenuStyle],
  );

  return (
    <ConditionalRender
      conditional={!separation}
      noMatch={() => <li className={`${selectorPrefix}-separation`} />}
    >
      {() => (
        <li
          className={classNames(selectorPrefix, disabled ? 'disabled' : '', className ?? '')}
          style={style ?? {}}
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
});

export default MenuItem;
