import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Checkbox, Col, Row } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState([]);

  const { media } = useContext(ConfigProvider.Context);

  return (
    <Checkbox.CustomCheckboxSelect
      className={styles.Wrapper}
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
          {options.map(({ data, onChange, ...rest }) => (
            <Col key={data?.value} span={4}>
              <Checkbox
                {...(data ?? {})}
                {...rest}
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
    </Checkbox.CustomCheckboxSelect>
  );
};
