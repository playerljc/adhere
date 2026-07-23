import { Button } from 'antd';
import React from 'react';

import PlayGroundLib from '../src/index';
import { SAMPLE_CODE, SAMPLE_LESS } from './sample';

import '../src/index.less';

const { PlayGroundMulti } = PlayGroundLib;

/**
 * PlayGroundMultiDemo
 * @description 多文件代码演示
 */
export default () => {
  return (
    <div style={{ padding: 24 }}>
      <PlayGroundMulti
        id="pg-multi"
        isActive
        expand
        cardProps={{
          description: {
            title: 'PlayGroundMulti',
            info: '多文件代码展示',
          },
        }}
        config={[
          {
            title: 'index.jsx',
            codeText: SAMPLE_CODE,
            theme: 'github',
          },
          {
            title: 'index.less',
            codeText: SAMPLE_LESS,
            theme: 'github',
          },
        ]}
      >
        <Button>Multi Demo</Button>
      </PlayGroundMulti>
    </div>
  );
};
