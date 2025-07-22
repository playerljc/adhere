import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.Select}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserPagin,
        FieldGeneratorToDict.ComponentNames.TablePagination.Select,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemUserPagin}
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
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
