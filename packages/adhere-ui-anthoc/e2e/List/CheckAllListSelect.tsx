import { Avatar } from 'antd';
import React, { useState } from 'react';

import List from '../../src/list';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
].map(({ title }) => ({
  title,
  label: title,
  value: title,
}));

export default () => {
  const [value, setValue] = useState([]);

  return (
    <List.CheckAllListSelect
      style={{ width: 600 }}
      placeholder="List"
      value={value}
      onChange={setValue}
      options={data}
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
