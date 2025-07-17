import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import TreeSelect from './TreeSelect';
import TreeSelectInForm from './TreeSelectInForm';
import TreeSelectInFormWithTrigger from './TreeSelectInFormWithTrigger';
import LoadData from './loadData';
import Normal from './normal';

import '@baifendian/adhere-e2e/es/index.less';

e2e.Mobile({
  children: <Normal />,
});
