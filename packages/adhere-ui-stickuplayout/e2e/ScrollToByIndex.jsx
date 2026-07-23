import { Button, Space } from 'antd';
import React, { useRef } from 'react';

import StickupLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Item } = StickupLayout;

const sections = ['基本参数', '车身', '发动机', '变速箱', '车轮制动', '主/被动安全装备'];

function SectionContent() {
  return (
    <table>
      <tbody>
        {Array.from({ length: 8 }).map((_, i) => (
          <tr key={i}>
            <td>字段 {i + 1}</td>
            <td />
            <td />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default () => {
  const ref = useRef();

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button type="primary" onClick={() => ref.current?.scrollToByIndex(5)}>
          滚动到底部(动画)
        </Button>
        <Button onClick={() => ref.current?.scrollToByIndex(0)}>置顶(动画)</Button>
        <Button type="primary" onClick={() => ref.current?.scrollToByIndex(5, 0)}>
          滚动到底部(无动画)
        </Button>
        <Button onClick={() => ref.current?.scrollToByIndex(0, 0)}>置顶(无动画)</Button>
        <Button onClick={() => ref.current?.scrollToByIndex(2)}>滚动到发动机</Button>
      </Space>

      <div style={{ height: 500 }} className="StickupLayout">
        <StickupLayout ref={ref}>
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
