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
  const [value, setValue] = useState(undefined);

  function loadData(page, limit) {
    console.log('paging', page, limit);

    return new Promise((resolve) => {
      resolve({
        totalCount: data.length,
        data: data.slice((page - 1) * limit, page * limit),
      });
    });
  }

  return (
    <List.ListPaging
      value={value}
      onChange={(_value) => {
        console.log(_value);
        setValue(_value);
      }}
      isSuspenseAsync={false}
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
