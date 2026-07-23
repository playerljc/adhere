import { Button } from 'antd';
import React from 'react';

import PlayGroundLib from '../src/index';
import { SAMPLE_CODE } from './sample';

import '../src/index.less';

const { PlayGround } = PlayGroundLib;

/**
 * PlayGroundBasic
 * @description 单文件代码演示
 */
export default () => {
  return (
    <div style={{ padding: 24 }}>
      <PlayGround
        id="pg-basic"
        isActive
        expand
        cardProps={{
          description: {
            title: 'PlayGround',
            info: '单文件代码展示',
          },
        }}
        codeText={SAMPLE_CODE}
        theme="github"
      >
        <Button type="primary" onClick={() => alert('ok')}>
          Click me
        </Button>
      </PlayGround>
    </div>
  );
};
