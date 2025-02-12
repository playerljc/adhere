import { Avatar } from 'antd';
import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';
import { List } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.SuspenseStandard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      itemLayout="horizontal"
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
      pagination
    />
  );
};
