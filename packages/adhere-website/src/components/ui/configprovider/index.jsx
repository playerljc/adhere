import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

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
        codeText: P1CodeText,
        type: 'PlayGround',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `theme`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'theme',
            info: '切换主题颜色',
          },
        },
        codeText: P2CodeText,
        type: 'PlayGround',
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ConfigProvider">
        <p>全局配置</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'intl',
                desc: '国际化',
                type: `
                  {
                    lang: 'en_US' | 'zh_CN' | 'pt_PT';
                    locales: object;
                    prefix: string;
                  }
                `,
                defaultVal: `{
                  lang: 'zh_CN',
                  locales: {},
                  prefix: 'local',
                }`,
              },
              {
                params: 'className',
                desc: 'wrapperClassName',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: 'style',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'theme',
                desc: '主题',
                type: `{
                  [prop: string]: string
                }`,
                defaultVal: '',
              },
              {
                params: 'onIntlInit',
                desc: '国际化初始化完成',
                type: `() => void`,
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: '() => React.ReactNode',
                defaultVal: 'null',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
