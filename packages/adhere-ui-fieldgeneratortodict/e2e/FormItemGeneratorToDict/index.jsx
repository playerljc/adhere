import React, { useMemo } from 'react';

import { Space } from '@baifendian/adhere';

export default () => {
  const items = useMemo(() => {
    const requireComponent = require.context('./items', true, /.*\.(jsx)$/);

    return requireComponent.keys().map((path) => {
      const Com = requireComponent(path).default;

      return {
        Item: Com,
        key: path,
      };
    });
  }, []);

  return (
    <Space.Group direction="vertical">
      {items.map(({ Item, key }) => (
        <Item key={key} />
      ))}
    </Space.Group>
  );
};
