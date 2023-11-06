import classNames from 'classnames';
import React, { memo, useContext } from 'react';

import { TabPanelProps } from '../types';
import { TabContext } from './Context';

const selectorPrefix = 'adhere-ui-playground-simple-tabs-panel';

const TabPanel = memo<TabPanelProps>(({ className = '', style, children, index = '' }) => {
  const { activeKey } = useContext(TabContext);

  return (
    <div
      className={classNames(selectorPrefix, className ?? '', {
        active: activeKey === index,
      })}
      style={style ?? {}}
    >
      {children}
    </div>
  );
});

export default TabPanel;
