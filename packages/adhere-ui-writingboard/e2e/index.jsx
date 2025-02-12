import MobileSignature from './MobileSignature';

import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Signature from './Signature';
import WritingBoard from './WritingBoard.jsx';

import './index.less';

// e2e.PC({
//   children: <Signature />,
// });

e2e.Mobile({
  children: <MobileSignature />,
});
