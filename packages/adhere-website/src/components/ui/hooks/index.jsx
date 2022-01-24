import React, { useEffect } from 'react';
import { Button } from 'antd';
import { Hooks } from '@baifendian/adhere';

import PlayGroundPage, { Section, CodeBoxSection } from '@/lib/PlaygroundPage';

const { useFirst, useForceUpdate, usePrevious } = Hooks;

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本的使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本的使用',
            info: '基本的使用',
          },
        },
        codeText: `
  import React, { useEffect } from 'react';
  import { Button } from 'antd';
  import { Hooks } from '@baifendian/adhere';

  const { useFirst, useForceUpdate, usePrevious } = Hooks;

  return () => {
    const [isFirst, updateFirst] = useFirst();

    const val = usePrevious(3);

    console.log(val);

    const forceUpdate = useForceUpdate();

    useEffect(() => {
      console.log('isFirst', isFirst);
      updateFirst(true);
    }, []);

    return (
       <Button
        type="primary"
        onClick={() => {
          forceUpdate();
        }}
      >
        forceUpdate
      </Button>
    );
  };
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              forceUpdate();
            }}
          >
            forceUpdate
          </Button>
        ),
      },
    ];
  }

  const [isFirst, updateFirst] = useFirst();

  const val = usePrevious(3);

  console.log(val);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    console.log('isFirst', isFirst);
    updateFirst(true);
  }, []);

  return (
    <PlayGroundPage>
      <Section title="Hooks">
        <ul>
          <li>- useFirst</li>
          <li>- useForceUpdate</li>
          <li>- usePrevious</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
