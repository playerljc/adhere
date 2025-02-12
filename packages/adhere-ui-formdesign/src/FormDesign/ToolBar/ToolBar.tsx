import React, { memo } from 'react';
import type { FC } from 'react';

import type { ToolBarProps } from '../../types/ToolBarTypes';

const ToolBar: FC<ToolBarProps> = () => <div>ToolBar</div>;

export default memo(ToolBar);
