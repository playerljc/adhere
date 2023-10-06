import { Tabs } from 'antd-mobile';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import React from 'react';

import type { SystemTabProps } from '../types';

const Tab: FC<SystemTabProps> = (props) => {
  return <Tabs.Tab {...props}>{props.children}</Tabs.Tab>;
};

Tab.defaultProps = {
  forceRender: false,
  disabled: false,
  destroyOnClose: false,
};

Tab.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  forceRender: PropTypes.bool,
  destroyOnClose: PropTypes.bool,
};

export default Tab;
