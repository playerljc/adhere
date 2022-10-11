import { Radio } from 'antd';
import React, { useState } from 'react';

import { ConfigProvider, Intl, TableGridLayout } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

const { Label, Value } = TableGridLayout;

export default () => {
  const [lang, setLang] = useState('zh_CN');

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
        codeText: ``,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Radio.Group
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              options={[
                { label: '中文', value: 'zh_CN' },
                { label: '英文', value: 'en_US' },
                { label: '葡语', value: 'pt_PT' },
              ]}
            />

            <ConfigProvider
              intl={{
                lang,
                locales: {
                  en_US: require('@/locales/en_US').default,
                  zh_CN: require('@/locales/zh_CN').default,
                  pt_PT: require('@/locales/pt_PT').default,
                },
              }}
            >
              {() => (
                <TableGridLayout
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [, 'auto', , 'auto', , 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>{Intl.v('姓名')}：</Label>,
                          value: <Value>张三</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>{Intl.v('性别')}：</Label>,
                          value: <Value>男</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>{Intl.v('出生年月')}：</Label>,
                          value: <Value>2020-10-09</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label>{Intl.v('详细地址')}：</Label>,
                          value: (
                            <Value>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              )}
            </ConfigProvider>
          </>
        ),
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
