import React, { useState } from 'react';

import Button from '../../src/button';
import Space from '../../src/space';
import Transfer from '../../src/transfer';

const mockData = Array.from({
  length: 10,
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

export default () => {
  const [targetKeys, setTargetKeys] = useState(['0', 'invalid', '1']);

  return (
    <Space orientation="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>isHideInvalidValue=true（无效 key 会被隐藏）</div>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          onChange={setTargetKeys}
          render={(item) => item.title}
          isHideInvalidValue
        />
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>当前 targetKeys: {JSON.stringify(targetKeys)}</div>
        <Space>
          <Button type="primary" onClick={() => setTargetKeys(['0', 'invalid', '1'])}>
            混入无效值
          </Button>
          <Button onClick={() => setTargetKeys(['2', '3'])}>设为 2,3</Button>
        </Space>
      </div>
    </Space>
  );
};
