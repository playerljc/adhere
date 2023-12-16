import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `get`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'get',
            info: 'get',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `post`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'post',
            info: 'post',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `upload`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'upload',
            info: 'upload',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `PromiseAll`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'PromiseAll',
            info: 'PromiseAll',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Ajax" />

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ISendArg',
            data: [
              {
                params: 'path',
                desc: '请求的地址(相对的地址)',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'headers',
                desc: '请求的头',
                type: 'Object<key,value>',
                defaultVal: '',
              },
              {
                params: 'data',
                desc: '请求的数据',
                type: '{form?: HTMLFormElement;data: object;} | object',
                defaultVal: '',
              },
              {
                params: 'mock',
                desc: '是否支持mock数据',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'loading',
                desc: 'loading的配置',
                type: '{show:boolean;text:string;el:HtmlElement}',
                defaultVal: '',
              },
              {
                params: 'onBeforeResponse',
                desc: '和后端定义的三大业务key',
                type: '() => {}',
                defaultVal: '',
              },
              {
                params: 'dataKey',
                desc: '数据属性',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'messageKey',
                desc: '消息属性',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'codeKey',
                desc: '业务code属性',
                type: 'number | string',
                defaultVal: '',
              },
              {
                params: 'codeSuccess',
                desc: '业务code成功属性',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'showWarn',
                desc: '在code不等于200的时候是否使出message的warn',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'onTimeout',
                desc: '超时函数',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadsStart',
                desc: '加载开始',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onProgress',
                desc: '加载进度',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAbort',
                desc: '请求取消',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onError',
                desc: '发生错误',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoad',
                desc: '开始加载',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadend',
                desc: '加载完成',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'timeout',
                desc: '超时时间',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'withCredentials',
                desc: '是否携带客户端信息',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'interceptor',
                desc: '拦截器',
                type: 'Function({status,statusText,response,responseText})',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IConfig',
            data: [
              {
                params: 'onTimeout',
                desc: '在预设时间内没有接收到响应时触发',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadsStart',
                desc: '接收到响应数据时触发',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onProgress',
                desc: '当请求接收到更多数据时，周期性地触发',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAbort',
                desc: '当 request 被停止时触发，例如当程序调用 XMLHttpRequest.abort() 时',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onError',
                desc: '当 request 遭遇错误时触发',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoad',
                desc: 'XMLHttpRequest请求成功完成时触发',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadend',
                desc: '请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'timeout',
                desc: '超时时间',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'withCredentials',
                desc: '是否携带客户端数据',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'interceptor',
                desc: '拦截器接口定义',
                type: 'Function({status,statusText,response,responseText})',
                defaultVal: '',
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
            title: '方法',
            data: [
              {
                name: 'constructor',
                desc: '构造方法',
                modifier: 'public',
                params: [
                  {
                    name: 'baseURL',
                    desc: '基础路径',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'systemManagerBaseURL',
                    desc: '系统管理BaseURL',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IConfig',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Ajax',
                returnDesc: '',
              },
              {
                name: 'get',
                desc: 'get请求',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'post',
                desc: 'post请求',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'path',
                desc: 'path请求',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'put',
                desc: 'put请求',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'delete',
                desc: 'delete请求',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
