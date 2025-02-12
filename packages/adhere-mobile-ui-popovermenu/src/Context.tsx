import type { PopoverRef } from 'antd-mobile/es/components/popover';
import React from 'react';

export default React.createContext<{
  refs: PopoverRef[];
}>({
  refs: [],
});
