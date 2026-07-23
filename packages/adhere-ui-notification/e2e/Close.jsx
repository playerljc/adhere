import { Button, Space } from 'antd';
import React, { useLayoutEffect, useRef } from 'react';

import Notification from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * Close
 * @description 演示 show 返回 id 后调用 close(id)
 */
export default () => {
  const containerRef = useRef(null);
  const insRef = useRef(null);
  const lastIdRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    insRef.current = Notification.build(containerRef.current, {
      style: 'material',
      type: 'top',
    });
  }, []);

  return (
    <div className="Tab">
      <div className="Fixed">
        <Space>
          <Button
            type="primary"
            onClick={() => {
              lastIdRef.current = insRef.current?.show?.({
                closed: true,
                children: <div>可手动 close 的通知</div>,
              });
            }}
          >
            show 并记录 id
          </Button>
          <Button
            onClick={() => {
              if (lastIdRef.current) {
                insRef.current?.close?.(lastIdRef.current);
                lastIdRef.current = null;
              }
            }}
          >
            close(id)
          </Button>
        </Space>
      </div>
      <div className="Auto" ref={containerRef} />
    </div>
  );
};
