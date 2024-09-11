import React from 'react';

import { SearchOutlined } from '@ant-design/icons';

/**
 * 表格列头筛选
 * @param render
 * @param icon
 * @return {{filterDropdown: (function(*=): *), filterIcon: (function(*): *)}}
 */
export default (render, icon = <SearchOutlined />) => ({
  filterIcon: () => icon,
  filterDropdown: (props) => render(props),
});
