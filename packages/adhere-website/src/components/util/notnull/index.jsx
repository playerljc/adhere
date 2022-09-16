import { Button } from 'antd';
import React from 'react';

import { NotNull } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `对一个null值进行监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '对一个null值进行监控',
            info: '对一个null值进行监控',
          },
        },
        codeText: `
  import { NotNull } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      const obj = NotNull(null);
      obj.a = {
        b: {
          c: {},
        },
      };
      console.log(obj);
      console.log(obj.a);
      console.log(obj.a.b);
      console.log(obj.a.b.c);
      console.log(obj.a.b.c.d.e);
    }}
  >
    监控并访问
  </Button>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const obj = NotNull(null);
              obj.a = {
                b: {
                  c: {},
                },
              };
              console.log(obj);
              console.log(obj.a);
              console.log(obj.a.b);
              console.log(obj.a.b.c);
              console.log(obj.a.b.c.d.e);
            }}
          >
            监控并访问
          </Button>
        ),
      },
      {
        id: `p2`,
        name: `对一个Array值进行监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '对一个Array值进行监控',
            info: '对一个Array值进行监控',
          },
        },
        codeText: `
  import { NotNull } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      const arr = NotNull([]);
      console.log(arr[5].a.b.c);

      arr[5] = {
        a: {
          b: {
            c: {},
          },
        },
      };

      console.log(arr[5]);
      console.log(arr.length);
    }}
  >
    监控并访问
  </Button>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const arr = NotNull([]);
              console.log(arr[5].a.b.c);

              arr[5] = {
                a: {
                  b: {
                    c: {},
                  },
                },
              };

              console.log(arr[5]);
              console.log(arr.length);
            }}
          >
            监控并访问
          </Button>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="NotNull">
        <h1>一个永远都不为空的操作</h1>
        <p>一般都挂载到接口的返回值上，以免有空值对后续操作带来不便或者使界面挂掉</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'notnull',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'target',
                    desc: '被监控的对象',
                    type: 'Object | Array',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Object | Array',
                returnDesc: '返回被监控的对象',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
