import { CapsuleTabs } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { SystemCapsuleTabsComponent, SystemCapsuleTabsProps } from '../types';

const selectorPrefix = 'adhere-ui-tabs-capsule-tabs';

/**
 * SystemCapsuleTabs
 * @param props
 * @constructor
 */
const InternalSystemCapsuleTabs = memo<SystemCapsuleTabsProps>(
  ({ className = '', style = {}, innerClassName = '', innerStyle = {}, items, ...props }) => {
    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
        <CapsuleTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}}>
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
