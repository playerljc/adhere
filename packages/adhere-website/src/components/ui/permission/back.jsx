import React, { useState, useRef } from 'react';
import { Card, Empty, Button } from 'antd';
import { Permission, MessageDialog, Space } from '@baifendian/adhere';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

const { Permission: PermissionWrap, setPermission, getPermission } = Permission;

setPermission(['1']);

export default () => {
  const [allPermission, setAllPermission] = useState(getPermission());
  const [curPermission, setCurPermission] = useState(['2']);

  const ref1 = useRef();

  const ref2 = useRef();

  return (
    <div className="Page">
      <h1>Permission</h1>
      <p>权限的组件</p>
      <ul>
        <li>- 设置所有权限</li>
        <li>- 传入权限(支持多个)</li>
        <li>- 可以自定义无权限的 UI</li>
      </ul>

      <Space />

      <Props
        border
        title="Permission"
        data={[
          {
            params: 'allPermission',
            desc: '所有的权限',
            type: 'Array<String>',
            defaultVal: 'undefined',
          },
          {
            params: 'permissions',
            desc: '校验的权限',
            type: 'Array<String>',
            defaultVal: '',
          },
          {
            params: 'children',
            desc: '有权限时显示的内容',
            type: 'React.ReactElement | null',
            defaultVal: '',
          },
          {
            params: 'noMatch',
            desc: '没有权限时显示的内容',
            type: 'React.ReactElement',
            defaultVal: 'null',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="setPermission"
        data={[
          {
            name: 'setPermission',
            desc: '设置所有的权限',
            modifier: 'static',
            params: [
              {
                name: 'permission',
                desc: '所有的权限',
                type: 'Array<String>',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="getPermission"
        data={[
          {
            name: 'getPermission',
            desc: '获取所有的权限',
            modifier: 'static',
            params: [],
            returnType: 'Array<String>',
            returnDesc: '返回所有权限的数组',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="checkPermission"
        data={[
          {
            name: 'checkPermission',
            desc: '监测是否有指定的权限',
            modifier: 'static',
            params: [
              {
                name: 'allPermission',
                desc: '所有的权限',
                type: 'Array<String>',
                defaultVal: '',
                required: '',
              },
              {
                name: 'currentPermissions',
                desc: '监测的权限',
                type: 'Array<String>',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '是否存在指定的权限',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState, useRef } from 'react';
  import { Card, Empty, Button } from 'antd';
  import { Permission, MessageDialog } from '@baifendian/adhere';
  
  const { Permission: PermissionWrap, setPermission, getPermission } = Permission;

  setPermission(['1']);
  
  <Card
  actions={[
    <Button
      type="primary"
      onClick={() => {
        const el = MessageDialog.Modal({
          config: {
            title: '权限所有设置',
            width: 200,
            footer: [
              <Button
                type="primary"
                onClick={() => {
                  const val = ref1.current.value.trim();
                  if (val) {
                    setPermission(val.split(','));
                    setAllPermission(getPermission());
                  }
                  MessageDialog.close(el);
                }}
              >
                确定
              </Button>,
            ],
          },
          children: (
            <div>
              <input autoFocus={true} ref={ref1} defaultValue={getPermission()} />
            </div>
          ),
        });
      }}
    >
      设置所有权限
    </Button>,

    <Button
      onClick={() => {
        const el = MessageDialog.Modal({
          config: {
            title: '权限当前设置',
            width: 200,
            footer: [
              <Button
                type="primary"
                onClick={() => {
                  const val = ref2.current.value.trim();
                  if (val) {
                    setCurPermission(val.split(','));
                  }
                  MessageDialog.close(el);
                }}
              >
                确定
              </Button>,
            ],
          },
          children: (
            <div>
              <input autoFocus={true} ref={ref2} defaultValue={curPermission} />
            </div>
          ),
        });
      }}
    >
      设置当前权限
    </Button>,
  ]}
  >
    <PermissionWrap permissions={curPermission} noMatch={<Empty />}>
      <Button>有权限才能看到这个按钮</Button>
    </PermissionWrap>
  </Card>
      `}
      >
        <Card
          actions={[
            <Button
              type="primary"
              onClick={() => {
                const { close } = MessageDialog.Modal({
                  config: {
                    title: '权限所有设置',
                    width: 200,
                    footer: [
                      <Button
                        type="primary"
                        onClick={() => {
                          const val = ref1.current.value.trim();
                          if (val) {
                            setPermission(val.split(','));
                            setAllPermission(getPermission());
                          }
                          // MessageDialog.close(el);
                          close();
                        }}
                      >
                        确定
                      </Button>,
                    ],
                  },
                  children: (
                    <div>
                      <input autoFocus={true} ref={ref1} defaultValue={getPermission()} />
                    </div>
                  ),
                });
              }}
            >
              设置所有权限
            </Button>,

            <Button
              onClick={() => {
                const { close } = MessageDialog.Modal({
                  config: {
                    title: '权限当前设置',
                    width: 200,
                    footer: [
                      <Button
                        type="primary"
                        onClick={() => {
                          const val = ref2.current.value.trim();
                          if (val) {
                            setCurPermission(val.split(','));
                          }
                          // MessageDialog.close(el);
                          close();
                        }}
                      >
                        确定
                      </Button>,
                    ],
                  },
                  children: (
                    <div>
                      <input autoFocus={true} ref={ref2} defaultValue={curPermission} />
                    </div>
                  ),
                });
              }}
            >
              设置当前权限
            </Button>,
          ]}
        >
          <PermissionWrap permissions={curPermission} noMatch={<Empty />}>
            <Button>有权限才能看到这个按钮</Button>
          </PermissionWrap>
        </Card>
      </Playground>
    </div>
  );
};
