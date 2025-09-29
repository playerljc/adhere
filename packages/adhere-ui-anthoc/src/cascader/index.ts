import type { CascaderProps } from 'antd';

import type { AsyncCascaderProps, CascaderTreeSelectProps } from '../types';
import { createFactory } from '../util';
import AsyncCascader from './AsyncCascader';
import AsyncCascaderChangeOnSelect from './AsyncCascaderChangeOnSelect';
import AsyncCascaderMulti from './AsyncCascaderMulti';
import AsyncCascaderShowChild from './AsyncCascaderShowChild';
import AsyncCascaderShowParent from './AsyncCascaderShowParent';
import Cascader from './Cascader';
import CascaderChangeOnSelect from './CascaderChangeOnSelect';
import CascaderMulti from './CascaderMulti';
import CascaderShowChild from './CascaderShowChild';
import CascaderShowParent from './CascaderShowParent';
import CascaderTreeSelect from './CascaderTreeSelect';

Cascader.AsyncCascader = createFactory<AsyncCascaderProps>(AsyncCascader, {});
Cascader.AsyncCascaderChangeOnSelect = createFactory<AsyncCascaderProps>(
  AsyncCascaderChangeOnSelect,
  {},
);
Cascader.AsyncCascaderMulti = createFactory<AsyncCascaderProps>(AsyncCascaderMulti, {});
Cascader.AsyncCascaderShowChild = createFactory<AsyncCascaderProps>(AsyncCascaderShowChild, {});
Cascader.AsyncCascaderShowParent = createFactory<AsyncCascaderProps>(AsyncCascaderShowParent, {});
Cascader.CascaderChangeOnSelect = createFactory<CascaderProps>(CascaderChangeOnSelect, {});
Cascader.CascaderMulti = createFactory<CascaderTreeSelectProps>(CascaderMulti, {});
Cascader.CascaderShowChild = createFactory<CascaderProps>(CascaderShowChild, {});
Cascader.CascaderShowParent = createFactory<CascaderProps>(CascaderShowParent, {});
Cascader.CascaderTreeSelect = createFactory<CascaderTreeSelectProps>(CascaderTreeSelect, {});

export default Cascader;
