import { Avatar } from 'antd';
import React, { useState } from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.Select}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      listProps={{
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
