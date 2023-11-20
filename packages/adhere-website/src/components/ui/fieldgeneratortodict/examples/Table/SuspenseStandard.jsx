import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.SuspenseStandard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      columns={[
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
      ]}
    />
  );
};
