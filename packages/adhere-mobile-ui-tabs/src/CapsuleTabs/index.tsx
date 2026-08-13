import { CapsuleTabs } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SystemCapsuleTabsComponent, SystemCapsuleTabsProps } from '../types';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs-capsule-tabs';

/**
 * 内部胶囊标签页组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const InternalSystemCapsuleTabs = memo<SystemCapsuleTabsProps>(
  ({ className, style, innerClassName, innerStyle, items, children, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>(undefined);

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
          {items?.length
            ? items.map(({ key, ...item }, index) => (
                <CapsuleTabs.Tab key={key ?? index} {...item} />
              ))
            : children}
        </CapsuleTabs>
      </div>
    );
  },
);

const SystemCapsuleTabs = InternalSystemCapsuleTabs as SystemCapsuleTabsComponent;

SystemCapsuleTabs.Tab = CapsuleTabs.Tab;

SystemCapsuleTabs.displayName = 'SystemCapsuleTabs';

export default SystemCapsuleTabs;
