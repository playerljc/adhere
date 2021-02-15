import React, { useRef } from 'react';
import { Button } from 'antd';
import { Emitter } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  const handler1 = useRef();

  return (
    <div className="Page">
      <h1>观察者模式</h1>
      <ul>
        <li>- 发布</li>
        <li>- 订阅</li>
        <li>- 解除订阅</li>
      </ul>

      <h2>方法</h2>
      <FunctionProps
        data={[
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
            ],
            returnType: 'void',
            returnDesc: '',
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
        ]}
      />

      <h2>基本的使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>注册多次，并且传递参数</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>触发HtmlElement的自定义事件</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>
    </div>
  );
};
