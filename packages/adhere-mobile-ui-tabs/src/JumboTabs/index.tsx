import { JumboTabs } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { SystemJumboTabsComponent, SystemJumboTabsProps } from '../types';

const selectorPrefix = 'adhere-ui-tabs-jumbo-tabs';

/**
 * SystemJumboTabs
 * @param props
 * @constructor
 */
const InternalSystemJumboTabs = memo<SystemJumboTabsProps>((props) => {
  const { className = '', style = {}, innerClassName = '', innerStyle = {} } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <JumboTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}} />
    </div>
  );
});

const SystemJumboTabs = InternalSystemJumboTabs as SystemJumboTabsComponent;

SystemJumboTabs.Tab = JumboTabs.Tab;

SystemJumboTabs.displayName = 'SystemJumboTabs';

export default SystemJumboTabs;
