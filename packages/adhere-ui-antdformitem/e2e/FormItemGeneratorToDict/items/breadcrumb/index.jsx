import React from 'react';

import { Space } from '@baifendian/adhere';

import AntdFormItem from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Breadcrumb</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <AntdFormItem.FormItemGeneratorToDict.SystemTestBreadcrumbFormItem />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
