import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ReactQuillControlled from './ReactQuillControlled';
import ReactQuillForm from './ReactQuillForm';
import ReactQuillReadOnly from './ReactQuillReadOnly';
import WangEditorControlled from './WangEditorControlled';
import WangEditorForm from './WangEditorForm';
import WangEditorReadOnly from './WangEditorReadOnly';

e2e.PC({
  // children: <ReactQuillControlled />,
  // children: <ReactQuillForm />,
  // children: <ReactQuillReadOnly />,
  // children: <WangEditorControlled />,
  // children: <WangEditorReadOnly />,
  children: <WangEditorForm />,
});
