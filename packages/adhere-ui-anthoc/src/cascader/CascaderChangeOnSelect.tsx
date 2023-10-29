import type { CascaderProps } from 'antd';
import React from 'react';
import type { FC } from 'react';

import Cascader from './CascaderTreeSelect';

const CascaderChangeOnSelect: FC<CascaderProps> = (props) => <Cascader {...props} changeOnSelect />;

export default CascaderChangeOnSelect;
