import React from 'react';

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
  import { Intl } from '@baifendian/adhere';

  // 初始化国际化
  Intl.init({
    currentLocale: 'zh_CN',
    locales:{
      zh_CN: require('./zh_CN.js').default,
      pt_PT: require('./pt_PT.js').default,
      en_US: require('./en_US.js').default
    }
  }).then(() => {
    console.log('国际化初始化完成');
  });


  // zh_CN.js文件

  export default [
    'XXX系统',
  ];

  // pt_PT.js文件

  export default [
    'XXX系统',
  ];

  // en_US.js文件
  export default [
    'XXX系统',
  ];

        `,
        type: 'PlayGround',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Intl">
        <p>基于react-intl-universal的国际化组件</p>
        <ul>
          <li>- 支持react-intl-universal所有的方法</li>
          <li>- 支持按中文获取国际化词条</li>
          <li>- 支持自动生成词条的key</li>
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
                name: 'init',
                desc: '进行初始化操作',
                modifier: 'public',
                params: [
                  {
                    name: 'currentLocale',
                    desc: "当前语言 'en_US' | 'zh_CN' | 'pt_PT'",
                    type: 'String',
                    defaultVal: 'zh_CN',
                    required: 'true',
                  },
                  {
                    name: 'locales',
                    desc: '语言的词条',
                    type: '{ [key: string]: any }',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'other',
                    desc: 'react-intl-universal其他的参数',
                    type: '',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'reload',
                    desc: '是否是重新载入',
                    type: 'boolean',
                    defaultVal: 'false',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'v',
                desc: '以中文获取国际化值',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '词条中的value,中文',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '替换表达式的参数',
                    type: 'object',
                    defaultVal: 'string',
                    required: '国际化后的值',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'get',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '词条中的key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '替换表达式的参数',
                    type: 'object',
                    defaultVal: 'string',
                    required: '国际化后的值',
                  },
                ],
                returnType: 'string',
                returnDesc: '国际化后的值',
              },
              {
                name: 'getHTML',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '词条中的key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '替换表达式的参数',
                    type: 'object',
                    defaultVal: 'string',
                    required: '国际化后的值',
                  },
                ],
                returnType: 'string',
                returnDesc: '国际化后的值',
              },
              {
                name: 'getInitOptions',
                desc: '获取配置',
                modifier: 'public',
                params: [],
                returnType: 'Object',
                returnDesc: '',
              },
              {
                name: 'formatMessage',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'formatHTMLMessage',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'load',
                desc: 'init之后载入其他国际化资源',
                modifier: 'public',
                params: [
                  {
                    name: 'locales',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getLocal',
                desc: '转换词条',
                modifier: 'public',
                params: [
                  {
                    name: 'data',
                    desc: '词条',
                    type: 'Array',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Object',
                returnDesc: '转换后的词条',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
