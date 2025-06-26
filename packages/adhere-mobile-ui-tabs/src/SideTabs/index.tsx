import { SideBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SystemSideTabsComponent, SystemSideTabsProps } from '../types';
import Tab from './tab';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs-side-tabs';

/**
 * SystemSideTabs
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const InternalSystemSideTabs = memo<SystemSideTabsProps>(
  ({ className, style, items, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>();

    function renderHeader() {
      return (
        <SideBar {...props}>
          {items?.map?.((_item) => (
            <SideBar.Item {..._item} />
          ))}
        </SideBar>
      );
    }

    function renderBody() {
      return items?.map?.(({ children }) => {
        if (!children) return null;

        const itemStyle: any = {
          ...(children?.props?.style || {}),
        };

        if (children?.key === (props.activeKey || props.defaultActiveKey)) {
          itemStyle.display = '';
        } else {
          itemStyle.display = 'none';
        }

        return React.cloneElement(
          children,
          {
            ...children.props,
            style: itemStyle,
          },
          children.props.children,
        );
      });
    }

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'Tabs',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(selectorPrefix, className)}
        style={style ?? {}}
      >
        <div className={`${selectorPrefix}-fixed`}>{renderHeader()}</div>
        <div className={`${selectorPrefix}-auto`}>{renderBody()}</div>
      </div>
    );
  },
);

const SystemSideTabs = InternalSystemSideTabs as SystemSideTabsComponent;

SystemSideTabs.Tab = Tab;

SystemSideTabs.displayName = 'SystemSideTabs';

export default SystemSideTabs;
