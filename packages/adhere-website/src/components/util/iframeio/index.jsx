import ClientCodeText from '!!raw-loader!./client';
import ServerCodeText from '!!raw-loader!./server';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import Client from './client';

import ClientLessCodeText from '!!raw-loader!./client.less';
import ServerLessCodeText from '!!raw-loader!./server.less';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="IframeIO">
        <p>iframe的通信客户端和服务端</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
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
            active: 'client.jsx',
            config: [
              {
                key: 'client.jsx',
                title: 'client.jsx',
                codeText: ClientCodeText,
              },
              {
                key: 'client.less',
                title: 'client.less',
                codeText: ClientLessCodeText,
              },
              {
                key: 'server.jsx',
                title: 'server.jsx',
                codeText: ServerCodeText,
              },
              {
                key: 'server.less',
                title: 'server.less',
                codeText: ServerLessCodeText,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <Client />,
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'Fetch',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'source',
                    desc: '客户端的window对象',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'origin',
                    desc: '客户端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'get',
                desc: 'get请求',
                modifier: 'public',
                params: [
                  {
                    name: 'targetWindow',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'targetOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'pathname',
                    desc: 'pathname',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'options',
                    desc: '配置',
                    type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<Response>',
                returnDesc: '',
              },
              {
                name: 'put',
                desc: 'put请求',
                modifier: 'public',
                params: [
                  {
                    name: 'targetWindow',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'targetOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'pathname',
                    desc: 'pathname',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'options',
                    desc: '配置',
                    type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<Response>',
                returnDesc: '',
              },
              {
                name: 'delete',
                desc: 'delete请求',
                modifier: 'public',
                params: [
                  {
                    name: 'targetWindow',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'targetOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'pathname',
                    desc: 'pathname',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'options',
                    desc: '配置',
                    type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<Response>',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Server',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'whitelist',
                    desc: '白名单',
                    type: 'string[]',
                    defaultVal: '[]',
                    required: '',
                  },
                  {
                    name: 'source',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'sourceOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: '启动服务',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
              {
                name: 'close',
                desc: '关闭服务',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
              {
                name: 'use',
                desc: '添加中间件',
                modifier: 'public',
                params: [
                  {
                    name: 'middleWare',
                    desc: '中间件',
                    type: 'MiddleWare | MiddleWare[]',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'self',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Router(路由)',
            data: [
              {
                name: 'controller',
                desc: '添加控制器',
                modifier: 'public',
                params: [
                  {
                    name: 'path',
                    desc: '路由地址',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'middleWare',
                    desc: '处理请求的中间件',
                    type: 'MiddleWare',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'self',
                returnDesc: '',
              },
              {
                name: 'routers',
                desc: '获取所有的中间件',
                modifier: 'public',
                params: [],
                returnType: 'MiddleWare[]',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Compose(中间件组合)',
            data: [
              {
                name: 'Compose',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'middleWares',
                    desc: '中间件集合',
                    type: 'MiddleWare[]',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '(ctx, next?: () => Promise<void> | void) => Promise<void></void>',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Request',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: `
                      {
                        pathname: string;
                        headers?: {
                          [prop: string]: string;
                        };
                        statusCode?: stateCode;
                        stateMessage?: string;
                        body?: any;
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Response',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: `
                      {
                        requestId: string;
                        headers: {
                          [prop: string]: string;
                        };
                        statusCode: stateCode;
                        stateMessage: string;
                        body: any;
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
