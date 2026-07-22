import React, { useState } from 'react';

import Cascader from '../../src/cascader';
import { City, County, Province } from '../mock/pcc';

const treeData = [
  ...Province.map((t) => ({
    title: t.name,
    label: t.name,
    value: t.id,
    id: t.id,
    isLeaf: false,
    pId: 0,
  })),
  ...Object.keys(City)
    .map((key) =>
      City[key].map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        isLeaf: false,
        pId: `${key}`,
      })),
    )
    .flat(),
  ...Object.keys(County)
    .map((key) =>
      County[key].map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        isLeaf: true,
        pId: key,
      })),
    )
    .flat(),
];

/** flat + CascaderTreeSelect（单选） */
export default () => {
  const [value, setValue] = useState<string[]>();

  return (
    <Cascader.CascaderTreeSelect
      style={{ width: 300 }}
      value={value}
      placeholder="FlatCascader"
      onChange={setValue}
      options={treeData}
      treeDataSimpleMode
    />
  );
};
