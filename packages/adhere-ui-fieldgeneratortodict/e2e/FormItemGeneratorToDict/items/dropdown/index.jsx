import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Space } from '@baifendian/adhere';

import FieldGeneratorToDict from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Dropdown</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestDropdownFormItem>
              <a onClick={(e) => e.preventDefault()}>
                Hover me
                <DownOutlined />
              </a>
            </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestDropdownFormItem>
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
