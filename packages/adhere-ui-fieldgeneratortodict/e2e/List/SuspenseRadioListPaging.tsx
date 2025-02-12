import { Avatar } from 'antd';
import React, { useState } from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.SuspenseStandard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      pagingProps={{
        defaultLimit: 10,
      }}
      listPagingProps={{
        itemLayout: 'horizontal',
        renderItem: (item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        ),
      }}
    />
  );
};
