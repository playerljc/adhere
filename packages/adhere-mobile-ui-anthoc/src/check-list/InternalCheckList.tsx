import { CheckList } from 'antd-mobile';
import React from 'react';
import type { FC } from 'react';

import type { CheckListProps } from '../types';

const { Item } = CheckList;

const InternalCheckList: FC<CheckListProps> = ({ options, ...props }) => (
  <CheckList {...props}>
    {options?.map?.((t) => (
      <Item key={t.value} {...t} />
    ))}
  </CheckList>
);

export default InternalCheckList;
