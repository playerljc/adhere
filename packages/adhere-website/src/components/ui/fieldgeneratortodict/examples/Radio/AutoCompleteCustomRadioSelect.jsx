import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';
import { Col, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Custom}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      className={styles.DictComponent2}
      placeholder={DictComponentName}
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
