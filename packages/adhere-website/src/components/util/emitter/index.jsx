import { Button } from 'antd';
import React, { useRef } from 'react';

import { Emitter } from '@baifendian/adhere';

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
  import { Emitter } from '@baifendian/adhere';

  <Button
    style={{ marginRight: 20 }}
    onClick={() => {
      if (handler1.current) {
        Emitter.remove('type1', handler1.current);
      }

      handler1.current = () => {
        alert('接到了通知');
      };

      Emitter.on('type1', handler1.current);

      alert('注册成功');
    }}
  >
    注册通知
  </Button>
  <Button
    onClick={() => {
      if (!handler1.current) {
        alert('还没有注册事件');

        return;
      }

      Emitter.trigger('type1');
    }}
  >
    发出通知
  </Button>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                if (handler1.current) {
                  Emitter.remove('type1', handler1.current);
                }

                handler1.current = () => {
                  alert('接到了通知');
                };

                Emitter.on('type1', handler1.current);

                alert('注册成功');
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                if (!handler1.current) {
                  alert('还没有注册事件');

                  return;
                }

                Emitter.trigger('type1');
              }}
            >
              发出通知
            </Button>
          </>
        ),
      },
      {
        id: `p2`,
        name: `注册多次，并且传递参数`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '注册多次，并且传递参数',
            info: '注册多次，并且传递参数',
          },
        },
        codeText: `
  import { Emitter } from '@baifendian/adhere';

  <Button
    style={{ marginRight: 20 }}
    onClick={() => {
      Emitter.on('type2', (params) => {
        alert(params);
      });

      alert('注册成功');
    }}
  >
    注册通知
  </Button>
  <Button
    onClick={() => {
      Emitter.trigger('type2', 'Hello World');
    }}
  >
    发出通知
  </Button>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                Emitter.on('type2', (params) => {
                  alert(params);
                });

                alert('注册成功');
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                Emitter.trigger('type2', 'Hello World');
              }}
            >
              发出通知
            </Button>
          </>
        ),
      },
      {
        id: `p3`,
        name: `触发HtmlElement的自定义事件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '触发HtmlElement的自定义事件',
            info: '触发HtmlElement的自定义事件',
          },
        },
        codeText: `
  import { Emitter } from '@baifendian/adhere';

  <Button
    style={{ marginRight: 20 }}
    onClick={() => {
      document.addEventListener('customType', (e) => {
        alert(JSON.stringify(e.detail));
      });

      alert('注册成功');
    }}
  >
    注册通知
  </Button>
  <Button
    onClick={() => {
      Emitter.dispatchEvent(document, 'customType', {
        detail: {
          hazcheeseburger: true,
        },
      });
    }}
  >
    发出通知
  </Button>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                document.addEventListener('customType', (e) => {
                  alert(JSON.stringify(e.detail));
                });

                alert('注册成功');
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                Emitter.dispatchEvent(document, 'customType', {
                  detail: {
                    hazcheeseburger: true,
                  },
                });
              }}
            >
              发出通知
            </Button>
          </>
        ),
      },
      {
        id: `p4`,
        name: `只执行一次`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '只执行一次',
            info: '只执行一次',
          },
        },
        codeText: `
  import { Emitter } from '@baifendian/adhere';

  <Button
    style={{ marginRight: 20 }}
    onClick={() => {
      Emitter.once('type3', () => {
        alert('type3');
      });

      Emitter.once('type3', () => {
        alert('type3');
      });
    }}
  >
    注册通知
  </Button>
  <Button
    onClick={() => {
      Emitter.trigger('type3');
    }}
  >
    发出通知
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                Emitter.once('type3', () => {
                  alert('type3');
                });

                Emitter.once('type3', () => {
                  alert('type3');
                });
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                Emitter.trigger('type3');
              }}
            >
              发出通知
            </Button>
          </>
        ),
      },
      {
        id: `p5`,
        name: `all`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'all',
            info: 'all',
          },
        },
        codeText: `
  import { Emitter } from '@baifendian/adhere';

  <Button
      style={{ marginRight: 20 }}
      onClick={() => {
        Emitter.once('type4', () => {
          alert('type4');
        });

        Emitter.once('type5', () => {
          alert('type5');
        });

        Emitter.once('type6', () => {
          alert('type6');
        });
      }}
    >
      注册通知
    </Button>
    <Button
      onClick={() => {
        const fun = Emitter.all(['type4', 'type5', 'type6'], () => {
          alert('type4,type5,type6 - changed');
        });

        Emitter.trigger('type4');
        Emitter.trigger('type5');
        Emitter.trigger('type6');
      }}
    >
      发出通知并监控
    </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                Emitter.once('type4', () => {
                  alert('type4');
                });

                Emitter.once('type5', () => {
                  alert('type5');
                });

                Emitter.once('type6', () => {
                  alert('type6');
                });
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                const fun = Emitter.all(['type4', 'type5', 'type6'], () => {
                  alert('type4,type5,type6 - changed');
                });

                Emitter.trigger('type4');
                Emitter.trigger('type5');
                Emitter.trigger('type6');
              }}
            >
              发出通知并监控
            </Button>
          </>
        ),
      },
      {
        id: `p6`,
        name: `race`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'race',
            info: 'race',
          },
        },
        codeText: `
  import { Emitter } from '@baifendian/adhere';

  <Button
    style={{ marginRight: 20 }}
    onClick={() => {
      Emitter.once('type7', () => {
        alert('type7');
      });

      Emitter.once('type8', () => {
        alert('type8');
      });

      Emitter.once('type9', () => {
        alert('type9');
      });
    }}
  >
    注册通知
  </Button>
  <Button
    onClick={() => {
      const fun = Emitter.race(['type7', 'type8', 'type9'], () => {
        alert('type7,type8,type9 - changed');
      });

      Emitter.trigger('type7');
      Emitter.trigger('type8');
      Emitter.trigger('type9');
    }}
  >
    发出通知并监控
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                Emitter.once('type7', () => {
                  alert('type7');
                });

                Emitter.once('type8', () => {
                  alert('type8');
                });

                Emitter.once('type9', () => {
                  alert('type9');
                });
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                const fun = Emitter.race(['type7', 'type8', 'type9'], () => {
                  alert('type7,type8,type9 - changed');
                });

                Emitter.trigger('type7');
                Emitter.trigger('type8');
                Emitter.trigger('type9');
              }}
            >
              发出通知并监控
            </Button>
          </>
        ),
      },
      {
        id: `p7`,
        name: `count`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'count',
            info: 'count',
          },
        },
        codeText: `
  import { Emitter } from '@baifendian/adhere';

  <Button
    style={{ marginRight: 20 }}
    onClick={() => {
      Emitter.on('type10', () => {
        alert('type10');
      });
    }}
  >
    注册通知
  </Button>
  <Button
    onClick={() => {
      const fun = Emitter.count('type10', 2, () => {
        alert('type10 - called 2');
      });

      Emitter.trigger('type10');
      Emitter.trigger('type10');
    }}
  >
    发出通知并监控
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                Emitter.on('type10', () => {
                  alert('type10');
                });
              }}
            >
              注册通知
            </Button>
            <Button
              onClick={() => {
                const fun = Emitter.count('type10', 2, () => {
                  alert('type10 - called 2');
                });

                Emitter.trigger('type10');
                Emitter.trigger('type10');
              }}
            >
              发出通知并监控
            </Button>
          </>
        ),
      },
    ];
  }

  const handler1 = useRef();

  return (
    <PlayGroundPage>
      <Section title="Emitter">
        <p>发布订阅</p>
        <ul>
          <li>- 发布</li>
          <li>- 订阅</li>
          <li>- 解除订阅</li>
        </ul>
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
                name: 'on',
                desc: '注册一个事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                  {
                    name: 'makStackSize',
                    desc: '最大注册数',
                    type: 'number',
                    defaultVal: '200',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'once',
                desc: '注册只执行一次的事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'all',
                desc: '依赖类型都执行后的钩子',
                modifier: 'public',
                params: [
                  {
                    name: 'types',
                    desc: '事件类型',
                    type: 'Array<String>',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销的方法',
              },
              {
                name: 'race',
                desc: '依赖类型任意一个执行后的钩子',
                modifier: 'public',
                params: [
                  {
                    name: 'types',
                    desc: '事件类型',
                    type: 'Array<String>',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销的方法',
              },
              {
                name: 'count',
                desc: '一个类型执行了count次后的钩子',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'count',
                    desc: '执行次数',
                    type: 'number',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销的方法',
              },
              {
                name: 'remove',
                desc: '解除一个事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'hasType',
                desc: '一个事件是否注册过',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '注册过返回true，未注册过返回false',
              },
              {
                name: 'clear',
                desc: '清除一个事件类型的所有句柄',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearAll',
                desc: '清除所有事件类型的句柄',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'trigger',
                desc: '触发一个事件类型的事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'params',
                    desc: '传递的参数',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'dispatchEvent',
                desc: '触发一个Html的自定义事件',
                modifier: 'static',
                params: [
                  {
                    name: 'el',
                    desc: '触发事件的HtmlElement',
                    type: 'HtmlElement | Document',
                    defaultVal: 'document',
                    required: 'true',
                  },
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'params',
                    desc: '传递的参数',
                    type: 'CustomEventInit',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
