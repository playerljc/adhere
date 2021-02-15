import React from 'react';
import { Button } from 'antd';

import { NotNull } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>一个永远都不为空的操作</h1>
      <p>一般都挂载到接口的返回值上，以免有空值对后续操作带来不便或者使界面挂掉</p>

      <h2>方法</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>对一个null值进行监控</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>对一个Array值进行监控</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
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
        `}
      >
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
      </Playground>
    </div>
  );
};
