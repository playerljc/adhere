import React, { useContext, useState } from 'react';

import { ConfigProvider, FieldGeneratorToDict, Util } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState([]);
  const { media } = useContext(ConfigProvider.Context);

  const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.MultiSelect}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      className={styles.DictComponent2}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflow: 'auto' }}
      value={value}
      onChange={setValue}
      tableProps={{
        columns: [
          {
            title: '名称',
            key: 'label',
            dataIndex: 'label',
          },
          {
            title: '出版社',
            key: 'name',
            dataIndex: 'name',
          },
          {
            title: 'jp',
            key: 'jp',
            dataIndex: 'jp',
          },
          {
            title: 'onTime',
            key: 'onTime',
            dataIndex: 'onTime',
          },
          {
            title: 'rn',
            key: 'rn',
            dataIndex: 'rn',
          },
        ],
      }}
    />
  );
};
