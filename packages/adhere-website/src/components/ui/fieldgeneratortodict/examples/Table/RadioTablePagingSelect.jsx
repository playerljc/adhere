import React, { useContext, useState } from 'react';

import { ConfigProvider, FieldGeneratorToDict, Util } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState([]);
  const { media } = useContext(ConfigProvider.Context);

  const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.Select}`;
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
        rowKey: 'id',
        columns: [
          {
            title: 'title',
            key: 'title',
            dataIndex: 'title',
          },
          {
            title: 'avatar',
            key: 'avatar',
            dataIndex: 'avatar',
            render: (v) => <img width={50} src={v} alt="" />,
          },
        ],
      }}
    />
  );
};
