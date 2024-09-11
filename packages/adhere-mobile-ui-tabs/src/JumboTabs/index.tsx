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
const InternalSystemJumboTabs = memo<SystemJumboTabsProps>(
  ({ className = '', style = {}, innerClassName = '', innerStyle = {}, items, ...props }) => {
    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
        <JumboTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}}>
          {items?.map((_item) => (
            <JumboTabs.Tab {..._item} />
          ))}
        </JumboTabs>
      </div>
    );
  },
);

const SystemJumboTabs = InternalSystemJumboTabs as SystemJumboTabsComponent;

SystemJumboTabs.Tab = JumboTabs.Tab;

SystemJumboTabs.displayName = 'SystemJumboTabs';

export default SystemJumboTabs;
