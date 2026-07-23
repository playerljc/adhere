import React, { useState } from 'react';

import StickupLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Item } = StickupLayout;

export default () => {
  const [active, setActive] = useState(0);

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>active: {active}</div>
      <div style={{ height: 420 }} className="StickupLayout">
        <StickupLayout
          className="custom-stickup"
          style={{ border: '1px solid #91caff', borderRadius: 4 }}
          fixedClassName="custom-fixed"
          fixedStyle={{ background: '#e6f4ff' }}
          innerClassName="custom-inner"
          innerStyle={{ background: '#fafafa' }}
          onChange={setActive}
        >
          {['A', 'B', 'C'].map((title) => (
            <Item
              key={title}
              className="custom-item"
              style={{ marginBottom: 8 }}
              title={<span className="title">Section {title}</span>}
              content={
                <div style={{ padding: 16, minHeight: 200 }}>
                  Custom className / style for section {title}
                </div>
              }
            />
          ))}
        </StickupLayout>
      </div>
    </div>
  );
};
