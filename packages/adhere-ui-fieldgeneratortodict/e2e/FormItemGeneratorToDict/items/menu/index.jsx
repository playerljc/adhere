import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import FieldGeneratorToDict from '../../../../src/index';

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
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMenuFormItem />

            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestJSX1MenuFormItem
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
            />

            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestJSX2MenuFormItem
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
