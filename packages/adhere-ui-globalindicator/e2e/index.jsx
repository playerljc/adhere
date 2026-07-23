import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import OptionsObject from './OptionsObject';
import ShowInParent from './ShowInParent';
import ShowOnBody from './ShowOnBody';
import ShowWithText from './ShowWithText';
import Sizes from './Sizes';

e2e.PC({
  children: <ShowOnBody />,
});
