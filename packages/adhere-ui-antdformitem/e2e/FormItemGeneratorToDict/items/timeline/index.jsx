import React from 'react';

import { Space } from '@baifendian/adhere';

import AntdFormItem from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Timeline</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <AntdFormItem.FormItemGeneratorToDict.SystemTestOneTimelineFormItem />
            <AntdFormItem.FormItemGeneratorToDict.SystemTestTwoTimelineFormItem mode="alternate" />
            <AntdFormItem.FormItemGeneratorToDict.SystemTestThreeTimelineFormItem mode="right" />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
