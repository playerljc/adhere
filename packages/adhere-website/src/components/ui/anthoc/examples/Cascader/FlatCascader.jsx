import React, { useState } from 'react';

import { Cascader } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

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

export default () => {
  const [value, setValue] = useState();

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Cascader.CascaderMulti
      style={{ width: 200 }}
      value={value}
      placeholder="Please select"
      onChange={onChange}
      options={treeData}
      treeDataSimpleMode
    />
  );
};
