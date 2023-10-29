import { Avatar } from 'antd';
import Mock from 'mockjs';
import React, { useState } from 'react';

import List from '../../src/list';

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
    <List.ListPagingSelect
      style={{ width: 600 }}
      placeholder="RadioPagingList"
      value={value}
      onChange={setValue}
      loadData={loadData}
      defaultLimit={5}
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
