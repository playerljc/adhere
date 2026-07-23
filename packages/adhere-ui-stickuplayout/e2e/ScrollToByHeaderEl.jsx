import { Button, Space } from 'antd';
import React, { useRef } from 'react';

import StickupLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Item } = StickupLayout;

const sections = ['基本参数', '车身', '发动机', '变速箱'];

export default () => {
  const ref = useRef();
  const wrapRef = useRef(null);

  const scrollByHeader = (index) => {
    const headers = wrapRef.current?.querySelectorAll?.(
      '.adhere-ui-stickup-layout-item-header',
    );
    const headerEl = headers?.[index];
    if (headerEl) {
      ref.current?.scrollToByHeaderEl(headerEl);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <Space wrap style={{ marginBottom: 12 }}>
        {sections.map((title, index) => (
          <Button key={title} onClick={() => scrollByHeader(index)}>
            scrollToByHeaderEl → {title}
          </Button>
        ))}
      </Space>

      <div ref={wrapRef} style={{ height: 480 }} className="StickupLayout">
        <StickupLayout ref={ref}>
          {sections.map((title) => (
            <Item
              key={title}
              title={<span className="title">{title}</span>}
              content={
                <div style={{ padding: 12, minHeight: 260 }}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <p key={i}>
                      {title} - 行 {i + 1}
                    </p>
                  ))}
                </div>
              }
            />
          ))}
        </StickupLayout>
      </div>
    </div>
  );
};
