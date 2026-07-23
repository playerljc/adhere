import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import MobileSignatureControlled from './MobileSignatureControlled';
import SignatureControlled from './SignatureControlled';
import WritingBoardBasic from './WritingBoardBasic';
import WritingBoardDrawTools from './WritingBoardDrawTools';
import WritingBoardIsEmpty from './WritingBoardIsEmpty';

import './index.less';

// e2e.PC({
//   children: <WritingBoardDrawTools />,
// });
// e2e.PC({
//   children: <WritingBoardBasic />,
// });
// e2e.PC({
//   children: <WritingBoardIsEmpty />,
// });
// e2e.PC({
//   children: <SignatureControlled />,
// });

e2e.Mobile({
  children: <MobileSignatureControlled />,
});
