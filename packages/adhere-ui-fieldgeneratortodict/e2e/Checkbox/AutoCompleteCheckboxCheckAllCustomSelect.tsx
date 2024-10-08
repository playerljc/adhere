import React, { useState } from 'react';

import { Checkbox, Col, Row } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.CheckBoxAC.CheckAllCustom}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      style={{ width: 600 }}
      placeholder={DictComponentName}
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
