import React, { useState } from 'react';

import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState(['210102000000']);

  /**
   * fetchData
   * @param pid
   * @param cascadeParams
   */
  function fetchData(pid, cascadeParams) {
    if (!pid) {
      return Promise.resolve(
        Province.map((t) => ({
          title: t.name,
          label: t.name,
          value: t.id,
          id: t.id,
          pId: 0,
          isLeaf: false,
        })),
      );
    }

    const countyIds = Object.keys(County)
      .map((key) => County[key])
      .flat()
      .map((t) => t.id);

    const result = { ...City, ...County }[pid]?.map?.((t) => ({
      title: t.name,
      label: t.name,
      value: t.id,
      id: t.id,
      pId: pid,
      isLeaf: countyIds.includes(t.id),
    }));

    return Promise.resolve(result);
  }

  function fetchBranch(value, cascadeParams) {
    return Promise.resolve([
      {
        title: '辽宁省',
        value: '210000000000',
        id: '210000000000',
        pId: 0,
        isLeaf: false,
      },
      {
        title: '沈阳市',
        value: '210100000000',
        id: '210100000000',
        pId: '210000000000',
        isLeaf: false,
      },
      {
        title: '和平区',
        value: '210102000000',
        id: '210102000000',
        pId: '210100000000',
        isLeaf: true,
      },
    ]);
  }

  return (
    <TreeSelect.AsyncTreeMultiSelect
      className={styles.Wrapper}
      placeholder="AsyncTreeMultiSelect"
      value={value}
      onChange={setValue}
      fetchData={fetchData}
      fetchBranch={fetchBranch}
      treeDataSimpleMode
    />
  );
};
