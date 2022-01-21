import React from 'react';
import PropTypes from 'prop-types';

import { TabContext } from './Context';

const selectorPrefix = 'adhere-ui-playground-simple-tabs-panel';

const TabPanel = ({ className, children, index }) => (
  <TabContext.Consumer>
    {({ activeKey = '' }) => {
      return (
        <div className={`${selectorPrefix} ${className} ${activeKey === index ? `active` : ''}`}>
          {children}
        </div>
      );
    }}
  </TabContext.Consumer>
);

TabPanel.defaultProps = {
  title: '',
  index: '',
  className: '',
};

TabPanel.propTypes = {
  title: PropTypes.node,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default TabPanel;
