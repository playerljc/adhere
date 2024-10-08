import Mock from 'mockjs';
import React, { useState } from 'react';

import { Avatar, List } from '@baifendian/adhere-ui-anthoc';

const data = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@cname');
  const value = Mock.mock('@guid');

  return {
    label,
    value,
    title: label,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${value}`,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  function loadData(page, limit) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalCount: data.length,
          data: data.slice((page - 1) * limit, page * limit),
        });
      }, 1000);
    });
  }

  return (
    <List.ListPaging
      mode="multiple"
      value={value}
      onChange={setValue}
      pagingProps={{
        loadData,
        defaultLimit: 5,
      }}
      listPagingProps={{
        itemLayout: 'horizontal',
        renderItem: (item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        ),
      }}
    />
  );
};
