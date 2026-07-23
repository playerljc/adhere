import { Button } from 'antd';
import React from 'react';

import PlayGroundLib from '../src/index';
import { SAMPLE_CODE } from './sample';

import '../src/index.less';

const { PlayGroundTab } = PlayGroundLib;

/**
 * PlayGroundTabDemo
 * @description Tab 切换多语言代码
 */
export default () => {
  return (
    <div style={{ padding: 24 }}>
      <PlayGroundTab
        id="pg-tab"
        isActive
        expand
        active="Typescript"
        cardProps={{
          description: {
            title: 'PlayGroundTab',
            info: '多语言 Tab 代码展示',
          },
        }}
        config={[
          {
            key: 'Typescript',
            title: 'Typescript',
            codeText: SAMPLE_CODE,
            theme: 'github',
          },
          {
            key: 'Javascript',
            title: 'Javascript',
            codeText: SAMPLE_CODE,
            theme: 'github',
          },
        ]}
      >
        <Button>Tab Demo</Button>
      </PlayGroundTab>
    </div>
  );
};
