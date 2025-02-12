import React, { useState } from 'react';

import TreeSelect from '../../src/tree-select';
import { City, County, Province } from '../mock/pcc';

export default () => {
  const [value, setValue] = useState([]);

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
    <TreeSelect.AsyncTreeCheckedShowAllSelect
      style={{ width: 200 }}
      placeholder="AsyncTreeCheckedShowAllSelect"
      value={value}
      onChange={setValue}
      fetchData={fetchData}
    />
  );
};
