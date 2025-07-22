import React, { useState } from 'react';

import { Checkbox, Col, Row } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllCustomSelect}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllCustomSelect,
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
          {options.map(({ data, onChange, checked, disabled }) => (
            <Col span={4}>
              <Checkbox
                key={data?.value}
                {...(data ?? {})}
                checked={checked}
                disabled={disabled}
                onChange={(e) => {
                  onChange(e, data.value);
                }}
              >
                {data?.label}
              </Checkbox>
            </Col>
          ))}
        </Row>
      )}
    </DictComponent>
  );
};
