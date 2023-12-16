import React from 'react';

import { Space, Surnames } from '@baifendian/adhere';

function getIndexesProps() {
  const startCharCode = 'A'.charCodeAt();
  const endCharCode = 'Z'.charCodeAt();

  const indexes = [];

  const count = [];
  count.length = 10;
  count.fill(1);

  for (let i = startCharCode; i <= endCharCode; i++) {
    indexes.push({
      index: String.fromCharCode(i),
      renderIndex: (index) => index.index,
      renderTitle: (record) => record.index,
      renderContent: (record) => (
        <ul key={record.index}>
          {count.map((t, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index + 1}>{`${record.index}${index + 1}`}</li>
          ))}
        </ul>
      ),
    });
  }

  return indexes;
}

function getDataSource() {
  const startCharCode = 'A'.charCodeAt();
  const endCharCode = 'Z'.charCodeAt();

  const dataSource = [];

  for (let i = startCharCode; i <= endCharCode; i++) {
    dataSource.push({
      index: String.fromCharCode(i),
      data: [],
    });
  }

  return dataSource;
}

export default () => (
  <div style={{ display: 'flex' }}>
    <Space.Group direction="horizontal">
      <div style={{ width: 300 }}>
        <Surnames
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>

      <div style={{ width: 300 }}>
        <Surnames
          position="left"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </Space.Group>
  </div>
);
