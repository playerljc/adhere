import { TabBar } from 'antd-mobile';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { memo, useEffect, useState } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
// @ts-ignore
import { useHistory } from '@ctsj/router';

import type { SystemTabBarNavProps, SystemTabBarProps } from '../types';

const { VerticalFlexLayout } = FlexLayout;

const selectorPrefix = 'adhere-ui-tabs-tab-bar';

const TabBarNav: FC<SystemTabBarNavProps> = (props) => {
  const { items = [], onChange } = props;

  const history = useHistory();

  const [activeKey, setActiveKey] = useState(props.activeKey ?? '');

  useEffect(() => setActiveKey(props.activeKey ?? ''), [props.activeKey]);

  return (
    <TabBar
      activeKey={activeKey}
      onChange={(key) => {
        history.push(key);
        setActiveKey(key);
        onChange?.(key);
      }}
    >
      {(items ?? []).map((_item) => (
        <TabBar.Item {..._item} />
      ))}
    </TabBar>
  );
};

const SystemTabBar = memo<SystemTabBarProps>((props) => {
  const {
    className = '',
    style = {},
    mainClassName = '',
    mainStyle = {},
    bottomClassName = '',
    bottomStyle = {},
    children,
    activeKey,
    ...tabBarNavProps
  } = props;

  const history = useHistory();

  return (
    <VerticalFlexLayout
      className={classNames(selectorPrefix, className ?? '')}
      style={style ?? {}}
      mainClassName={mainClassName ?? ''}
      mainStyle={mainStyle ?? {}}
      bottomClassName={bottomClassName ?? ''}
      bottomStyle={bottomStyle ?? {}}
      renderMain={children}
      renderBottom={
        <TabBarNav
          {...tabBarNavProps}
          activeKey={
            activeKey !== history.location.pathname ? history.location.pathname : activeKey
          }
        />
      }
    />
  );
});

SystemTabBar.displayName = 'SystemTabBar';

export default SystemTabBar;
