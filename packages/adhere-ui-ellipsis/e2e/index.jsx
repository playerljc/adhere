import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CustomTooltip from './CustomTooltip';
import ExpandCollapse from './ExpandCollapse';
import HtmlContent from './HtmlContent';
import ListDemo from './ListDemo';
import MultiLine from './MultiLine';
import SingleLine from './SingleLine';

import './index.less';

e2e.PC({
  children: <ListDemo />,
});
