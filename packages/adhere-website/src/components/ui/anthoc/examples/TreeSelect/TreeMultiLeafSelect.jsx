import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState();

  const { media } = useContext(ConfigProvider.Context);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <TreeSelect.TreeMultiLeafSelect
      value={value}
      className={styles.Wrapper1}
      dropdownStyle={{ maxHeight: Util.pxToRem(400, media.designWidth, media), overflow: 'auto' }}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
