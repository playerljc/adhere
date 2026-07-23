import { Avatar, Button, List, Space, message } from 'antd';
import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';

import PullRefresh from '../src/index';

import '../src/index.less';

const data = Array.from({ length: 40 }, (_, index) => `Item ${index + 1}`);

export default () => {
  const ref = useRef();
  const [logs, setLogs] = useState([]);
  const [updateTime, setUpdateTime] = useState(() => dayjs().valueOf());

  const pushLog = (text) => {
    setLogs((prev) => [`${dayjs().format('HH:mm:ss')} ${text}`, ...prev].slice(0, 8));
  };

  return (
    <div>
      <Space wrap style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            ref.current?.refresh();
          }}
        >
          refresh()
        </Button>
        <Button
          onClick={async () => {
            const next = dayjs().valueOf();
            await ref.current?.resetUpdateTime(next);
            setUpdateTime(next);
            message.success(`resetUpdateTime -> ${dayjs(next).format('HH:mm:ss')}`);
          }}
        >
          resetUpdateTime
        </Button>
        <Button
          onClick={() => {
            const t = ref.current?.getUpdateTime();
            message.info(`getUpdateTime: ${dayjs(t).format('YYYY-MM-DD HH:mm:ss')}`);
          }}
        >
          getUpdateTime
        </Button>
      </Space>
      <PullRefresh
        ref={ref}
        className="Wrap"
        isShowUpdateTime
        updateTime={updateTime}
        updateTimeFormat="YYYY-MM-DD HH:mm:ss"
        onPullStart={() => pushLog('onPullStart')}
        onPullCanRefresh={() => pushLog('onPullCanRefresh')}
        onPullRefresh={() => {
          pushLog('onPullRefresh');
          setTimeout(() => {
            const next = dayjs().valueOf();
            setUpdateTime(next);
            ref.current?.resetUpdateTime(next);
            ref.current?.reset();
          }, 1500);
        }}
        onPullBottom={() => pushLog('onPullBottom')}
        onPullRebound={() => pushLog('onPullRebound')}
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
                title={item}
                description="pull to see callbacks"
              />
            </List.Item>
          )}
        />
      </PullRefresh>
      <pre style={{ marginTop: 12, padding: 12, background: '#f5f5f5' }}>
        {logs.length ? logs.join('\n') : 'callback logs...'}
      </pre>
    </div>
  );
};
