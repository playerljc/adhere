import React from 'react';

import { Space } from '@baifendian/adhere';

import AntdFormItem from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Steps</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <AntdFormItem.FormItemGeneratorToDict.SystemTestOneStepsFormItem value={1} />
            <AntdFormItem.FormItemGeneratorToDict.SystemTestOneStepsFormItem
              direction="vertical"
              size="small"
              value={1}
            />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
