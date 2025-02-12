import React, { useContext, useState } from 'react';

import { ConfigProvider, FieldGeneratorToDict, Util } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState([]);
  const { media } = useContext(ConfigProvider.Context);

  const DictComponentName = `SystemUserACPagin${FieldGeneratorToDict.ComponentNames.TableAC.MultiPaging}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      className={styles.DictComponent2}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflow: 'auto' }}
      value={value}
      onChange={setValue}
      pagingProps={{
        defaultLimit: 10,
      }}
      tablePagingProps={{
        rowId: 'itemid',
        columns: [
          {
            title: '名称',
            key: 'label',
            dataIndex: 'label',
          },
        ],
      }}
    />
  );
};
