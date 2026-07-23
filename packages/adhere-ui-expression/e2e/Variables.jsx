import { Button, Dropdown, Space } from 'antd';
import React, { useRef, useState } from 'react';

import { DownOutlined } from '@ant-design/icons';

import Expression from '../src/index';
import { variableItems } from './data';

import '../src/index.less';

export default () => {
  const expressionRef = useRef(null);
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <div style={{ marginBottom: 12 }}>
        <Dropdown
          menu={{
            items: variableItems,
            onClick: (e) => {
              const item = variableItems.find((entry) => entry.key === e.key);
              if (item) {
                expressionRef.current?.onOperatorsClick?.(item.label, 'unary');
              }
            },
          }}
        >
          <Button>
            <Space>
              添加变量
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <Expression
        ref={expressionRef}
        isUseTriggerCharCode={false}
        disableQuickTip
        placeholder="通过上方按钮插入变量"
        value={value}
        onChange={setValue}
        onContinuousTextChange={() => {}}
      />
    </div>
  );
};
