import { Avatar, List, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import ScrollLoad from '../src/index';

import '../src/index.less';

export default () => {
  const page = useRef(0);
  const [disabled, setDisabled] = useState(false);
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
      callbackHandler.current(ScrollLoad.NORMAL);
      callbackHandler.current = null;
    }
  }, [data]);

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        disabled:{' '}
        <Switch checked={disabled} onChange={setDisabled} checkedChildren="开" unCheckedChildren="关" />
      </div>
      <ScrollLoad
        disabled={disabled}
        style={{ width: 400, height: 480, border: '1px solid #eee' }}
        onScrollBottom={(callback) => {
          setTimeout(() => {
            callbackHandler.current = callback;
            setData(getData());
          }, 1000);
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
                description="disabled 时不再触发加载"
              />
            </List.Item>
          )}
        />
      </ScrollLoad>
    </div>
  );
};
