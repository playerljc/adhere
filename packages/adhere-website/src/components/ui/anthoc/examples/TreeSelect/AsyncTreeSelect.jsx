import React, { useState } from 'react';

import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

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

  return (
    <TreeSelect.AsyncTreeSelect
      className={styles.Wrapper}
      placeholder="AsyncTreeSelect"
      value={value}
      onChange={setValue}
      fetchData={fetchData}
    />
  );
};
