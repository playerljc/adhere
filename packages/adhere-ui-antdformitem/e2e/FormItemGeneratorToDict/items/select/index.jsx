import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import AntdFormItem from '../../../../src/index';

export default () => {
  const [vals, setVals] = useState([]);

  return (
    <div>
      <dl>
        <dt>
          <h1>Select111111111111111</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoSelectCompleteMulitFormItem
              style={{ width: 200 }}
              value={vals}
              onChange={(v) => {
                setVals(v);
              }}
            />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
