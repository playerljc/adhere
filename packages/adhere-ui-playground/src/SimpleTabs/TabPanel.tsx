import React, { FC, memo, useContext } from 'react';

import { TabPanelProps } from '../types';
import { TabContext } from './Context';

const selectorPrefix = 'adhere-ui-playground-simple-tabs-panel';

const TabPanel: FC<TabPanelProps> = ({ className = '', children, index = '' }) => {
  const { activeKey } = useContext(TabContext);

  return (
    <div className={`${selectorPrefix} ${className} ${activeKey === index ? `active` : ''}`}>
      {children}
    </div>
  );
};

// TabPanel.defaultProps = {
//   title: '',
//   index: '',
//   className: '',
// };
//
// TabPanel.propTypes = {
//   title: PropTypes.node,
//   index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   className: PropTypes.string,
// };

export default memo(TabPanel);
