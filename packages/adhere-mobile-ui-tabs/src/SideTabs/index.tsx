import { SideBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useEffect } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';

import type { SystemSideTabsComponent, SystemSideTabsProps } from '../types';
import Tab from './tab';

const selectorPrefix = 'adhere-ui-tabs-side-tabs';

const { useSetState } = Hooks;

/**
 * SystemSideTabs
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const InternalSystemSideTabs = memo<SystemSideTabsProps>((props) => {
  const { className = '', style = {}, children, defaultActiveKey, onChange } = props;

  const [activeKey, setActiveKey] = useSetState(props.defaultActiveKey ?? props.activeKey ?? '');

  function renderHeader() {
    return (
      <SideBar
        activeKey={activeKey}
        defaultActiveKey={defaultActiveKey}
        onChange={(key) => setActiveKey(key, () => onChange?.(key))}
      >
        {children?.map?.((_rElement) => (
          <SideBar.Item {..._rElement.props} key={_rElement.key} />
        ))}
      </SideBar>
    );
  }

  function renderBody() {
    return children?.map?.((_rElement) => {
      const itemStyle: any = {
        ...(_rElement.props.style || {}),
      };

      if (_rElement.key === (activeKey || defaultActiveKey)) {
        itemStyle.display = '';
      } else {
        itemStyle.display = 'none';
      }

      return React.cloneElement(
        _rElement,
        {
          ..._rElement.props,
          style: itemStyle,
        },
        _rElement.props.children,
      );
    });
  }

  useEffect(() => setActiveKey(props.activeKey ?? ''), [props.activeKey]);

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <div className={`${selectorPrefix}-fixed`}>{renderHeader()}</div>
      <div className={`${selectorPrefix}-auto`}>{renderBody()}</div>
    </div>
  );
});

const SystemSideTabs = InternalSystemSideTabs as SystemSideTabsComponent;

SystemSideTabs.Tab = Tab;

SystemSideTabs.displayName = 'SystemSideTabs';

export default SystemSideTabs;
