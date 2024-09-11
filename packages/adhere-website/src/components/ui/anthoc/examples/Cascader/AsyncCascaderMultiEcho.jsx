import React, { useState } from 'react';

import { Cascader } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

import styles from './index.less';

export default () => {
  const [value, setValue] = useState([
    ['210000000000', '210100000000', '210102000000'],
    ['230000000000', '230100000000', '230102000000'],
  ]);

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
    <Cascader.AsyncCascaderShowChild
      className={styles.Wrapper}
      placeholder="AsyncCascaderMulti"
      value={value}
      onChange={setValue}
      fetchData={fetchData}
      fetchBranch={(value, cascadeParams) => {
        return Promise.resolve([
          {
            label: '辽宁省',
            value: '210000000000',
            isLeaf: false,
            children: [
              {
                label: '沈阳市',
                value: '210100000000',
                isLeaf: false,
                children: [
                  {
                    label: '和平区',
                    value: '210102000000',
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
          {
            label: '黑龙江省',
            value: '230000000000',
            isLeaf: false,
            children: [
              {
                label: '哈尔滨市',
                value: '230100000000',
                isLeaf: false,
                children: [
                  {
                    label: '道里区',
                    value: '230102000000',
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ]);
      }}
    />
  );
};
