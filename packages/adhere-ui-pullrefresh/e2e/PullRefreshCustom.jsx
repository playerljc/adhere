import { Avatar, List } from 'antd';
import React, { useRef } from 'react';

import PullRefresh from '../src/index';

import '../src/index.less';

const data = Array.from({ length: 100 }, (_, index) => `Ant Design Title ${index + 1}`);

const customIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%231890ff" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>';

export default () => {
  const ref = useRef();

  return (
    <PullRefresh
      ref={ref}
      className="Wrap"
      isShowUpdateTime={false}
      pullHeight={160}
      renderIcon={() => (
        <div>
          <img src={customIcon} alt="" width={24} height={24} />
        </div>
      )}
      renderLabel={() => '下拉可刷新'}
      renderCanLabel={() => '释放可刷新'}
      renderLoadingAnimation={() => (
        <div className="RefreshCustom">
          <img src={customIcon} alt="" width={24} height={24} />
          <div>刷新中...</div>
        </div>
      )}
      onPullRefresh={() => {
        setTimeout(() => {
          ref.current?.reset();
        }, 1000 * 3);
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
              title={<a href="https://ant.design">{item}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </PullRefresh>
  );
};
