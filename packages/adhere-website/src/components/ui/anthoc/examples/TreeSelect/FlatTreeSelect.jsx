import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

import styles from '../Cascader/index.less';

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

  const { media } = useContext(ConfigProvider.Context);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <TreeSelect
      className={styles.Wrapper}
      dropdownStyle={{ maxHeight: Util.pxToRem(400, media.designWidth, media), overflow: 'auto' }}
      value={value}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      treeDataSimpleMode
    />
  );
};
