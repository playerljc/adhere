import React, { useState } from 'react';

import Cascader from '../../src/cascader';
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
          label: t.name,
          value: t.id,
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
      label: t.name,
      value: t.id,
      pId: pid,
      isLeaf: countyIds.includes(t.id),
    }));

    return Promise.resolve(result);
  }

  console.log('value', value);

  return (
    <Cascader.AsyncCascaderMulti
      style={{ width: 200 }}
      placeholder="AsyncCascaderMulti"
      value={value}
      onChange={setValue}
      fetchData={fetchData}
    />
  );
};
