import { Avatar } from 'antd';
import React, { useState } from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserPagin,
        FieldGeneratorToDict.ComponentNames.ListPagination.Standard,
      )
    ];

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
