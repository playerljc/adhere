import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import DictConfig from '@/dict/dict.config';

import Action from './Action';
import Extend from './Extend';
import GridView from './GridView';
import List from './List';
import LocalNoPaging from './Local/noPaging';
import LocalPaging from './Local/paging';
import Normal from './Normal';
import Remote from './Remote';
import Selection from './Selection';

DictConfig();

e2e.Mobile({
  children: <List />,
});
