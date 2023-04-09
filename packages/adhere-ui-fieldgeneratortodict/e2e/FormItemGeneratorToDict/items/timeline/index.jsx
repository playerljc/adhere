import React from 'react';

import { Space } from '@baifendian/adhere';

import FieldGeneratorToDict from '../../../../src/index';

export default () => {
  return (
    <div>
      <dl>
        <dt>
          <h1>Timeline</h1>
        </dt>

        <dd>
          <Space.Group direction="vertical">
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneTimelineFormItem />
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTwoTimelineFormItem mode="alternate" />
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestThreeTimelineFormItem mode="right" />
          </Space.Group>
        </dd>
      </dl>
    </div>
  );
};
