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
      checkboxProps={{}}
      renderLoading={() => <div style={{ padding: 16 }}>加载中...</div>}
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
      render={(checkAllOrigin, childrenOrigin) => {
        return (
          <div>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {checkAllOrigin}
            </div>
            <div style={{ padding: 12 }}>{childrenOrigin}</div>
          </div>
        );
      }}
    >
      {(items) => (
        <Row gutter={[16, 24]}>
          {items.map(({ data, onChange, checked, disabled }) => (
            <Col span={4} key={data?.value}>
              <Checkbox
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
    </Checkbox.AutoCompleteCheckAllCustomCheckboxSelect>
  );
};
