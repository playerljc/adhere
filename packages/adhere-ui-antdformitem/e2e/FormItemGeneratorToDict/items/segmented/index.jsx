import React from 'react';

import { Space } from '@baifendian/adhere';

import AntdFormItem from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Segmented</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <AntdFormItem.FormItemGeneratorToDict.SystemTestSegmentedFormItem />
            <AntdFormItem.FormItemGeneratorToDict.SystemTestObjArraySegmentedFormItem />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
