import React from 'react';

import { Dict } from '@baifendian/adhere';
import { Link } from '@ctsj/router';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `静态字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '静态字典',
            info: '静态字典',
          },
        },
        codeText: `

      `,
        type: 'PlayGround',
        renderChildren: () => {
          // 第一个字典
          const SystemTestDict = {
            initStatic() {
              Dict.handlers.SystemTestRadio = () => [
                {
                  value: 1,
                  label: '通过',
                },
                {
                  value: 2,
                  label: '不通过',
                },
                {
                  value: 3,
                  label: '退回',
                },
              ];
            },
            initRemote() {},
          };

          // 初始化
          Dict.init([SystemTestDict], {});

          console.log('SystemTestDict', Dict.value.SystemTestDict.value);

          // 使用字典
          return <div>222</div>;
        },
      },
      {
        id: `p2`,
        name: `动态字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '动态字典',
            info: '动态字典',
          },
        },
        codeText: `

      `,
        type: 'PlayGround',
        renderChildren: () => {
          // 第一个字典
          const SystemTestDict = {
            initStatic() {},
            initRemote() {
              Dict.handlers.SystemTestRadio = () =>
                Promise.resolve([
                  {
                    value: 1,
                    label: '通过',
                  },
                  {
                    value: 2,
                    label: '不通过',
                  },
                  {
                    value: 3,
                    label: '退回',
                  },
                ]);
            },
          };

          // 初始化
          // Dict.init([SystemTestDict], {});

          // const value = await Dict.value.SystemTestRadio.value;

          // 使用字典
          return <div>111</div>;
        },
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Dict">
        <p>字典</p>
        <ul>
          <li>- 静态字典</li>
          <li>- 异步字典</li>
        </ul>
        <p>
          第一次使用的时候才加载到内存，加载过之后就不在加载，如果字典是函数，也会对函数的值进行memoized处理，可以进行设置是否缓存,函数缓存请参考
          <Link to={`${window.location.origin}/adhere/component/util/watchmemoized`}>
            adhere-util-watchmemoized
          </Link>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
