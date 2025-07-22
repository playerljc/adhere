import React, { useState } from 'react';

import { Col, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);

  // const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Custom}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemFilterBookList,
        FieldGeneratorToDict.ComponentNames.RadioAC.Custom,
      )
    ];

  return (
    <DictComponent
      style={{ width: 600 }}
      placeholder="SystemFilterBookList"
      value={value}
      onChange={setValue}
    >
      {(options) => (
        <Row gutter={[16, 24]}>
          {options.map(({ data }) => (
            <Col span={4}>
              <Radio key={data?.value} {...(data ?? {})}>
                {data?.label}
              </Radio>
            </Col>
          ))}
        </Row>
      )}
    </DictComponent>
  );
};
