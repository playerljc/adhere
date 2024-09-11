import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Permission">
        <p>权限的组件</p>
        <ul>
          <li>- 设置所有权限</li>
          <li>- 传入权限(支持多个)</li>
          <li>- 可以自定义无权限的 UI</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Permission',
            data: [
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
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'Api',
            data: [
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
              {
                name: 'getPermission',
                desc: '获取所有的权限',
                modifier: 'static',
                params: [],
                returnType: 'Array<String>',
                returnDesc: '返回所有权限的数组',
              },
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
              {
                name: 'PermissionFun',
                desc: '函数方式实现',
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
                    name: 'permissions',
                    desc: '监测的权限',
                    type: 'Array<String>',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'match',
                    desc: '符合条件',
                    type: 'any',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'noMatch',
                    desc: '不符合条件',
                    type: 'any',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'React.Element | null',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
