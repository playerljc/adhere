import { Avatar, Button, List, Space, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import ScrollLoad from '../src/index';

import '../src/index.less';

export default () => {
  const page = useRef(0);
  const scrollLoadRef = useRef();
  const [data, setData] = useState([]);
  const callbackHandler = useRef(null);

  function getData() {
    page.current = page.current + 1;
    return Array.from({ length: page.current * 8 }).map((_, index) => ({
      title: `Item ${index + 1}`,
    }));
  }

  useEffect(() => {
    setData(getData());
  }, []);

  useEffect(() => {
    if (callbackHandler.current) {
      if (page.current >= 3) {
        callbackHandler.current(ScrollLoad.EMPTY);
      } else {
        callbackHandler.current(ScrollLoad.NORMAL);
      }
      callbackHandler.current = null;
    }
  }, [data]);

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button
          onClick={() => {
            scrollLoadRef.current?.hideAll();
            message.success('hideAll()');
          }}
        >
          hideAll
        </Button>
        <Button
          onClick={() => {
            const el = scrollLoadRef.current?.getScrollContainer();
            message.info(`scrollTop=${el?.scrollTop ?? '-'}`);
          }}
        >
          getScrollContainer
        </Button>
        <Button
          onClick={() => {
            page.current = 0;
            scrollLoadRef.current?.hideAll();
            setData(getData());
          }}
        >
          重置
        </Button>
      </Space>
      <ScrollLoad
        ref={scrollLoadRef}
        style={{ width: 400, height: 480, border: '1px solid #eee' }}
        distance={80}
        onScrollBottom={(callback) => {
          setTimeout(() => {
            callbackHandler.current = callback;
            setData(getData());
          }, 800);
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.title}
                description="ref API demo"
              />
            </List.Item>
          )}
        />
      </ScrollLoad>
    </div>
  );
};
