import React from 'react';
import Props from '@/lib/Props';

import { Space } from '@baifendian/adhere';

export default () => {
  return (
    <div className="Page">
      <h1>PlayGround</h1>
      <h3>一个代码展示的组件</h3>

      <ul style={{ listStyle: 'disc', marginLeft: 20 }}>
        <li>PlayGround - React的代码单文件展示</li>
        <li>PlayGroundMulit - React的代码多文件展示</li>
        <li>Props - React组件的Props说明</li>
        <li>FunctionProps - 类方法说明</li>
      </ul>

      <Space />

      <Props
        border
        title="PlayGround"
        data={[
          {
            params: 'codeText',
            desc: '展示的代码',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'expand',
            desc: '是否展开代码区域',
            type: 'boolean',
            defaultVal: 'false',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="PlayGroundMulit"
        data={[
          {
            params: 'config',
            desc: '配置',
            type: 'PlayGround[]',
            defaultVal: '[]',
          },
          {
            params: 'expand',
            desc: '是否展开代码区域',
            type: 'boolean',
            defaultVal: 'false',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="Props"
        data={[
          {
            params: 'data',
            desc: '数据',
            type: 'IProps[]',
            defaultVal: '[]',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="FunctionProps"
        data={[
          {
            params: 'data',
            desc: '数据',
            type: 'IFunctionProps[]',
            defaultVal: '[]',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="IProps"
        data={[
          {
            params: 'params',
            desc: '参数名称',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'desc',
            desc: '参数描述',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'type',
            desc: '参数类型',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'defaultVal',
            desc: '参数 默认值',
            type: 'string',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="IFunctionProps"
        data={[
          {
            params: 'name',
            desc: '函数名称',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'desc',
            desc: '函数描述',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'modifier',
            desc: '函数修饰符',
            type: "'static' | 'public' | 'private' | 'protected'",
            defaultVal: 'public',
          },
          {
            params: 'params',
            desc: '函数参数',
            type: 'IParams[]',
            defaultVal: '[]',
          },
          {
            params: 'returnType',
            desc: '函数返回值类型',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'returnType',
            desc: '函数返回值说明',
            type: 'string',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="IParams"
        data={[
          {
            params: 'name',
            desc: '参数名称',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'desc',
            desc: '参数说明',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'type',
            desc: '参数类型',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'defaultVal',
            desc: '默认值',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'required',
            desc: '是否必填',
            type: 'boolean',
            defaultVal: 'false',
          },
        ]}
      />

      <h3>例子</h3>
      <p>本文档全部采用了PlayGround作为代码展示</p>
    </div>
  );
};
