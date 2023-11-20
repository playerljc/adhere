import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.MultiSelect}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
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
