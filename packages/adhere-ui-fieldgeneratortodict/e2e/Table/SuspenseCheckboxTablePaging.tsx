import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.SuspenseMulti}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
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
