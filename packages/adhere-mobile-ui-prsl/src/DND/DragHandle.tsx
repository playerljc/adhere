import { MoreOutline } from 'antd-mobile-icons';
import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';

export default SortableHandle(
  ({ children }) =>
    children ?? (
      <span>
        <MoreOutline />
      </span>
    ),
);
