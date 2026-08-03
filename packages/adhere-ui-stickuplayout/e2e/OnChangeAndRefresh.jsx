import { Button, Space } from 'antd';
import React, { useRef, useState } from 'react';

import StickupLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Item } = StickupLayout;

const sections = ['基本参数', '车身', '发动机', '变速箱', '车轮制动', '主/被动安全装备'];

function SectionContent() {
  return (
    <div style={{ padding: 12, minHeight: 220 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <p key={i}>内容行 {i + 1}</p>
      ))}
    </div>
  );
}

export default () => {
  const ref = useRef();
  const [active, setActive] = useState(0);

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        当前 onChange index: <strong>{active}</strong>（{sections[active]}）
      </div>
      <Space wrap style={{ marginBottom: 12 }}>
        {sections.map((title, index) => (
          <Button key={title} size="small" onClick={() => ref.current?.scrollToByIndex(index + 1)}>
            {title}
          </Button>
        ))}
        <Button
          onClick={() => {
            ref.current?.refresh();
          }}
        >
          refresh()
        </Button>
      </Space>

      <div style={{ height: 480 }} className="StickupLayout">
        <StickupLayout
          ref={ref}
          onChange={(index) => {
            console.log('onChange', index);
            setActive(index);
          }}
        >
          {sections.map((title) => (
            <Item
              key={title}
              title={<span className="title">{title}</span>}
              content={<SectionContent />}
            />
          ))}
        </StickupLayout>
      </div>
    </div>
  );
};
