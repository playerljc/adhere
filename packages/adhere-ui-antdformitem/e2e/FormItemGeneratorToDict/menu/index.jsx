import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import AntdFormItem from '../../../src/index';

export default () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <dl>
        <dt>
          <h1>Menu</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <AntdFormItem.FormItemGeneratorToDict.SystemTestMenuFormItem />

            <AntdFormItem.FormItemGeneratorToDict.SystemTestJSX1MenuFormItem
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
            />

            <AntdFormItem.FormItemGeneratorToDict.SystemTestJSX2MenuFormItem
              onClick={() => {}}
              style={{
                width: 256,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
