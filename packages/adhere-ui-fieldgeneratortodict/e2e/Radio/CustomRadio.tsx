import React from 'react';

import { Col, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Custom}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.RadioDynamic.Custom,
      )
    ];

  return (
    <DictComponent>
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
