import Mock from 'mockjs';
import React, { useState } from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';

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

  function loadData(page, limit, _kw) {
    return new Promise((resolve) => {
      const result = !_kw ? [] : data.filter(({ label }) => label.indexOf(_kw) !== -1);

      resolve({
        totalCount: result.length,
        data: result.slice((page - 1) * limit, page * limit),
      });
    });
  }

  return (
    <List.AutoCompleteListPagingSelect
      mode="multiple"
      placeholder="AutoCompleteListPagingSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      pagingProps={{
        loadData,
        defaultLimit: 5,
      }}
      listPagingProps={{
        itemLayout: 'horizontal',
        renderItem: (item) => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.label} />
          </List.Item>
        ),
      }}
    />
  );
};
