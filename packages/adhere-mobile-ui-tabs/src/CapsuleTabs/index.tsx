import { CapsuleTabs } from 'antd-mobile';
import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import type { SystemCapsuleTabsProps } from '../types';

const selectorPrefix = 'adhere-ui-tabs-capsule-tabs';

/**
 * SystemCapsuleTabs
 * @param props
 * @constructor
 */
const SystemCapsuleTabs: FC<SystemCapsuleTabsProps> = (props) => {
  const { className = '', style = {}, innerClassName = '', innerStyle = {} } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <CapsuleTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}} />
    </div>
  );
};

// @ts-ignore
SystemCapsuleTabs.Tab = CapsuleTabs.Tab;

export default SystemCapsuleTabs;
