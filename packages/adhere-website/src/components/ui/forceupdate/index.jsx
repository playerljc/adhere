import React from 'react';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import Parent from './parent';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `强制刷新组件及其子组件`,
        type: 'PlayGroundTab',
        active: 'parent.jsx',
        config: [
          {
            key: 'parent.jsx',
            title: 'parent.jsx',
            codeText: `
  import React, { useRef } from 'react';
  import { Button } from 'antd';
  import { ForceUpdate, Hooks, Space } from '@baifendian/adhere';

  import Sub from './sub';

  const { useSetState } = Hooks;

  export default () => {
    const ref = useRef();
    const [count, setCount] = useSetState(0);

    return (
      <ForceUpdate ref={ref}>
        <div>
          <Space.Group direction="horizontal">
            <Button type="primary" onClick={() => setCount((_count) => _count + 1)}>
              递增
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCount(0, () => ref.current.reMount());
              }}
            >
              重置
            </Button>
          </Space.Group>
          <Sub count={count} />
        </div>
      </ForceUpdate>
    );
  };
            `,
          },
          {
            key: 'sub.jsx',
            title: 'sub.jsx',
            codeText: `
  import React, { useEffect } from 'react';

  export default (props) => {
    useEffect(() => {
      console.log('子组件挂载');
    }, []);

    useEffect(() => {
      console.log('子组件更新');
    });
    return <div>子组件:{props.count}</div>;
  };
            `,
          },
        ],
        renderChildren: () => <Parent />,
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
