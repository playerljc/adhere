import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTableBook,
        FieldGeneratorToDict.ComponentNames.TableDynamic.Standard,
      )
    ];

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
