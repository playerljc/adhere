import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';
import { Checkbox, Col, Row } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseCheckAllCustom}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent value={value} onChange={setValue}>
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
