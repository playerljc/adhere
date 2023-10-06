import { JumboTabs } from 'antd-mobile';
import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import type { SystemJumboTabsProps } from '../types';

const selectorPrefix = 'adhere-ui-tabs-jumbo-tabs';

/**
 * SystemJumboTabs
 * @param props
 * @constructor
 */
const SystemJumboTabs: FC<SystemJumboTabsProps> = (props) => {
  const { className = '', style = {}, innerClassName = '', innerStyle = {} } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <JumboTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}} />
    </div>
  );
};

// @ts-ignore
SystemJumboTabs.Tab = JumboTabs.Tab;

export default SystemJumboTabs;
