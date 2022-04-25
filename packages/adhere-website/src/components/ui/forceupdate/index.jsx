import React from 'react';
import { Button } from 'antd';

import PlayGroundPage, { Section, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `强制刷新组件及其子组件`,
        mode: 'code',
        scope: { React },
        codeText: `
import React,{ useRef } from 'react';
import { Button} from 'antd';
import { ForceUpdate } from '@baifendian/adhere'; // 1、引入组件

import styles from './index.less';

const Index = (props) => {
  // 1、定义ref
  const refreshRef = useRef(null);

  // 2、重新挂载
  function refresh() {
    refreshRef.current.reMount();
  }

  return (
    <div>
      <button onClick={refresh}>重新挂载</button>
      <ForceUpdate ref={refreshRef}>
        // 需要更新的组件放在这里。
      </ForceUpdate>
    </div>
  );
};

export default Index;
      `,
        type: 'PlayGround',
        renderChildren: () => <Button type="primary">强制刷新组件</Button>,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ForceUpdate">
        <p>强制刷新组件及其子组件</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
