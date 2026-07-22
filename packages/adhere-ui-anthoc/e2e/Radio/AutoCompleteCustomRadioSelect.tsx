import React, { useState } from 'react';

import Col from '../../src/col';
import Radio from '../../src/radio';
import Row from '../../src/row';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState(undefined);

  return (
    <Radio.AutoCompleteCustomRadioSelect
      placeholder="AutoCompleteCustomRadioSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
      radioProps={{}}
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
    >
      {(items) => (
        <Row gutter={[16, 24]}>
          {items.map(({ data, defaultNode }) => (
            <Col key={data?.value} span={4}>
              {defaultNode}
            </Col>
          ))}
        </Row>
      )}
    </Radio.AutoCompleteCustomRadioSelect>
  );
};
