import React, { memo, useCallback, useEffect, useState } from 'react';

import type { SimpleTabsComponent, SimpleTabsProps } from '../types';
import { TabContext } from './Context';
import TabPanel from './TabPanel';

const selectorPrefix = 'adhere-ui-playground-simple-tabs';

const InternalSimpleTabs = memo<SimpleTabsProps>((props) => {
  const { className = '', onChange, children } = props;

  const [activeKey, setActiveKey] = useState(props.activeKey);

  const renderHead = useCallback(() => {
    return children instanceof Array
      ? children.map((t) => renderHeadItem(t))
      : renderHeadItem(children);
  }, [children]);

  function renderHeadItem({ props: { index, title } }) {
    return (
      <li
        key={index}
        className={activeKey === index ? 'active' : ''}
        onClick={() => {
          setActiveKey(index);

          onChange && onChange(index);
        }}
      >
        {title}
      </li>
    );
  }

  useEffect(() => {
    setActiveKey(props.activeKey);
  }, [props.activeKey]);

  return (
    <TabContext.Provider
      value={{
        activeKey: activeKey ?? '',
      }}
    >
      <div className={`${selectorPrefix} ${className}`}>
        <ul className={`${selectorPrefix}-head`}>{renderHead()}</ul>
        <div className={`${selectorPrefix}-body`}>{children}</div>
      </div>
    </TabContext.Provider>
  );
});

const SimpleTabs = InternalSimpleTabs as SimpleTabsComponent;

SimpleTabs.TabPanel = TabPanel;

export default SimpleTabs;
