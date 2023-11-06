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
const InternalSystemCapsuleTabs = memo<SystemCapsuleTabsProps>((props) => {
  const { className = '', style = {}, innerClassName = '', innerStyle = {} } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <CapsuleTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}} />
    </div>
  );
});

const SystemCapsuleTabs = InternalSystemCapsuleTabs as SystemCapsuleTabsComponent;

SystemCapsuleTabs.Tab = CapsuleTabs.Tab;

export default SystemCapsuleTabs;
