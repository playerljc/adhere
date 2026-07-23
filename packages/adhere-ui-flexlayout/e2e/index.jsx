import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AutoFixed from './AutoFixed';
import BackLayout from './BackLayout';
import Basic from './Basic';
import Collapse from './Collapse';
import Gutter from './Gutter';
import HorizontalFlexLayout from './HorizontalFlexLayout';
import ScrollLayout from './ScrollLayout';
import SpaceAround from './SpaceAround';
import SpaceBetween from './SpaceBetween';
import ToolBarLayout from './ToolBarLayout';
import VerticalFlexLayout from './VerticalFlexLayout';
import VerticalSpan from './VerticalSpan';
import LCRLayout from './TRBLC/LCRLayout';
import LCRTrigger from './TRBLC/LCRTrigger';
import LRTCBLayout from './TRBLC/LRTCBLayout';
import TBLCRLayout from './TRBLC/TBLCRLayout';
import TCLayout from './TRBLC/TCLayout';

import './index.less';

e2e.PC({
  children: <Basic />,
});
