import React, { useState } from 'react';

import { Col, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.RadioDynamic.CustomSelect,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemBookCatalogDynamic}
      style={{ width: 350 }}
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
