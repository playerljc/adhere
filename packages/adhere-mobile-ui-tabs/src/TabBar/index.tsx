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
  const { data = [], onChange } = props;

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
      {(data ?? []).map((_item) => (
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
    data = [],
    activeKey,
    onChange,
    children,
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
          data={data}
          activeKey={
            activeKey !== history.location.pathname ? history.location.pathname : activeKey
          }
          onChange={onChange}
        />
      }
    />
  );
});

SystemTabBar.displayName = 'SystemTabBar';

export default SystemTabBar;
