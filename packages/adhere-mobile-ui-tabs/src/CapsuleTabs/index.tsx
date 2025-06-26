import { CapsuleTabs } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SystemCapsuleTabsComponent, SystemCapsuleTabsProps } from '../types';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs-capsule-tabs';

/**
 * SystemCapsuleTabs
 * @param props
 * @constructor
 */
const InternalSystemCapsuleTabs = memo<SystemCapsuleTabsProps>(
  ({ className, style, innerClassName, innerStyle, items, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>();

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
        <CapsuleTabs {...props} className={innerClassName} style={innerStyle ?? {}}>
          {items?.map?.((_item) => (
            <CapsuleTabs.Tab {..._item} />
          ))}
        </CapsuleTabs>
      </div>
    );
  },
);

const SystemCapsuleTabs = InternalSystemCapsuleTabs as SystemCapsuleTabsComponent;

SystemCapsuleTabs.Tab = CapsuleTabs.Tab;

SystemCapsuleTabs.displayName = 'SystemCapsuleTabs';

export default SystemCapsuleTabs;
