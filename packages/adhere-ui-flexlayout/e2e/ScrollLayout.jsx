import { Button } from 'antd';
import React, { useState } from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

function ScrollContent() {
  const { getEl } = FlexLayout.useScrollLayout();

  return (
    <div className="scroll-body">
      <Button
        type="primary"
        style={{ marginBottom: 12 }}
        onClick={() => {
          const el = getEl();
          if (el) {
            el.scrollTop = 0;
          }
        }}
      >
        滚回顶部
      </Button>
      {Array.from({ length: 40 }).map((_, index) => (
        <p key={index}>Scroll line {index + 1}</p>
      ))}
    </div>
  );
}

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className="wrap">
      <FlexLayout direction="vertical" style={{ height: '100%', border: '1px solid #d9d9d9' }}>
        <FlexLayout.Fixed>
          <div className="region">
            ScrollLayout + useScrollLayout
            <Button size="small" style={{ marginLeft: 12 }} onClick={() => setCount((c) => c + 1)}>
              re-render {count}
            </Button>
          </div>
        </FlexLayout.Fixed>
        <FlexLayout.Auto fit>
          <FlexLayout.ScrollLayout scrollY style={{ height: '100%' }}>
            <ScrollContent />
          </FlexLayout.ScrollLayout>
        </FlexLayout.Auto>
      </FlexLayout>
    </div>
  );
};
