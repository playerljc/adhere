import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Hooks, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

const { useFirst, useForceUpdate, usePrevious, useSetState } = Hooks;

export default () => {
  const [count1, setCount1] = useSetState(0);

  const [count2, setCount2] = useSetState(0);

  const [count3, setCount3] = useSetState(0);

  const [isFirst, updateFirst] = useFirst();

  const val = usePrevious(3);

  console.log(val);

  const forceUpdate = useForceUpdate();

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `useForceUpdate`,
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
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              forceUpdate();
            }}
          >
            forceUpdate
          </Button>
        ),
      },
      {
        id: `p2`,
        name: `useSetState`,
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
  import { Button, Space } from 'antd';
  import { Hooks } from '@baifendian/adhere';

  const { useSetState } = Hooks;

  export default () => {
    const [count1, setCount1] = useSetState(0);

    const [count2, setCount2] = useSetState(0);

    const [count3, setCount3] = useSetState(0);

    return (
      <div>
        <div>
          <Space.Group direction="horizontal">
            <Button
              onClick={() => {
                setCount1(count1 + 1, () => console.log('count1更新完成'));
              }}
            >
              setCount1
            </Button>
            <Button
              onClick={() => {
                setCount2(count2 + 1, () => console.log('count2更新完成'));
              }}
            >
              setCount2
            </Button>
            <Button
              onClick={() => {
                setCount3(
                  (count) => count + 1,
                  () => console.log('count3更新完成'),
                );
              }}
            >
              setCount3
            </Button>
          </Space.Group>
        </div>
        <div>
          <p>count1: {count1}</p>
          <p>count2: {count2}</p>
          <p>count3: {count3}</p>
        </div>
      </div>
    )
  }
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div>
              <Space.Group direction="horizontal">
                <Button
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    setCount1(count1 + 1, () => console.log('count1更新完成'));
                  }}
                >
                  setCount1
                </Button>
                <Button
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    setCount2(count2 + 1, () => console.log('count2更新完成'));
                  }}
                >
                  setCount2
                </Button>
                <Button
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    setCount3(
                      (count) => count + 1,
                      () => console.log('count3更新完成'),
                    );
                  }}
                >
                  setCount3
                </Button>
              </Space.Group>
            </div>
            <div>
              {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
              <p>count1: {count1}</p>
              {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
              <p>count2: {count2}</p>
              {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
              <p>count3: {count3}</p>
            </div>
          </div>
        ),
      },
    ];
  }

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
