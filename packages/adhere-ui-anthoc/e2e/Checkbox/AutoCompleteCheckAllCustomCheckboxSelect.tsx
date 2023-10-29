import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Col from '../../src/col';
import Row from '../../src/row';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <Checkbox.AutoCompleteCheckAllCustomCheckboxSelect
      placeholder="AutoCompleteCheckAllCustomCheckboxSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
      loadData={(_kw) =>
        new Promise((resolve) => {
          if (!_kw) {
            setOptions([]);
            resolve();
            return;
          }

          setTimeout(() => {
            const result = [...Book]
              .filter((_book) => _book.t.indexOf(_kw) !== -1)
              .map((t) => ({
                label: t.t,
                value: t.id,
              }));

            setOptions(result);

            resolve();
          }, 500);
        })
      }
    >
      {(options) => (
        <Row gutter={[16, 24]}>
          {options.map(({ data }) => (
            <Col span={4}>
              <Checkbox key={data?.value} {...(data ?? {})}>
                {data?.label}
              </Checkbox>
            </Col>
          ))}
        </Row>
      )}
    </Checkbox.AutoCompleteCheckAllCustomCheckboxSelect>
  );
};
