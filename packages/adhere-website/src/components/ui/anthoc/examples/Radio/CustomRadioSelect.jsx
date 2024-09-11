import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Col, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState(undefined);

  const { media } = useContext(ConfigProvider.Context);

  return (
    <Radio.CustomRadioSelect
      className={styles.Wrapper1}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflowY: 'auto' }}
      placeholder="A-Z"
      value={value}
      onChange={setValue}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
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
    </Radio.CustomRadioSelect>
  );
};
