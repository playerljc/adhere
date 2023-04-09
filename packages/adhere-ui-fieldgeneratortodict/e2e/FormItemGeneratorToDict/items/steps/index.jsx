import React from 'react';

import { Space } from '@baifendian/adhere';

import FieldGeneratorToDict from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Steps</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneStepsFormItem value={1} />
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneStepsFormItem
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
