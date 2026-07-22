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

/** flat + CascaderMulti */
export default () => {
  const [value, setValue] = useState([]);

  return (
    <Cascader.CascaderMulti
      style={{ width: 300 }}
      value={value}
      placeholder="FlatCascaderMulti"
      onChange={setValue}
      options={treeData}
      treeDataSimpleMode
    />
  );
};
