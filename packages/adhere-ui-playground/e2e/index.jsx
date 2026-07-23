import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AnchorNavigationDemo from './AnchorNavigationDemo';
import CodePanelDemo from './CodePanelDemo';
import PlayGroundBasic from './PlayGroundBasic';
import PlayGroundMultiDemo from './PlayGroundMultiDemo';
import PlayGroundPageDemo from './PlayGroundPageDemo';
import PlayGroundTabDemo from './PlayGroundTabDemo';
import PropsAndFunctionProps from './PropsAndFunctionProps';

e2e.PC({
  children: <PlayGroundBasic />,
});
