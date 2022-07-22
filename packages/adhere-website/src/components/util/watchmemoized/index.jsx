import React from 'react';
import { Button } from 'antd';
import { WatchMemoized, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

const { createRef, memoized, watch } = WatchMemoized;

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `单值缓存监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '单值缓存监控',
            info: '单值缓存监控',
          },
        },
        codeText: `
  import { WatchMemoized, Space } from '@baifendian/adhere';

  const { createRef, memoized } = WatchMemoized;

  // 单值监控light比较
  const [get1Value, set1Value, property1] = createRef([{ a: 1 }]);
  console.log('srcValue1', get1Value());
  memoized.watch.race(() => {
    console.log('changeValue', get1Value());
  }, [
    {
      property: property1,
      mode: 'light',
    },
  ]);

  // 单值监控deep比较
  const [get2Value, set2Value, property2] = createRef([{ a: 1 }]);
  console.log('srcValue2', get2Value());
  memoized.watch.race(() => {
    console.log('changeValue', get2Value());
  }, [
    {
      property: property2,
      mode: 'deep',
    },
  ]);

  // 单值监控自定义比较
  const [get3Value, set3Value, property3] = createRef([{ a: 1 }]);
  console.log('srcValue3', get3Value());
  memoized.watch.race(() => {
    console.log('changeValue', get3Value());
  }, [
    {
      property: property3,
      mode: ({ oldValue, newValue }) => {
        return oldValue === newValue;
      },
    },
  ]);

  <Space.Group direction="horizontal" size={10}>
    <Button
      onClick={() => {
        set1Value([{ a: 1 }]);
      }}
    >
      light比较
    </Button>

    <Button
      onClick={() => {
        set2Value([{ a: 1 }]);
      }}
    >
      deep比较
    </Button>

    <Button
      onClick={() => {
        set3Value([{ a: 1 }]);
      }}
    >
      自定义比较
    </Button>
  </Space.Group>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Space.Group direction="horizontal" size={10}>
            <Button
              onClick={() => {
                set1Value([{ a: 1 }]);
              }}
            >
              light比较
            </Button>

            <Button
              onClick={() => {
                set2Value([{ a: 1 }]);
              }}
            >
              deep比较
            </Button>

            <Button
              onClick={() => {
                set3Value([{ a: 1 }]);
              }}
            >
              自定义比较
            </Button>
          </Space.Group>
        ),
      },
      {
        id: `p2`,
        name: `多值缓存监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多值缓存监控',
            info: '多值缓存监控',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { WatchMemoized, Space } from '@baifendian/adhere';

  const { createRef, memoized } = WatchMemoized;

  // 多值监控light比较
  const [get4Value, property4] = createRef([{ a: 1 }]);
  const [get5Value, property5] = createRef([{ a: 2 }]);
  console.log('srcValue4', get4Value());
  console.log('srcValue5', get5Value());
  memoized.watch.all(() => {
    console.log('changeValue', get4Value());
    console.log('changeValue', get5Value());
  }, [
    {
      property: property4,
      mode: 'light',
    },
    {
      property: property5,
      mode: 'light',
    },
  ]);

  <Space.Group direction="horizontal" size={10}>
    <Button
      onClick={() => {
        watchObj1.value.a = 'a';
        watchObj1.value.b = 'b';
        watchObj1.value.c = { gl: 1 };
        watchObj1.value.c.c1 = {
          g2: 2,
        };
        watchObj1.value.c.c1.c111 = {
          g3: 3,
          c1111: '1',
        };

        delete watchObj1.value.c.c1.c111.c1111;
      }}
    >
      对obj1进行监控
    </Button>
  </Space.Group>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Space.Group direction="horizontal" size={10}>
            <Button
              onClick={() => {
                set4Value([{ a: 1 }]);
                set5Value([{ a: 2 }]);
              }}
            >
              light比较
            </Button>
          </Space.Group>
        ),
      },
      {
        id: `p3`,
        name: `watch对象的变化`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'watch对象的变化',
            info: 'watch对象的变化',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { WatchMemoized, Space } from '@baifendian/adhere';

  const { watch } = WatchMemoized;

  // watch监控对象的变化
  const srcObj1 = {};
  const watchObj1 = watch.create(srcObj1, {
    a: () => {
      console.log('a改变了');
    },
    b: () => {
      console.log('b改变了');
    },
    c: () => {
      console.log('c改变了');
    },
    'c.c1': () => {
      console.log('c.c1改变了');
    },
    'c.c1.c111.c1111': (property) => {
      console.log('c.c1.c111.c1111改变了', property);
    },
  });
  watchObj1.on('c.c1.c111', () => {
    console.log('c.c1.c111改变了');
  });

  <Space.Group direction="horizontal" size={10}>
    <Button
      onClick={() => {
        watchObj1.value.a = 'a';
        watchObj1.value.b = 'b';
        watchObj1.value.c = { gl: 1 };
        watchObj1.value.c.c1 = {
          g2: 2,
        };
        watchObj1.value.c.c1.c111 = {
          g3: 3,
          c1111: '1',
        };

        delete watchObj1.value.c.c1.c111.c1111;
      }}
    >
      对obj1进行监控
    </Button>
  </Space.Group>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Space.Group direction="horizontal" size={10}>
            <Button
              onClick={() => {
                watchObj1.value.a = 'a';
                watchObj1.value.b = 'b';
                watchObj1.value.c = { gl: 1 };
                watchObj1.value.c.c1 = {
                  g2: 2,
                };
                watchObj1.value.c.c1.c111 = {
                  g3: 3,
                  c1111: '1',
                };

                delete watchObj1.value.c.c1.c111.c1111;
              }}
            >
              对obj1进行监控
            </Button>
          </Space.Group>
        ),
      },
      {
        id: `p4`,
        name: `创建一个memoized的普通函数`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '创建一个memoized的普通函数',
            info: '创建一个memoized的普通函数',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { WatchMemoized, Space } from '@baifendian/adhere';

  const {  memoized } = WatchMemoized;

  // 创建一个memoized的函数
  const sumFun = memoized.createMemoFun((...params) => {
    console.log('callSumFun');
    return params.reduce((pre, current) => pre + current, 0);
  });

  <Space.Group direction="horizontal" size={10}>
    <Button
      onClick={() => {
        console.log('subFun', sumFun({ a: 1 }, 2, 3));
        console.log('subFun', sumFun({ a: 1 }, 2, 3));
      }}
    >
      调用memoized函数
    </Button>
  </Space.Group>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Space.Group direction="horizontal" size={10}>
            <Button
              onClick={() => {
                console.log('subFun', sumFun({ a: 1 }, 2, 3));
                console.log('subFun', sumFun({ a: 1 }, 2, 3));
              }}
            >
              调用memoized函数
            </Button>
          </Space.Group>
        ),
      },
      {
        id: `p5`,
        name: `创建一个memoized的Promise函数`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '创建一个memoized的Promise函数',
            info: '创建一个memoized的Promise函数',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { WatchMemoized, Space } from '@baifendian/adhere';

  const { memoized } = WatchMemoized;

  // 创建一个memoized的Promise函数
  const anyncFun = memoized.createMemoFun((...params) => {
    console.log('callAnyncFun');
    return new Promise((resolve) => {
      resolve(params.reduce((pre, current) => pre + current, 0));
    });
  });

  <Space.Group direction="horizontal" size={10}>
    <Button
      onClick={() => {
        anyncFun(1, 2, 3).then((res) => {
          console.log('asyncFun', res);
        });

        console.log('asyncFun', anyncFun(1, 2, 3));

        console.log('asyncFun', anyncFun(1, 2, 4));
        console.log('asyncFun', anyncFun(1, 2, 4));
      }}
    >
      调用memoized函数
    </Button>
  </Space.Group>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Space.Group direction="horizontal" size={10}>
            <Button
              onClick={() => {
                asyncFun(1, 2, 3).then((res) => {
                  console.log('asyncFun', res);
                });

                console.log('asyncFun', asyncFun(1, 2, 3));

                console.log('asyncFun', asyncFun(1, 2, 4));
                console.log('asyncFun', asyncFun(1, 2, 4));
              }}
            >
              调用memoized函数
            </Button>
          </Space.Group>
        ),
      },
    ];
  }

  // 单值监控light比较
  const [get1Value, set1Value, property1] = createRef([{ a: 1 }]);
  console.log('srcValue1', get1Value());
  memoized.watch.race(() => {
    console.log('changeValue', get1Value());
  }, [
    {
      property: property1,
      mode: 'light',
    },
  ]);

  // 单值监控deep比较
  const [get2Value, set2Value, property2] = createRef([{ a: 1 }]);
  console.log('srcValue2', get2Value());
  memoized.watch.race(() => {
    console.log('changeValue', get2Value());
  }, [
    {
      property: property2,
      mode: 'deep',
    },
  ]);

  // 单值监控自定义比较
  const [get3Value, set3Value, property3] = createRef([{ a: 1 }]);
  console.log('srcValue3', get3Value());
  memoized.watch.race(() => {
    console.log('changeValue', get3Value());
  }, [
    {
      property: property3,
      mode: ({ oldValue, newValue }) => {
        return oldValue === newValue;
      },
    },
  ]);

  // 多值监控light比较
  const [get4Value, set4Value, property4] = createRef([{ a: 1 }]);
  const [get5Value, set5Value, property5] = createRef([{ a: 2 }]);
  console.log('srcValue4', get4Value());
  console.log('srcValue5', get5Value());
  memoized.watch.all(() => {
    console.log('changeValue', get4Value());
    console.log('changeValue', get5Value());
  }, [
    {
      property: property4,
      mode: 'light',
    },
    {
      property: property5,
      mode: 'light',
    },
  ]);

  // watch监控对象的变化
  const srcObj1 = {};
  const watchObj1 = watch.create(srcObj1, {
    a: () => {
      console.log('a改变了');
    },
    b: () => {
      console.log('b改变了');
    },
    c: () => {
      console.log('c改变了');
    },
    'c.c1': () => {
      console.log('c.c1改变了');
    },
    'c.c1.c111.c1111': (property) => {
      console.log('c.c1.c111.c1111改变了', property);
    },
  });
  watchObj1.on('c.c1.c111', () => {
    console.log('c.c1.c111改变了');
  });

  // 创建一个memoized的函数
  const sumFun = memoized.createMemoFun((...params) => {
    console.log('callSumFun');
    return params.reduce((pre, current) => pre + current, 0);
  });

  // 创建一个memoized的Promise函数
  const asyncFun = memoized.createMemoFun((...params) => {
    console.log('callAnyncFun');
    return new Promise((resolve) => {
      resolve(params.reduce((pre, current) => pre + current, 0));
    });
  });

  return (
    <PlayGroundPage>
      <Section title="WatchMemoized">
        <p>对值的监控和缓存</p>
        <p>缓存</p>
        <ul>
          <li>支持多值监控</li>
          <li>支持deep、light和自定义三种比较是否修改的方式</li>
          <li>支持all和race两种触发修改的方式</li>
          <li>支持函数调用返回值的缓存</li>
        </ul>
        <p>监控</p>
        <p>支持类似与Vue的watch监控</p>
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
                name: 'createRef',
                desc: '创建一个值(其实就是在srcObj中创建一个属性)',
                modifier: 'public',
                params: [
                  {
                    name: 'defaultValue',
                    desc: '缺省值',
                    type: 'any',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '[getData, setData, property]',
                returnDesc: '',
              },
              {
                name: 'memoized.watch.all',
                desc: '对依赖项的监控(所有依赖项全部发生改变才执行handler)',
                modifier: 'public',
                params: [
                  {
                    name: 'handler',
                    desc: '函数句柄',
                    type: 'Function',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'depends',
                    desc: '依赖项',
                    type: 'Array<Symbol | {property,mode}>',
                    defaultVal: '[]',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '返回清空所有订阅句柄的方法',
              },
              {
                name: 'memoized.watch.race',
                desc: '对依赖项的监控(只要有一个依赖项发生改变的时候就执行handler)',
                modifier: 'public',
                params: [
                  {
                    name: 'handler',
                    desc: '函数句柄',
                    type: 'Function',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'depends',
                    desc: '依赖项',
                    type: 'Array<Symbol | {property,mode}>',
                    defaultVal: '[]',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '返回清空所有订阅句柄的方法',
              },
              {
                name: 'memoized.createMemoFun',
                desc: '创建一个memo的Function',
                modifier: 'public',
                params: [
                  {
                    name: 'handler',
                    desc: '函数实现',
                    type: 'Function',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'stackMaxSize',
                    desc: '最大缓存栈的大小',
                    type: 'number',
                    defaultVal: '10',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '返回一个可以调用的函数',
              },
              {
                name: 'watch.create',
                desc: 'create - 创建一个watch对象',
                modifier: 'public',
                params: [
                  {
                    name: 'srcObj',
                    desc: '原始对象',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'listeners',
                    desc: '监控对象',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '{value,on:(expression,handler),remove:(expression,handler)}',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
