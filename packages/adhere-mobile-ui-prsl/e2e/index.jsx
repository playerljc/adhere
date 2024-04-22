import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import DictConfig from '@/dict/dict.config';

import GridView from './GridView';
import LocalNoPaging from './Local/noPaging';
import LocalPaging from './Local/paging';
import Normal from './Normal';
import Remote from './Remote';
import Selection from './Selection';

DictConfig();

e2e.Mobile({
  children: <Selection />,
});
